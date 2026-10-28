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
const INTERVIEW_DRAFT_KEY = "speakup-interview-draft";
const PROFILE_STORAGE_KEY = "speakup-profile-v1";
const PROFILE_DEFAULTS = {
  name: "", handle: "", weeklyGoal: 3,
  mascot: {
    version: 5, style: "croodles-neutral", doodle: 0
  }
};
const MASCOT_DEFAULTS = PROFILE_DEFAULTS.mascot;
const PREP_SECONDS = 10;
const PREP_RING = 2 * Math.PI * 52;
const FLOW_PAGES = new Set(["tumbler", "prepare", "speaking", "processing", "interviewAnalyzing", "interviewRoom"]);
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
  profile: loadProfile(),
  activeResult: null,
  interview: null
};

const el = {
  pages: document.querySelectorAll("[data-page]"),
  pageLinks: document.querySelectorAll("[data-page-link]"),
  mode: document.querySelector("#mode"),
  difficulty: document.querySelector("#difficulty"),
  duration: document.querySelector("#duration"),
  startSession: document.querySelector("#startSession"),
  setup: document.querySelector("#setup"),
  interviewRoom: document.querySelector("#interviewRoom"),
  resumeFile: document.querySelector("#resumeFile"),
  resumeFileName: document.querySelector("#resumeFileName"),
  interviewPosition: document.querySelector("#interviewPosition"),
  interviewType: document.querySelector("#interviewType"),
  interviewExperience: document.querySelector("#interviewExperience"),
  interviewDifficulty: document.querySelector("#interviewDifficulty"),
  interviewDuration: document.querySelector("#interviewDuration"),
  startInterview: document.querySelector("#startInterview"),
  resumeInterviewDraft: document.querySelector("#resumeInterviewDraft"),
  interviewFormError: document.querySelector("#interviewFormError"),
  startAnswer: document.querySelector("#startAnswer"),
  endAnswer: document.querySelector("#endAnswer"),
  retryAnswer: document.querySelector("#retryAnswer"),
  submitAnswer: document.querySelector("#submitAnswer"),
  skipQuestion: document.querySelector("#skipQuestion"),
  retryInterviewRequest: document.querySelector("#retryInterviewRequest"),
  returnToInterviewSetup: document.querySelector("#returnToInterviewSetup"),
  roomQuestion: document.querySelector("#roomQuestion"),
  roomStateLabel: document.querySelector("#roomStateLabel"),
  roomStateDot: document.querySelector("#roomStateDot"),
  roomProgress: document.querySelector("#roomProgress"),
  roomElapsed: document.querySelector("#roomElapsed"),
  roomQuestionNumber: document.querySelector("#roomQuestionNumber"),
  roomProgressSteps: document.querySelector("#roomProgressSteps"),
  roomQuestionCategory: document.querySelector("#roomQuestionCategory"),
  roomQuestionDifficulty: document.querySelector("#roomQuestionDifficulty"),
  roomInstruction: document.querySelector("#roomInstruction"),
  roomRecordingLabel: document.querySelector("#roomRecordingLabel"),
  roomRecordingHint: document.querySelector("#roomRecordingHint"),
  interviewAnswerTimer: document.querySelector("#interviewAnswerTimer"),
  roomWaveform: document.querySelector("#roomWaveform"),
  interviewTranscript: document.querySelector("#interviewTranscript"),
  transcriptState: document.querySelector("#transcriptState"),
  roomError: document.querySelector("#roomError"),
  roomTurnCount: document.querySelector("#roomTurnCount"),
  roomTurnHistory: document.querySelector("#roomTurnHistory"),
  roomToast: document.querySelector("#roomToast"),
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
  profileForm: document.querySelector("#profileForm"),
  profileName: document.querySelector("#profileName"),
  profileHandleInput: document.querySelector("#profileHandleInput"),
  profileDisplayName: document.querySelector("#profileDisplayName"),
  profileHandle: document.querySelector("#profileHandle"),
  profileMascot: document.querySelector("#profileMascot"),
  profileSaveStatus: document.querySelector("#profileSaveStatus"),
  weeklyGoal: document.querySelector("#weeklyGoal"),
  mascotCustomizer: document.querySelector("#mascotCustomizer"),
  mascotName: document.querySelector("#mascotName"),
  googleSignIn: document.querySelector("#googleSignIn"),
  googleSignOut: document.querySelector("#googleSignOut"),
  accountStatus: document.querySelector("#accountStatus"),
  accountEntryLink: document.querySelector("#accountEntryLink"),
  authForm: document.querySelector("#authForm"),
  authName: document.querySelector("#authName"),
  authNameLabel: document.querySelector("#authNameLabel"),
  authEmail: document.querySelector("#authEmail"),
  authPassword: document.querySelector("#authPassword"),
  authTitle: document.querySelector("#authTitle"),
  authSubtitle: document.querySelector("#authSubtitle"),
  authSubmit: document.querySelector("#authSubmit"),
  authFeedback: document.querySelector("#authFeedback"),
  authGoogleSignIn: document.querySelector("#authGoogleSignIn"),
  authForgotPassword: document.querySelector("#authForgotPassword"),
  weeklyGoalCount: document.querySelector("#weeklyGoalCount"),
  weeklyGoalTarget: document.querySelector("#weeklyGoalTarget"),
  weeklyGoalProgress: document.querySelector("#weeklyGoalProgress"),
  weeklyGoalFill: document.querySelector("#weeklyGoalFill"),
  goalWeek: document.querySelector("#goalWeek"),
  weeklyGoalMessage: document.querySelector("#weeklyGoalMessage"),
  currentStreak: document.querySelector("#currentStreak"),
  streakMessage: document.querySelector("#streakMessage"),
  bestStreak: document.querySelector("#bestStreak"),
  themeToggle: document.querySelector("#themeToggle"),
  exportPdf: document.querySelector("#exportPdf"),
  printSheet: document.querySelector("#printSheet"),
  practiceAgain: document.querySelector("#practiceAgain"),
  viewHistory: document.querySelector("#viewHistory")
};

function pick(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function effectiveDifficulty() {
  return el.difficulty.value;
}

function effectiveDuration() {
  return Number(el.duration.value);
}

function setupReady() {
  return Boolean(el.mode.value && el.difficulty.value && el.duration.value);
}

function syncStartButton() {
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
  const difficulty = forceDifficulty || el.difficulty.value;
  const duration = effectiveDuration();
  const text = pick(prompts[mode][difficulty]);

  state.challenge = {
    mode,
    difficulty,
    duration,
    text,
    label: prompts[mode].label
  };
  state.remaining = duration;
  el.timer.textContent = formatTime(duration);
  setTopicDisplays(text);
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
    filter.frequency.setValueAtTime(isFinal ? 980 : 1500 - progress * 550, when);
    filter.Q.setValueAtTime(isFinal ? 5 : 2.8, when);

    osc.type = isFinal ? "triangle" : "sawtooth";
    osc.frequency.setValueAtTime(isFinal ? 180 : 420 - progress * 180, when);
    osc.frequency.exponentialRampToValueAtTime(70, when + (isFinal ? 0.06 : 0.024));

    // Very loud but kept below clipping by fading quickly.
    const vol = isFinal ? 1.5 : Math.max(0.16, 0.9 * (1 - progress * 0.5));
    gain.gain.setValueAtTime(vol, when);
    gain.gain.exponentialRampToValueAtTime(0.001, when + (isFinal ? 0.085 : 0.026));

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

// 4. Digital click sound effect for home screen buttons (practice & interview modes)
let digitalClickBuffer = null;
let digitalClickFetching = false;
let digitalClickRawBuffer = null;
let digitalClickDecodePromise = null;
let digitalClickStartOffset = 0;
let lastClickSoundTime = 0;

function findDigitalClickStartOffset(buffer) {
  const channels = Array.from({ length: buffer.numberOfChannels }, (_, index) => buffer.getChannelData(index));
  let peak = 0;
  for (const channel of channels) {
    for (let index = 0; index < channel.length; index += 1) peak = Math.max(peak, Math.abs(channel[index]));
  }
  if (!peak) return 0;

  const threshold = Math.max(0.006, peak * 0.035);
  const requiredRun = Math.max(1, Math.round(buffer.sampleRate * 0.0025));
  let runStart = -1;
  let runLength = 0;
  const frameCount = Math.min(...channels.map((channel) => channel.length));
  for (let index = 0; index < frameCount; index += 1) {
    const audible = channels.some((channel) => Math.abs(channel[index]) >= threshold);
    if (audible) {
      if (runStart < 0) runStart = index;
      runLength += 1;
      if (runLength >= requiredRun) return Math.max(0, runStart / buffer.sampleRate - 0.006);
    } else {
      runStart = -1;
      runLength = 0;
    }
  }
  return 0;
}

function decodeDigitalClickAudio(ctx = getSfxContext()) {
  if (digitalClickBuffer || !digitalClickRawBuffer || !ctx) return Promise.resolve(digitalClickBuffer);
  if (digitalClickDecodePromise) return digitalClickDecodePromise;
  digitalClickDecodePromise = ctx.decodeAudioData(digitalClickRawBuffer.slice(0))
    .then((decoded) => {
      digitalClickBuffer = decoded;
      digitalClickStartOffset = findDigitalClickStartOffset(decoded);
      return decoded;
    })
    .catch((error) => {
      digitalClickDecodePromise = null;
      throw error;
    });
  return digitalClickDecodePromise;
}

function playDigitalClickBuffer(ctx) {
  if (!digitalClickBuffer) return;
  const source = ctx.createBufferSource();
  source.buffer = digitalClickBuffer;
  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.75, ctx.currentTime);
  source.connect(gain);
  gain.connect(ctx.destination);
  source.start(0, digitalClickStartOffset);
}

function loadDigitalClickSound() {
  if (digitalClickBuffer || digitalClickFetching) return;
  digitalClickFetching = true;
  fetch("./ksjsbwuil-digital-click-3-513897.mp3")
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.arrayBuffer();
    })
    .then((arrayBuffer) => {
      digitalClickRawBuffer = arrayBuffer;
      const ctx = getSfxContext();
      if (ctx) return decodeDigitalClickAudio(ctx);
    })
    .catch((err) => {
      console.warn("Digital click audio could not be preloaded:", err);
    })
    .finally(() => {
      digitalClickFetching = false;
    });
}

