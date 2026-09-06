# SpeakUp AI

A browser-based MVP for an AI impromptu speaking coach. It follows the attached product direction and comic-style UI reference: users choose a practice mode, receive a prompt, record or type a response, receive a scored communication rubric, and track local practice history.

## Run

No build step and no Python needed — just Node 18+.

```powershell
node server.js
```

Open:

```text
http://127.0.0.1:5173
```

Use localhost rather than opening `index.html` directly so browser microphone permissions work.

The server reads `PORT` (default 5173) and `HOST` (default `0.0.0.0`) from the environment, so it works out of the box on Render, Vercel-style hosts, or any Node host.

## Transcription

Recordings are transcribed in the cloud through the `POST /api/transcribe` endpoint — there is no local model to download or Python service to keep running.

- **Preferred provider: Gemini** (`gemini-3.5-flash-lite`, fast and accurate) when `GEMINI_API_KEY` is set.
- Falls back to the **OpenAI Whisper API** (`whisper-1`) when only `OPENAI_API_KEY` is set.
- With no key at all, the app falls back to the browser's built-in speech recognition transcript so the flow still works — just with lower transcription accuracy.
- While recording, the browser shows a live speech-recognition preview; after Stop, the recording is sent to the cloud for the final, higher-accuracy transcript.
- Models can be overridden with the `GEMINI_TRANSCRIBE_MODEL` / `OPENAI_TRANSCRIBE_MODEL` env vars.

## Included MVP Features

- Random word, topic, situation, debate, interview, and follow-up prompts
- Easy, Medium, Hard, Expert, and custom difficulty levels with custom timers
- 30, 60, and 120 second speaking timers (plus custom durations)
- Microphone recording with browser speech recognition when available
- Cloud transcription through the OpenAI audio API
- Manual transcript fallback for unsupported browsers
- Local rubric scoring for content, relevance, coherence, vocabulary, fluency, structure, and debate argument quality
- Filler-word detection, WPM, duration, and word count metrics
- Strengths, improvement notes, and retry advice
- Trend charts for score, pace, and filler rate over time
- Report export as PNG image or PDF/print
- Local progress and attempt history through `localStorage`
- Delete-history privacy control

## API Configuration

API keys are read from environment variables only (optionally a local `.env` file, which is gitignored and never committed).

```powershell
$env:OPENAI_API_KEY="your_api_key_here"
node server.js
```

Or put keys in a local `.env` file:

```text
OPENAI_API_KEY=your_openai_key_here
# or
GEMINI_API_KEY=your_gemini_key_here
```

- **Transcription**: uses Gemini (`gemini-3.5-flash-lite`) when `GEMINI_API_KEY` is configured, otherwise OpenAI Whisper when `OPENAI_API_KEY` is configured, otherwise the browser's built-in speech recognition.
- **Speech evaluation**: uses Gemini when `GEMINI_API_KEY` is configured, otherwise OpenAI when `OPENAI_API_KEY` is configured. If neither key is available or the API request fails, the app falls back to deterministic local scoring so the product loop still works.

## Deploy to Render

A [`render.yaml`](./render.yaml) Blueprint is included. Either push the repo and create a new Web Service (set the start command to `npm start`), or use the Blueprint:

1. In the Render dashboard, choose **New → Blueprint** and point it at this repo.
2. Set the `OPENAI_API_KEY` (and optionally `GEMINI_API_KEY`) environment variables when prompted.
3. Deploy — no build command needed.

The free plan works fine: the app has no npm dependencies and no heavy model to load.

## Deploy to Vercel

A [`vercel.json`](./vercel.json) is included that runs the whole app (static files + `/api/transcribe` + `/api/analyze`) as a single serverless function.

1. Push this repo to GitHub.
2. On vercel.com, choose **Add New → Project** and import the repo (no framework preset needed — Vercel picks up `vercel.json`).
3. Add `GEMINI_API_KEY` (and optionally `OPENAI_API_KEY`) under **Settings → Environment Variables**.
4. Deploy.

Notes:
- The Vercel Hobby plan caps request bodies at **4.5 MB**, so keep recordings under ~2–3 minutes (the app's recordings stream to the API as one request). Render has no such limit and is the better fit for longer recordings.
- If transcriptions time out, raise the function's **Max Duration** to 60s in the project's Functions settings.