const prompts = {
  word: {
    label: "Random word",
    Easy: ["Mirror", "Rain", "Coffee", "Window", "Bridge", "Music"],
    Medium: ["Freedom", "Momentum", "Failure", "Patience", "Identity", "Trust"],
    Hard: ["Disruption", "Legacy", "Contradiction", "Scarcity", "Influence", "Resilience"],
    Expert: [
      "Explain friendship, artificial intelligence, and street food in one speech.",
      "Connect silence, ambition, and public transport.",
      "Relate courage, algorithms, and a broken umbrella."
    ]
  },
  topic: {
    label: "Random topic",
    Easy: [
      "What makes a good friend?",
      "Should students have less homework?",
      "Is reading still important?"
    ],
    Medium: [
      "Is social media beneficial?",
      "Is failure necessary for success?",
      "Should every student learn public speaking?"
    ],
    Hard: [
      "Should AI replace some classroom teaching?",
      "Does remote work help or hurt career growth?",
      "Is convenience making people less patient?"
    ],
    Expert: [
      "Defend a policy you partly disagree with.",
      "Argue that boredom is useful in a hyperconnected world.",
      "Explain why a bad idea can still create good outcomes."
    ]
  },
  situation: {
    label: "Situation",
    Easy: [
      "Convince a friend to join you on a weekend trip.",
      "Explain a complicated concept to a child.",
      "Thank a teacher who helped you improve."
    ],
    Medium: [
      "Persuade a customer to choose your product.",
      "Apologize for missing an important deadline.",
      "Ask your manager for feedback on your work."
    ],
    Hard: [
      "Negotiate a raise while staying professional.",
      "Calm down a frustrated client during a live issue.",
      "Explain a project delay to senior leaders."
    ],
    Expert: [
      "Pitch an impossible idea to a skeptical investor.",
      "Defend a mistake while taking accountability.",
      "Turn a hostile question into a constructive discussion."
    ]
  },
  debate: {
    label: "Debate",
    Easy: [
      "School uniforms should be required. Argue for it.",
      "Video games can teach useful skills. Argue for it.",
      "Every city needs more parks. Argue for it."
    ],
    Medium: [
      "AI will create more jobs than it destroys. Argue against it.",
      "Public exams should be replaced with projects. Argue for it.",
      "Influencers should disclose all sponsored content. Argue for it."
    ],
    Hard: [
      "Companies should use four-day workweeks. Argue against it.",
      "Universities should prioritize skills over degrees. Argue for it.",
      "Privacy is more important than personalization. Argue against it."
    ],
    Expert: [
      "Defend the weaker side of a debate about AI in hiring.",
      "Argue against your own favorite technology.",
      "Make a persuasive case for a deeply unpopular but ethical decision."
    ]
  },
  interview: {
    label: "Interview",
    Easy: [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What is one strength you are proud of?"
    ],
    Medium: [
      "Tell me about a time you failed.",
      "Describe a conflict you handled well.",
      "What is your biggest weakness?"
    ],
    Hard: [
      "Tell me about a time you influenced without authority.",
      "Describe a high-pressure decision with incomplete information.",
      "Why are you leaving your current role?"
    ],
    Expert: [
      "Explain a career gap or setback with confidence.",
      "Answer a skeptical interviewer who doubts your experience.",
      "Pitch yourself for a role that is slightly above your current level."
    ]
  },
  followup: {
    label: "Follow-up",
    Easy: [
      "Start with: My favorite skill is communication. Then answer a follow-up.",
      "Explain why practice matters. Then answer a follow-up.",
      "Describe your ideal team. Then answer a follow-up."
    ],
    Medium: [
      "Defend your opinion on social media. Then answer a follow-up.",
      "Explain a personal learning mistake. Then answer a follow-up.",
      "Pitch a simple product. Then answer a follow-up."
    ],
    Hard: [
      "Answer an interview question, then handle one challenging follow-up.",
      "Argue for a controversial idea, then respond to a rebuttal.",
      "Explain a complex concept, then simplify it further."
    ],
    Expert: [
      "Take a position, switch sides halfway, and answer a follow-up.",
      "Connect three unrelated ideas, then clarify the weakest link.",
      "Give a concise answer, then expand only when challenged."
    ]
  }
};

