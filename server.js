const http = require("http");
const fs = require("fs");
const path = require("path");

const port = Number(process.env.PORT || 5173);
const host = process.env.HOST || "0.0.0.0";
const root = __dirname;
loadEnvFile(path.join(root, ".env"));
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8"
};

const server = http.createServer(async (request, response) => {
  if (request.method === "POST" && request.url === "/api/transcribe") {
    await transcribeAudio(request, response);
    return;
  }

  if (request.method === "POST" && request.url === "/api/analyze") {
    await analyzeSpeech(request, response);
    return;
  }

  const urlPath = decodeURIComponent(new URL(request.url, `http://localhost:${port}`).pathname);
  const requestPath = urlPath === "/" ? "index.html" : urlPath.replace(/^\/+/, "");
  const safePath = path.normalize(requestPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      response.end("Not found");
      return;
    }
    response.writeHead(200, {
      "content-type": types[path.extname(filePath)] || "application/octet-stream",
      "cache-control": "no-store"
    });
    response.end(data);
  });
});

async function transcribeAudio(request, response) {
  try {
    const buffer = await readRequestBody(request, 26 * 1024 * 1024);
    const contentType = request.headers["content-type"] || "audio/webm";

    if (process.env.GEMINI_API_KEY) {
      const text = await transcribeWithGemini(buffer, contentType);
      sendJson(response, 200, { text });
      return;
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      sendJson(response, 503, {
        code: "no_api_key",
        error: "No transcription key is configured. Add GEMINI_API_KEY or OPENAI_API_KEY to .env, then restart the server."
      });
      return;
    }

    const file = new Blob([buffer], { type: contentType });
    const form = new FormData();
    form.append("file", file, `speech${extensionForContentType(contentType)}`);
    form.append("model", process.env.OPENAI_TRANSCRIBE_MODEL || "whisper-1");
    form.append("temperature", "0");
    form.append("prompt", "This is an impromptu speaking practice recording. Preserve the speaker's words accurately.");

    const apiResponse = await fetch("https://api.openai.com/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`
      },
      body: form
    });

    const result = await apiResponse.json();
    if (!apiResponse.ok) {
      sendJson(response, apiResponse.status, {
        error: result.error?.message || "Transcription failed."
      });
      return;
    }

    sendJson(response, 200, { text: result.text || "" });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Unable to transcribe audio." });
  }
}

async function transcribeWithGemini(audioBuffer, contentType) {
  const payload = {
    contents: [
      {
        parts: [
          {
            text: "Transcribe the speech in this audio verbatim. Output only the transcript text."
          },
          {
            inline_data: {
              mime_type: contentType,
              data: audioBuffer.toString("base64")
            }
          }
        ]
      }
    ]
  };

  const model = process.env.GEMINI_TRANSCRIBE_MODEL || "gemini-3.5-flash-lite";
  const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const apiResponse = await fetch(geminiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(result.error?.message || "Failed to contact Gemini transcription API.");
  }

  const parts = result.candidates?.[0]?.content?.parts;
  return (parts || []).map((part) => part.text || "").join("").trim();
}

function extensionForContentType(contentType) {
  const lowered = (contentType || "").toLowerCase();
  if (lowered.includes("wav")) return ".wav";
  if (lowered.includes("mpeg") || lowered.includes("mp3")) return ".mp3";
  if (lowered.includes("mp4") || lowered.includes("m4a")) return ".m4a";
  if (lowered.includes("ogg")) return ".ogg";
  if (lowered.includes("flac")) return ".flac";
  return ".webm";
}

async function analyzeSpeech(request, response) {
  try {
    const bodyBuffer = await readRequestBody(request, 1024 * 1024);
    const { transcript, challenge, duration } = JSON.parse(bodyBuffer.toString());

    if (!transcript) {
      sendJson(response, 400, { error: "Transcript is required for evaluation." });
      return;
    }

    const systemInstruction = buildEvaluationSystemInstruction(challenge);
    const userPrompt = `Speech Transcript to evaluate: "${transcript}"
Speech Duration: ${duration} seconds.
Challenge difficulty: ${challenge?.difficulty || "Medium"}.`;

    if (process.env.GEMINI_API_KEY) {
      const analysis = await analyzeWithGemini(systemInstruction, userPrompt);
      sendJson(response, 200, { ...analysis, provider: "gemini" });
      return;
    }

    if (process.env.OPENAI_API_KEY) {
      const analysis = await analyzeWithOpenAI(systemInstruction, userPrompt);
      sendJson(response, 200, { ...analysis, provider: "openai" });
      return;
    }

    sendJson(response, 400, {
      error: "No evaluation API key is configured. Add GEMINI_API_KEY or OPENAI_API_KEY to .env, then restart the server."
    });
  } catch (error) {
    sendJson(response, 500, { error: error.message || "Failed to analyze speech." });
  }
}

