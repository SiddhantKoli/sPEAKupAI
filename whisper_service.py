"""Local Whisper transcription service using the downloaded PyTorch model."""

from __future__ import annotations

import json
import os
import subprocess
import tempfile
import threading
import traceback
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

import imageio_ffmpeg
import numpy as np
import soundfile as sf
import torch
from transformers import AutoModelForSpeechSeq2Seq, AutoProcessor, pipeline

ROOT = Path(__file__).resolve().parent
MODEL_DIR = Path(
    os.environ.get(
        "WHISPER_MODEL_DIR",
        ROOT / "models" / "whisper-large-v3-turbo",
    )
)
HOST = os.environ.get("WHISPER_HOST", "127.0.0.1")
PORT = int(os.environ.get("WHISPER_PORT", "8091"))

pipe = None
load_error = None
ready_event = threading.Event()


def load_model() -> None:
    global pipe, load_error
    try:
        if not MODEL_DIR.exists():
            raise FileNotFoundError(f"Whisper model not found at {MODEL_DIR}")

        device = "cuda:0" if torch.cuda.is_available() else "cpu"
        dtype = torch.float16 if torch.cuda.is_available() else torch.float32
        print(f"Loading Whisper from {MODEL_DIR} on {device}...", flush=True)

        model = AutoModelForSpeechSeq2Seq.from_pretrained(
            str(MODEL_DIR),
            dtype=dtype,
            low_cpu_mem_usage=True,
            use_safetensors=True,
            local_files_only=True,
        )
        model.to(device)
        processor = AutoProcessor.from_pretrained(str(MODEL_DIR), local_files_only=True)

        pipe = pipeline(
            "automatic-speech-recognition",
            model=model,
            tokenizer=processor.tokenizer,
            feature_extractor=processor.feature_extractor,
            dtype=dtype,
            device=device,
        )
        print("Whisper ready.", flush=True)
        ready_event.set()
    except Exception as error:  # noqa: BLE001 - surface startup failures to /health
        load_error = str(error)
        traceback.print_exc()
        ready_event.set()


def extension_for(content_type: str) -> str:
    lowered = (content_type or "").lower()
    if "wav" in lowered:
        return ".wav"
    if "mpeg" in lowered or "mp3" in lowered:
        return ".mp3"
    if "mp4" in lowered or "m4a" in lowered:
        return ".m4a"
    if "ogg" in lowered:
        return ".ogg"
    return ".webm"


def convert_to_wav(source_path: Path, wav_path: Path) -> None:
    ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
    command = [
        ffmpeg,
        "-y",
        "-i",
        str(source_path),
        "-ac",
        "1",
        "-ar",
        "16000",
        "-c:a",
        "pcm_s16le",
        str(wav_path),
    ]
    completed = subprocess.run(command, capture_output=True, text=True, check=False)
    if completed.returncode != 0:
        detail = (completed.stderr or completed.stdout or "ffmpeg failed").strip()
        raise RuntimeError(detail.splitlines()[-1] if detail else "ffmpeg failed")


def load_audio_array(wav_path: Path) -> dict:
    audio, sample_rate = sf.read(str(wav_path), dtype="float32", always_2d=False)
    if getattr(audio, "ndim", 1) > 1:
        audio = audio.mean(axis=1)
    if sample_rate != 16000:
        duration = len(audio) / float(sample_rate)
        target_length = max(1, int(round(duration * 16000)))
        audio = np.interp(
            np.linspace(0, len(audio), num=target_length, endpoint=False),
            np.arange(len(audio)),
            audio,
        ).astype("float32")
        sample_rate = 16000
    return {"array": audio, "sampling_rate": sample_rate}


def transcribe_bytes(audio_bytes: bytes, content_type: str) -> str:
    if pipe is None:
        raise RuntimeError(load_error or "Whisper model is still loading.")

    suffix = extension_for(content_type)
    with tempfile.TemporaryDirectory(prefix="speakup-whisper-") as temp_dir:
        temp_path = Path(temp_dir)
        source_path = temp_path / f"input{suffix}"
        wav_path = temp_path / "input.wav"
        source_path.write_bytes(audio_bytes)

        if suffix == ".wav":
            wav_path = source_path
        else:
            convert_to_wav(source_path, wav_path)

        audio_input = load_audio_array(wav_path)
        result = pipe(
            audio_input,
            return_timestamps=True,
            generate_kwargs={
                "language": "english",
                "task": "transcribe",
            },
        )

    text = result.get("text", "") if isinstance(result, dict) else str(result)
    return " ".join(text.split()).strip()


class Handler(BaseHTTPRequestHandler):
    server_version = "SpeakUpWhisper/1.0"

    def log_message(self, format: str, *args) -> None:  # noqa: A003
        print("[%s] %s" % (self.log_date_time_string(), format % args), flush=True)

    def _send_json(self, status: int, payload: dict) -> None:
        body = json.dumps(payload).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Access-Control-Allow-Origin", "*")
        self.end_headers()
        self.wfile.write(body)

    def do_OPTIONS(self) -> None:  # noqa: N802
        self.send_response(204)
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.end_headers()

    def do_GET(self) -> None:  # noqa: N802
        if self.path.rstrip("/") != "/health":
            self._send_json(404, {"error": "Not found"})
            return

        if not ready_event.is_set():
            self._send_json(503, {"status": "loading", "model": str(MODEL_DIR)})
            return
        if pipe is None:
            self._send_json(503, {"status": "error", "error": load_error or "Model failed to load"})
            return
        self._send_json(200, {"status": "ready", "model": str(MODEL_DIR)})

    def do_POST(self) -> None:  # noqa: N802
        if self.path.rstrip("/") != "/transcribe":
            self._send_json(404, {"error": "Not found"})
            return

        if not ready_event.wait(timeout=1) or pipe is None:
            self._send_json(503, {"error": load_error or "Whisper model is still loading."})
            return

        length = int(self.headers.get("Content-Length") or 0)
        if length <= 0:
            self._send_json(400, {"error": "Empty audio body."})
            return
        if length > 26 * 1024 * 1024:
            self._send_json(413, {"error": "Audio is too large. Keep recordings under 25 MB."})
            return

        audio_bytes = self.rfile.read(length)
        content_type = self.headers.get("Content-Type") or "audio/webm"

        try:
            text = transcribe_bytes(audio_bytes, content_type)
            self._send_json(200, {"text": text})
        except Exception as error:  # noqa: BLE001
            traceback.print_exc()
            self._send_json(500, {"error": str(error) or "Transcription failed."})


def main() -> None:
    threading.Thread(target=load_model, daemon=True).start()
    server = ThreadingHTTPServer((HOST, PORT), Handler)
    print(f"Local Whisper listening at http://{HOST}:{PORT}", flush=True)
    print("Endpoints: GET /health  POST /transcribe", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down Whisper service.", flush=True)
    finally:
        server.server_close()


if __name__ == "__main__":
    main()