const STORAGE_KEY = "speakup-history";
const THEME_KEY = "speakup-theme";
const fillerPatterns = [
  "um",
  "uh",
  "like",
  "basically",
  "actually",
  "you know",
  "so"
];
const transitionTerms = [
  "first",
  "because",
  "for example",
  "however",
  "therefore",
  "finally",
  "in conclusion"
];
const conclusionRegex = /(in conclusion|to conclude|overall|that is why|finally|so the key point)/i;
const exampleRegex = /(for example|for instance|such as|once|when i|in my experience)/i;
const promptTermRegex = /\b[a-z]{2,}\b/g;
const wordRegex = /\b[\w']+\b/g;
const fillerRegExps = fillerPatterns.map((filler) => new RegExp(`\\b${filler.replace(/\s+/g, "\\s+")}\\b`, "g"));

const state = {
  challenge: null,
  recognition: null,
  recorder: null,
  mediaStream: null,
  audioChunks: [],
  audioBlob: null,
  audioContext: null,
  analyser: null,
  waveformBars: [],
  waveformLevels: [],
  waveformFrameId: null,
  isRecording: false,
  autoEvaluateAfterStop: false,
  timerId: null,
  transcribeProgressId: null,
  startedAt: null,
  remaining: 60,
  history: loadHistory()
};

const el = {
  pages: document.querySelectorAll("[data-page]"),
  pageLinks: document.querySelectorAll("[data-page-link]"),
  mode: document.querySelector("#mode"),
  difficulty: document.querySelector("#difficulty"),
  duration: document.querySelector("#duration"),
  challengeKind: document.querySelector("#challengeKind"),
  challengeText: document.querySelector("#challengeText"),
  challengeBrief: document.querySelector("#challengeBrief"),
  challengeDifficulty: document.querySelector("#challengeDifficulty"),
  challengeTime: document.querySelector("#challengeTime"),
  heroKicker: document.querySelector("#heroKicker"),
  heroLead: document.querySelector("#heroLead"),
  newChallenge: document.querySelector("#newChallenge"),
  startRecording: document.querySelector("#startRecording"),
  stopRecording: document.querySelector("#stopRecording"),
  retryChallenge: document.querySelector("#retryChallenge"),
  mobileStart: document.querySelector("#mobileStart"),
  transcript: document.querySelector("#transcript"),
  evaluate: document.querySelector("#evaluate"),
  timer: document.querySelector("#timer"),
  recordingState: document.querySelector("#recordingState"),
  waveform: document.querySelector("#waveform"),
  overallScore: document.querySelector("#overallScore") || document.createElement("strong"),
  scoreSummary: document.querySelector("#scoreSummary") || document.createElement("p"),
  rubricGrid: document.querySelector("#rubricGrid") || document.createElement("div"),
  strengths: document.querySelector("#strengths") || document.createElement("ul"),
  improvements: document.querySelector("#improvements") || document.createElement("ul"),
  retryAdvice: document.querySelector("#retryAdvice") || document.createElement("p"),
  totalSpeeches: document.querySelector("#totalSpeeches"),
  bestScore: document.querySelector("#bestScore"),
  totalTime: document.querySelector("#totalTime"),
  avgPace: document.querySelector("#avgPace"),
  navAverage: document.querySelector("#navAverage"),
  navStreak: document.querySelector("#navStreak"),
  coachHeadline: document.querySelector("#coachHeadline"),
  coachBody: document.querySelector("#coachBody"),
  coachChallenge: document.querySelector("#coachChallenge"),
  clearHistory: document.querySelector("#clearHistory"),
  historyList: document.querySelector("#historyList"),
  themeToggle: document.querySelector("#themeToggle"),
  mobileThemeToggle: document.querySelector("#mobileThemeToggle"),
  transcribeProgress: document.querySelector("#transcribeProgress"),
  transcribeProgressLabel: document.querySelector("#transcribeProgressLabel"),
  transcribeMeter: document.querySelector("#transcribeMeter"),
  transcribeMeterFill: document.querySelector("#transcribeMeterFill"),
  
  // Loading & Modal overlays
  fullScreenLoading: document.querySelector("#fullScreenLoading"),
  resultModal: document.querySelector("#resultModal"),
  closeModal: document.querySelector("#closeModal"),
  modalTitle: document.querySelector("#modalTitle"),
  modalOverallScore: document.querySelector("#modalOverallScore"),
  modalScoreSummary: document.querySelector("#modalScoreSummary"),
  modalRubricGrid: document.querySelector("#modalRubricGrid"),
  modalStrengths: document.querySelector("#modalStrengths"),
  modalImprovements: document.querySelector("#modalImprovements"),
  modalRetryAdvice: document.querySelector("#modalRetryAdvice")
};

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function generateChallenge(forceMode, forceDifficulty) {
  const mode = forceMode || el.mode.value;
  const difficulty = forceDifficulty || el.difficulty.value;
  const duration = Number(el.duration.value);
  const text = pick(prompts[mode][difficulty]);

  state.challenge = {
    mode,
    difficulty,
    duration,
    text,
    label: prompts[mode].label
  };
  state.remaining = duration;

  el.challengeKind.textContent = prompts[mode].label;
  el.challengeText.textContent = text;
  el.challengeDifficulty.textContent = difficulty;
  el.challengeTime.textContent = `${duration} seconds`;
  el.challengeBrief.textContent = briefFor(mode, duration);
  applyModeCopy(mode);
  el.timer.textContent = formatTime(duration);
  scheduleFitChallengeText();
}

function scheduleFitChallengeText() {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => fitChallengeText());
  });
}

