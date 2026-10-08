const prompts = {
  word: {
    label: "Random word",
    Easy: [
      "Mirror", "Rain", "Coffee", "Window", "Bridge", "Music", "Ocean", "Lantern", "Candle", "Signal", "Storm", "Garden",
      "Paper", "Rocket", "Stone", "Puzzle", "Forest", "Ticket", "Market", "Compass"
    ],
    Medium: [
      "Freedom", "Momentum", "Failure", "Patience", "Identity", "Trust", "Leadership", "Adaptability", "Courage", "Balance",
      "Pressure", "Purpose", "Curiosity", "Conflict", "Clarity", "Discipline", "Resilience", "Creativity", "Focus", "Integrity"
    ],
    Hard: [
      "Disruption", "Legacy", "Contradiction", "Scarcity", "Influence", "Resilience", "Complexity", "Accountability", "Innovation",
      "Sustainability", "Ambiguity", "Authority", "Dignity", "Democracy", "Vulnerability", "Perspective", "Optimism", "Reputation", "Morality"
    ],
    Expert: [
      "Explain friendship, artificial intelligence, and street food in one speech.",
      "Connect silence, ambition, and public transport.",
      "Relate courage, algorithms, and a broken umbrella.",
      "Tie memory, leadership, and late-night trains together under one clear point.",
      "Describe how comfort, risk, and trust shape a good decision.",
      "Blend humor, discipline, and public trust into a short but memorable argument."
    ]
  },
  topic: {
    label: "Random topic",
    Easy: [
      "What makes a good friend?",
      "Should students have less homework?",
      "Is reading still important?",
      "Why do people enjoy music so much?",
      "Should schools teach life skills?",
      "Is it better to be early or on time?",
      "What makes a city feel welcoming?",
      "Why do some people become leaders naturally?",
      "Should everyone learn how to cook?",
      "Is travel more valuable than comfort?"
    ],
    Medium: [
      "Is social media beneficial?",
      "Is failure necessary for success?",
      "Should every student learn public speaking?",
      "Does technology make people more connected or more isolated?",
      "Should schools focus more on creativity than grades?",
      "Is ambition a strength or a burden?",
      "Should employers value personality over qualifications?",
      "What is the real cost of being constantly busy?",
      "Is it better to be known for one skill or many?",
      "Do people change more because of opportunity or pressure?"
    ],
    Hard: [
      "Should AI replace some classroom teaching?",
      "Does remote work help or hurt career growth?",
      "Is convenience making people less patient?",
      "Should governments regulate social platforms more strictly?",
      "Is productivity culture damaging long-term wellbeing?",
      "Do online communities create stronger belonging or weaker real-world ties?",
      "Should universities focus more on practical experience than theory?",
      "Is comfort reducing people’s willingness to take risks?",
      "Does economic growth matter more than environmental protection?",
      "Should public institutions be designed around efficiency or empathy?"
    ],
    Expert: [
      "Defend a policy you partly disagree with.",
      "Argue that boredom is useful in a hyperconnected world.",
      "Explain why a bad idea can still create good outcomes.",
      "Make the case that a society should value slower decisions over faster ones.",
      "Argue that discomfort is often a necessary ingredient for growth.",
      "Explain why a small, imperfect system can outperform a large, flawless one."
    ]
  },
  situation: {
    label: "Situation",
    Easy: [
      "Convince a friend to join you on a weekend trip.",
      "Explain a complicated concept to a child.",
      "Thank a teacher who helped you improve.",
      "Persuade someone to try a new coffee shop downtown.",
      "Explain why a quiet team member deserves more recognition.",
      "Ask a classmate to study with you before the test.",
      "Convince a friend to take a healthier lunch option.",
      "Explain how to handle a stressful group project calmly.",
      "Thank a teammate for helping you stay on track.",
      "Pitch the idea of a small community event to a friend."
    ],
    Medium: [
      "Persuade a customer to choose your product.",
      "Apologize for missing an important deadline.",
      "Ask your manager for feedback on your work.",
      "Convince a skeptical customer to trust a new brand.",
      "Explain a team mistake without blaming anyone.",
      "Ask for a second chance after a weak presentation.",
      "Negotiate a fair split of responsibilities in a project.",
      "Pitch a solution that saves time without reducing quality.",
      "Explain a delayed launch without sounding defensive.",
      "Defend a decision that was unpopular but necessary."
    ],
    Hard: [
      "Negotiate a raise while staying professional.",
      "Calm down a frustrated client during a live issue.",
      "Explain a project delay to senior leaders.",
      "Handle a team conflict while still protecting the deadline.",
      "Ask for a major resource change without sounding demanding.",
      "Recover trust after a public mistake with a clear plan.",
      "Present a difficult truth to a decision-maker who wants optimism.",
      "Reframe a failed experiment as a learning opportunity.",
      "Explain a budget issue without damaging morale.",
      "Turn a tense stakeholder meeting into a constructive plan."
    ],
    Expert: [
      "Pitch an impossible idea to a skeptical investor.",
      "Defend a mistake while taking accountability.",
      "Turn a hostile question into a constructive discussion.",
      "Calm a room after a public disagreement and redirect it toward the goal.",
      "Explain a strategic pivot that will disappoint some staff but protect the company.",
      "Convince a resistant board to back an unpopular but necessary change."
    ]
  },
  debate: {
    label: "Debate",
    Easy: [
      "School uniforms should be required. Argue for it.",
      "Video games can teach useful skills. Argue for it.",
      "Every city needs more parks. Argue for it.",
      "Students should start school later. Argue for it.",
      "Reading books is more valuable than watching videos. Argue for it.",
      "Remote learning should be the default. Argue for it.",
      "Part-time jobs help students grow. Argue for it.",
      "School lunches should be free for everyone. Argue for it.",
      "People should take more public transport. Argue for it.",
      "Every workplace should have team sports. Argue for it."
    ],
    Medium: [
      "AI will create more jobs than it destroys. Argue against it.",
      "Public exams should be replaced with projects. Argue for it.",
      "Influencers should disclose all sponsored content. Argue for it.",
      "Students should have more homework. Argue for it.",
      "The internet has made people less creative. Argue for it.",
      "A four-day workweek would benefit productivity. Argue for it.",
      "People should spend less time on social media. Argue for it.",
      "The best leaders are introverts. Argue for it.",
      "Books are more useful than podcasts. Argue for it.",
      "Young people should be more optimistic about society. Argue for it."
    ],
    Hard: [
      "Companies should use four-day workweeks. Argue against it.",
      "Universities should prioritize skills over degrees. Argue for it.",
      "Privacy is more important than personalization. Argue against it.",
      "Governments should ban short-form video apps. Argue for it.",
      "A company should prioritize culture over profit. Argue for it.",
      "Education should focus more on failure than success. Argue for it.",
      "People depend too much on convenience. Argue against it.",
      "The most important quality in leadership is empathy. Argue for it.",
      "Artificial intelligence should be regulated before widespread adoption. Argue for it.",
      "A strict schedule is more valuable than freedom. Argue for it."
    ],
    Expert: [
      "Defend the weaker side of a debate about AI in hiring.",
      "Argue against your own favorite technology.",
      "Make a persuasive case for a deeply unpopular but ethical decision.",
      "Take the side most people reject and still make it sound practical.",
      "Defend a policy that helps society but hurts a specific group in the short term.",
      "Persuade an audience that comfort is often the real enemy of progress."
    ]
  },
  interview: {
    label: "Interview",
    Easy: [
      "Tell me about yourself.",
      "Why should we hire you?",
      "What is one strength you are proud of?",
      "What motivates you at work?",
      "What kind of environment helps you perform best?",
      "Why do you want this role?",
      "What is a project you are proud of?",
      "How do you handle stress?",
      "What do you value in a team?",
      "What is one thing you want to improve?"
    ],
    Medium: [
      "Tell me about a time you failed.",
      "Describe a conflict you handled well.",
      "What is your biggest weakness?",
      "Describe a difficult decision you made at work.",
      "Tell me about a time you had to adapt quickly.",
      "What is a mistake you learned from?",
      "How do you handle feedback you disagree with?",
      "Describe a time you solved a problem creatively.",
      "Why should we trust you with this role?",
      "What makes you different from other candidates?"
    ],
    Hard: [
      "Tell me about a time you influenced without authority.",
      "Describe a high-pressure decision with incomplete information.",
      "Why are you leaving your current role?",
      "Explain a time when you had to say no to a priority.",
      "Describe a project that went wrong and how you fixed it.",
      "How do you handle being the least experienced person in the room?",
      "Tell me about a time you had to manage a difficult stakeholder.",
      "What is the hardest feedback you ever received?",
      "Describe a leadership moment that did not go as planned.",
      "Why are you a strong fit for a role that needs ambiguity tolerance?"
    ],
    Expert: [
      "Explain a career gap or setback with confidence.",
      "Answer a skeptical interviewer who doubts your experience.",
      "Pitch yourself for a role that is slightly above your current level.",
      "Explain a period of low performance and how you changed.",
      "Answer a question about your greatest weakness without sounding rehearsed.",
      "Describe how you handle competing priorities when everything feels urgent."
    ]
  },
  followup: {
    label: "Follow-up",
    Easy: [
      "Start with: My favorite skill is communication. Then answer a follow-up.",
      "Explain why practice matters. Then answer a follow-up.",
      "Describe your ideal team. Then answer a follow-up.",
      "Talk about a skill you want to improve. Then answer a follow-up.",
      "Share your favorite way to learn something new. Then answer a follow-up.",
      "What does good leadership look like? Then answer a follow-up.",
      "Talk about the best advice you have received. Then answer a follow-up.",
      "Describe your ideal workday. Then answer a follow-up.",
      "Explain a habit that helps you stay productive. Then answer a follow-up.",
      "Describe a challenge you overcame. Then answer a follow-up."
    ],
    Medium: [
      "Defend your opinion on social media. Then answer a follow-up.",
      "Explain a personal learning mistake. Then answer a follow-up.",
      "Pitch a simple product. Then answer a follow-up.",
      "Give your view on why some teams fail. Then answer a follow-up.",
      "Explain your approach to difficult conversations. Then answer a follow-up.",
      "Talk about the value of failure in a career. Then answer a follow-up.",
      "Describe a time you had to build trust quickly. Then answer a follow-up.",
      "Choose a skill worth learning at any age. Then answer a follow-up.",
      "Argue for a practical policy in school or work. Then answer a follow-up.",
      "Explain a small habit that leads to better results. Then answer a follow-up."
    ],
    Hard: [
      "Answer an interview question, then handle one challenging follow-up.",
      "Argue for a controversial idea, then respond to a rebuttal.",
      "Explain a complex concept, then simplify it further.",
      "Take a strong opinion and respond to a direct challenge without losing structure.",
      "Answer a question with a clear stance, then defend it under pressure.",
      "Talk about a difficult choice, then handle a follow-up that tests your reasoning.",
      "Explain a failure, then answer a question about what you would do differently now.",
      "Give a measured answer, then adapt when the follow-up pushes against it.",
      "Defend a decision that benefited the group but hurt your personal preference.",
      "Turn a vague opinion into a precise argument under follow-up pressure."
    ],
    Expert: [
      "Take a position, switch sides halfway, and answer a follow-up.",
      "Connect three unrelated ideas, then clarify the weakest link.",
      "Give a concise answer, then expand only when challenged.",
      "Answer a broad question with specificity, then handle a follow-up on trade-offs.",
      "Present a strong thesis, rethink it under pressure, and recover without stalling.",
      "Respond to a challenge by reframing the question and strengthening your original point."
    ]
  }
};