function buildEvaluationSystemInstruction(challenge) {
  return `You are an expert impromptu speaking coach. Evaluate the speech transcript based on the challenge mode: "${challenge?.mode || "word"}" (prompt: "${challenge?.text || ""}").
Respond ONLY in JSON. Your output must strictly match this structure:
{
  "overall": number (overall score from 1.0 to 10.0),
  "scores": {
    "content": number (1.0 to 10.0),
    "relevance": number (1.0 to 10.0),
    "coherence": number (1.0 to 10.0),
    "vocabulary": number (1.0 to 10.0),
    "fluency": number (1.0 to 10.0),
    "structure": number (1.0 to 10.0)
  },
  "strengths": [string, string, string],
  "improvements": [string, string, string],
  "advice": string (a concise tip on what structure or trick to try next)
}
Be critical but constructive. Base your score on clarity, filler words usage, logic, and relevance. IMPORTANT: Ensure all output strings use only standard clean ASCII characters (avoid curly quotes, em-dashes, or special symbols that might generate encoding issues).`;
}

async function analyzeWithOpenAI(systemInstruction, userPrompt) {
  const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
    },
    body: JSON.stringify({
      model: process.env.OPENAI_EVALUATE_MODEL || "gpt-4o-mini",
      response_format: { type: "json_object" },
      messages: [
        { role: "system", content: systemInstruction },
        { role: "user", content: userPrompt }
      ]
    })
  });

  const result = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(result.error?.message || "Failed to contact OpenAI API.");
  }

  const textOutput = result.choices?.[0]?.message?.content;
  return parseAnalysisJson(textOutput, "OpenAI");
}

async function analyzeWithGemini(systemInstruction, userPrompt) {
  const payload = {
    contents: [{
      parts: [{ text: userPrompt }]
    }],
    systemInstruction: {
      parts: [{ text: systemInstruction }]
    },
    generationConfig: {
      responseMimeType: "application/json"
    }
  };

  const model = process.env.GEMINI_EVALUATE_MODEL || "gemini-3.6-flash";
  const geminiUrl = `https://generativelanguage.googleapis.com/v1/models/${model}:generateContent?key=${process.env.GEMINI_API_KEY}`;
  const apiResponse = await fetch(geminiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  const result = await apiResponse.json().catch(() => ({}));
  if (!apiResponse.ok) {
    throw new Error(result.error?.message || "Failed to contact Gemini API.");
  }

  const textOutput = result.candidates?.[0]?.content?.parts?.[0]?.text;
  return parseAnalysisJson(textOutput, "Gemini");
}

function parseAnalysisJson(textOutput, provider) {
  if (!textOutput) {
    throw new Error(`${provider} returned an empty response.`);
  }

  const cleanJson = textOutput
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/```$/, "")
    .replace(/[\uFFFD\uFFFC]/g, "")
    .replace(/[^\x00-\x7F]/g, " ")
    .trim();

  try {
    return JSON.parse(cleanJson);
  } catch (parseError) {
    console.error(`Failed to parse ${provider} output:`, cleanJson);
    throw new Error(`Speech evaluation parser error: ${parseError.message}`);
  }
}



function loadEnvFile(filePath) {
  if (!fs.existsSync(filePath)) return;

  const lines = fs.readFileSync(filePath, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;

    const equalsIndex = trimmed.indexOf("=");
    if (equalsIndex === -1) continue;

    const key = trimmed.slice(0, equalsIndex).trim();
    let value = trimmed.slice(equalsIndex + 1).trim();
    if (!key || process.env[key]) continue;

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    process.env[key] = value;
  }
}

function readRequestBody(request, limit) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    let size = 0;

    request.on("data", (chunk) => {
      size += chunk.length;
      if (size > limit) {
        reject(new Error("Audio is too large. Keep recordings under 25 MB."));
        request.destroy();
        return;
      }
      chunks.push(chunk);
    });
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

function sendJson(response, status, payload) {
  response.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  response.end(JSON.stringify(payload));
}

function shutdown() {
  process.exit(0);
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

server.listen(port, host, () => {
  console.log(`SpeakUp AI running at http://localhost:${port}`);
});