function fitChallengeText() {
  const title = el.challengeText;
  if (!title) return;

  title.classList.remove("prompt-medium", "prompt-long");
  title.style.fontSize = "";
  title.style.maxHeight = "";

  const panel = title.closest(".challenge-panel");
  if (!panel || panel.clientHeight < 48 || title.clientWidth < 40) {
    return;
  }

  const panelStyle = getComputedStyle(panel);
  const padY = parseFloat(panelStyle.paddingTop) + parseFloat(panelStyle.paddingBottom);
  let reserved = 0;
  for (const child of panel.children) {
    if (child === title) continue;
    const childStyle = getComputedStyle(child);
    reserved += child.getBoundingClientRect().height;
    reserved += parseFloat(childStyle.marginTop) + parseFloat(childStyle.marginBottom);
  }

  const titleStyle = getComputedStyle(title);
  const titleMargin = parseFloat(titleStyle.marginTop) + parseFloat(titleStyle.marginBottom);
  const available = Math.max(36, panel.clientHeight - padY - reserved - titleMargin);
  title.style.maxHeight = `${available}px`;
  title.style.lineHeight = "1.05";

  const rootSize = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  const maxSize = Math.min(
    window.innerWidth <= 620 ? 3 * rootSize : 4.8 * rootSize,
    title.clientWidth * 0.42
  );
  const minSize = Math.max(12, 0.9 * rootSize);

  title.style.fontSize = `${maxSize}px`;

  const fits = () =>
    title.scrollHeight <= available + 1 &&
    title.scrollWidth <= title.clientWidth + 1;

  if (fits()) return;

  let low = minSize;
  let high = maxSize;
  for (let i = 0; i < 18; i += 1) {
    const mid = (low + high) / 2;
    title.style.fontSize = `${mid}px`;
    if (fits()) low = mid;
    else high = mid;
  }

  title.style.fontSize = `${low}px`;
}

const modeCopy = {
  word: {
    kicker: "What will you talk about today?",
    lead: "Boom — one random word hits the panel. Clock’s ticking. Make it funny, clear, and impossible to forget."
  },
  topic: {
    kicker: "Hot take incoming!",
    lead: "A question crashes onto the page. Grab a side, talk loud, and sell it like the last panel before the cliffhanger."
  },
  situation: {
    kicker: "Action scene: YOU.",
    lead: "You’re dropped mid-plot. Talk like the stakes are real — calm hero energy, zero wooden dialogue."
  },
  debate: {
    kicker: "Choose your fighter!",
    lead: "Left side? Right side? Plant a flag, throw reasons like punches, and finish with a KO closing line."
  },
  interview: {
    kicker: "Welcome to the hot seat!",
    lead: "The interviewer leans in. Answer like a pro: clean structure, real examples, no awkward comic silence."
  },
  followup: {
    kicker: "Plot twist follow-up!",
    lead: "They asked again — sharper this time. React fast, stay on plot, and don’t let the sequel flop."
  }
};

function applyModeCopy(mode) {
  const copy = modeCopy[mode] || modeCopy.word;
  if (el.heroKicker) el.heroKicker.textContent = copy.kicker;
  if (el.heroLead) el.heroLead.textContent = copy.lead;
}

function briefFor(mode, duration) {
  const map = {
    word: `You’ve got ${duration} seconds. Spin that word into a mini comic — clear, punchy, no filler villains.`,
    topic: `${duration} seconds on the clock. One bold claim, one reason, one example — then BOOM, land it.`,
    situation: `${duration} seconds in character. Sound human, specific, and totally in the scene.`,
    debate: `${duration} seconds to argue. Stack reasons, drop an example, close with a KO.`,
    interview: `${duration} seconds in the hot seat. Structured, concrete, zero waffle.`,
    followup: `${duration} seconds for the sequel question. Clarify fast, defend clean, keep the plot alive.`
  };
  return map[mode];
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

async function startRecording() {
  el.transcript.value = "";
  state.audioChunks = [];
  state.audioBlob = null;
  state.autoEvaluateAfterStop = false;
  state.startedAt = Date.now();
  state.remaining = state.challenge.duration;
  state.isRecording = true;
  setRecordingUi(true);
  el.transcript.value = "On air… spill the speech bubbles! After Stop, Whisper inks them here.";

  startTimer();

  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.mediaStream = stream;
    startWaveform(stream);
    startSpeechRecognition();

    const mimeType = pickRecorderMimeType();
    state.recorder = mimeType
      ? new MediaRecorder(stream, { mimeType })
      : new MediaRecorder(stream);

    state.recorder.addEventListener("dataavailable", (event) => {
      if (event.data && event.data.size > 0) state.audioChunks.push(event.data);
    });
    state.recorder.addEventListener("stop", async () => {
      stopWaveform();
      if (state.mediaStream) {
        state.mediaStream.getTracks().forEach((track) => track.stop());
        state.mediaStream = null;
      }
      const type = state.recorder.mimeType || mimeType || "audio/webm";
      state.audioBlob = new Blob(state.audioChunks, { type });
      await transcribeRecordedAudio(state.autoEvaluateAfterStop);
    });
    // Timeslice keeps chunks flowing so the final blob is never empty.
    state.recorder.start(1000);
  } catch (error) {
    state.isRecording = false;
    stopWaveform();
    appendNotice("Microphone access was blocked. You can still type or paste a transcript.");
    stopRecording(false);
  }
}