const STORAGE_KEY = "speakup-history";
const THEME_KEY = "speakup-theme";
const PREP_SECONDS = 10;
const PREP_RING = 2 * Math.PI * 52;
const FLOW_PAGES = new Set(["tumbler", "prepare", "speaking", "processing"]);
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
  prepId: null,
  tumblerFrame: null,
  transcribeProgressId: null,
  startedAt: null,
  remaining: 60,
  history: loadHistory(),
  activeResult: null
};

const el = {
  pages: document.querySelectorAll("[data-page]"),
  pageLinks: document.querySelectorAll("[data-page-link]"),
  mode: document.querySelector("#mode"),
  difficulty: document.querySelector("#difficulty"),
  duration: document.querySelector("#duration"),
  durationGroup: document.querySelector("#durationGroup"),
  customTimerGroup: document.querySelector("#customTimerGroup"),
  customComplexityGroup: document.querySelector("#customComplexityGroup"),
  customSeconds: document.querySelector("#customSeconds"),
  customComplexity: document.querySelector("#customComplexity"),
  startSession: document.querySelector("#startSession"),
  setup: document.querySelector("#setup"),
  tumblerTrack: document.querySelector("#tumblerTrack"),
  tumblerHint: document.querySelector("#tumblerHint"),
  prepTopic: document.querySelector("#prepTopic"),
  prepCount: document.querySelector("#prepCount"),
  prepBar: document.querySelector("#prepBar"),
  prepRing: document.querySelector("#prepRing"),
  speakTopic: document.querySelector("#speakTopic"),
  stopRecording: document.querySelector("#stopRecording"),
  transcript: document.querySelector("#transcript"),
  evaluate: document.querySelector("#evaluate"),
  timer: document.querySelector("#timer"),
  recordingState: document.querySelector("#recordingState"),
  waveform: document.querySelector("#waveform"),
  processingTitle: document.querySelector("#processingTitle"),
  processingHeadline: document.querySelector("#processingHeadline"),
  transcribeProgress: document.querySelector("#transcribeProgress"),
  transcribeProgressLabel: document.querySelector("#transcribeProgressLabel"),
  transcribeMeter: document.querySelector("#transcribeMeter"),
  transcribeMeterFill: document.querySelector("#transcribeMeterFill"),
  overallScore: document.querySelector("#overallScore"),
  scoreSummary: document.querySelector("#scoreSummary"),
  rubricGrid: document.querySelector("#rubricGrid"),
  strengths: document.querySelector("#strengths"),
  improvements: document.querySelector("#improvements"),
  retryAdvice: document.querySelector("#retryAdvice"),
  resultKind: document.querySelector("#resultKind"),
  resultTopic: document.querySelector("#resultTopic"),
  resultDifficulty: document.querySelector("#resultDifficulty"),
  resultSection: document.querySelector("#resultSection"),
  resultDuration: document.querySelector("#resultDuration"),
  resultDate: document.querySelector("#resultDate"),
  resultTranscript: document.querySelector("#resultTranscript"),
  totalSpeeches: document.querySelector("#totalSpeeches"),
  bestScore: document.querySelector("#bestScore"),
  totalTime: document.querySelector("#totalTime"),
  avgPace: document.querySelector("#avgPace"),
  coachHeadline: document.querySelector("#coachHeadline"),
  coachBody: document.querySelector("#coachBody"),
  coachChallenge: document.querySelector("#coachChallenge"),
  clearHistory: document.querySelector("#clearHistory"),
  historyList: document.querySelector("#historyList"),
  trends: document.querySelector("#trendGrid"),
  themeToggle: document.querySelector("#themeToggle"),
  exportPdf: document.querySelector("#exportPdf"),
  printSheet: document.querySelector("#printSheet"),
  practiceAgain: document.querySelector("#practiceAgain"),
  viewHistory: document.querySelector("#viewHistory")
};

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function syncCustomControls() {
  const custom = isCustomDifficulty();
  if (el.durationGroup) el.durationGroup.hidden = custom;
  if (el.customTimerGroup) el.customTimerGroup.hidden = !custom;
  if (el.customComplexityGroup) el.customComplexityGroup.hidden = !custom;
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

function setupReady() {
  return Boolean(el.mode.value && el.difficulty.value && (isCustomDifficulty() || el.duration.value));
}

function syncStartButton() {
  syncCustomControls();
  el.startSession.disabled = !setupReady();
}

function selectChoice(selector, attr, value) {
  document.querySelectorAll(selector).forEach((button) => {
    button.setAttribute("aria-checked", String(button.getAttribute(attr) === String(value)));
  });
}

function setDifficulty(value) {
  el.difficulty.value = value;
  selectChoice("[data-difficulty]", "data-difficulty", value);
  syncStartButton();
}

function setMode(value) {
  el.mode.value = value;
  selectChoice("[data-mode]", "data-mode", value);
  syncStartButton();
}

function setDuration(value) {
  el.duration.value = String(value);
  selectChoice("[data-duration]", "data-duration", String(value));
  syncStartButton();
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
  el.timer.textContent = formatTime(duration);
  setTopicDisplays(text);
  syncCustomControls();
}

function setTopicDisplays(text) {
  if (el.prepTopic) el.prepTopic.textContent = text;
  if (el.speakTopic) el.speakTopic.textContent = text;
}

function formatTime(seconds) {
  const min = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  return `${min}:${sec}`;
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

async function primeMicrophone() {
  if (state.mediaStream) return true;
  try {
    state.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return true;
  } catch {
    state.mediaStream = null;
    return false;
  }
}

function releaseMicrophone() {
  if (state.isRecording) return;
  if (state.mediaStream) {
    state.mediaStream.getTracks().forEach((track) => track.stop());
    state.mediaStream = null;
  }
}

async function beginSession() {
  if (!setupReady()) return;
  generateChallenge();
  const micReady = await primeMicrophone();
  if (!micReady) {
    window.alert("Microphone access is needed to practice. Allow the mic, then press Start again.");
    return;
  }

  let started = false;
  const go = () => {
    if (started) return;
    started = true;
    getSfxContext();
    el.setup.classList.remove("is-leaving");
    showPage("tumbler");
    runTumbler();
  };

  if (reducedMotion()) {
    go();
    return;
  }

  el.setup.classList.add("is-leaving");
  const finish = () => {
    el.setup.removeEventListener("animationend", finish);
    go();
  };
  el.setup.addEventListener("animationend", finish);
  window.setTimeout(finish, 500);
}

// ==========================================
// Web Audio API Sound Effects
// ==========================================
let sfxAudioCtx = null;

function getSfxContext() {
  try {
    if (!sfxAudioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        sfxAudioCtx = new AudioCtx();
      }
    }
    if (sfxAudioCtx && sfxAudioCtx.state === "suspended") {
      sfxAudioCtx.resume().catch(() => {});
    }
    return sfxAudioCtx;
  } catch {
    return null;
  }
}

// 1. Tumbler rolling sound: realistic ratchet/slot-wheel mechanical clicks that decelerate smoothly
function playTumblerRollSound(durationMs = 4000) {
  const ctx = getSfxContext();
  if (!ctx) return;

  try {
    const startTime = ctx.currentTime;
    const durationSec = durationMs / 1000;
    const endTime = startTime + durationSec;

    let when = startTime;
    let step = 0.055; // 55ms rapid start

    while (when < endTime - 0.15) {
      const progress = (when - startTime) / durationSec;
      scheduleMechanicalClick(ctx, when, progress, false);
      // Decelerate naturally like a spinning mechanical wheel
      step = 0.055 + Math.pow(progress, 2.8) * 0.42;
      when += step;
    }

    // Final satisfying latch lock click right when stopping
    scheduleMechanicalClick(ctx, endTime - 0.08, 1, true);
  } catch {}
}

function scheduleMechanicalClick(ctx, when, progress, isFinal) {
  try {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    filter.type = "bandpass";
    filter.frequency.setValueAtTime(isFinal ? 850 : 1250 - progress * 450, when);
    filter.Q.setValueAtTime(isFinal ? 4 : 2, when);

    osc.type = isFinal ? "triangle" : "sine";
    osc.frequency.setValueAtTime(isFinal ? 200 : 360 - progress * 160, when);
    osc.frequency.exponentialRampToValueAtTime(70, when + (isFinal ? 0.045 : 0.018));

    const vol = isFinal ? 0.38 : Math.max(0.08, 0.24 * (1 - progress * 0.45));
    gain.gain.setValueAtTime(vol, when);
    gain.gain.exponentialRampToValueAtTime(0.001, when + (isFinal ? 0.055 : 0.022));

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(when);
    osc.stop(when + (isFinal ? 0.06 : 0.025));
  } catch {}
}

// 2. Stopwatch countdown timer sound:
// For 10 down to 4: crisp woodblock / digital stopwatch tick
// For 3, 2, 1: urgent warning countdown beep
function playCountdownTick(isLow = false) {
  const ctx = getSfxContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    if (isLow) {
      // High-pitched warning countdown beep (for 3, 2, 1)
      osc.type = "sine";
      osc.frequency.setValueAtTime(1250, now);
      gain.gain.setValueAtTime(0.28, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.13);
    } else {
      // Crisp stopwatch click / tick (for 10 down to 4)
      osc.type = "sine";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(240, now + 0.032);
      gain.gain.setValueAtTime(0.18, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.038);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + 0.042);
    }
  } catch {}
}