function playButtonClickSound() {
  const now = performance.now();
  if (now - lastClickSoundTime < 30) return;
  lastClickSoundTime = now;

  try {
    const ctx = getSfxContext();
    if (ctx) {
      if (ctx.state === "suspended") {
        ctx.resume().catch(() => {});
      }
      if (digitalClickBuffer) {
        playDigitalClickBuffer(ctx);
        return;
      } else if (digitalClickRawBuffer) {
        decodeDigitalClickAudio(ctx).then(() => playDigitalClickBuffer(ctx)).catch(() => {});
        return;
      } else {
        loadDigitalClickSound();
      }
    }
  } catch {}

  try {
    const audio = new Audio("./ksjsbwuil-digital-click-3-513897.mp3");
    audio.volume = 0.75;
    audio.play().catch(() => {});
  } catch {}
}

function isHomeScreenActive() {
  const setupEl = document.getElementById("setup");
  return Boolean(setupEl && setupEl.classList.contains("active"));
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
  const interviewSession = state.interview;
  const interviewRecording = Boolean(state.interview && ["requesting_microphone", "recording"].includes(state.interview.status));
  let interviewStreamAcquired = null;
  transcriptTarget().value = "";
  state.audioChunks = [];
  state.audioBlob = null;
  state.autoEvaluateAfterStop = false;
  state.startedAt = Date.now();
  state.remaining = interviewRecording ? state.interview.answerLimit : state.challenge.duration;
  state.isRecording = !interviewRecording;
  if (!interviewRecording) {
    setRecordingUi(true);
    startTimer();
  }

  try {
    if (!state.mediaStream) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      if (interviewRecording && (state.interview !== interviewSession || state.interview.status !== "requesting_microphone")) {
        stream.getTracks().forEach((track) => track.stop());
        return;
      }
      state.mediaStream = stream;
      if (interviewRecording) interviewStreamAcquired = stream;
    }
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
      if (state.interview?.status === "interview_complete") {
        state.audioChunks = [];
        state.audioBlob = null;
        state.recorder = null;
        return;
      }
      state.audioBlob = new Blob(state.audioChunks, { type });
      if (state.interview?.status === "transcribing") await transcribeInterviewAudio();
      else if (!state.interview || state.interview.status === "interview_complete") await transcribeRecordedAudio(state.autoEvaluateAfterStop);
      state.recorder = null;
    });
    state.recorder.start(1000);
    if (interviewRecording) {
      state.interview.answerStartedAt = Date.now();
      transitionInterview("recording");
      state.isRecording = true;
      startWaveform(state.mediaStream);
      startSpeechRecognition();
      setRecordingUi(true);
      startTimer();
    } else {
      startWaveform(state.mediaStream);
      startSpeechRecognition();
    }
  } catch (error) {
    if (interviewRecording && state.interview !== interviewSession) {
      interviewStreamAcquired?.getTracks().forEach((track) => track.stop());
      if (state.mediaStream === interviewStreamAcquired) state.mediaStream = null;
      return;
    }
    state.isRecording = false;
    stopWaveform();
    if (interviewRecording) {
      transitionInterview("error");
      showRoomError("Microphone access is unavailable. Check browser permission and try recording again.");
      renderInterviewRoom();
      releaseMicrophone();
      return;
    }
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
  const waveform = state.interview && state.interview.status === "recording" ? el.roomWaveform : el.waveform;
  if (!AudioContextClass || !waveform) return;

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
  state.waveformBars = [...waveform.querySelectorAll("span")];
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
    if (live) transcriptTarget().value = live;
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
  const interviewRecording = Boolean(state.interview && state.interview.status === "recording");
  const timerTarget = interviewRecording ? el.interviewAnswerTimer : el.timer;
  if (timerTarget) timerTarget.textContent = formatTime(state.remaining);
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    if (timerTarget) timerTarget.textContent = formatTime(Math.max(state.remaining, 0));
    if (interviewRecording && state.remaining <= 10 && el.roomRecordingLabel) {
      el.roomRecordingLabel.textContent = `${Math.max(0, state.remaining)} SECONDS LEFT · RECORDING`;
      el.roomRecordingLabel.classList.add("is-warning");
    }
    if (state.remaining <= 0) stopRecording(true);
  }, 1000);
}

function stopRecording(autoEvaluate) {
  clearInterval(state.timerId);
  state.autoEvaluateAfterStop = autoEvaluate;
  const interviewRecording = Boolean(state.interview && state.interview.status === "recording");
  if (interviewRecording) {
    state.interview.recordedAnswerSeconds = Math.max(1, Math.round((Date.now() - state.interview.answerStartedAt) / 1000));
    transitionInterview("transcribing");
    if (el.roomStateLabel) el.roomStateLabel.textContent = "Transcribing your answer…";
    if (el.transcriptState) el.transcriptState.textContent = "Finalizing transcript…";
    if (el.roomRecordingLabel) el.roomRecordingLabel.textContent = "TRANSCRIBING";
  }
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
    if (autoEvaluate && !interviewRecording) showProcessing("Transcribing", "Inking transcript…");
    state.recorder.stop();
  } else {
    stopWaveform();
    if (state.mediaStream) {
      state.mediaStream.getTracks().forEach((track) => track.stop());
      state.mediaStream = null;
    }
    if (interviewRecording) transcribeInterviewAudio();
    else if (autoEvaluate && el.transcript.value.trim()) {
      evaluateCurrentSpeech();
    }
  }
  setRecordingUi(false);
}

function setRecordingUi(isRecording) {
  if (el.stopRecording) el.stopRecording.disabled = !isRecording;
  if (el.startSession) el.startSession.disabled = isRecording || !setupReady();
  if (el.recordingState) {
    el.recordingState.textContent = isRecording ? "On air" : "Ready";
    el.recordingState.classList.toggle("recording", isRecording);
  }
  if (el.waveform) el.waveform.classList.toggle("is-live", isRecording && !(state.interview && state.interview.status === "recording"));
  if (el.roomWaveform) el.roomWaveform.classList.toggle("is-live", isRecording && Boolean(state.interview));
  if (!isRecording && el.roomRecordingLabel) el.roomRecordingLabel.classList.remove("is-warning");
  if (state.interview) renderInterviewRoom();
}

function transcriptTarget() {
  return state.interview && state.interview.status !== "interview_complete" && el.interviewTranscript ? el.interviewTranscript : el.transcript;
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
    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      if (result.code === "no_api_key") {
        if (previewTranscript) {
          el.transcript.value = previewTranscript;
          if (el.scoreSummary) {
            el.scoreSummary.textContent = "Using your browser’s speech-recognition transcript. For cloud transcription, this deployment needs GEMINI_API_KEY or OPENAI_API_KEY in its environment settings.";
          }
        } else {
          el.transcript.value = "";
          if (el.scoreSummary) {
            el.scoreSummary.textContent = "No speech was recognized. Allow microphone access and try again, or configure GEMINI_API_KEY or OPENAI_API_KEY in the deployment environment for cloud transcription.";
          }
        }
      } else {
        const message = response.status === 413
          ? "This recording is too large for Vercel’s 4.5 MB upload limit. Try a shorter take."
          : response.status === 504
            ? "Transcription timed out on the hosting service. Try a shorter take, then retry."
            : result.error || `Transcription service returned ${response.status}.`;
        if (el.scoreSummary) el.scoreSummary.textContent = message;
        el.transcript.value = previewTranscript || `[${message}]`;
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
    if (el.scoreSummary) el.scoreSummary.textContent = "Could not reach the transcription service. Check the deployment API logs and transcription key.";
    el.transcript.value = previewTranscript || "[Could not reach the transcription service. Check the deployment API logs and transcription key.]";
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

function countFillerWords(transcript) {
  const lower = String(transcript || "").toLowerCase();
  return fillerRegExps.reduce((count, regexp) => {
    regexp.lastIndex = 0;
    return count + (lower.match(regexp)?.length || 0);
  }, 0);
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
  const hasScore = Number.isFinite(result.overall) && result.overall > 0;
  el.overallScore.textContent = hasScore ? result.overall.toFixed(1) : "—";
  const wordsCount = result.metrics.words;
  const wpmValue = result.metrics.wpm;
  const fillersValue = result.metrics.fillerCount !== undefined ? result.metrics.fillerCount : "calculated";
  const source = result.provider ? ` Source: ${labelForProvider(result.provider)}.` : "";
  if (result.interview) {
    const evaluatedCount = result.interview.turns.filter((turn) => turn.evaluation).length;
    const skippedCount = result.interview.turns.filter((turn) => turn.skipped).length;
    el.scoreSummary.textContent = evaluatedCount
      ? `${evaluatedCount} answers evaluated · ${skippedCount} skipped · ${labelForProvider(result.provider || "local")}.`
      : "No answers evaluated; no score was added to Progress.";
  } else {
    el.scoreSummary.textContent = `${wordsCount} words, ${wpmValue} WPM, ${fillersValue} filler words.${source}`;
  }
  el.rubricGrid.innerHTML = Object.entries(result.scores || {}).map(([key, value]) => `
    <div class="rubric-item">
      <span>${labelFor(key)}</span>
      <strong>${value.toFixed(1)}</strong>
      <div class="meter" aria-hidden="true"><div style="width: ${value * 10}%"></div></div>
    </div>
  `).join("");
  if (!hasScore) el.rubricGrid.innerHTML = "<p>No answer was evaluated, so no rubric score is available.</p>";
  renderList(el.strengths, result.strengths);
  renderList(el.improvements, result.improvements);
  el.retryAdvice.textContent = result.advice;
  if (el.resultKind) el.resultKind.textContent = result.interview ? "Interview report" : challenge.label || "Report";
  if (el.resultTopic) el.resultTopic.textContent = result.interview?.config?.position || challenge.text || "—";
  if (el.resultDifficulty) el.resultDifficulty.textContent = challenge.difficulty || "";
  if (el.resultSection) el.resultSection.textContent = result.interview
    ? `${result.interview.turns.filter((turn) => turn.evaluation).length} answers evaluated · ${result.interview.turns.filter((turn) => turn.skipped).length} skipped`
    : challenge.label || "";
  if (el.resultDuration) el.resultDuration.textContent = result.interview
    ? `${result.interview.config.durationMinutes} minute session · ${formatTime(challenge.duration || result.metrics.duration)} elapsed`
    : `${challenge.duration || result.metrics.duration} seconds`;
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
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history)); }
  catch { /* Keep the result available in memory for this session. */ }
  window.SpeakUpFirebase?.saveSession(result).catch((error) => {
    if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Saved on this device. Cloud history sync failed: ${error.message}`;
  });
}

function loadHistory() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

function loadProfile() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || "null");
    return saved && typeof saved === "object"
      ? { ...PROFILE_DEFAULTS, ...saved, mascot: { ...MASCOT_DEFAULTS, ...(saved.mascot || {}) } }
      : { ...PROFILE_DEFAULTS, mascot: { ...MASCOT_DEFAULTS } };
  } catch {
    return { ...PROFILE_DEFAULTS, mascot: { ...MASCOT_DEFAULTS } };
  }
}

function saveProfile() {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.profile));
    window.SpeakUpFirebase?.saveProfile(state.profile).catch((error) => {
      if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Saved on this device. Cloud save failed: ${error.message}`;
    });
    return true;
  } catch {
    if (el.profileSaveStatus) el.profileSaveStatus.textContent = "Couldn’t save here. Check this browser’s storage settings.";
    return false;
  }
}