function pickRecorderMimeType() {
  if (typeof MediaRecorder === "undefined" || !MediaRecorder.isTypeSupported) return "";
  const candidates = [
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/mp4",
    "audio/ogg;codecs=opus"
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

function startWaveform(stream) {
  stopWaveform();

  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return;

  const audioContext = new AudioContextClass();
  const analyser = audioContext.createAnalyser();
  analyser.fftSize = 256;
  analyser.smoothingTimeConstant = 0.7;
  audioContext.createMediaStreamSource(stream).connect(analyser);

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  state.audioContext = audioContext;
  state.analyser = analyser;
  state.waveformBars = [...el.waveform.querySelectorAll("span")];
  state.waveformLevels = state.waveformBars.map(() => 0.35);

  const frequencyData = new Uint8Array(analyser.frequencyBinCount);

  const tick = () => {
    if (!state.analyser) return;

    state.analyser.getByteFrequencyData(frequencyData);
    const barCount = state.waveformBars.length;
    const usableBins = Math.max(8, Math.floor(frequencyData.length * 0.45));

    for (let index = 0; index < barCount; index += 1) {
      const start = Math.floor((index / barCount) * usableBins);
      const end = Math.max(start + 1, Math.floor(((index + 1) / barCount) * usableBins));
      let sum = 0;
      for (let bin = start; bin < end; bin += 1) sum += frequencyData[bin];
      const average = sum / (end - start);
      // Boost mid/voice range so quiet speech still moves the bars.
      const normalized = Math.min(1, Math.pow(average / 180, 0.85));
      const target = 0.3 + normalized * 3.5;
      state.waveformLevels[index] += (target - state.waveformLevels[index]) * 0.45;
      state.waveformBars[index].style.transform = `scaleY(${state.waveformLevels[index].toFixed(3)})`;
    }

    state.waveformFrameId = requestAnimationFrame(tick);
  };

  state.waveformFrameId = requestAnimationFrame(tick);
}

function stopWaveform() {
  if (state.waveformFrameId) {
    cancelAnimationFrame(state.waveformFrameId);
    state.waveformFrameId = null;
  }

  if (state.audioContext) {
    state.audioContext.close().catch(() => {});
    state.audioContext = null;
  }
  state.analyser = null;

  const bars = state.waveformBars.length
    ? state.waveformBars
    : [...el.waveform.querySelectorAll("span")];
  bars.forEach((bar) => {
    bar.style.transform = "scaleY(0.35)";
  });
  state.waveformBars = [];
  state.waveformLevels = [];
}

function startSpeechRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;

  let finalText = "";
  let restarting = false;

  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  recognition.interimResults = true;
  recognition.lang = "en-US";
  state.recognition = recognition;

  recognition.onresult = (event) => {
    let interim = "";
    for (let index = event.resultIndex; index < event.results.length; index += 1) {
      const text = event.results[index][0].transcript;
      if (event.results[index].isFinal) finalText += `${text} `;
      else interim += text;
    }
    const live = `${finalText}${interim}`.trim();
    if (live) el.transcript.value = live;
  };

  recognition.onerror = (event) => {
    // These are normal while sharing the mic with MediaRecorder; keep recording.
    if (["no-speech", "aborted", "audio-capture"].includes(event.error)) return;
  };

  recognition.onend = () => {
    if (!state.isRecording || restarting) return;
    restarting = true;
    try {
      recognition.start();
    } catch {
      // Ignore restart races while the browser is still closing the session.
    } finally {
      restarting = false;
    }
  };

  try {
    recognition.start();
  } catch {
    // Live preview is optional; Whisper still runs after Stop.
  }
}

function startTimer() {
  clearInterval(state.timerId);
  el.timer.textContent = formatTime(state.remaining);
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    el.timer.textContent = formatTime(Math.max(state.remaining, 0));
    if (state.remaining <= 0) stopRecording(true);
  }, 1000);
}

function stopRecording(autoEvaluate) {
  clearInterval(state.timerId);
  state.autoEvaluateAfterStop = autoEvaluate;
  state.isRecording = false;

  if (state.recognition) {
    const recognition = state.recognition;
    state.recognition = null;
    recognition.onend = null;
    try {
      recognition.stop();
    } catch {
      // Already stopped.
    }
  }

  if (state.recorder && state.recorder.state !== "inactive") {
    state.recorder.stop();
  } else {
    stopWaveform();
    if (state.mediaStream) {
      state.mediaStream.getTracks().forEach((track) => track.stop());
      state.mediaStream = null;
    }
    if (autoEvaluate && el.transcript.value.trim()) {
      evaluateCurrentSpeech();
    }
  }
  setRecordingUi(false);
}

function setRecordingUi(isRecording) {
  el.startRecording.disabled = isRecording;
  el.mobileStart.disabled = isRecording;
  el.stopRecording.disabled = !isRecording;
  el.mode.disabled = isRecording;
  el.difficulty.disabled = isRecording;
  el.duration.disabled = isRecording;
  el.newChallenge.disabled = isRecording;
  el.recordingState.textContent = isRecording ? "On air" : "Ready";
  el.recordingState.classList.toggle("recording", isRecording);
  el.waveform.classList.toggle("is-live", isRecording);
}

function appendNotice(message) {
  const current = el.transcript.value.trim();
  el.transcript.value = current ? `${current}\n\n[${message}]` : `[${message}]`;
}