// 3. Start speaking sound effect: "TING!" boxing bell / resonant chime buzzer
function playStartChime() {
  const ctx = getSfxContext();
  if (!ctx) return;

  try {
    const now = ctx.currentTime;
    // Layered resonant bell harmonics for a crisp, punchy "TING!"
    const frequencies = [1046.5, 2093.0, 3135.9]; // C6 + octave + 5th overtone
    const volumes = [0.42, 0.26, 0.14];
    const decays = [1.25, 0.85, 0.45];

    frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = idx === 0 ? "sine" : "triangle";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(volumes[idx], now + 0.004);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + decays[idx]);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(now);
      osc.stop(now + decays[idx] + 0.05);
    });
  } catch {}
}

// ==========================================
// Tumbler & Prep Flow
// ==========================================
function runTumbler() {
  if (state.tumblerFrame) cancelAnimationFrame(state.tumblerFrame);
  const challenge = state.challenge;
  const pool = [...prompts[challenge.mode][effectiveDifficulty()]];
  const winner = challenge.text;
  const others = pool.filter((item) => item !== winner);

  const N = 30;
  const reel = [];
  for (let i = 0; i < N - 2; i += 1) {
    reel.push(others.length ? others[i % others.length] : winner);
  }
  const winIdx = N - 2;
  reel.push(winner);
  reel.push(others.length ? others[0] : winner);

  el.tumblerTrack.style.transition = "none";
  el.tumblerTrack.style.transform = "translateY(0)";
  el.tumblerTrack.innerHTML = reel
    .map((item, idx) => `<div class="item" id="reelItem${idx}">${escapeHtml(item)}</div>`)
    .join("");
  el.tumblerHint.textContent = "Spinning a prompt…";

  // Force layout to calculate exact row height
  void el.tumblerTrack.offsetWidth;
  const firstItem = el.tumblerTrack.querySelector(".item");
  const rowHeight = firstItem ? firstItem.offsetHeight : 78;
  const target = -(winIdx - 1) * rowHeight;

  // Play tumbler rolling mechanical sound effect
  playTumblerRollSound(4000);

  if (reducedMotion()) {
    el.tumblerTrack.style.transform = `translateY(${target}px)`;
    const winItem = document.getElementById(`reelItem${winIdx}`);
    if (winItem) winItem.classList.add("win");
    el.tumblerHint.textContent = "Your topic";
    window.setTimeout(startPrepare, 600);
    return;
  }

  // Smooth slot-machine reel spin with cubic-bezier over 4s
  el.tumblerTrack.style.transition = "transform 4s cubic-bezier(.12, .72, .14, 1)";
  el.tumblerTrack.style.transform = `translateY(${target}px)`;

  window.setTimeout(() => {
    const winItem = document.getElementById(`reelItem${winIdx}`);
    if (winItem) winItem.classList.add("win");
    el.tumblerHint.textContent = "Your topic";
  }, 3900);

  window.setTimeout(() => {
    startPrepare();
  }, 5000);
}

