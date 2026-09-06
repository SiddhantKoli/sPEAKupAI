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
  history: loadHistory(),
  activeModalResult: null
};

const el = {
  pages: document.querySelectorAll("[data-page]"),
  pageLinks: document.querySelectorAll("[data-page-link]"),
  mode: document.querySelector("#mode"),
  difficulty: document.querySelector("#difficulty"),
  duration: document.querySelector("#duration"),
  difficultyGroup: document.querySelector("#difficultyGroup"),
  durationGroup: document.querySelector("#durationGroup"),
  customTimerGroup: document.querySelector("#customTimerGroup"),
  customComplexityGroup: document.querySelector("#customComplexityGroup"),
  customSeconds: document.querySelector("#customSeconds"),
  customComplexity: document.querySelector("#customComplexity"),
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
  trends: document.querySelector("#trendGrid"),
  themeToggle: document.querySelector("#themeToggle"),
  mobileThemeToggle: document.querySelector("#mobileThemeToggle"),
  transcribeProgress: document.querySelector("#transcribeProgress"),
  transcribeProgressLabel: document.querySelector("#transcribeProgressLabel"),
  transcribeMeter: document.querySelector("#transcribeMeter"),
  transcribeMeterFill: document.querySelector("#transcribeMeterFill"),
  
  // Modal overlays
  resultModal: document.querySelector("#resultModal"),
  closeModal: document.querySelector("#closeModal"),
  exportPng: document.querySelector("#exportPng"),
  exportPdf: document.querySelector("#exportPdf"),
  printSheet: document.querySelector("#printSheet"),
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

function syncCustomControls() {
  const custom = isCustomDifficulty();
  el.difficultyGroup.hidden = custom;
  el.durationGroup.hidden = custom;
  el.customTimerGroup.hidden = !custom;
  el.customComplexityGroup.hidden = !custom;
}

function isCustomDifficulty() {
  return el.difficulty.value === "custom";
}

function clampCustomSeconds() {
  let value = Number(el.customSeconds.value);
  if (!Number.isFinite(value)) value = 75;
  value = Math.round(Math.min(600, Math.max(15, value)));
  el.customSeconds.value = value;
  return value;
}

function effectiveDifficulty() {
  return isCustomDifficulty() ? el.customComplexity.value : el.difficulty.value;
}

function effectiveDuration() {
  return isCustomDifficulty() ? clampCustomSeconds() : Number(el.duration.value);
}

function generateChallenge(forceMode, forceDifficulty) {
  const mode = forceMode || el.mode.value;
  const custom = !forceMode && isCustomDifficulty();
  const difficulty = forceDifficulty || (custom ? el.customComplexity.value : el.difficulty.value);
  const duration = effectiveDuration();
  const text = pick(prompts[mode][difficulty]);

  state.challenge = {
    mode,
    difficulty: custom ? "Custom" : difficulty,
    duration,
    text,
    label: prompts[mode].label
  };
  state.remaining = duration;

  el.challengeKind.textContent = prompts[mode].label;
  el.challengeText.textContent = text;
  el.challengeDifficulty.textContent = custom ? "Custom" : difficulty;
  el.challengeTime.textContent = `${duration} seconds`;
  el.challengeBrief.textContent = briefFor(mode, duration);
  applyModeCopy(mode);
  el.timer.textContent = formatTime(duration);
  syncCustomControls();
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
  el.transcript.value = "On air… spill the speech bubbles! After Stop, the transcript lands here.";

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
    // Live preview is optional; cloud transcription still runs after Stop.
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
  el.customSeconds.disabled = isRecording;
  el.customComplexity.disabled = isRecording;
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
    if (!sanitizeTranscript(el.transcript.value)) {
      appendNotice("No audio was captured. Try Start Speaking again and allow the microphone.");
    }
    if (autoEvaluate && el.transcript.value.trim()) evaluateCurrentSpeech();
    return;
  }

  const previewTranscript = sanitizeTranscript(el.transcript.value);
  el.recordingState.textContent = "Transcribing";
  el.transcript.value = previewTranscript;
  el.scoreSummary.textContent = "Inking your speech bubbles… hold for the reveal!";
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
      if (result.code === "no_api_key") {
        if (previewTranscript) {
          // No transcription key configured — keep the browser's live
          // SpeechRecognition transcript as the final one instead of failing.
          el.transcript.value = previewTranscript;
          el.scoreSummary.textContent = "Using the browser's speech-recognition transcript. Add GEMINI_API_KEY or OPENAI_API_KEY to .env for higher-accuracy cloud transcription.";
        } else {
          // No key AND the browser's speech service captured nothing.
          el.transcript.value = "";
          el.scoreSummary.textContent = "No speech was recognized. The browser's speech service captured nothing — add GEMINI_API_KEY or OPENAI_API_KEY to .env for cloud transcription, or record in Chrome/Edge with the microphone allowed.";
        }
      } else {
        el.scoreSummary.textContent = result.error || "Transcription failed.";
        el.transcript.value = previewTranscript || `[${result.error || "Transcription failed."}]`;
      }
    } else {
      const text = (result.text || "").trim();
      el.transcript.value = text || previewTranscript || "[Transcription returned an empty transcript. Try speaking a bit louder or longer.]";
      el.scoreSummary.textContent = text
        ? "Transcript unlocked! Hit Evaluate and face the scorecard."
        : "Transcription shrugged — empty transcript. Try louder or longer.";
    }
  } catch (error) {
    el.scoreSummary.textContent = "Could not reach the transcription service. Is the server running?";
    el.transcript.value = previewTranscript || "[Could not reach the transcription service. Keep node server.js running.]";
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
    "Beaming audio to cloud transcription…",
    "Zap! Crunching audio frames…",
    "Still working — good takes take time…",
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
    .replace(/^On air….*$/m, "")
    .replace(/^Listening….*$/m, "")
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
    el.evaluate.disabled = false;
  }
}