async function transcribeRecordedAudio(autoEvaluate) {
  if (!state.audioBlob || state.audioBlob.size === 0) {
    if (!el.transcript.value.trim() || el.transcript.value.startsWith("Listening…")) {
      appendNotice("No audio was captured. Try Start Speaking again and allow the microphone.");
    }
    if (autoEvaluate && el.transcript.value.trim()) evaluateCurrentSpeech();
    return;
  }

  const previewTranscript = sanitizeTranscript(el.transcript.value);
  el.recordingState.textContent = "Transcribing";
  el.transcript.value = previewTranscript;
  el.scoreSummary.textContent = "Whisper is inking your speech bubbles… hold for the reveal!";
  startTranscribeProgress();

  try {
    const response = await fetch("/api/transcribe", {
      method: "POST",
      headers: {
        "content-type": state.audioBlob.type || "audio/webm"
      },
      body: state.audioBlob
    });
    const result = await response.json();

    if (!response.ok) {
      el.scoreSummary.textContent = result.error || "Whisper transcription failed.";
      el.transcript.value = previewTranscript || `[${result.error || "Whisper transcription failed."}]`;
    } else {
      const text = (result.text || "").trim();
      el.transcript.value = text || previewTranscript || "[Whisper returned an empty transcript. Try speaking a bit louder or longer.]";
      el.scoreSummary.textContent = text
        ? "Transcript unlocked! Hit Evaluate and face the scorecard."
        : "Whisper shrugged — empty transcript. Try louder or longer.";
    }
  } catch (error) {
    el.scoreSummary.textContent = "Could not reach the transcription service. Is the local server running?";
    el.transcript.value = previewTranscript || "[Could not reach local Whisper. Keep node server.js and whisper_service.py running.]";
  } finally {
    stopTranscribeProgress(true);
    el.recordingState.textContent = "Ready";
    if (autoEvaluate && sanitizeTranscript(el.transcript.value)) evaluateCurrentSpeech();
  }
}

function startTranscribeProgress() {
  stopTranscribeProgress(false);
  if (!el.transcribeProgress) return;

  let progress = 8;
  const labels = [
    "Local sidekick grinding on CPU…",
    "Zap! Crunching audio frames…",
    "Still fighting — CPUs are dramatic…",
    "Final panel loading…"
  ];

  el.transcribeProgress.hidden = false;
  el.transcribeProgress.setAttribute("aria-busy", "true");
  el.transcribeProgressLabel.textContent = labels[0];
  el.transcribeMeterFill.style.width = `${progress}%`;
  el.transcribeMeter.setAttribute("aria-valuenow", String(progress));
  el.evaluate.disabled = true;

  state.transcribeProgressId = setInterval(() => {
    const remaining = 92 - progress;
    progress += Math.max(0.4, remaining * 0.045);
    if (progress > 92) progress = 92;
    el.transcribeMeterFill.style.width = `${progress}%`;
    el.transcribeMeter.setAttribute("aria-valuenow", String(Math.round(progress)));

    if (progress < 30) el.transcribeProgressLabel.textContent = labels[0];
    else if (progress < 55) el.transcribeProgressLabel.textContent = labels[1];
    else if (progress < 78) el.transcribeProgressLabel.textContent = labels[2];
    else el.transcribeProgressLabel.textContent = labels[3];
  }, 280);
}

function stopTranscribeProgress(complete) {
  if (state.transcribeProgressId) {
    clearInterval(state.transcribeProgressId);
    state.transcribeProgressId = null;
  }
  if (!el.transcribeProgress) return;

  if (complete) {
    el.transcribeMeterFill.style.width = "100%";
    el.transcribeMeter.setAttribute("aria-valuenow", "100");
    el.transcribeProgressLabel.textContent = "Done";
    window.setTimeout(() => {
      el.transcribeProgress.hidden = true;
      el.transcribeProgress.setAttribute("aria-busy", "false");
      el.transcribeMeterFill.style.width = "0%";
      el.transcribeMeter.setAttribute("aria-valuenow", "0");
      el.evaluate.disabled = false;
    }, 320);
  } else {
    el.transcribeProgress.hidden = true;
    el.transcribeProgress.setAttribute("aria-busy", "false");
    el.transcribeMeterFill.style.width = "0%";
    el.transcribeMeter.setAttribute("aria-valuenow", "0");
    el.evaluate.disabled = false;
  }
}

function sanitizeTranscript(value) {
  return String(value || "")
    .replace(/^Listening….*$/m, "")
    .replace(/^Transcribing with local Whisper….*$/m, "")
    .replace(/\[[^\]]+\]/g, "")
    .trim();
}

async function evaluateCurrentSpeech() {
  const transcript = sanitizeTranscript(el.transcript.value);
  if (!transcript) {
    el.scoreSummary.textContent = "Add a transcript first so the coach has something to evaluate.";
    return;
  }

  const duration = state.startedAt
    ? Math.max(1, Math.round((Date.now() - state.startedAt) / 1000))
    : state.challenge?.duration || 60;

  el.scoreSummary.textContent = "Coach is scoring your transcript...";
  el.evaluate.disabled = true;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 20000);
    const response = await fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        transcript,
        challenge: state.challenge,
        duration
      }),
      signal: controller.signal
    });
    clearTimeout(timeoutId);
    const result = await response.json();

    if (!response.ok) {
      completeLocalEvaluation(transcript, duration, result.error || "API analysis unavailable. Used local scoring instead.");
      return;
    }

    // Complete the missing structural details for saving
    const finalResult = {
      id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      date: new Date().toISOString(),
      challenge: state.challenge,
      transcript,
      overall: result.overall,
      scores: result.scores,
      strengths: result.strengths,
      improvements: result.improvements,
      advice: result.advice,
      provider: result.provider || "api",
      metrics: {
        duration,
        words: (transcript.match(wordRegex) || []).length,
        wpm: Math.round(((transcript.match(wordRegex) || []).length / duration) * 60)
      }
    };

    saveAttempt(finalResult);
    el.scoreSummary.textContent = `Evaluated with ${labelForProvider(finalResult.provider)}.`;
    renderProgress();
    renderHistory();
    showPage("history");
    showResultModal(finalResult);
  } catch (error) {
    const message = error.name === "AbortError"
      ? "API analysis timed out. Used local scoring instead."
      : "API analysis unavailable. Used local scoring instead.";
    completeLocalEvaluation(transcript, duration, message);
  } finally {
    if (el.fullScreenLoading) el.fullScreenLoading.hidden = true;
    el.evaluate.disabled = false;
  }
}