function startPrepare() {
  showPage("prepare");
  setTopicDisplays(state.challenge.text);
  let remaining = PREP_SECONDS;
  el.prepCount.textContent = String(remaining);
  el.prepCount.classList.remove("low");

  if (el.prepBar) {
    el.prepBar.style.transition = "none";
    el.prepBar.style.transform = "scaleX(1)";
    void el.prepBar.offsetWidth;
    el.prepBar.style.transition = `transform ${PREP_SECONDS}s linear`;
    el.prepBar.style.transform = "scaleX(0)";
  }

  // Initial countdown tick sound
  playCountdownTick(false);

  clearInterval(state.prepId);
  state.prepId = setInterval(() => {
    remaining -= 1;
    el.prepCount.textContent = String(Math.max(remaining, 0));
    if (remaining <= 3) {
      el.prepCount.classList.add("low");
    } else {
      el.prepCount.classList.remove("low");
    }

    if (remaining > 0) {
      playCountdownTick(remaining <= 3);
    } else {
      clearInterval(state.prepId);
      // Play the "TING!" start bell buzzer chime sound
      playStartChime();
      beginSpeaking();
    }
  }, 1000);
}

async function beginSpeaking() {
  showPage("speaking");
  setTopicDisplays(state.challenge.text);
  await startRecording();
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

  startTimer();

  try {
    if (!state.mediaStream) {
      state.mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
    startWaveform(state.mediaStream);
    startSpeechRecognition();

    const mimeType = pickRecorderMimeType();
    state.recorder = mimeType
      ? new MediaRecorder(state.mediaStream, { mimeType })
      : new MediaRecorder(state.mediaStream);

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
    state.recorder.start(1000);
  } catch (error) {
    state.isRecording = false;
    stopWaveform();
    appendNotice("Microphone access was blocked. You can still type or paste a transcript.");
    stopRecording(true);
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
  if (!AudioContextClass || !el.waveform) return;

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
    : el.waveform
      ? [...el.waveform.querySelectorAll("span")]
      : [];
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
    if (autoEvaluate) showProcessing("Transcribing", "Inking transcript…");
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
  if (el.stopRecording) el.stopRecording.disabled = !isRecording;
  if (el.startSession) el.startSession.disabled = isRecording || !setupReady();
  el.recordingState.textContent = isRecording ? "On air" : "Ready";
  el.recordingState.classList.toggle("recording", isRecording);
  if (el.waveform) el.waveform.classList.toggle("is-live", isRecording);
}

function appendNotice(message) {
  const current = el.transcript.value.trim();
  el.transcript.value = current ? `${current}\n\n[${message}]` : `[${message}]`;
}

function showProcessing(title, headline) {
  showPage("processing");
  if (el.processingTitle) el.processingTitle.textContent = title;
  if (el.processingHeadline) el.processingHeadline.textContent = headline;
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
  showProcessing("Transcribing", "Inking transcript…");
  if (el.scoreSummary) el.scoreSummary.textContent = "Inking your speech bubbles… hold for the reveal!";
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
          el.transcript.value = previewTranscript;
          if (el.scoreSummary) {
            el.scoreSummary.textContent = "Using the browser's speech-recognition transcript. Add GEMINI_API_KEY or OPENAI_API_KEY to .env for higher-accuracy cloud transcription.";
          }
        } else {
          el.transcript.value = "";
          if (el.scoreSummary) {
            el.scoreSummary.textContent = "No speech was recognized. The browser's speech service captured nothing — add GEMINI_API_KEY or OPENAI_API_KEY to .env for cloud transcription, or record in Chrome/Edge with the microphone allowed.";
          }
        }
      } else {
        if (el.scoreSummary) el.scoreSummary.textContent = result.error || "Transcription failed.";
        el.transcript.value = previewTranscript || `[${result.error || "Transcription failed."}]`;
      }
    } else {
      const text = (result.text || "").trim();
      el.transcript.value = text || previewTranscript || "[Transcription returned an empty transcript. Try speaking a bit louder or longer.]";
      if (el.scoreSummary) {
        el.scoreSummary.textContent = text
          ? "Transcript unlocked! Scoring your speech."
          : "Transcription shrugged — empty transcript. Try louder or longer.";
      }
    }
  } catch (error) {
    if (el.scoreSummary) el.scoreSummary.textContent = "Could not reach the transcription service. Is the server running?";
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
  if (el.evaluate) el.evaluate.disabled = true;

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
      el.transcribeProgress.setAttribute("aria-busy", "false");
      el.transcribeMeterFill.style.width = "0%";
      el.transcribeMeter.setAttribute("aria-valuenow", "0");
      if (el.evaluate) el.evaluate.disabled = false;
    }, 320);
  } else {
    el.transcribeProgress.setAttribute("aria-busy", "false");
    el.transcribeMeterFill.style.width = "0%";
    el.transcribeMeter.setAttribute("aria-valuenow", "0");
    if (el.evaluate) el.evaluate.disabled = false;
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
    if (el.scoreSummary) el.scoreSummary.textContent = "Add a transcript first so the coach has something to evaluate.";
    showPage("setup");
    return;
  }

  const duration = state.startedAt
    ? Math.max(1, Math.round((Date.now() - state.startedAt) / 1000))
    : state.challenge?.duration || 60;

  showProcessing("Scoring", "Coach is scoring your transcript...");
  if (el.scoreSummary) el.scoreSummary.textContent = "Coach is scoring your transcript...";
  if (el.evaluate) el.evaluate.disabled = true;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 40000);
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
    renderProgress();
    renderHistory();
    renderResult(finalResult);
    showPage("results");
  } catch (error) {
    const message = error.name === "AbortError"
      ? "API analysis timed out. Used local scoring instead."
      : "API analysis unavailable. Used local scoring instead.";
    completeLocalEvaluation(transcript, duration, message);
  } finally {
    if (el.evaluate) el.evaluate.disabled = false;
  }
}