function completeLocalEvaluation(transcript, duration, message) {
  const localResult = evaluateTranscript(transcript, duration, state.challenge);
  localResult.provider = "local";
  saveAttempt(localResult);
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
  renderTrends();
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

// ---- Trends ----

function renderTrends() {
  const container = el.trends;
  if (!container) return;

  const attempts = [...state.history].reverse(); // oldest → newest, left to right
  if (!attempts.length) {
    container.innerHTML = '<div class="trend-empty"><p>Complete a few sessions to see your curves take shape.</p></div>';
    return;
  }

  const overall = attempts.map((item) => item.overall);
  const wpm = attempts.map((item) => item.metrics.wpm || 0);
  const fillers = attempts.map((item) => {
    if (item.metrics.fillerRate != null) return item.metrics.fillerRate;
    if (item.metrics.fillerCount != null) {
      return item.metrics.words ? round1((item.metrics.fillerCount / item.metrics.words) * 100) : 0;
    }
    return 0;
  });

  container.innerHTML = [
    trendCard("Overall score", overall, { min: 0, max: 10, unit: "" }),
    trendCard("Speaking pace", wpm, { unit: " WPM" }),
    trendCard("Filler rate", fillers, { unit: "%" })
  ].join("");
}

function trendCard(title, values, opts) {
  return `
    <article class="trend-card">
      <h3>${title}</h3>
      ${buildTrendSvg(values, opts, title)}
      <p class="trend-summary">${summarizeTrend(values, opts.unit)}</p>
    </article>
  `;
}

function summarizeTrend(values, unit) {
  const last = values[values.length - 1];
  const best = Math.max(...values);
  const count = values.length;
  return `Latest ${fmtAxis(last)}${unit} · Best ${fmtAxis(best)}${unit} · ${count} session${count === 1 ? "" : "s"}`;
}

function fmtAxis(value) {
  return String(Number(Number(value).toFixed(1)));
}

function buildTrendSvg(values, opts, title) {
  const W = 340;
  const H = 128;
  const pad = { l: 30, r: 12, t: 14, b: 20 };
  const plotW = W - pad.l - pad.r;
  const plotH = H - pad.t - pad.b;
  const n = values.length;
  const minValue = opts.min != null ? opts.min : Math.floor(Math.min(...values));
  const maxValue = opts.max != null ? opts.max : Math.ceil(Math.max(...values));
  const span = Math.max(maxValue - minValue, 0.0001);
  const x = (i) => (n === 1 ? pad.l + plotW / 2 : pad.l + (i / (n - 1)) * plotW);
  const y = (v) => pad.t + plotH - ((v - minValue) / span) * plotH;

  const gridLines = [0.25, 0.5, 0.75].map((t) => {
    const gy = pad.t + plotH * t;
    const gv = minValue + span * (1 - t);
    return `<line class="chart-grid" x1="${pad.l}" y1="${gy}" x2="${W - pad.r}" y2="${gy}"/>
      <text x="${pad.l - 5}" y="${gy + 3}" text-anchor="end">${fmtAxis(gv)}</text>`;
  }).join("");

  const pts = values.map((v, i) => `${x(i).toFixed(1)},${y(v).toFixed(1)}`);
  const area = `M${pts[0]} L${pts.join(" L")} L${x(n - 1).toFixed(1)},${(pad.t + plotH).toFixed(1)} L${x(0).toFixed(1)},${(pad.t + plotH).toFixed(1)} Z`;
  const valueLabels = n <= 12
    ? values.map((v, i) => `<text class="chart-value" x="${x(i)}" y="${y(v) - 8}" text-anchor="middle">${fmtAxis(v)}</text>`).join("")
    : "";
  const dots = pts.map((p) => {
    const [cx, cy] = p.split(",");
    return `<circle class="chart-dot" cx="${cx}" cy="${cy}" r="3.5"/>`;
  }).join("");

  return `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${title} — ${titleForTrend(values)}">
    ${gridLines}
    <path class="chart-area" d="${area}"/>
    <polyline class="chart-line" stroke-width="3" points="${pts.join(" ")}"/>
    ${dots}
    ${valueLabels}
  </svg>`;
}

function titleForTrend(values) {
  return `Trend across ${values.length} session${values.length === 1 ? "" : "s"}`;
}

function showResultModal(result) {
  if (!el.resultModal) return;
  state.activeModalResult = result;
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
  state.activeModalResult = null;
  el.resultModal.hidden = true;
  el.resultModal.style.display = "none";
}

// ---- Report export: PNG image + Print / PDF ----

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[ch]));
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function loadReportLogo() {
  if (state.reportLogo) return Promise.resolve(state.reportLogo);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      state.reportLogo = img;
      // Bake the logo into a data URL once: the print/PDF sheet and canvas export
      // then get it instantly with no second network fetch (a fresh <img src>
      // fetch races the print snapshot and shows an empty placeholder box).
      try {
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        c.getContext("2d").drawImage(img, 0, 0);
        state.reportLogoDataUrl = c.toDataURL("image/png");
      } catch (err) {
        state.reportLogoDataUrl = null;
      }
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = "./logo.png";
  });
}