function completeLocalEvaluation(transcript, duration, message) {
  const localResult = evaluateTranscript(transcript, duration, state.challenge);
  localResult.provider = "local";
  saveAttempt(localResult);
  if (el.fullScreenLoading) el.fullScreenLoading.hidden = true;
  el.scoreSummary.textContent = message;
  renderProgress();
  renderHistory();
  showPage("history");
  showResultModal(localResult);
}

function labelForProvider(provider) {
  const labels = {
    openai: "OpenAI",
    gemini: "Gemini",
    local: "local scoring",
    api: "the configured API"
  };
  return labels[provider] || "the configured API";
}

function evaluateTranscript(transcript, duration, challenge) {
  const words = transcript.match(wordRegex) || [];
  const lower = transcript.toLowerCase();
  const sentences = transcript.split(/[.!?]+/).map((item) => item.trim()).filter(Boolean);
  const uniqueWords = new Set(words.map((word) => word.toLowerCase()));
  const fillerCount = fillerRegExps.reduce((count, regexp) => {
    const matches = lower.match(regexp);
    return count + (matches ? matches.length : 0);
  }, 0);
  const wpm = Math.round((words.length / Math.max(duration, 1)) * 60);
  const promptTerms = new Set((challenge?.text.toLowerCase().match(promptTermRegex) || []).map((term) => term.trim()));
  const relevanceHits = [...promptTerms].reduce((count, term) => count + (lower.includes(term) ? 1 : 0), 0);
  const transitionHits = transitionTerms.reduce((count, term) => count + (lower.includes(term) ? 1 : 0), 0);
  const conclusionHit = conclusionRegex.test(transcript);
  const exampleHit = exampleRegex.test(transcript);

  const content = clampScore(4.2 + words.length / 38 + (exampleHit ? 1.1 : 0));
  const relevance = clampScore(5 + Math.min(3, relevanceHits * 1.4) + (words.length > 35 ? 0.8 : 0));
  const coherence = clampScore(4.5 + transitionHits * 0.8 + (sentences.length >= 3 ? 0.8 : 0));
  const vocabulary = clampScore(4.6 + (uniqueWords.size / Math.max(words.length, 1)) * 4.2 + (words.length > 80 ? 0.5 : 0));
  const fluency = clampScore(8.2 - fillerCount * 0.28 - pacePenalty(wpm));
  const structure = clampScore(4.8 + (sentences.length >= 3 ? 1 : 0) + (conclusionHit ? 1.2 : 0) + transitionHits * 0.45);
  const argument = challenge?.mode === "debate"
    ? clampScore(4.5 + transitionHits * 0.55 + (exampleHit ? 1 : 0) + (/counter|although|while|opponent/i.test(transcript) ? 1 : 0))
    : null;

  const scores = { content, relevance, coherence, vocabulary, fluency, structure };
  if (argument !== null) scores.argument = argument;

  const weights = {
    content: 1.15,
    relevance: 1,
    coherence: 1.2,
    vocabulary: 0.75,
    fluency: 1,
    structure: 1.05,
    argument: challenge?.mode === "debate" ? 1 : 0
  };
  const totalWeight = Object.keys(scores).reduce((sum, key) => sum + weights[key], 0);
  const overall = round1(Object.entries(scores).reduce((sum, [key, value]) => sum + value * weights[key], 0) / totalWeight);

  const metricWords = words.length;
  return {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    date: new Date().toISOString(),
    challenge,
    transcript,
    scores,
    overall,
    metrics: {
      duration,
      words: metricWords,
      wpm,
      fillerCount,
      fillerRate: metricWords ? round1((fillerCount / metricWords) * 100) : 0,
      sentenceCount: sentences.length
    },
    strengths: buildStrengths(scores, { wpm, fillerCount, exampleHit, conclusionHit }),
    improvements: buildImprovements(scores, { fillerCount, exampleHit, conclusionHit, transitionHits }),
    advice: buildRetryAdvice(scores)
  };
}

function clampScore(value) {
  return round1(Math.max(1, Math.min(10, value)));
}

function round1(value) {
  return Math.round(value * 10) / 10;
}

function pacePenalty(wpm) {
  if (wpm < 85) return (85 - wpm) / 18;
  if (wpm > 175) return (wpm - 175) / 20;
  return 0;
}

function sortedScoreKeys(scores, ascending = false) {
  return Object.entries(scores)
    .sort((a, b) => ascending ? a[1] - b[1] : b[1] - a[1])
    .map(([key]) => key);
}