function completeLocalEvaluation(transcript, duration, message) {
  const localResult = evaluateTranscript(transcript, duration, state.challenge);
  localResult.provider = "local";
  saveAttempt(localResult);
  renderProgress();
  renderHistory();
  renderResult(localResult);
  if (el.scoreSummary) {
    el.scoreSummary.textContent = `${el.scoreSummary.textContent} ${message}`.trim();
  }
  showPage("results");
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
  state.activeResult = result;
  const challenge = result.challenge || {};
  el.overallScore.textContent = result.overall.toFixed(1);
  const wordsCount = result.metrics.words;
  const wpmValue = result.metrics.wpm;
  const fillersValue = result.metrics.fillerCount !== undefined ? result.metrics.fillerCount : "calculated";
  const source = result.provider ? ` Source: ${labelForProvider(result.provider)}.` : "";
  el.scoreSummary.textContent = `${wordsCount} words, ${wpmValue} WPM, ${fillersValue} filler words.${source}`;
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
  if (el.resultKind) el.resultKind.textContent = challenge.label || "Report";
  if (el.resultTopic) el.resultTopic.textContent = challenge.text || "—";
  if (el.resultDifficulty) el.resultDifficulty.textContent = challenge.difficulty || "";
  if (el.resultSection) el.resultSection.textContent = challenge.label || "";
  if (el.resultDuration) el.resultDuration.textContent = `${challenge.duration || result.metrics.duration} seconds`;
  if (el.resultDate) el.resultDate.textContent = new Date(result.date).toLocaleString();
  if (el.resultTranscript) el.resultTranscript.textContent = result.transcript || "No transcript saved.";
  updateCoach(result);
}