function waitForImage(img, timeoutMs = 2500) {
  if (img.complete && img.naturalWidth > 0) return Promise.resolve();
  return new Promise((resolve) => {
    const deadline = Date.now() + timeoutMs;
    const tick = () => {
      if ((img.complete && img.naturalWidth > 0) || Date.now() > deadline) resolve();
      else setTimeout(tick, 50);
    };
    tick();
  });
}

async function exportReportPng(result) {
  const logo = await loadReportLogo();
  const canvas = renderReportCanvas(result, logo);
  canvas.toBlob((blob) => {
    if (!blob) return;
    const filename = `speakup-report-${result.date.slice(0, 10)}.png`;
    const file = new File([blob], filename, { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      navigator.share({ files: [file], title: "SpeakUp AI report" }).catch(() => downloadBlob(blob, filename));
    } else {
      downloadBlob(blob, filename);
    }
  }, "image/png");
}

async function printReport(result) {
  if (!el.printSheet) return;
  el.printSheet.innerHTML = buildPrintMarkup(result);
  // Make sure the logo is actually rendered before the print engine snapshots the
  // page — otherwise the PDF shows an empty placeholder box instead of the logo.
  await loadReportLogo();
  const imgs = Array.from(el.printSheet.querySelectorAll("img"));
  await Promise.all(imgs.map(waitForImage));
  window.print();
}

function buildPrintMarkup(result) {
  const rubric = Object.entries(result.scores).map(([key, value]) => `
    <div class="print-rubric-item">
      <span>${labelFor(key)}</span>
      <strong>${value.toFixed(1)}</strong>
      <div class="print-meter"><div style="width: ${value * 10}%"></div></div>
    </div>`).join("");

  const transcript = result.transcript
    ? `<section class="print-section"><h3>Transcript</h3><p class="print-transcript">${escapeHtml(result.transcript)}</p></section>`
    : "";

  return `
    <header class="print-header">
      <div>
        <img class="print-logo" src="${state.reportLogoDataUrl || "./logo.png"}" alt="SpeakUp AI logo">
        <h1>Speech Report</h1>
      </div>
      <p class="print-date">${new Date(result.date).toLocaleString()}</p>
    </header>
    <section class="print-challenge">
      <span class="print-tag">${escapeHtml(result.challenge.label)}</span>
      <h2>${escapeHtml(result.challenge.text)}</h2>
      <p class="print-meta">Difficulty: ${escapeHtml(result.challenge.difficulty)} · ${result.challenge.duration} seconds · Source: ${labelForProvider(result.provider || "local")}</p>
    </section>
    <section class="print-score-row">
      <div class="print-overall">
        <span>Overall</span>
        <strong>${result.overall.toFixed(1)}<small>/10</small></strong>
      </div>
      <div class="print-metrics">
        <div><span>Words</span><strong>${result.metrics.words ?? "—"}</strong></div>
        <div><span>WPM</span><strong>${result.metrics.wpm ?? "—"}</strong></div>
        <div><span>Fillers</span><strong>${result.metrics.fillerCount ?? "—"}</strong></div>
      </div>
    </section>
    <section class="print-section"><h3>Rubric</h3><div class="print-rubric">${rubric}</div></section>
    <section class="print-columns">
      <div class="print-section"><h3>Strengths</h3><ul>${result.strengths.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
      <div class="print-section"><h3>Improve Next</h3><ul>${result.improvements.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul></div>
    </section>
    <section class="print-section print-advice"><h3>Coach's advice</h3><p>${escapeHtml(result.advice)}</p></section>
    ${transcript}
    <footer class="print-footer">Generated with SpeakUp AI</footer>
  `;
}

function renderReportCanvas(result, logo) {
  const dpr = 2;
  const W = 1200;
  const FONTS = {
    kicker: '800 24px "Courier New", monospace',
    h1: '400 88px Impact, "Arial Narrow Bold", sans-serif',
    tag: '800 22px "Courier New", monospace',
    challenge: '400 50px Impact, "Arial Narrow Bold", sans-serif',
    meta: '800 20px "Courier New", monospace',
    body: '500 26px Inter, system-ui, sans-serif',
    big: '400 128px Impact, "Arial Narrow Bold", sans-serif',
    metric: '400 62px Impact, "Arial Narrow Bold", sans-serif',
    small: '700 22px "Courier New", monospace',
    list: '500 24px Inter, system-ui, sans-serif'
  };
  const C = {
    ink: "#141b2b",
    muted: "#424754",
    paper: "#fffefd",
    soft: "#e9edff",
    yellow: "#ffe600",
    blue: "#0058be",
    white: "#ffffff"
  };

  // Measure pass: wrap text and compute block heights on a scratch canvas.
  const scratch = document.createElement("canvas");
  scratch.width = W * dpr;
  scratch.height = 2000 * dpr;
  const mctx = scratch.getContext("2d");
  mctx.scale(dpr, dpr);

  const widthOf = (text, font) => {
    mctx.font = font;
    return mctx.measureText(text).width;
  };

  const wrap = (text, font, maxWidth) => {
    mctx.font = font;
    const words = String(text).split(/\s+/);
    const lines = [];
    let line = "";
    for (const word of words) {
      const test = line ? `${line} ${word}` : word;
      if (line && mctx.measureText(test).width > maxWidth) {
        lines.push(line);
        line = word;
      } else {
        line = test;
      }
    }
    if (line) lines.push(line);
    return lines;
  };

  const padX = 40;
  const contentW = W - padX * 2;
  let y = 30;

  const headerH = 168;
  y += headerH + 24;

  const challengeLines = wrap(result.challenge.text, FONTS.challenge, contentW - 64).slice(0, 3);
  if (challengeLines.length === 3) {
    challengeLines[2] = `${challengeLines[2].slice(0, -1)}…`;
  }
  const challengeH = 24 + 34 + 16 + challengeLines.length * 56 + 12 + 24 + 24;
  y += challengeH + 24;

  const scoreRowH = 240;
  y += scoreRowH + 24;

  const rubricRows = Object.entries(result.scores);
  const rubricH = 44 + rubricRows.length * 52;
  y += rubricH + 24;

  const feedbackCardW = (contentW - 18) / 2;
  const listLines = (items) => items.reduce((sum, item) => sum + wrap(item, FONTS.list, feedbackCardW - 60).length, 0);
  const feedbackBodyLines = Math.max(listLines(result.strengths), listLines(result.improvements), 1);
  const feedbackH = 70 + feedbackBodyLines * 36 + 36;
  y += feedbackH + 24;

  const adviceLines = wrap(result.advice, FONTS.body, contentW - 64);
  const adviceH = 66 + adviceLines.length * 38 + 44;
  y += adviceH + 24;

  const footerH = 60;
  const totalH = y + footerH + 30;

  // Draw pass on the real canvas — restart the cursor at the top (the
  // measure pass above left `y` pointing past the last block).
  y = 30;
  const canvas = document.createElement("canvas");
  canvas.width = W * dpr;
  canvas.height = totalH * dpr;
  const ctx = canvas.getContext("2d");
  ctx.scale(dpr, dpr);
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = C.paper;
  ctx.fillRect(0, 0, W, totalH);

  const drawCard = (x, y0, w, h, fill) => {
    ctx.fillStyle = C.ink;
    ctx.fillRect(x + 10, y0 + 10, w, h);
    ctx.fillStyle = fill;
    ctx.fillRect(x, y0, w, h);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y0, w, h);
  };

  const drawList = (items, x, y0, maxWidth, lineH, font) => {
    ctx.font = font;
    ctx.fillStyle = C.ink;
    let cursor = y0;
    for (const item of items) {
      const lines = wrap(item, font, maxWidth - 26);
      lines.forEach((line, index) => {
        ctx.fillText(index === 0 ? `•  ${line}` : line, index === 0 ? x : x + 26, cursor);
        cursor += lineH;
      });
    }
  };

  // Header
  drawCard(padX, y, contentW, headerH, C.yellow);
  ctx.font = FONTS.kicker;
  ctx.fillStyle = C.blue;
  if (logo) {
    ctx.fillStyle = "#0d0d0d";
    ctx.fillRect(padX + 32, y + 22, 80, 80);
    ctx.drawImage(logo, padX + 38, y + 28, 68, 68);
  } else {
    ctx.fillText("SPEAKUP AI · SPEECH REPORT", padX + 32, y + 50);
  }
  ctx.font = FONTS.h1;
  ctx.fillStyle = C.ink;
  ctx.fillText("Speech Report", padX + 32, y + 128);
  ctx.font = FONTS.small;
  ctx.fillStyle = C.muted;
  ctx.textAlign = "right";
  ctx.fillText(new Date(result.date).toLocaleString(), padX + contentW - 32, y + 58);
  ctx.fillText(`Source: ${labelForProvider(result.provider || "local")}`, padX + contentW - 32, y + 92);
  ctx.textAlign = "left";
  y += headerH + 24;

  // Challenge
  drawCard(padX, y, contentW, challengeH, C.paper);
  const tagText = String(result.challenge.label).toUpperCase();
  const tagWidth = widthOf(tagText, FONTS.tag) + 24;
  ctx.fillStyle = C.blue;
  ctx.fillRect(padX + 32, y + 24, tagWidth, 34);
  ctx.font = FONTS.tag;
  ctx.fillStyle = C.white;
  ctx.fillText(tagText, padX + 32 + 12, y + 24 + 24);
  ctx.font = FONTS.challenge;
  ctx.fillStyle = C.ink;
  challengeLines.forEach((line, index) => {
    ctx.fillText(line, padX + 32, y + 24 + 34 + 16 + 56 * index + 44);
  });
  ctx.font = FONTS.meta;
  ctx.fillStyle = C.muted;
  ctx.fillText(`Difficulty ${result.challenge.difficulty} · ${result.challenge.duration} seconds`, padX + 32, y + challengeH - 24);
  y += challengeH + 24;

  // Score row
  const overallW = 380;
  const metricsW = contentW - overallW - 18;
  drawCard(padX, y, overallW, scoreRowH, C.paper);
  ctx.font = FONTS.kicker;
  ctx.fillStyle = C.muted;
  ctx.fillText("OVERALL SCORE", padX + 28, y + 52);
  ctx.font = FONTS.big;
  ctx.fillStyle = C.ink;
  ctx.fillText(result.overall.toFixed(1), padX + 28, y + 172);
  ctx.font = FONTS.small;
  ctx.fillStyle = C.muted;
  ctx.fillText("/ 10", padX + 28 + widthOf(result.overall.toFixed(1), FONTS.big) + 18, y + 172);

  drawCard(padX + overallW + 18, y, metricsW, scoreRowH, C.paper);
  const metrics = [
    ["Words", result.metrics.words ?? "—"],
    ["WPM", result.metrics.wpm ?? "—"],
    ["Fillers", result.metrics.fillerCount ?? "—"]
  ];
  const colW = metricsW / 3;
  metrics.forEach(([label, value], index) => {
    const cx = padX + overallW + 18 + index * colW;
    ctx.font = FONTS.kicker;
    ctx.fillStyle = C.muted;
    ctx.fillText(label.toUpperCase(), cx + 22, y + 58);
    ctx.font = FONTS.metric;
    ctx.fillStyle = C.ink;
    ctx.fillText(String(value), cx + 22, y + 150);
  });
  y += scoreRowH + 24;

  // Rubric
  drawCard(padX, y, contentW, rubricH, C.paper);
  ctx.font = FONTS.kicker;
  ctx.fillStyle = C.muted;
  ctx.fillText("RUBRIC", padX + 28, y + 36);
  rubricRows.forEach(([key, value], index) => {
    const ry = y + 52 + index * 52;
    ctx.font = FONTS.list;
    ctx.fillStyle = C.ink;
    ctx.fillText(labelFor(key), padX + 28, ry + 31);
    const barX = padX + 330;
    const barW = contentW - 330 - 120;
    ctx.fillStyle = C.soft;
    ctx.fillRect(barX, ry + 8, barW, 22);
    ctx.strokeStyle = C.ink;
    ctx.lineWidth = 2;
    ctx.strokeRect(barX, ry + 8, barW, 22);
    ctx.fillStyle = C.blue;
    ctx.fillRect(barX + 2, ry + 10, Math.max(0, (value / 10) * (barW - 4)), 18);
    ctx.font = FONTS.small;
    ctx.fillStyle = C.ink;
    ctx.fillText(value.toFixed(1), barX + barW + 16, ry + 30);
  });
  y += rubricH + 24;

  // Strengths / Improvements
  drawCard(padX, y, feedbackCardW, feedbackH, C.paper);
  ctx.font = FONTS.kicker;
  ctx.fillStyle = C.ink;
  ctx.fillText("STRENGTHS", padX + 28, y + 40);
  drawList(result.strengths, padX + 28, y + 70, feedbackCardW - 56, 36, FONTS.list);
  drawCard(padX + feedbackCardW + 18, y, feedbackCardW, feedbackH, C.paper);
  ctx.fillText("IMPROVE NEXT", padX + feedbackCardW + 18 + 28, y + 40);
  drawList(result.improvements, padX + feedbackCardW + 18 + 28, y + 70, feedbackCardW - 56, 36, FONTS.list);
  y += feedbackH + 24;

  // Advice
  drawCard(padX, y, contentW, adviceH, C.yellow);
  ctx.font = FONTS.kicker;
  ctx.fillStyle = C.ink;
  ctx.fillText("COACH'S ADVICE", padX + 28, y + 42);
  ctx.font = FONTS.body;
  adviceLines.forEach((line, index) => {
    ctx.fillText(line, padX + 28, y + 66 + 38 * (index + 1));
  });
  y += adviceH + 24;

  // Footer
  ctx.font = FONTS.small;
  ctx.fillStyle = C.muted;
  ctx.textAlign = "center";
  ctx.fillText("Generated with SpeakUp AI — practice impromptu speaking", W / 2, y + 40);

  return canvas;
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
el.customSeconds.addEventListener("change", () => generateChallenge());
el.customComplexity.addEventListener("change", () => generateChallenge());
el.themeToggle.addEventListener("click", toggleTheme);
el.mobileThemeToggle.addEventListener("click", toggleTheme);
if (el.closeModal) el.closeModal.addEventListener("click", hideResultModal);
if (el.exportPng) {
  el.exportPng.addEventListener("click", () => {
    if (state.activeModalResult) exportReportPng(state.activeModalResult);
  });
}
if (el.exportPdf) {
  el.exportPdf.addEventListener("click", () => {
    if (state.activeModalResult) printReport(state.activeModalResult);
  });
}
window.addEventListener("hashchange", showPageFromHash);
window.addEventListener("resize", scheduleFitChallengeText);

// Close modal if overlay is clicked
if (el.resultModal) {
  el.resultModal.addEventListener("click", (e) => {
    if (e.target === el.resultModal) hideResultModal();
  });
}

applyTheme(getPreferredTheme());
initSplashScreen();
// Preload the report logo so Print/PDF and PNG export have it cached and can
// render it instantly (no empty placeholder box in the PDF).
loadReportLogo();
generateChallenge();
showPageFromHash();
renderProgress();
renderHistory();

function initSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startedAt = performance.now();
  const minHold = reducedMotion ? 120 : 1700;
  let exited = false;

  const exitSplash = () => {
    if (exited) return;
    exited = true;
    // Start the app fade-in underneath while the splash scales up and fades out.
    document.body.classList.remove("splash-active");
    splash.classList.add("exit");
    const removeSplash = () => splash.remove();
    splash.addEventListener("transitionend", removeSplash, { once: true });
    // Safety net: never leave the splash stuck over the app.
    setTimeout(removeSplash, 1000);
  };

  const scheduleExit = () => {
    const wait = Math.max(0, minHold - (performance.now() - startedAt));
    setTimeout(exitSplash, wait);
  };

  // Tie the exit to actual load completion so the splash never cuts off on
  // slow connections, but still holds a minimum beat so it reads as designed.
  if (document.readyState === "complete") {
    scheduleExit();
  } else {
    window.addEventListener("load", scheduleExit);
  }

  // Hard fallback if the load event never fires (blocked resource, etc.).
  setTimeout(() => {
    if (!exited) exitSplash();
  }, 5000);
}
