# SpeakUp AI

A browser-based MVP for an AI impromptu speaking coach. It follows the attached product direction and comic-style UI reference: users choose a practice mode, receive a prompt, record or type a response, receive a scored communication rubric, and track local practice history.

## Run

Install Python deps once:

```powershell
pip install -r requirements.txt
```

Then start the app (this also auto-starts local Whisper):

```powershell
node server.js
```

Open:

```text
http://127.0.0.1:5173
```

Use localhost rather than opening `index.html` directly so browser microphone permissions work.

Local transcription uses the downloaded model at `models/whisper-large-v3-turbo` through `whisper_service.py` (PyTorch + Transformers). First startup can take a minute while the model loads into memory.

## Included MVP Features

- Random word, topic, situation, debate, interview, and follow-up prompts
- Easy, Medium, Hard, and Expert difficulty levels
- 30, 60, and 120 second speaking timers
- Microphone recording with browser speech recognition when available
- Optional high-accuracy server transcription through OpenAI audio transcription
- Manual transcript fallback for unsupported browsers
- Local rubric scoring for content, relevance, coherence, vocabulary, fluency, structure, and debate argument quality
- Filler-word detection, WPM, duration, and word count metrics
- Strengths, improvement notes, and retry advice
- Local progress and attempt history through `localStorage`
- Delete-history privacy control

## Notes

The app uses browser speech recognition as a live preview, then replaces it with local Whisper after you stop recording.

Optional API configuration:

```powershell
$env:OPENAI_API_KEY="your_api_key_here"
node server.js
```

You can also put keys in a local `.env` file:

```text
OPENAI_API_KEY=your_openai_key_here
# or
GEMINI_API_KEY=your_gemini_key_here
```

Speech evaluation uses OpenAI first when `OPENAI_API_KEY` is configured, otherwise Gemini when `GEMINI_API_KEY` is configured. If neither key is available or the API request fails, the app falls back to deterministic local scoring so the product loop still works.