function renderList(target, items) {
  if (!target) return;
  target.innerHTML = (items || []).map((item) => `<li>${escapeHtml(item)}</li>`).join("");
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
    if (el.totalSpeeches) el.totalSpeeches.textContent = "0";
    if (el.bestScore) el.bestScore.textContent = "--";
    if (el.totalTime) el.totalTime.textContent = "0m";
    if (el.avgPace) el.avgPace.textContent = "--";
    return;
  }

  const best = Math.max(...attempts.map((item) => item.overall));
  const totalSeconds = attempts.reduce((sum, item) => sum + (item.metrics.duration || 0), 0);
  const validWpms = attempts.map((item) => item.metrics.wpm || 0).filter(Boolean);
  const avgPace = validWpms.length ? Math.round(validWpms.reduce((sum, v) => sum + v, 0) / validWpms.length) : "--";

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

function renderTrends() {
  const container = el.trends;
  if (!container) return;

  const attempts = [...state.history].reverse();
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

async function printReport(result) {
  if (!el.printSheet) return;
  el.printSheet.innerHTML = buildPrintMarkup(result);
  await loadReportLogo();
  const imgs = Array.from(el.printSheet.querySelectorAll("img"));
  await Promise.all(imgs.map(waitForImage));
  document.body.classList.add("print-report");
  const cleanup = () => document.body.classList.remove("print-report");
  window.addEventListener("afterprint", cleanup, { once: true });
  window.setTimeout(cleanup, 2000);
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
      <div class="print-brand">
        <img class="print-logo" src="${state.reportLogoDataUrl || "./logo.png"}" alt="SpeakUp AI logo">
        <div class="print-brand-copy">
          <p class="print-kicker">SpeakUp AI</p>
          <h1>Speech Report</h1>
        </div>
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

function renderHistory() {
  if (!state.history.length) {
    el.historyList.innerHTML = "<p>Empty archive — your first issue drops here after you speak.</p>";
    return;
  }

  el.historyList.innerHTML = state.history.map((item) => `
    <article class="history-item" data-history-id="${item.id}" tabindex="0" role="button">
      <div>
        <strong>${escapeHtml(item.challenge.label)}: ${escapeHtml(item.challenge.text)}</strong>
        <span>${new Date(item.date).toLocaleString()} - ${item.metrics.words} words - ${labelForProvider(item.provider || "local")}</span>
      </div>
      <strong>${item.overall.toFixed(1)}/10</strong>
    </article>
  `).join("");

  el.historyList.querySelectorAll(".history-item").forEach((element) => {
    const open = () => {
      const historyId = element.getAttribute("data-history-id");
      const matched = state.history.find((item) => item.id === historyId);
      if (matched) {
        renderResult(matched);
        showPage("results");
      }
    };
    element.addEventListener("click", open);
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        open();
      }
    });
  });
}