function localDayKey(date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function shiftDayKey(key, amount) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(year, month - 1, day, 12);
  date.setDate(date.getDate() + amount);
  return localDayKey(date);
}

function attemptDayKeys() {
  return state.history
    .map((item) => new Date(item.date))
    .filter((date) => Number.isFinite(date.getTime()))
    .map(localDayKey);
}

function streakStats(dayKeys) {
  const uniqueDays = [...new Set(dayKeys)].sort();
  const days = new Set(uniqueDays);
  const today = localDayKey(new Date());
  const start = days.has(today) ? today : days.has(shiftDayKey(today, -1)) ? shiftDayKey(today, -1) : null;
  let current = 0;
  if (start) {
    let day = start;
    while (days.has(day)) {
      current += 1;
      day = shiftDayKey(day, -1);
    }
  }

  let best = 0;
  let run = 0;
  let previous = "";
  uniqueDays.forEach((day) => {
    run = previous && shiftDayKey(previous, 1) === day ? run + 1 : 1;
    best = Math.max(best, run);
    previous = day;
  });
  return { current, best, days };
}

function weekBounds(now = new Date()) {
  const start = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  return { start, startKey: localDayKey(start) };
}

function renderProfile() {
  const profile = state.profile;
  profile.mascot = { ...MASCOT_DEFAULTS, ...(profile.mascot || {}) };
  const goal = Math.min(7, Math.max(1, Number(profile.weeklyGoal) || 3));

  if (el.profileName && document.activeElement !== el.profileName) el.profileName.value = profile.name || "";
  if (el.profileHandleInput && document.activeElement !== el.profileHandleInput) el.profileHandleInput.value = profile.handle || "";
  if (el.weeklyGoal) el.weeklyGoal.value = String(goal);
  if (el.profileDisplayName) el.profileDisplayName.textContent = profile.name || "The next big voice";
  if (el.profileHandle) el.profileHandle.textContent = profile.handle ? `@${profile.handle}` : "A profile that stays on this device";
  const mascot = profile.mascot;
  if (el.profileMascot) {
    window.SpeakUpCoach?.setConfig(mascot);
    el.profileMascot.setAttribute("aria-label", "Selected Croodles Neutral profile picture");
  }

  const dayKeys = attemptDayKeys();
  const streak = streakStats(dayKeys);
  const { startKey } = weekBounds();
  const weekDays = Array.from({ length: 7 }, (_, index) => shiftDayKey(startKey, index));
  const weekCount = dayKeys.filter((day) => day >= startKey && day <= weekDays[6]).length;
  const complete = weekCount >= goal;
  const progress = Math.min(100, Math.round((weekCount / goal) * 100));

  if (el.weeklyGoalCount) el.weeklyGoalCount.textContent = String(weekCount);
  if (el.weeklyGoalTarget) el.weeklyGoalTarget.textContent = `of ${goal} session${goal === 1 ? "" : "s"}`;
  if (el.weeklyGoalProgress) {
    el.weeklyGoalProgress.setAttribute("aria-valuemax", String(goal));
    el.weeklyGoalProgress.setAttribute("aria-valuenow", String(Math.min(goal, weekCount)));
  }
  if (el.weeklyGoalFill) el.weeklyGoalFill.style.width = `${progress}%`;
  if (el.weeklyGoalMessage) {
    el.weeklyGoalMessage.textContent = complete
      ? "Goal complete. Give yourself credit, then keep the good thing going."
      : `${goal - weekCount} more session${goal - weekCount === 1 ? "" : "s"} to hit your weekly goal.`;
  }
  if (el.goalWeek) {
    const today = localDayKey(new Date());
    el.goalWeek.innerHTML = weekDays.map((day, index) => {
      const count = dayKeys.filter((key) => key === day).length;
      const date = new Date(`${day}T12:00:00`);
      const label = new Intl.DateTimeFormat(undefined, { weekday: "short" }).format(date);
      return `<span class="goal-day${count ? " is-active" : ""}${day === today ? " is-today" : ""}" title="${label}: ${count} session${count === 1 ? "" : "s"}"><small>${["M", "T", "W", "T", "F", "S", "S"][index]}</small><i>${count ? "✓" : ""}</i></span>`;
    }).join("");
  }
  if (el.currentStreak) el.currentStreak.textContent = String(streak.current);
  if (el.bestStreak) el.bestStreak.textContent = `${streak.best} day${streak.best === 1 ? "" : "s"}`;
  if (el.streakMessage) {
    el.streakMessage.textContent = streak.current
      ? "You’re keeping the promise you made to yourself."
      : "One small practice session is enough to start a fresh streak.";
  }
}

function renderProgress() {
  renderTrends();
  renderProfile();
  const attempts = state.history.filter((item) => Number.isFinite(item.overall) && item.overall > 0);
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

function renderTrends() {
  const container = el.trends;
  if (!container) return;

  const attempts = state.history.filter((item) => Number.isFinite(item.overall) && item.overall > 0).reverse();
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
  const theme = document.documentElement.getAttribute("data-theme");
  const logoSrc = theme === "dark" ? "./speakup-logo.svg" : "./speakup-logo-on-light.svg";
  if (state.reportLogo && state.reportLogoSource === logoSrc) return Promise.resolve(state.reportLogo);
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      state.reportLogo = img;
      state.reportLogoSource = logoSrc;
      try {
        const c = document.createElement("canvas");
        const scale = Math.min(1, 512 / img.naturalWidth);
        c.width = Math.round(img.naturalWidth * scale);
        c.height = Math.round(img.naturalHeight * scale);
        c.getContext("2d").drawImage(img, 0, 0, c.width, c.height);
        state.reportLogoDataUrl = c.toDataURL("image/png");
      } catch (err) {
        state.reportLogoDataUrl = null;
      }
      resolve(img);
    };
    img.onerror = () => resolve(null);
    img.src = logoSrc;
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
  const fallbackLogo = document.documentElement.getAttribute("data-theme") === "dark"
    ? "./speakup-logo.svg"
    : "./speakup-logo-on-light.svg";
  const title = result.interview?.config?.position || result.challenge.text;
  const scoreText = Number.isFinite(result.overall) && result.overall > 0 ? `${result.overall.toFixed(1)}<small>/10</small>` : "Not scored";
  const durationLabel = result.interview
    ? `${result.interview.config.durationMinutes} minute session · ${formatTime(result.challenge.duration || result.metrics.duration)} elapsed`
    : `${result.challenge.duration} seconds`;

  return `
    <header class="print-header">
      <div class="print-brand">
        <img class="print-logo" src="${state.reportLogoDataUrl || fallbackLogo}" alt="SpeakUp AI logo">
        <div class="print-brand-copy">
          <p class="print-kicker">SpeakUp AI</p>
          <h1>${result.interview ? "Interview Report" : "Speech Report"}</h1>
        </div>
      </div>
      <p class="print-date">${new Date(result.date).toLocaleString()}</p>
    </header>
    <section class="print-challenge">
      <span class="print-tag">${escapeHtml(result.challenge.label)}</span>
      <h2>${escapeHtml(title)}</h2>
      <p class="print-meta">Difficulty: ${escapeHtml(result.challenge.difficulty)} · ${escapeHtml(durationLabel)} · Source: ${labelForProvider(result.provider || "local")}</p>
    </section>
    <section class="print-score-row">
      <div class="print-overall">
        <span>Overall</span>
        <strong>${scoreText}</strong>
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
      <strong>${Number.isFinite(item.overall) && item.overall > 0 ? `${item.overall.toFixed(1)}/10` : "Not scored"}</strong>
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
  const weakest = Object.entries(result.scores || {}).sort((a, b) => a[1] - b[1])[0]?.[0];
  if (!weakest) {
    el.coachHeadline.textContent = "No evaluated answers yet";
    el.coachBody.textContent = result.advice || "Complete an interview answer to receive coaching feedback.";
    return;
  }
  el.coachHeadline.textContent = `Today's focus: ${labelFor(weakest)}`;
  el.coachBody.textContent = result.advice;
}