function buildStrengths(scores, facts) {
  const items = [];
  const [strongest] = sortedScoreKeys(scores);
  items.push(`${labelFor(strongest)} is your strongest area in this attempt.`);
  if (facts.fillerCount <= 4) items.push("You kept filler words under control.");
  if (facts.exampleHit) items.push("You used an example, which made the answer more concrete.");
  if (facts.wpm >= 100 && facts.wpm <= 160) items.push("Your speaking pace was in a comfortable range.");
  return items.slice(0, 4);
}

function buildImprovements(scores, facts) {
  const items = [];
  const [weakest] = sortedScoreKeys(scores, true);
  items.push(`Focus on ${labelFor(weakest).toLowerCase()} next; it was the lowest scoring area.`);
  if (facts.fillerCount > 6) items.push(`You used ${facts.fillerCount} filler words. Pause silently instead of filling the gap.`);
  if (!facts.exampleHit) items.push("Add one specific example to make the point easier to believe.");
  if (!facts.conclusionHit) items.push("Close with a final sentence that restates your main point.");
  if (facts.transitionHits < 2) items.push("Use signposts such as first, because, for example, and finally.");
  return items.slice(0, 5);
}

function buildRetryAdvice(scores) {
  const [weakest] = sortedScoreKeys(scores, true);
  const structures = {
    content: "Use Point, Example, Impact. Make one idea specific instead of listing many ideas.",
    relevance: "Repeat the prompt in your first sentence, then connect every example back to it.",
    coherence: "Use Point, Reason, Example, Conclusion so the listener can follow the path.",
    vocabulary: "Replace repeated words with precise alternatives, but keep the answer natural.",
    fluency: "Slow down slightly and use silent pauses instead of filler words.",
    structure: "Open with your point, develop it with one reason, and end with a clear closing line.",
    argument: "State your claim, give evidence, address a counterpoint, and finish with impact."
  };
  return `Your main focus is ${labelFor(weakest).toLowerCase()}. Retry the same prompt and ${structures[weakest]}`;
}

function labelFor(key) {
  const labels = {
    content: "Content",
    relevance: "Relevance",
    coherence: "Coherence",
    vocabulary: "Vocabulary",
    fluency: "Fluency",
    structure: "Structure",
    argument: "Argument Quality"
  };
  return labels[key] || key;
}

function renderResult(result) {
  el.overallScore.textContent = result.overall.toFixed(1);
  const wordsCount = result.metrics.words;
  const wpmValue = result.metrics.wpm;
  const fillersValue = result.metrics.fillerCount !== undefined ? result.metrics.fillerCount : "calculated";
  el.scoreSummary.textContent = `${wordsCount} words, ${wpmValue} WPM, ${fillersValue} filler words.`;
  el.rubricGrid.innerHTML = Object.entries(result.scores).map(([key, value]) => `
    <div class="rubric-item">
      <span>${labelFor(key)}</span>
      <strong>${value.toFixed(1)}</strong>
      <div class="meter" aria-hidden="true"><div style="width: ${value * 10}%"></div></div>
    </div>
  `).join("");
  renderList(el.strengths, result.strengths);
  renderList(el.improvements, result.improvements);
  el.retryAdvice.textContent = result.advice;
  updateCoach(result);
}