function updateCoach(result) {
  if (!el.coachHeadline || !el.coachBody) return;
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

async function focusedPrompt() {
  const latest = state.history[0];
  if (!latest) {
    setMode("topic");
    setDifficulty("Medium");
    if (!el.duration.value) setDuration("60");
  } else {
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
    setMode(mode);
    setDifficulty(difficulty);
    if (!el.duration.value) setDuration("60");
  }
  generateChallenge(el.mode.value, effectiveDifficulty());
  await primeMicrophone();
  showPage("tumbler");
  runTumbler();
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
}

function toggleTheme() {
  const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

function abortFlow() {
  clearInterval(state.prepId);
  if (state.tumblerFrame) cancelAnimationFrame(state.tumblerFrame);
  if (state.isRecording) stopRecording(false);
  else releaseMicrophone();
}

function showPage(pageName) {
  const aliases = { practice: "setup" };
  const requested = aliases[pageName] || pageName;
  const known = ["setup", "tumbler", "prepare", "speaking", "processing", "results", "progress", "history"];
  const safePage = known.includes(requested) ? requested : "setup";

  if (!FLOW_PAGES.has(safePage)) abortFlow();

  document.body.classList.toggle("flow-active", FLOW_PAGES.has(safePage));
  el.setup?.classList.remove("is-leaving");

  el.pages.forEach((page) => {
    page.classList.toggle("active", page.dataset.page === safePage);
  });

  el.pageLinks.forEach((link) => {
    const isActive = link.dataset.pageLink === "setup"
      ? safePage === "setup" || safePage === "results"
      : link.dataset.pageLink === safePage;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });

  document.querySelectorAll(".menu-more").forEach((node) => {
    node.removeAttribute("open");
  });

  const hashPage = FLOW_PAGES.has(safePage) ? "setup" : safePage;
  if (location.hash !== `#${hashPage}`) {
    history.replaceState(null, "", `#${hashPage}`);
  }

  if (safePage === "results" || safePage === "history" || safePage === "progress") {
    window.scrollTo(0, 0);
  }
}

function showPageFromHash() {
  const name = location.hash.replace("#", "") || "setup";
  if (name === "results" && !state.activeResult && !state.history[0]) {
    showPage("setup");
    return;
  }
  if (name === "results" && !state.activeResult && state.history[0]) {
    renderResult(state.history[0]);
  }
  showPage(name);
}

function bindChoiceGroup(selector, onPick) {
  const buttons = [...document.querySelectorAll(selector)];
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => onPick(button));
    button.addEventListener("keydown", (event) => {
      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1;
      const next = buttons[(index + delta + buttons.length) % buttons.length];
      next.focus();
      onPick(next);
    });
  });
}

