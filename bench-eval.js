const fs = require("fs");
const key = fs.readFileSync(".env", "utf8").match(/^GEMINI_API_KEY=(.*)$/m)[1].trim();

const sys = "You are a strict, expert impromptu speaking coach. You are evaluating a REAL speech a student just gave, word-for-word, in the challenge mode \"word\" on the prompt \"Discipline\" (difficulty: Medium).\n" +
  "Rules:\n" +
  "1. Read the transcript carefully and ground EVERY point of feedback in something the speaker actually said — quote or paraphrase their exact words. Never give generic advice that could apply to any speech.\n" +
  "2. Be critical, not a cheerleader. Typical overall scores are 4-7. Give 8+ only for genuinely exceptional speeches; give low scores for filler-heavy, rambling, off-topic, or thin speeches.\n" +
  "3. Count filler words (uh, um, like, you know, so) and penalize fluency/coherence accordingly. Note if the speech used a clear opening, examples, transitions, and a conclusion.\n" +
  "4. Return EXACTLY 6 strengths and 6 improvements — each one a single specific, actionable sentence tied to the actual content.\n" +
  "5. The advice must be a detailed 2-3 sentence concrete coaching tip specific to THIS speech.\n" +
  "Respond ONLY in JSON with exactly this structure: {\"overall\": number 1-10, \"scores\": {\"content\": 1-10, \"relevance\": 1-10, \"coherence\": 1-10, \"vocabulary\": 1-10, \"fluency\": 1-10, \"structure\": 1-10}, \"strengths\": [6 strings], \"improvements\": [6 strings], \"advice\": string}. Use only plain ASCII characters.";

const user = 'Speech Transcript to evaluate: "So uh today I want to talk about discipline. Like you know when people say discipline is the key to success, and honestly I used to roll my eyes at that, but then I started waking up at six and doing my work before everyone else and I noticed my whole day just got better. Its not about motivation, motivation is a feeling and feelings come and go. But discipline is a habit, a system. You do it even when you dont feel like it. I think the biggest thing is to start small, so you actually keep doing it, and then build from there. So yeah, discipline over motivation, thats what I believe."\nSpeech Duration: 60 seconds. Challenge difficulty: Medium.';

(async () => {
  const t0 = Date.now();
  const r = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent?key=" + key, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ parts: [{ text: user }] }],
      systemInstruction: { parts: [{ text: sys }] },
      generationConfig: { responseMimeType: "application/json" }
    })
  });
  const j = await r.json();
  const text = (j.candidates && j.candidates[0] && j.candidates[0].content && j.candidates[0].content.parts && j.candidates[0].content.parts[0].text) || "";
  console.log("time: " + ((Date.now() - t0) / 1000).toFixed(1) + "s http" + r.status);
  try {
    const p = JSON.parse(text.replace(/^```json\s*/i, "").replace(/```$/, "").trim());
    console.log("overall: " + p.overall);
    console.log("scores: " + JSON.stringify(p.scores));
    console.log("strengths (" + p.strengths.length + "):");
    p.strengths.forEach((s) => console.log("  - " + s));
    console.log("improvements (" + p.improvements.length + "):");
    p.improvements.forEach((s) => console.log("  - " + s));
    console.log("advice: " + p.advice);
  } catch (e) {
    console.log("PARSE ERROR: " + e.message);
    console.log(text);
  }
})();