function renderList(target, items) {
  target.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function saveAttempt(result) {
  state.history.unshift(result);
  state.history = state.history.slice(0, 25);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function renderProgress() {
  const attempts = state.history;
  if (!attempts.length) {
    el.navAverage.textContent = "--";
    el.navStreak.textContent = "0 day streak";
    return;
  }

  const average = round1(attempts.reduce((sum, item) => sum + item.overall, 0) / attempts.length);
  const best = Math.max(...attempts.map((item) => item.overall));
  const totalSeconds = attempts.reduce((sum, item) => sum + (item.metrics.duration || 0), 0);
  const validWpms = attempts.map((item) => item.metrics.wpm || 0).filter(Boolean);
  const avgPace = validWpms.length ? Math.round(validWpms.reduce((sum, v) => sum + v, 0) / validWpms.length) : "--";

  el.navAverage.textContent = average.toFixed(1);
  el.navStreak.textContent = `${calculateStreak(attempts)} day streak`;
  el.totalSpeeches.textContent = attempts.length;
  el.bestScore.textContent = best.toFixed(1);
  el.totalTime.textContent = `${Math.round(totalSeconds / 60)}m`;
  el.avgPace.textContent = avgPace !== "--" ? `${avgPace} WPM` : "--";
}

function calculateStreak(attempts) {
  const days = new Set(attempts.map((item) => item.date.slice(0, 10)));
  let streak = 0;
  const cursor = new Date();
  while (days.has(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

function showResultModal(result) {
  if (!el.resultModal) return;
  el.modalTitle.textContent = `${result.challenge.label.toUpperCase()}: ${result.challenge.text.toUpperCase()}`;
  el.modalOverallScore.textContent = result.overall.toFixed(1);
  const fillers = result.metrics.fillerCount !== undefined ? result.metrics.fillerCount : "calculated";
  const source = result.provider ? ` Source: ${labelForProvider(result.provider)}.` : "";
  el.modalScoreSummary.textContent = `${result.metrics.words} words, ${result.metrics.wpm} WPM, ${fillers} filler words.${source}`;

  el.modalRubricGrid.innerHTML = Object.entries(result.scores).map(([key, value]) => `
    <div class="rubric-item">
      <span>${labelFor(key)}</span>
      <strong>${value.toFixed(1)}</strong>
      <div class="meter" aria-hidden="true"><div style="width: ${value * 10}%"></div></div>
    </div>
  `).join("");

  renderList(el.modalStrengths, result.strengths);
  renderList(el.modalImprovements, result.improvements);
  el.modalRetryAdvice.textContent = result.advice;

  el.resultModal.hidden = false;
  el.resultModal.style.display = "flex";
}

function hideResultModal() {
  if (!el.resultModal) return;
  el.resultModal.hidden = true;
  el.resultModal.style.display = "none";
}

function renderHistory() {
  if (!state.history.length) {
    el.historyList.innerHTML = "<p>Empty archive — your first issue drops here after you speak.</p>";
    return;
  }

  el.historyList.innerHTML = state.history.map((item) => `
    <article class="history-item" data-history-id="${item.id}">
      <div>
        <strong>${item.challenge.label}: ${item.challenge.text}</strong>
        <span>${new Date(item.date).toLocaleString()} - ${item.metrics.words} words - ${labelForProvider(item.provider || "local")}</span>
      </div>
      <strong>${item.overall.toFixed(1)}/10</strong>
    </article>
  `).join("");

  // Attach click listeners to history items
  el.historyList.querySelectorAll(".history-item").forEach((element) => {
    element.addEventListener("click", () => {
      const historyId = element.getAttribute("data-history-id");
      const matched = state.history.find((item) => item.id === historyId);
      if (matched) {
        showResultModal(matched);
      }
    });
  });
}

function updateCoach(result) {
  const weakest = Object.entries(result.scores).sort((a, b) => a[1] - b[1])[0][0];
  el.coachHeadline.textContent = `Today's focus: ${labelFor(weakest)}`;
  el.coachBody.textContent = result.advice;
}

function clearHistory() {
  state.history = [];
  localStorage.removeItem("speakup-history");
  renderProgress();
  renderHistory();
}

function focusedPrompt() {
  const latest = state.history[0];
  if (!latest) {
    generateChallenge("topic", "Medium");
    return;
  }
  const weakest = Object.entries(latest.scores).sort((a, b) => a[1] - b[1])[0][0];
  const focusMap = {
    coherence: ["topic", "Medium"],
    structure: ["interview", "Medium"],
    fluency: ["word", "Easy"],
    vocabulary: ["word", "Hard"],
    relevance: ["situation", "Medium"],
    content: ["topic", "Hard"],
    argument: ["debate", "Hard"]
  };
  const [mode, difficulty] = focusMap[weakest] || ["topic", "Medium"];
  el.mode.value = mode;
  el.difficulty.value = difficulty;
  generateChallenge(mode, difficulty);
  showPage("practice");
}

function getPreferredTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "dark" || saved === "light") return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  try {
    localStorage.setItem(THEME_KEY, next);
  } catch {
    /* ignore */
  }

  const switchTo = next === "dark" ? "light" : "dark";
  const label = switchTo === "dark" ? "Dark" : "Light";
  const aria = `Switch to ${switchTo} theme`;

  if (el.themeToggle) {
    const text = el.themeToggle.querySelector(".theme-toggle-label");
    if (text) text.textContent = label;
    el.themeToggle.setAttribute("aria-label", aria);
  }
  if (el.mobileThemeToggle) {
    el.mobileThemeToggle.setAttribute("aria-label", aria);
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

function showPage(pageName) {
  const safePage = ["practice", "results", "progress", "history"].includes(pageName) ? pageName : "practice";

  el.pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === safePage);
  });
  el.pageLinks.forEach((link) => {
    const isActive = link.dataset.pageLink === safePage;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  if (location.hash !== `#${safePage}`) {
    history.replaceState(null, "", `#${safePage}`);
  }

  if (safePage === "practice") scheduleFitChallengeText();
}

function showPageFromHash() {
  showPage(location.hash.replace("#", "") || "practice");
}

el.newChallenge.addEventListener("click", () => generateChallenge());
el.retryChallenge.addEventListener("click", () => {
  state.remaining = state.challenge.duration;
  el.timer.textContent = formatTime(state.remaining);
  el.transcript.focus();
});
el.startRecording.addEventListener("click", startRecording);
el.mobileStart.addEventListener("click", startRecording);
el.stopRecording.addEventListener("click", () => stopRecording(false));
el.evaluate.addEventListener("click", evaluateCurrentSpeech);
el.coachChallenge.addEventListener("click", focusedPrompt);
el.clearHistory.addEventListener("click", clearHistory);
el.duration.addEventListener("change", () => generateChallenge());
el.mode.addEventListener("change", () => generateChallenge());
el.difficulty.addEventListener("change", () => generateChallenge());
el.themeToggle.addEventListener("click", toggleTheme);
el.mobileThemeToggle.addEventListener("click", toggleTheme);
if (el.closeModal) el.closeModal.addEventListener("click", hideResultModal);
window.addEventListener("hashchange", showPageFromHash);
window.addEventListener("resize", scheduleFitChallengeText);

// Close modal if overlay is clicked
if (el.resultModal) {
  el.resultModal.addEventListener("click", (e) => {
    if (e.target === el.resultModal) hideResultModal();
  });
}

applyTheme(getPreferredTheme());
generateChallenge();
showPageFromHash();
renderProgress();
renderHistory();