bindChoiceGroup("[data-difficulty]", (button) => setDifficulty(button.dataset.difficulty));
bindChoiceGroup("[data-mode]", (button) => setMode(button.dataset.mode));
bindChoiceGroup("[data-duration]", (button) => setDuration(button.dataset.duration));

el.startSession.addEventListener("click", beginSession);
el.stopRecording.addEventListener("click", () => stopRecording(true));
el.evaluate.addEventListener("click", evaluateCurrentSpeech);
el.coachChallenge.addEventListener("click", focusedPrompt);
el.clearHistory.addEventListener("click", clearHistory);
el.customSeconds.addEventListener("change", syncStartButton);
el.customComplexity.addEventListener("change", syncStartButton);
el.themeToggle.addEventListener("click", toggleTheme);
el.exportPdf.addEventListener("click", () => {
  if (state.activeResult) printReport(state.activeResult);
});
el.practiceAgain.addEventListener("click", () => showPage("setup"));
el.viewHistory.addEventListener("click", () => showPage("history"));
window.addEventListener("hashchange", showPageFromHash);

applyTheme(getPreferredTheme());
initSplashScreen();
loadReportLogo();
syncStartButton();
showPageFromHash();
renderProgress();
renderHistory();

function initSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  const motionReduced = reducedMotion();
  const startedAt = performance.now();
  const minHold = motionReduced ? 120 : 1700;
  let exited = false;

  const exitSplash = () => {
    if (exited) return;
    exited = true;
    document.body.classList.remove("splash-active");
    splash.classList.add("exit");
    const removeSplash = () => splash.remove();
    splash.addEventListener("transitionend", removeSplash, { once: true });
    setTimeout(removeSplash, 1000);
  };

  const scheduleExit = () => {
    const wait = Math.max(0, minHold - (performance.now() - startedAt));
    setTimeout(exitSplash, wait);
  };

  if (document.readyState === "complete") {
    scheduleExit();
  } else {
    window.addEventListener("load", scheduleExit);
  }

  setTimeout(() => {
    if (!exited) exitSplash();
  }, 5000);
}