function clearHistory() {
  state.history = [];
  localStorage.removeItem("speakup-history");
  window.SpeakUpFirebase?.clearHistory().catch((error) => {
    if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Cleared on this device. Cloud history clear failed: ${error.message}`;
  });
  renderProgress();
  renderHistory();
}

async function focusedPrompt() {
  const latest = state.history[0];
  if (!latest || !Object.keys(latest.scores || {}).length) {
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
  const siteIcon = document.querySelector("#siteIcon");
  if (siteIcon) siteIcon.href = next === "dark" ? "./speakup-logo.svg" : "./speakup-logo-on-light.svg";
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
  const roomThemeToggle = document.getElementById("roomThemeToggle");
  if (roomThemeToggle) {
    const text = roomThemeToggle.querySelector(".room-theme-label");
    if (text) text.textContent = label;
    roomThemeToggle.setAttribute("aria-label", aria);
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
  const aliases = { practice: "setup", login: "auth", signup: "auth" };
  const requested = aliases[pageName] || pageName;
  const known = ["setup", "tumbler", "prepare", "speaking", "processing", "interviewAnalyzing", "interviewRoom", "results", "progress", "history", "profile", "doodles", "auth"];
  let safePage = known.includes(requested) ? requested : "setup";
  if (document.body.classList.contains("auth-gate") && safePage !== "auth") {
    history.replaceState(null, "", "#auth");
    safePage = "auth";
  }

  if (!FLOW_PAGES.has(safePage)) abortFlow();

  document.body.classList.toggle("flow-active", FLOW_PAGES.has(safePage));
  document.body.classList.toggle("doodles-active", safePage === "doodles");
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

  const visiblePage = document.body.classList.contains("auth-gate") ? "auth" : safePage;
  const hashPage = FLOW_PAGES.has(visiblePage) ? "setup" : visiblePage;
  if (location.hash !== `#${hashPage}`) {
    history.replaceState(null, "", `#${hashPage}`);
  }

  if (safePage === "results" || safePage === "history" || safePage === "progress" || safePage === "profile" || safePage === "doodles" || safePage === "auth") {
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
      if (isHomeScreenActive()) playButtonClickSound();
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
el.googleSignIn?.addEventListener("click", async () => {
  el.googleSignIn.disabled = true;
  markLoginAttempt();
  try {
    if (!window.SpeakUpFirebase) throw new Error("Firebase did not load. Check your connection and local Firebase config.");
    await window.SpeakUpFirebase.signIn();
    completeExplicitLogin();
  }
  catch (error) { cancelLoginAttempt(); if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Google sign-in failed: ${error.message}`; }
  finally { el.googleSignIn.disabled = false; }
});
el.googleSignOut?.addEventListener("click", async () => {
  try { localStorage.removeItem("speakup-guest-access-v1"); } catch { /* ignore unavailable storage */ }
  try { await window.SpeakUpFirebase?.signOut(); }
  catch (error) { if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Could not sign out: ${error.message}`; }
});
const GUEST_ACCESS_KEY = "speakup-guest-access-v1";
let initialEntryResolved = false;
let explicitLoginPending = false;
let guestAccessGranted = false;
let entryIntroStarted = false;
try { localStorage.removeItem(GUEST_ACCESS_KEY); } catch { /* ignore unavailable storage */ }
function markLoginAttempt() { explicitLoginPending = true; }
function cancelLoginAttempt() { explicitLoginPending = false; }
function playEntryIntro() {
  if (entryIntroStarted) return;
  const splash = document.getElementById("splashScreen");
  if (!splash) return;
  entryIntroStarted = true;
  document.body.classList.add("splash-active");
  splash.classList.add("is-visible");
  initSplashScreen();
}
function enterWebsite(page = "setup") {
  initialEntryResolved = true;
  document.body.classList.remove("auth-check", "auth-gate", "splash-active");
  showPage(page);
}
function enterAuthGate() {
  initialEntryResolved = true;
  entryIntroStarted = false;
  document.body.classList.remove("auth-check", "splash-active");
  document.body.classList.add("auth-gate");
  showPage("auth");
}
function completeExplicitLogin() {
  explicitLoginPending = false;
  if (document.body.classList.contains("auth-gate") || !initialEntryResolved) enterWebsite("setup");
  playEntryIntro();
}
document.querySelector("#authGuestEntry")?.addEventListener("click", () => {
  guestAccessGranted = true;
  enterWebsite("setup");
  playEntryIntro();
});
let authMode = "login";
function setAuthMode(mode) {
  authMode = mode === "signup" ? "signup" : "login";
  const signup = authMode === "signup";
  const loginTab = document.querySelector("#authLoginTab");
  const signupTab = document.querySelector("#authSignupTab");
  loginTab?.classList.toggle("is-active", !signup);
  signupTab?.classList.toggle("is-active", signup);
  loginTab?.setAttribute("aria-selected", String(!signup));
  signupTab?.setAttribute("aria-selected", String(signup));
  if (el.authName) { el.authName.hidden = !signup; el.authName.required = signup; }
  if (el.authNameLabel) el.authNameLabel.hidden = !signup;
  if (el.authPassword) el.authPassword.autocomplete = signup ? "new-password" : "current-password";
  if (el.authTitle) el.authTitle.textContent = signup ? "Make room for your voice." : "Welcome back.";
  if (el.authSubtitle) el.authSubtitle.textContent = signup ? "Create your free account. Your progress travels with you." : "Pick up right where your voice left off.";
  if (el.authSubmit) el.authSubmit.innerHTML = `${signup ? "Create account" : "Log in"} <span aria-hidden="true">↗</span>`;
  if (el.authFeedback) el.authFeedback.textContent = "";
}
document.querySelectorAll("[data-auth-mode]").forEach((button) => button.addEventListener("click", () => setAuthMode(button.dataset.authMode)));
function authErrorMessage(error) {
  const messages = {
    "auth/email-already-in-use": "An account already uses this email. Try logging in instead.",
    "auth/invalid-credential": "That email or password didn’t match. Check them and try again.",
    "auth/user-not-found": "No account was found with that email. Sign up to get started.",
    "auth/invalid-email": "That email address doesn’t look valid. Check it and try again.",
    "auth/weak-password": "Choose a stronger password with at least 8 characters.",
    "auth/operation-not-allowed": "This sign-in method isn’t enabled in Firebase yet."
  };
  return messages[error.code] || error.message || "We couldn’t complete that request. Try again.";
}
el.authForm?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (!el.authFeedback || !el.authEmail || !el.authPassword) return;
  if (!window.SpeakUpFirebase) { el.authFeedback.textContent = "Firebase didn’t load. Check your connection and local Firebase config."; return; }
  const email = el.authEmail.value.trim();
  const password = el.authPassword.value;
  if (!el.authEmail.checkValidity() || !password || (authMode === "signup" && (!el.authName.value.trim() || password.length < 8))) {
    el.authFeedback.textContent = authMode === "signup" && !el.authName.value.trim()
      ? "Add your name to create your account."
      : authMode === "signup" && password.length < 8
        ? "Choose a password with at least 8 characters."
        : "Enter a valid email and password.";
    return;
  }
  el.authSubmit.disabled = true;
  el.authFeedback.textContent = authMode === "signup" ? "Creating your account…" : "Logging you in…";
  markLoginAttempt();
  try {
    if (authMode === "signup") await window.SpeakUpFirebase.createAccount(email, password, el.authName.value.trim());
    else await window.SpeakUpFirebase.signInWithEmail(email, password);
    completeExplicitLogin();
    el.authFeedback.textContent = "You’re in. Loading your SpeakUp space…";
  } catch (error) {
    cancelLoginAttempt();
    el.authFeedback.textContent = authErrorMessage(error);
  } finally {
    el.authSubmit.disabled = false;
  }
});
el.authGoogleSignIn?.addEventListener("click", async () => {
  if (!window.SpeakUpFirebase) { if (el.authFeedback) el.authFeedback.textContent = "Firebase didn’t load. Check your connection and local Firebase config."; return; }
  el.authGoogleSignIn.disabled = true;
  if (el.authFeedback) el.authFeedback.textContent = "Opening Google sign-in…";
  markLoginAttempt();
  try {
    await window.SpeakUpFirebase.signIn();
    completeExplicitLogin();
  }
  catch (error) { cancelLoginAttempt(); if (el.authFeedback) el.authFeedback.textContent = authErrorMessage(error); }
  finally { el.authGoogleSignIn.disabled = false; }
});
el.authForgotPassword?.addEventListener("click", async () => {
  if (!window.SpeakUpFirebase) { if (el.authFeedback) el.authFeedback.textContent = "Firebase didn’t load. Check your connection and local Firebase config."; return; }
  const email = el.authEmail?.value.trim();
  if (!email || !el.authEmail.checkValidity()) { if (el.authFeedback) el.authFeedback.textContent = "Enter your email above and we’ll send a reset link."; el.authEmail?.focus(); return; }
  try { await window.SpeakUpFirebase.resetPassword(email); if (el.authFeedback) el.authFeedback.textContent = "Password reset email sent. Check your inbox."; }
  catch (error) { if (el.authFeedback) el.authFeedback.textContent = authErrorMessage(error); }
});
window.addEventListener("speakup:auth-state", (event) => {
  const { user, profile, history, cloudError, isolateLocal, pending } = event.detail || {};
  const explicitLogin = Boolean(user && explicitLoginPending);
  if (user) explicitLoginPending = false;
  if (!initialEntryResolved || document.body.classList.contains("auth-check")) {
    if (explicitLogin) {
      const requested = location.hash.replace(/^#/, "");
      const initialPage = ["auth", "login", "signup"].includes(requested) ? "setup" : undefined;
      enterWebsite(initialPage || undefined);
      if (!initialPage && requested && requested !== "setup") showPageFromHash();
    } else {
      enterAuthGate();
    }
  } else if (!user && !guestAccessGranted) {
    enterAuthGate();
  } else if (explicitLogin && document.body.classList.contains("auth-gate")) {
    enterWebsite("setup");
  }
  if (explicitLogin) playEntryIntro();
  if (el.googleSignIn) el.googleSignIn.hidden = Boolean(user);
  if (el.googleSignOut) el.googleSignOut.hidden = !user;
  if (el.accountStatus) {
    el.accountStatus.textContent = user ? `Signed in as ${user.displayName || user.email || "Google user"}` : "Saved on this device";
  }
  if (pending) return;
  if (user && isolateLocal) {
    state.profile = { ...PROFILE_DEFAULTS, mascot: { ...MASCOT_DEFAULTS }, ...(profile || {}) };
    state.history = Array.isArray(history) ? history : [];
  } else if (user && Array.isArray(history)) {
    const merged = new Map();
    [...history, ...state.history].forEach((item) => {
      if (item?.id) merged.set(String(item.id), item);
    });
    state.history = [...merged.values()]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 25);
  }
  if (user && profile) {
    state.profile = { ...state.profile, ...profile, mascot: { ...MASCOT_DEFAULTS, ...(profile.mascot || {}) } };
  }
  if (user && !cloudError) {
    if (!profile && !state.profile.name && user.displayName) state.profile.name = user.displayName.slice(0, 32);
    try {
      localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(state.profile));
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.history));
    } catch { /* Keep the signed-in account data available in memory. */ }
    if (!profile) saveProfile();
    window.SpeakUpFirebase?.syncHistory(state.history).catch((error) => {
      if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Profile loaded, but history sync failed: ${error.message}`;
    });
    renderProfile();
    renderProgress();
    renderHistory();
    if (el.profileSaveStatus) el.profileSaveStatus.textContent = "Profile, avatar, and practice history are synced to your Google account.";
    if (location.hash === "#auth" || location.hash === "#login" || location.hash === "#signup") showPage("setup");
  } else if (user && cloudError) {
    if (el.profileSaveStatus) el.profileSaveStatus.textContent = `Google sign-in is active, but cloud profile sync failed. Enable Firestore and add its rules. ${cloudError}`;
  }
});
window.addEventListener("speakup:firebase-load-error", (event) => {
  const error = event.detail?.error;
  enterAuthGate();
  if (el.authFeedback) {
    const reason = error?.code || error?.message || "Unknown module-loading error";
    el.authFeedback.textContent = `Firebase initialization failed: ${reason}`;
  }
});
window.addEventListener("speakup:coach-change", (event) => {
  if (!event.detail?.config) return;
  state.profile.mascot = event.detail.config;
  saveProfile();
  renderProfile();
});
el.profileForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile.name = el.profileName.value.trim().slice(0, 32);
  state.profile.handle = el.profileHandleInput.value.trim().replace(/^@/, "").replace(/[^a-z0-9_]/gi, "").slice(0, 20).toLowerCase();
  state.profile.weeklyGoal = Math.min(7, Math.max(1, Number(el.weeklyGoal.value) || 3));
  const saved = saveProfile();
  if (saved && el.profileSaveStatus) el.profileSaveStatus.textContent = "Saved on this device. Your next session counts toward your goal.";
  renderProfile();
});
el.themeToggle.addEventListener("click", toggleTheme);
el.exportPdf.addEventListener("click", () => {
  if (state.activeResult) printReport(state.activeResult);
});
el.practiceAgain.addEventListener("click", () => showPage("setup"));
el.viewHistory.addEventListener("click", () => showPage("history"));
window.addEventListener("hashchange", showPageFromHash);

applyTheme(getPreferredTheme());
document.body.classList.remove("splash-active");
setTimeout(() => {
  if (!initialEntryResolved) {
    enterAuthGate();
    if (!window.SpeakUpFirebase && el.authFeedback) {
      el.authFeedback.textContent = "Firebase didn’t load. You can continue as a guest or check your connection and local Firebase config.";
    }
  }
}, 4000);
loadReportLogo();
syncStartButton();
renderProgress();
renderHistory();
try {
  if (localStorage.getItem(INTERVIEW_DRAFT_KEY)) el.resumeInterviewDraft.hidden = false;
} catch { /* ignore unavailable storage */ }

function initSplashScreen() {
  const splash = document.getElementById("splashScreen");
  if (!splash) return;

  splash.classList.add("is-visible");
  splash.classList.remove("exit");
  const motionReduced = reducedMotion();
  const startedAt = performance.now();
  const minHold = motionReduced ? 120 : 5400;
  let exited = false;
  const skipButton = document.getElementById("splashSkip");
  const onSkip = () => exitSplash();
  const onKeydown = (event) => { if (event.key === "Escape") exitSplash(); };

  const exitSplash = () => {
    if (exited) return;
    exited = true;
    skipButton?.removeEventListener("click", onSkip);
    document.removeEventListener("keydown", onKeydown);
    document.body.classList.remove("splash-active");
    splash.classList.add("exit");
    const hideSplash = () => {
      splash.classList.remove("exit", "is-visible");
    };
    const hideOnExit = (event) => {
      if (event.target !== splash) return;
      splash.removeEventListener("animationend", hideOnExit);
      hideSplash();
    };
    splash.addEventListener("animationend", hideOnExit);
    setTimeout(hideSplash, 1200);
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

  skipButton?.addEventListener("click", onSkip);
  document.addEventListener("keydown", onKeydown);

  setTimeout(() => {
    if (!exited) exitSplash();
  }, 9000);
}

// ---- Interview side: hold-to-enter button + story transition ----
(function initModeSwitch() {
  const btn = document.getElementById("modeSwitch");
  const overlay = document.getElementById("modeShift");
  if (!btn || !overlay) return;

  const root = document.documentElement;
  const wrap = btn.parentElement;
  const capA = document.getElementById("msCapA");
  const capB = document.getElementById("msCapB");
  const HOLD_MS = 700;
  let holdTimer = null;
  let startedAt = 0;
  let charging = false;
  let shifting = false;
  let raf = 0;
  let timeline = null;
  let direction = "";
  let prevMode = "";

  const inInterview = () => root.dataset.side === "interview";

  function showHint() {
    wrap.classList.add("hint");
    btn.classList.remove("nudge");
    void btn.offsetWidth;
    btn.classList.add("nudge");
    setTimeout(() => wrap.classList.remove("hint"), 1700);
  }

  function startCharge() {
    if (shifting || charging || inInterview()) return;
    if (isHomeScreenActive()) playButtonClickSound();
    charging = true;
    startedAt = performance.now();
    btn.classList.add("charging");
    document.body.classList.add("charging");
    holdTimer = setTimeout(() => {
      stopCharge(true);
      runShift("to-int");
    }, HOLD_MS);
  }

  function stopCharge(completed) {
    if (!charging) return;
    charging = false;
    clearTimeout(holdTimer);
    btn.classList.remove("charging");
    document.body.classList.remove("charging");
    if (!completed && performance.now() - startedAt < HOLD_MS) showHint();
  }

  function applySide() {
    if (direction === "to-int") {
      prevMode = el.mode.value;
      root.dataset.side = "interview";
      setMode("interview");
      btn.setAttribute("aria-label", "Back to practice mode");
    } else {
      delete root.dataset.side;
      setMode(prevMode || "");
      btn.setAttribute("aria-label", "Interview mode. Press and hold to enter.");
    }
    try {
      showPage("setup");
    } catch (error) {
      /* page switch is best-effort */
    }
    window.scrollTo(0, 0);
    root.classList.add("side-in");
    setTimeout(() => root.classList.remove("side-in"), 1600);
  }

  function stopTimeline() {
    if (raf) cancelAnimationFrame(raf);
    raf = 0;
    if (timeline) {
      timeline.dispose();
      timeline = null;
    }
  }

  function swap() {
    if (overlay.classList.contains("swapped")) return;
    overlay.classList.add("swapped");
    applySide();
  }

  function endShift() {
    stopTimeline();
    overlay.className = "mode-shift";
    document.body.classList.remove("shifting");
    shifting = false;
    btn.blur();
    wrap.classList.remove("hint");
  }

  function runShift(dir) {
    if (shifting) return;
    shifting = true;
    direction = dir;
    document.body.classList.add("shifting");

    if (dir === "to-int") {
      const cs = getComputedStyle(root);
      overlay.style.setProperty("--ms-paper", cs.getPropertyValue("--paper").trim());
      overlay.style.setProperty("--ms-ink", cs.getPropertyValue("--ink").trim());
      capA.textContent = "Playtime\u2019s over.";
      capB.textContent = "Interview mode.";
    } else {
      capA.textContent = "Loosen up.";
      capB.textContent = "Practice mode.";
    }

    const rect = btn.getBoundingClientRect();
    overlay.style.setProperty("--ox", `${rect.left + rect.width / 2}px`);
    overlay.style.setProperty("--oy", `${rect.top + rect.height / 2}px`);

    overlay.className = "mode-shift";
    void overlay.offsetWidth;
    overlay.className = `mode-shift run ${dir}`;

    if (reducedMotion() || typeof window.buildShiftTimeline !== "function") {
      swap();
      setTimeout(endShift, 80);
      return;
    }

    try {
      timeline = window.buildShiftTimeline(overlay, dir, {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2
      });
      timeline.evaluate(0);
    } catch (error) {
      stopTimeline();
      swap();
      setTimeout(endShift, 80);
      return;
    }

    let firstFrame = null;
    let swapped = false;
    const step = (now) => {
      if (!timeline) return;
      if (firstFrame === null) firstFrame = now;
      const t = Math.max(0, (now - firstFrame) / 1000);
      timeline.evaluate(t);
      if (!swapped && t >= timeline.swapAt) {
        swapped = true;
        swap();
      }
      if (t >= timeline.endAt) {
        endShift();
        return;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
  }

  btn.addEventListener("pointerdown", (event) => {
    if (inInterview() || (event.pointerType === "mouse" && event.button !== 0)) return;
    event.preventDefault();
    btn.focus({ preventScroll: true });
    startCharge();
  });
  ["pointerup", "pointerleave", "pointercancel"].forEach((type) => {
    btn.addEventListener(type, () => stopCharge(false));
  });
  btn.addEventListener("contextmenu", (event) => event.preventDefault());

  btn.addEventListener("keydown", (event) => {
    if (inInterview() || (event.key !== "Enter" && event.key !== " ")) return;
    event.preventDefault();
    if (!event.repeat) startCharge();
  });
  btn.addEventListener("keyup", (event) => {
    if (event.key === "Enter" || event.key === " ") stopCharge(false);
  });
  btn.addEventListener("blur", () => stopCharge(false));

  btn.addEventListener("click", () => {
    if (inInterview() && !shifting) runShift("to-cas");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && shifting) {
      swap();
      endShift();
    }
  });
})();

// Resume selection feedback for the interview setup screen.
(function initInterviewResumeUpload() {
  const input = document.getElementById("resumeFile");
  const name = document.getElementById("resumeFileName");
  const drop = document.querySelector(".resume-drop");
  if (!input || !name || !drop) return;

  function showFile(file) {
    if (!file) return;
    if (file.size > 3 * 1024 * 1024) {
      window.alert("Please choose a resume no larger than 3 MB so it can be uploaded reliably.");
      input.value = "";
      return;
    }
    if (!/\.(pdf|docx)$/i.test(file.name)) {
      window.alert("Please choose a PDF or DOCX resume.");
      input.value = "";
      return;
    }
    name.textContent = file.name;
  }

  input.addEventListener("change", () => showFile(input.files?.[0]));
  ["dragenter", "dragover"].forEach((type) => drop.addEventListener(type, (event) => {
    event.preventDefault();
    drop.classList.add("is-dragging");
  }));
  ["dragleave", "drop"].forEach((type) => drop.addEventListener(type, (event) => {
    event.preventDefault();
    drop.classList.remove("is-dragging");
  }));
  drop.addEventListener("drop", (event) => {
    const file = event.dataTransfer?.files?.[0];
    if (!file) return;
    try { input.files = event.dataTransfer.files; } catch (error) { /* name feedback still works */ }
    showFile(file);
  });

  el.startInterview?.addEventListener("click", startInterviewSession);
  document.getElementById("startAnswer")?.addEventListener("click", beginInterviewAnswer);
  document.getElementById("endAnswer")?.addEventListener("click", () => stopRecording(true));
  document.getElementById("retryAnswer")?.addEventListener("click", beginInterviewAnswer);
  document.getElementById("submitAnswer")?.addEventListener("click", () => submitInterviewTurn());
  document.getElementById("skipQuestion")?.addEventListener("click", () => submitInterviewTurn({ skipped: true }));
  document.getElementById("retryInterviewRequest")?.addEventListener("click", retryInterviewRequest);
  document.getElementById("endInterview")?.addEventListener("click", endInterviewWithConfirm);
  document.getElementById("resumeInterviewDraft")?.addEventListener("click", resumeInterviewDraft);
  document.getElementById("roomThemeToggle")?.addEventListener("click", toggleTheme);
  document.getElementById("returnToInterviewSetup")?.addEventListener("click", () => showPage("setup"));
  document.getElementById("roomBrand")?.addEventListener("click", (event) => {
    event.preventDefault();
    endInterviewWithConfirm();
  });
  el.interviewPosition?.addEventListener("keydown", (event) => {
    if (event.key === "Enter") { event.preventDefault(); startInterviewSession(); }
  });
})();

const INTERVIEW_TRANSITIONS = {
  ready: ["generating_question", "interview_complete", "error"],
  generating_question: ["asking_question", "interview_complete", "error"],
  asking_question: ["requesting_microphone", "evaluating", "interview_complete", "error"],
  requesting_microphone: ["recording", "error", "interview_complete"],
  recording: ["transcribing", "error", "interview_complete"],
  transcribing: ["asking_question", "error", "interview_complete"],
  evaluating: ["preparing_follow_up", "interview_complete", "error"],
  preparing_follow_up: ["generating_question", "interview_complete", "error"],
  interview_complete: ["ready"],
  error: ["generating_question", "asking_question", "evaluating", "preparing_follow_up", "ready", "interview_complete"]
};

function transitionInterview(next) {
  const interview = state.interview;
  if (!interview || interview.status === next) return Boolean(interview);
  if (!INTERVIEW_TRANSITIONS[interview.status]?.includes(next)) {
    console.warn(`Rejected interview transition: ${interview.status} -> ${next}`);
    return false;
  }
  interview.status = next;
  renderInterviewRoom();
  return true;
}

function arrayBufferToBase64(buffer) {
  const bytes = new Uint8Array(buffer);
  let binary = "";
  const chunkSize = 0x8000;
  for (let offset = 0; offset < bytes.length; offset += chunkSize) {
    binary += String.fromCharCode(...bytes.subarray(offset, offset + chunkSize));
  }
  return btoa(binary);
}

async function startInterviewSession() {
  if (el.startInterview?.disabled) return;
  const file = el.resumeFile?.files?.[0];
  const position = el.interviewPosition?.value.trim();
  const fail = (message) => {
    el.interviewFormError.textContent = message;
    el.interviewFormError.hidden = false;
  };
  el.interviewFormError.hidden = true;
  if (!file) return fail("Choose a PDF or DOC/DOCX resume to personalize your interview.");
  if (file.size > 3 * 1024 * 1024) return fail("Your resume must be 3 MB or smaller so it fits the interview upload limit.");
  if (!/\.(pdf|docx)$/i.test(file.name)) return fail("Choose a PDF or DOCX resume.");
  if (!position || position.length > 120) return fail("Enter the position you’re interviewing for (up to 120 characters).");

  el.startInterview.disabled = true;
  el.startInterview.setAttribute("aria-busy", "true");
  showPage("interviewAnalyzing");
  let interviewCreated = false;
  try {
    const resumeData = arrayBufferToBase64(await file.arrayBuffer());
    const durationMinutes = Number(el.interviewDuration.value) || 20;
    state.interview = {
      sessionId: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
      status: "ready",
      config: {
        position,
        type: el.interviewType.value,
        experience: el.interviewExperience.value,
        difficulty: el.interviewDifficulty.value,
        durationMinutes,
        durationSeconds: durationMinutes * 60,
        maxQuestions: durationMinutes === 10 ? 5 : durationMinutes === 30 ? 10 : 8
      },
      resume: { name: file.name, mimeType: file.type || "application/octet-stream", data: resumeData },
      resumeSummary: "",
      turns: [],
      currentQuestion: null,
      questionNumber: 0,
      topics: [],
      startedAt: null,
      elapsedTimer: null,
      answerLimit: 120,
      answerStartedAt: null,
      recordedAnswerSeconds: 0,
      pendingTurn: null,
      requestController: null,
      transcriptionController: null,
      requestPromise: null,
      transcriptionPromise: null,
      retryAction: "start"
    };
    interviewCreated = true;
    await generateInterviewOpening();
  } catch (error) {
    if (interviewCreated && state.interview) {
      transitionInterview("error");
      showRoomError(error.message || "Could not read the selected resume.");
      showPage("interviewRoom");
    } else {
      showPage("setup");
      fail("Could not read the selected resume. Choose it again and retry.");
    }
  } finally {
    if (el.startInterview) {
      el.startInterview.disabled = false;
      el.startInterview.removeAttribute("aria-busy");
    }
  }
}

async function interviewRequest(path, payload, timeoutMs = 60000) {
  const interview = state.interview;
  const controller = new AbortController();
  interview.requestController = controller;
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(path, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, sessionId: interview.sessionId }), signal: controller.signal
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) {
      if (response.status === 413) throw new Error("This resume is too large for the interview service. Choose a PDF or DOCX under 3 MB and try again.");
      throw new Error(result.error || `Interview service returned ${response.status}.`);
    }
    return result;
  } catch (error) {
    if (error.name === "AbortError") throw new Error("The interview service took too long to respond. Your answer is saved here; try again.");
    throw error;
  } finally {
    clearTimeout(timeoutId);
    if (interview.requestController === controller) interview.requestController = null;
  }
}

async function generateInterviewOpening() {
  const interview = state.interview;
  if (!interview || !transitionInterview("generating_question")) return;
  interview.retryAction = "start";
  el.roomError.hidden = true;
  el.roomError.textContent = "";
  showPage("interviewAnalyzing");
  const promise = interviewRequest("/api/interview/start", {
    config: interview.config,
    resume: interview.resume
  });
  interview.requestPromise = promise;
  try {
    const result = await promise;
    if (state.interview !== interview || interview.status !== "generating_question") return;
    const question = validateInterviewQuestion(result.question);
    if (!question) throw new Error("The interviewer returned an invalid first question. Please retry.");
    interview.resumeSummary = String(result.resume_summary || "").slice(0, 5000);
    interview.provider = result.provider || "api";
    interview.providerWarning = String(result.providerWarning || "");
    interview.currentQuestion = question;
    interview.questionNumber = 1;
    interview.startedAt = Date.now();
    startInterviewElapsedTimer();
    showPage("interviewRoom");
    transitionInterview("asking_question");
    persistInterviewDraft();
    renderInterviewRoom();
  } catch (error) {
    if (state.interview !== interview || interview.status === "interview_complete") return;
    interview.retryAction = "start";
    transitionInterview("error");
    showPage("interviewRoom");
    showRoomError(error.message || "Could not prepare the interview question.");
  } finally {
    interview.requestPromise = null;
  }
}

function validateInterviewQuestion(question) {
  if (!question || typeof question !== "object") return null;
  const text = String(question.question || "").trim();
  if (text.length < 8 || text.length > 500) return null;
  return {
    id: String(question.id || crypto.randomUUID?.() || Date.now()),
    question: text,
    category: String(question.category || "behavioral").slice(0, 40),
    topic: String(question.topic || "general").slice(0, 80),
    difficulty: String(question.difficulty || state.interview.config.difficulty).slice(0, 20),
    isFollowUp: Boolean(question.is_follow_up ?? question.isFollowUp),
    followUpDepth: Math.max(0, Math.min(3, Number(question.follow_up_depth ?? question.followUpDepth) || 0)),
    reason: String(question.reason || "").slice(0, 300),
    evaluationFocus: Array.isArray(question.evaluation_focus || question.evaluationFocus) ? (question.evaluation_focus || question.evaluationFocus).slice(0, 6) : []
  };
}

function startInterviewElapsedTimer() {
  const interview = state.interview;
  clearInterval(interview.elapsedTimer);
  interview.elapsedTimer = setInterval(() => {
    if (state.interview !== interview || !interview.startedAt || interview.status === "interview_complete") return;
    const elapsed = Math.floor((Date.now() - interview.startedAt) / 1000);
    el.roomElapsed.textContent = `${formatTime(elapsed)} / ${formatTime(interview.config.durationSeconds)}`;
    if (elapsed >= interview.config.durationSeconds) {
      if (interview.status === "recording") stopRecording(true);
      else if (interview.status === "requesting_microphone") finishInterview("Your planned interview time has ended.");
      else if (interview.status === "asking_question" && !el.interviewTranscript.value.trim()) finishInterview("Your planned interview time has ended.");
    }
  }, 1000);
}

function persistInterviewDraft() {
  const interview = state.interview;
  if (!interview || !interview.currentQuestion || interview.status === "interview_complete") return;
  try {
    localStorage.setItem(INTERVIEW_DRAFT_KEY, JSON.stringify({
      sessionId: interview.sessionId,
      config: interview.config,
      resumeSummary: interview.resumeSummary,
      turns: interview.turns,
      currentQuestion: interview.currentQuestion,
      questionNumber: interview.questionNumber,
      topics: interview.topics,
      elapsedSeconds: Math.floor((Date.now() - interview.startedAt) / 1000),
      provider: interview.provider
    }));
    if (el.resumeInterviewDraft) el.resumeInterviewDraft.hidden = false;
  } catch { /* In-memory session remains available if storage is unavailable. */ }
}

function resumeInterviewDraft() {
  let draft;
  try { draft = JSON.parse(localStorage.getItem(INTERVIEW_DRAFT_KEY) || "null"); }
  catch { draft = null; }
  if (!draft?.config || !draft.currentQuestion || !Array.isArray(draft.turns)) {
    localStorage.removeItem(INTERVIEW_DRAFT_KEY);
    el.resumeInterviewDraft.hidden = true;
    return;
  }
  state.interview = {
    sessionId: draft.sessionId || String(Date.now()),
    status: "ready",
    config: draft.config,
    resume: { name: "Resume", mimeType: "", data: "" },
    resumeSummary: String(draft.resumeSummary || "").slice(0, 5000),
    turns: draft.turns,
    currentQuestion: validateInterviewQuestion(draft.currentQuestion),
    questionNumber: Math.max(1, Number(draft.questionNumber) || 1),
    topics: Array.isArray(draft.topics) ? draft.topics.slice(0, 30) : [],
    startedAt: Date.now() - Math.max(0, Number(draft.elapsedSeconds) || 0) * 1000,
    elapsedTimer: null,
    answerLimit: 120,
    answerStartedAt: null,
    recordedAnswerSeconds: 0,
    pendingTurn: null,
    requestController: null,
    transcriptionController: null,
    requestPromise: null,
    transcriptionPromise: null,
    provider: draft.provider || "local",
    retryAction: "record"
  };
  transitionInterview("generating_question");
  startInterviewElapsedTimer();
  transitionInterview("asking_question");
  el.interviewTranscript.value = "";
  el.transcriptState.textContent = "Waiting for your answer";
  showPage("interviewRoom");
  renderInterviewRoom();
}

function interviewAnswerLimit(question) {
  const remaining = Math.max(15, state.interview.config.durationSeconds - Math.floor((Date.now() - state.interview.startedAt) / 1000));
  const category = String(question?.category || "").toLowerCase();
  const suggested = /technical|behavioral|project|situational/.test(category) ? 120 : 90;
  return Math.min(suggested, remaining);
}

async function beginInterviewAnswer() {
  const interview = state.interview;
  if (!interview || !["asking_question", "error"].includes(interview.status) || !interview.currentQuestion || state.isRecording) return;
  if (interview.startedAt && Date.now() - interview.startedAt >= interview.config.durationSeconds * 1000) {
    await finishInterview("Your planned interview time has ended.");
    return;
  }
  el.roomError.hidden = true;
  if (interview.status === "error" && !transitionInterview("asking_question")) return;
  interview.answerLimit = interviewAnswerLimit(interview.currentQuestion);
  interview.recordedAnswerSeconds = 0;
  interview.retryAction = "record";
  if (!transitionInterview("requesting_microphone")) return;
  el.roomStateLabel.textContent = "Waiting for microphone permission…";
  el.roomRecordingLabel.textContent = "CONNECTING MICROPHONE";
  el.roomRecordingHint.textContent = "Approve microphone access in your browser. Recording starts after permission is granted.";
  renderInterviewRoom();
  if (!navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === "undefined") {
    transitionInterview("error");
    showRoomError("This browser cannot record audio here. Try a current version of Chrome, Edge, or Safari with microphone access enabled.");
    return;
  }
  await startRecording();
}

async function transcribeInterviewAudio() {
  const interview = state.interview;
  if (!interview || interview.status !== "transcribing") return;
  const preview = sanitizeTranscript(el.interviewTranscript.value);
  el.roomStateLabel.textContent = "Transcribing your answer…";
  el.transcriptState.textContent = "Transcribing…";
  renderInterviewRoom();
  let transcript = "";
  let errorMessage = "";
  if (state.audioBlob?.size) {
    const controller = new AbortController();
    interview.transcriptionController = controller;
    try {
      const response = await fetch("/api/transcribe", {
        method: "POST", headers: { "content-type": state.audioBlob.type || "audio/webm" }, body: state.audioBlob, signal: controller.signal
      });
      const result = await response.json().catch(() => ({}));
      if (response.ok) transcript = String(result.text || "").trim();
      else if (result.code !== "no_api_key") {
        errorMessage = response.status === 413
          ? "This recording is too large for Vercel’s 4.5 MB upload limit. Try a shorter take."
          : response.status === 504
            ? "Transcription timed out on the hosting service. Try a shorter take."
            : result.error || `Transcription service returned ${response.status}.`;
      }
    } catch (error) {
      if (state.interview !== interview || interview.status !== "transcribing") return;
      errorMessage = "Could not reach transcription. Your live transcript is still available to review.";
    } finally {
      if (interview.transcriptionController === controller) interview.transcriptionController = null;
    }
  }
  if (state.interview !== interview || interview.status !== "transcribing") return;
  const usedBrowserTranscript = !transcript && Boolean(preview);
  if (!transcript) transcript = preview;
  if (!transcript) {
    interview.retryAction = "record";
    transitionInterview("error");
    el.transcriptState.textContent = "No speech recognized";
    showRoomError(errorMessage || "No speech was recognized. Try recording again, or check microphone access.");
    return;
  }
  el.interviewTranscript.value = transcript;
  el.transcriptState.textContent = usedBrowserTranscript ? "Browser transcript · verify before submitting" : "Review and edit before submitting";
  interview.retryAction = "record";
  transitionInterview("asking_question");
  if (errorMessage) showRoomError(`${errorMessage} The browser transcript is available below; review it before submitting.`);
  renderInterviewRoom();
}

async function submitInterviewTurn(options = {}) {
  const interview = state.interview;
  if (!interview || !["asking_question", "error"].includes(interview.status) || !interview.currentQuestion) return;
  const skipped = Boolean(options.skipped);
  const transcript = skipped ? "" : sanitizeTranscript(el.interviewTranscript.value);
  if (!skipped && transcript.split(/\s+/).filter(Boolean).length < 5) {
    showRoomError("Please add a little more to your answer, or choose Skip question.");
    return;
  }
  el.roomError.hidden = true;
  if (interview.status === "error" && !transitionInterview("asking_question")) return;
  interview.pendingTurn = interview.pendingTurn || {
    id: interview.currentQuestion.id,
    question: { ...interview.currentQuestion },
    transcript,
    skipped,
    timestamp: new Date().toISOString(),
    duration: interview.recordedAnswerSeconds || 0,
    evaluation: null
  };
  if (!transitionInterview("evaluating")) return;
  interview.retryAction = "continue";
  renderInterviewRoom();
  const elapsedSeconds = Math.floor((Date.now() - interview.startedAt) / 1000);
  const payload = {
    config: interview.config,
    resumeSummary: interview.resumeSummary,
    turns: [...interview.turns, interview.pendingTurn].map((turn) => ({
      question: turn.question.question,
      category: turn.question.category,
      topic: turn.question.topic,
      answer: turn.transcript,
      skipped: turn.skipped,
      evaluation: turn.evaluation
    })),
    currentTurn: {
      question: interview.pendingTurn.question.question,
      category: interview.pendingTurn.question.category,
      topic: interview.pendingTurn.question.topic,
      answer: interview.pendingTurn.transcript,
      skipped: interview.pendingTurn.skipped
    },
    questionNumber: interview.questionNumber,
    elapsedSeconds,
    topicsCovered: interview.topics,
    timeRemainingSeconds: Math.max(0, interview.config.durationSeconds - elapsedSeconds)
  };
  const promise = interviewRequest("/api/interview/continue", payload);
  interview.requestPromise = promise;
  try {
    const result = await promise;
    if (state.interview !== interview || interview.status !== "evaluating") return;
    if (result.evaluation && !validateInterviewEvaluation(result.evaluation)) throw new Error("The answer evaluation was incomplete. Retry to preserve this turn.");
    const isComplete = Boolean(result.complete) || interview.questionNumber >= interview.config.maxQuestions || Number(result.time_remaining_seconds) <= 0;
    const nextQuestion = isComplete ? null : validateInterviewQuestion(result.next_question);
    if (!isComplete && !nextQuestion) throw new Error("The interviewer could not prepare a valid follow-up. Retry to keep going.");
    if (!isComplete) {
      transitionInterview("preparing_follow_up");
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }
    interview.pendingTurn.evaluation = result.evaluation || null;
    interview.turns.push(interview.pendingTurn);
    if (!interview.pendingTurn.skipped && interview.pendingTurn.question.topic) interview.topics.push(interview.pendingTurn.question.topic);
    interview.pendingTurn = null;
    interview.provider = result.provider || interview.provider;
    interview.providerWarning = String(result.providerWarning || "");
    if (isComplete) {
      await finishInterview("Interview complete.");
      return;
    }
    transitionInterview("generating_question");
    interview.currentQuestion = nextQuestion;
    interview.questionNumber += 1;
    interview.recordedAnswerSeconds = 0;
    interview.retryAction = "record";
    transitionInterview("asking_question");
    persistInterviewDraft();
    el.interviewTranscript.value = "";
    el.transcriptState.textContent = "Waiting for your answer";
    renderInterviewRoom();
  } catch (error) {
    if (state.interview !== interview || interview.status === "interview_complete") return;
    interview.retryAction = "continue";
    transitionInterview("error");
    showRoomError(error.message || "Could not evaluate this answer. It is saved in this session; retry when ready.");
  } finally {
    interview.requestPromise = null;
  }
}

function validateInterviewEvaluation(evaluation) {
  const scores = evaluation?.scores;
  if (!scores || !["relevance", "accuracy", "depth", "reasoning", "clarity"].every((key) => Number.isFinite(Number(scores[key])))) return false;
  return true;
}

function retryInterviewRequest() {
  const interview = state.interview;
  if (!interview || interview.status !== "error") return;
  el.roomError.hidden = true;
  if (interview.retryAction === "start") generateInterviewOpening();
  else if (interview.retryAction === "continue") submitInterviewTurn({ retry: true });
  else if (interview.retryAction === "record") beginInterviewAnswer();
}

function showRoomError(message) {
  if (!el.roomError) return;
  el.roomError.textContent = message;
  el.roomError.hidden = false;
}

function renderInterviewRoom() {
  const interview = state.interview;
  if (!interview || !el.interviewRoom) return;
  const status = interview.status;
  const question = interview.currentQuestion;
  const count = interview.questionNumber || 1;
  const total = interview.config.maxQuestions;
  const complete = status === "interview_complete";
  const recording = status === "recording";
  const reviewReady = status === "asking_question" && Boolean(el.interviewTranscript.value.trim());
  const waiting = ["generating_question", "requesting_microphone", "evaluating", "preparing_follow_up", "transcribing"].includes(status);
  const stateLabels = {
    ready: "Ready to begin", generating_question: "Preparing your question…", requesting_microphone: "Waiting for microphone permission…", asking_question: "Your turn to answer",
    recording: "Recording your answer", transcribing: "Transcribing your answer…", evaluating: "Evaluating your response…",
    preparing_follow_up: "Preparing your next question…", interview_complete: "Interview complete", error: "Action needed"
  };
  el.roomStateLabel.textContent = stateLabels[status] || "Interview ready";
  el.roomStateDot.dataset.state = recording ? "recording" : status === "error" ? "error" : status;
  if (question) {
    el.roomQuestion.textContent = question.question;
    el.roomQuestionNumber.textContent = `QUESTION ${count} OF ${total}`;
    el.roomQuestionCategory.textContent = question.category.replace(/[_-]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
    el.roomQuestionDifficulty.textContent = question.difficulty.charAt(0).toUpperCase() + question.difficulty.slice(1).toLowerCase();
    el.roomInstruction.textContent = interview.provider === "local"
      ? interview.providerWarning || "AI service is not configured; this session is using local role-based prompts and heuristic feedback."
      : question.isFollowUp ? "Follow-up · Build on the detail you just shared." : "Take a moment to think. Start when you’re ready.";
  }
  el.roomProgress.textContent = `Question ${Math.min(count, total)} of ${total}`;
  el.roomProgressSteps.innerHTML = Array.from({ length: total }, (_, index) => {
    const step = index + 1;
    const stateName = step <= interview.turns.length ? "completed" : step === count ? "current" : "upcoming";
    return `<li class="${stateName}"><span aria-label="Question ${step}, ${stateName}"${stateName === "current" ? ' aria-current="step"' : ""}>${step}</span></li>`;
  }).join("");
  el.roomTurnCount.textContent = `${interview.turns.length} ${interview.turns.length === 1 ? "turn" : "turns"}`;
  el.roomTurnHistory.innerHTML = interview.turns.length ? interview.turns.slice().reverse().map((turn, index) => `
    <article class="room-turn"><strong>${escapeHtml(turn.question.question)}</strong><p>${escapeHtml(turn.skipped ? "Skipped" : turn.transcript || "No transcript saved.")}</p></article>
  `).join("") : '<p class="room-empty">Your completed answers will appear here.</p>';
  el.startAnswer.hidden = !(status === "asking_question" && !reviewReady) && !(status === "error" && interview.retryAction === "record");
  el.startAnswer.textContent = status === "error" && interview.retryAction === "record" ? "Try again" : "Start answer";
  el.startAnswer.disabled = recording || waiting || complete;
  el.endAnswer.hidden = !recording;
  el.retryAnswer.hidden = !reviewReady;
  el.submitAnswer.hidden = !reviewReady;
  el.returnToInterviewSetup.hidden = !complete;
  document.getElementById("endInterview").hidden = complete;
  el.skipQuestion.hidden = !(status === "asking_question" && !reviewReady);
  el.retryInterviewRequest.hidden = status !== "error" || interview.retryAction === "record";
  el.retryInterviewRequest.textContent = interview.retryAction === "start" ? "Retry question" : "Retry evaluation";
  el.roomRecordingLabel.textContent = recording ? "RECORDING" : reviewReady ? "ANSWER READY TO SUBMIT" : "YOUR TURN TO ANSWER";
  if (status === "asking_question" && !reviewReady) el.roomRecordingHint.textContent = `Up to ${formatTime(interview.answerLimit)} for this answer. Your microphone starts only when you choose.`;
  if (complete) el.roomRecordingHint.textContent = "Your interview summary is ready.";
  if (el.roomError.hidden) el.roomError.textContent = "";
}

function endInterviewWithConfirm() {
  const interview = state.interview;
  if (!interview || interview.status === "interview_complete") return;
  const recording = state.isRecording;
  const pending = Boolean(interview.pendingTurn);
  const message = recording
    ? "End this interview? The answer currently recording will be discarded; completed answers will be saved."
    : pending
      ? "End this interview now? The answer currently being evaluated will not be included. Earlier completed answers will be saved."
      : el.interviewTranscript.value.trim()
      ? "End this interview now? The current unsubmitted answer will not be evaluated or included. Completed answers will be saved in your History."
      : "End this interview now? Completed answers will be saved in your History.";
  if (!window.confirm(message)) return;
  if (recording) stopRecording(false);
  if (interview.requestController) interview.requestController.abort();
  if (interview.transcriptionController) interview.transcriptionController.abort();
  finishInterview("Interview ended early.");
}

async function finishInterview(reason) {
  const interview = state.interview;
  if (!interview || interview.status === "interview_complete") return;
  if (state.isRecording) stopRecording(false);
  clearInterval(interview.elapsedTimer);
  interview.elapsedTimer = null;
  if (interview.requestController) interview.requestController.abort();
  if (interview.transcriptionController) interview.transcriptionController.abort();
  releaseMicrophone();
  if (!transitionInterview("interview_complete")) return;
  stopWaveform();
  try { localStorage.removeItem(INTERVIEW_DRAFT_KEY); } catch { /* ignore unavailable storage */ }
  if (el.resumeInterviewDraft) el.resumeInterviewDraft.hidden = true;
  interview.resume.data = "";
  if (!interview.turns.length) {
    el.roomStateLabel.textContent = reason;
    el.roomInstruction.textContent = "No interview turns were completed, so nothing was added to History.";
    return;
  }
  if (!interview.turns.some((turn) => turn.evaluation)) {
    const answerText = interview.turns.map((turn, index) => `Question ${index + 1}: ${turn.question.question}\n${turn.skipped ? "[Skipped]" : `Answer: ${turn.transcript}`}`).join("\n\n");
    const duration = Math.max(1, Math.floor((Date.now() - interview.startedAt) / 1000));
    const speakingSeconds = interview.turns.reduce((sum, turn) => sum + Number(turn.duration || 0), 0);
    const answerTranscript = interview.turns.filter((turn) => !turn.skipped).map((turn) => turn.transcript).join(" ");
    const words = (answerTranscript.match(wordRegex) || []).length;
    const fillerCount = countFillerWords(answerTranscript);
    const result = {
      id: interview.sessionId, date: new Date().toISOString(),
      challenge: { label: `Interview · ${interview.config.position}`, mode: "interview", text: interview.turns[0]?.question.question || "Interview session", difficulty: interview.config.difficulty, duration, position: interview.config.position },
      transcript: answerText, overall: null, scores: {}, strengths: [], improvements: [],
      advice: "No answers were evaluated. Skipped turns are recorded without a score.",
      provider: interview.provider || "local",
      metrics: { duration: speakingSeconds, words, wpm: speakingSeconds ? Math.round((words / speakingSeconds) * 60) : 0, fillerCount, fillerRate: words ? round1((fillerCount / words) * 100) : 0 },
      interview: { turns: interview.turns, config: interview.config, completionReason: reason }
    };
    saveAttempt(result);
    renderProgress();
    renderHistory();
    renderResult(result);
    showPage("results");
    return;
  }
  const evaluated = interview.turns.filter((turn) => turn.evaluation);
  const keys = ["relevance", "accuracy", "depth", "reasoning", "clarity"];
  const scores = Object.fromEntries(keys.map((key) => [key, Number((evaluated.reduce((sum, turn) => sum + Number(turn.evaluation.scores[key] || 0), 0) / evaluated.length).toFixed(1))]));
  const overall = Number((evaluated.reduce((sum, turn) => sum + Number(turn.evaluation.overall || averageScores(turn.evaluation.scores)), 0) / evaluated.length).toFixed(1));
  const answerText = interview.turns.map((turn, index) => `Question ${index + 1}: ${turn.question.question}\n${turn.skipped ? "[Skipped]" : `Answer: ${turn.transcript}`}\n${turn.evaluation?.feedback ? `Feedback: ${turn.evaluation.feedback}\nAnswer score: ${Number(turn.evaluation.overall || averageScores(turn.evaluation.scores)).toFixed(1)}/10` : ""}`).join("\n\n");
  const answerTranscript = interview.turns.filter((turn) => !turn.skipped).map((turn) => turn.transcript).join(" ");
  const words = (answerTranscript.match(wordRegex) || []).length;
  const fillerCount = countFillerWords(answerTranscript);
  const duration = Math.max(1, Math.floor((Date.now() - interview.startedAt) / 1000));
  const speakingSeconds = Math.max(1, interview.turns.reduce((sum, turn) => sum + Number(turn.duration || 0), 0));
  const result = {
    id: interview.sessionId,
    date: new Date().toISOString(),
    challenge: { label: `Interview · ${interview.config.position}`, mode: "interview", text: interview.turns[0]?.question.question || "Interview session", difficulty: interview.config.difficulty, duration, position: interview.config.position },
    transcript: answerText,
    overall, scores,
    strengths: [...new Set(evaluated.flatMap((turn) => turn.evaluation.strengths || []))].slice(0, 6),
    improvements: [...new Set(evaluated.flatMap((turn) => turn.evaluation.improvements || []))].slice(0, 6),
    advice: [...new Set(evaluated.flatMap((turn) => turn.evaluation.improvements || []))].slice(0, 3),
    provider: interview.provider || "api",
    metrics: { duration: speakingSeconds, words, wpm: Math.round((words / speakingSeconds) * 60), fillerCount, fillerRate: words ? round1((fillerCount / words) * 100) : 0 },
    interview: { turns: interview.turns, config: interview.config, completionReason: reason }
  };
  saveAttempt(result);
  renderProgress();
  renderHistory();
  renderResult(result);
  el.resultKind.textContent = "Interview report";
  el.resultSection.textContent = `${evaluated.length} answers evaluated · ${interview.turns.filter((turn) => turn.skipped).length} skipped`;
  el.resultDuration.textContent = `${interview.config.durationMinutes} minute session · ${formatTime(duration)} elapsed`;
  if (el.resultTranscript) el.resultTranscript.innerHTML = renderInterviewReportTurns(interview.turns);
  if (el.retryAdvice) {
    const practicePlan = result.advice.length ? result.advice : ["Keep using specific examples and a clear beginning, middle, and outcome in each answer."];
    el.retryAdvice.innerHTML = `<ul class="practice-plan-list">${practicePlan.map((tip) => `<li>${escapeHtml(tip)}</li>`).join("")}</ul>`;
  }
  el.scoreSummary.textContent = `${evaluated.length} evaluated answers · ${interview.turns.length} turns · ${reason}`;
  showPage("results");
}

function renderInterviewReportTurns(turns) {
  return turns.map((turn, index) => {
    const question = turn.question || {};
    const score = turn.evaluation
      ? Number(turn.evaluation.overall || averageScores(turn.evaluation.scores)).toFixed(1)
      : null;
    return `<article class="interview-turn-report">
      <header class="interview-turn-heading">
        <div><span class="turn-index">Question ${index + 1}</span><span class="turn-category">${escapeHtml(question.category || "Interview")}</span></div>
        ${score ? `<span class="turn-score">${score}<small>/10</small></span>` : `<span class="turn-skipped">${turn.skipped ? "Skipped" : "Not scored"}</span>`}
      </header>
      <div class="turn-report-content">
        <section class="turn-report-question"><h3>Question</h3><p>${escapeHtml(question.question || "Question unavailable.")}</p></section>
        <section class="turn-report-answer"><h3>Your answer</h3><p>${escapeHtml(turn.skipped ? "This question was skipped." : turn.transcript || "No answer transcript was saved.")}</p></section>
        ${turn.evaluation?.feedback ? `<section class="turn-report-feedback"><h3>Interviewer feedback</h3><p>${escapeHtml(turn.evaluation.feedback)}</p></section>` : ""}
      </div>
    </article>`;
  }).join("");
}

function averageScores(scores) {
  const values = Object.values(scores || {}).map(Number).filter(Number.isFinite);
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
}

window.addEventListener("beforeunload", (event) => {
  if (state.interview && !["interview_complete", "ready"].includes(state.interview.status)) {
    if (state.isRecording) stopRecording(false);
    releaseMicrophone();
    event.preventDefault();
    event.returnValue = "";
  }
});

// ==========================================
// Home Screen Button Click Sound Listener (Practice & Interview Modes)
// ==========================================
(function initHomeScreenButtonClickSound() {
  loadDigitalClickSound();

  window.addEventListener(
    "pointerdown",
    () => {
      const ctx = getSfxContext();
      if (ctx && digitalClickRawBuffer && !digitalClickBuffer) {
        decodeDigitalClickAudio(ctx).catch(() => {});
      }
    },
    { once: true, passive: true }
  );

  document.addEventListener(
    "click",
    (event) => {
      if (!isHomeScreenActive()) return;
      if (event.target.tagName === "INPUT") return;

      const btn = event.target.closest("button, [role='button'], .choice-card, .choice-chip, .resume-drop, .button, .icon-button");
      if (!btn) return;

      if (btn.closest("#setup") || btn.id === "modeSwitch" || btn.id === "themeToggle") {
        playButtonClickSound();
      }
    },
    true
  );
})();

