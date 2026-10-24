// ---- Mode-shift motion engine ----
// Deterministic keyframe timeline for the practice <-> interview story transition.
// Every animated value is sampled once per frame and written as transform/opacity/fill only.
(function () {
// ---- Mode-shift motion engine ----
// A small deterministic keyframe timeline. Every animated value is sampled from keyframes
// at time t and written once per frame (transform / opacity / fill only, so it stays on the
// compositor-friendly path). Springs, squash & stretch, anticipation, overshoot and
// particle bursts are what make it read as designed motion instead of stacked CSS keyframes.
const MS_EASE = {
  linear: (t) => t,
  hold: (t) => (t >= 1 ? 1 : 0),
  inQuad: (t) => t * t,
  inCubic: (t) => t * t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  inOutQuart: (t) => (t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2),
  outExpo: (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  inBack: (t) => 2.70158 * t * t * t - 1.70158 * t * t,
  outBack: (t) => 1 + 2.70158 * Math.pow(t - 1, 3) + 1.70158 * Math.pow(t - 1, 2),
  spring: (t) => (t >= 1 ? 1 : 1 - Math.exp(-6.5 * t) * Math.cos(11 * t)),
  springSoft: (t) => (t >= 1 ? 1 : 1 - Math.exp(-5 * t) * Math.cos(8 * t))
};

function msLerp(a, b, e) {
  if (Array.isArray(a)) return a.map((v, i) => v + (b[i] - v) * e);
  return a + (b - a) * e;
}

// keys: [[time, value, easeNameForTheSegmentEndingHere], ...] in ascending time order.
function msSample(keys, t) {
  if (t <= keys[0][0]) return keys[0][1];
  for (let i = 1; i < keys.length; i += 1) {
    const k = keys[i];
    if (t < k[0]) {
      const prev = keys[i - 1];
      const ease = MS_EASE[k[2] || "inOutCubic"];
      return msLerp(prev[1], k[1], ease((t - prev[0]) / (k[0] - prev[0])));
    }
  }
  return keys[keys.length - 1][1];
}

function msRng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function buildShiftTimeline(overlay, dir, origin) {
  const toInt = dir === "to-int";
  const q = (sel) => overlay.querySelector(sel);
  const NS = "http://www.w3.org/2000/svg";
  const states = new Map();
  const tracks = [];
  const procs = [];
  const fxNodes = [];
  const TRANSFORM_PROPS = new Set(["x", "y", "r", "s", "sx", "sy", "k"]);

  const S = (el) => {
    let st = states.get(el);
    if (!st) {
      st = { x: 0, y: 0, r: 0, s: 1, sx: 1, sy: 1, k: 1, o: null, fill: null, base: "", t: false };
      states.set(el, st);
    }
    return st;
  };
  const K = (el, name, keys) => {
    if (!el) return;
    if (TRANSFORM_PROPS.has(name)) S(el).t = true;
    for (let i = 1; i < keys.length; i += 1) {
      if (keys[i][0] < keys[i - 1][0]) console.warn("mode-shift keys out of order", name, keys);
    }
    S(el);
    tracks.push({ el, name, keys });
  };
  const C = (keys, setter) => tracks.push({ custom: setter, keys });

  const bg = q(".ms-bg");
  const backCas = q(".ms-back-cas");
  const backInt = q(".ms-back-int");
  const bursts = [...overlay.querySelectorAll(".ms-burst")];
  const wordsA = [...overlay.querySelectorAll(".ms-word-a")];
  const wordsB = [...overlay.querySelectorAll(".ms-word-b")];
  const stage = q(".ms-stage");
  const face = q(".ms-face");
  const person = q(".ms-person");
  const imgInt = q(".ms-img-int");
  const imgCas = q(".ms-img-cas");
  const capA = q(".ms-cap-a");
  const capB = q(".ms-cap-b");
  const wipeLead = q(".ms-wipe");
  const wipeTrail = q(".ms-wipe2");
  const fx = q(".ms-fx");
  const fxBack = q(".ms-fxback");
  S(imgInt);
  S(imgCas);
  S(capA).base = "translateX(-50%) ";
  S(capB).base = "translateX(-50%) ";

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxR = Math.hypot(Math.max(origin.x, vw - origin.x), Math.max(origin.y, vh - origin.y)) + 8;

  // The incoming outfit is revealed by a soft circular mask growing out of her chest.
  const faceW = face.offsetWidth || 360;
  const faceH = face.offsetHeight || 373;
  const revealMax = Math.hypot(faceW * 0.5, faceH * 0.8) + 90;
  const incoming = toInt ? imgInt : imgCas;
  incoming.style.zIndex = "2";
  (toInt ? imgCas : imgInt).style.zIndex = "1";
  const setMask = (r) => {
    const m = `radial-gradient(circle at 50% 74%, #000 ${r.toFixed(1)}px, transparent ${(r + 70).toFixed(1)}px)`;
    incoming.style.webkitMaskImage = m;
    incoming.style.maskImage = m;
  };

  // Sizes for the fx layer (its viewBox is the artwork's pixel size, ~1.6x the old 600-wide space).
  const U = 1.6;
  const CHEST = { x: 480, y: 740 };

  // --- shared: stage, iris reveal ---
  C([[0, 0], [0.8, maxR, "inOutQuart"]], (v) => {
    bg.style.clipPath = `circle(${v.toFixed(1)}px at ${origin.x}px ${origin.y}px)`;
  });
  K(stage, "o", [[0.05, 0], [0.4, 1, "outCubic"]]);

  // --- shared: full-screen colour worlds, spinning sunburst, sliding giant words ---
  S(backCas);
  S(backInt);
  const faceRect = face.getBoundingClientRect();
  const chestX = faceRect.left + faceRect.width * 0.5;
  const chestY = faceRect.top + faceRect.height * 0.74;
  const coverR = Math.hypot(Math.max(chestX, vw - chestX), Math.max(chestY, vh - chestY)) + 12;
  const inBack = toInt ? backInt : backCas;
  inBack.style.zIndex = "2";
  (toInt ? backCas : backInt).style.zIndex = "1";
  const tChange = toInt ? 2.42 : 1.12;
  C([[tChange, 0], [tChange + 0.95, coverR, "outCubic"]], (r) => {
    inBack.style.clipPath = `circle(${r.toFixed(1)}px at ${chestX.toFixed(1)}px ${chestY.toFixed(1)}px)`;
  });
  bursts.forEach((b, i) => {
    const dirn = i === 0 ? 1 : -1;
    K(b, "r", [[0, 0], [6, 52 * dirn, "linear"]]);
    K(b, "s", [[0, 1], [tChange, 1], [tChange + 0.15, 1.22, "outCubic"], [tChange + 0.85, 1, "inOutCubic"]]);
  });
  wordsA.forEach((w) => K(w, "x", [[0, 0], [6, -660, "linear"]]));
  wordsB.forEach((w) => K(w, "x", [[0, 0], [6, 540, "linear"]]));

  // --- shared: landing with squash & stretch, then a living idle ---
  K(person, "r", [[0.12, -5], [0.95, 0, "spring"]]);
  K(person, "sx", [[0.12, 0.86], [0.4, 1.07, "outCubic"], [0.95, 1, "spring"]]);
  K(person, "sy", [[0.12, 1.16], [0.4, 0.94, "outCubic"], [0.95, 1, "spring"]]);
  S(person).t = true;
  procs.push((t) => {
    const w = Math.min(1, Math.max(0, (t - 0.85) / 0.4));
    S(person).y += Math.sin(t * 2.2) * 2.2 * w;
    S(person).r += Math.sin(t * 1.3 + 1) * 0.6 * w;
    S(person).sy *= 1 + Math.sin(t * 2.2) * 0.004 * w;
  });

  // --- particle burst + shockwave rings for the outfit change ---
  function burst(t0, ox, oy, colors, seed) {
    const rand = msRng(seed);
    const ps = [];
    for (let i = 0; i < 26; i += 1) {
      const kind = i % 3;
      let node;
      if (kind === 0) {
        node = document.createElementNS(NS, "circle");
        node.setAttribute("r", String((4 + rand() * 5) * U));
      } else if (kind === 1) {
        const w = (10 + rand() * 9) * U;
        node = document.createElementNS(NS, "rect");
        node.setAttribute("x", String(-w / 2));
        node.setAttribute("y", String(-3.5 * U));
        node.setAttribute("width", String(w));
        node.setAttribute("height", String(7 * U));
        node.setAttribute("rx", "3");
      } else {
        node = document.createElementNS(NS, "path");
        node.setAttribute("d", `M0 ${-10 * U}L${2.8 * U} ${-2.8 * U}L${10 * U} 0L${2.8 * U} ${2.8 * U}L0 ${10 * U}L${-2.8 * U} ${2.8 * U}L${-10 * U} 0L${-2.8 * U} ${-2.8 * U}Z`);
      }
      node.style.fill = colors[i % colors.length];
      node.style.opacity = "0";
      node.style.transformBox = "fill-box";
      node.style.transformOrigin = "center";
      fx.appendChild(node);
      fxNodes.push(node);
      const a = -Math.PI / 2 + (rand() - 0.5) * Math.PI * 1.9;
      const sp = (360 + rand() * 420) * U;
      ps.push({ node, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, life: 1 + rand() * 0.6, spin: (rand() - 0.5) * 900, size: 1 + rand() * 0.8 });
    }
    procs.push((t) => {
      const u0 = t - t0;
      for (const p of ps) {
        if (u0 < 0 || u0 > p.life) { p.node.style.opacity = "0"; continue; }
        const u = u0 / p.life;
        const x = ox + p.vx * u0;
        const y = oy + p.vy * u0 + 0.5 * 1100 * U * u0 * u0;
        const sc = p.size * Math.min(1, u0 / 0.07) * (u > 0.7 ? 1 - (u - 0.7) / 0.3 : 1);
        p.node.style.opacity = "1";
        p.node.style.transform = `translate(${x.toFixed(1)}px,${y.toFixed(1)}px) rotate(${(p.spin * u0).toFixed(1)}deg) scale(${sc.toFixed(3)})`;
      }
    });
  }
  function ring(t0, ox, oy, stroke, maxRadius, width) {
    const c = document.createElementNS(NS, "circle");
    c.setAttribute("cx", String(ox));
    c.setAttribute("cy", String(oy));
    c.setAttribute("r", "10");
    c.style.fill = "none";
    c.style.stroke = stroke;
    c.style.opacity = "0";
    fxBack.appendChild(c);
    fxNodes.push(c);
    procs.push((t) => {
      const p = (t - t0) / 0.7;
      if (p < 0 || p > 1) { c.style.opacity = "0"; return; }
      c.setAttribute("r", String((30 + maxRadius * MS_EASE.outExpo(p)) * U));
      c.style.strokeWidth = String(width * U * (1 - p));
      c.style.opacity = String(0.9 * (1 - p));
    });
  }

  // --- layered wipe: yellow leader, white follower; both fully cover the page between hold keys ---
  function wipe(el, t0) {
    const sign = toInt ? 1 : -1;
    C([[t0, 0], [t0 + 1.5, 1, "linear"]], (p) => {
      let x;
      if (p < 0.4) x = -101 + 101 * MS_EASE.outCubic(p / 0.4);
      else if (p <= 0.6) x = 0;
      else x = 101 * MS_EASE.inCubic((p - 0.6) / 0.4);
      el.style.transform = `translate3d(${(sign * x).toFixed(2)}%,0,0)`;
    });
  }

  let swapAt;
  let endAt;

  if (toInt) {
    // ======== casual -> interview: she squares up, then snaps into the black blazer and red tie ========
    // slow push-in for tension, then crouch -> jump on the change
    K(person, "s", [[0.12, 0.5], [0.95, 1, "spring"], [1.1, 1], [2.15, 1.045, "inOutCubic"], [2.3, 1.045], [2.42, 0.93, "inOutCubic"], [2.95, 1.0, "spring"]]);
    K(person, "y", [[0.12, 70], [0.85, 0, "outExpo"], [2.3, 0], [2.42, 12, "inOutCubic"], [2.75, -14, "outCubic"], [3.25, 0, "spring"]]);
    K(person, "x", [[0, 0]]);
    // small confident head-tilt after the change
    procs.push((t) => {
      const u = t - 3.0;
      if (u > 0) S(person).r += -2.4 * Math.exp(-4 * u) * Math.sin(u * 10);
    });
    C([[2.42, -90], [3.1, revealMax, "outCubic"]], setMask);
    C([[2.42, 1], [2.55, 1.13, "outCubic"], [3.0, 1, "inOutCubic"]], (v) => { person.style.filter = v > 1.001 ? `brightness(${v.toFixed(3)})` : ""; });
    ring(2.42, CHEST.x, CHEST.y, "var(--ink)", 250, 16);
    ring(2.5, CHEST.x, CHEST.y, "#ffe600", 190, 12);
    burst(2.42, CHEST.x, CHEST.y, ["#ffe600", "#d62839", "#e07a5f", "#ffffff", "#272a33"], 7);

    K(capA, "o", [[0.62, 0], [0.7, 1, "outCubic"], [1.85, 1], [2.05, 0, "inCubic"]]);
    K(capA, "y", [[0.62, 26], [0.95, 0, "outBack"], [1.85, 0], [2.05, -14, "inCubic"]]);
    K(capA, "s", [[0.62, 0.7], [0.95, 1, "outBack"]]);
    K(capA, "r", [[0.62, -6], [0.95, -1.5, "outBack"]]);
    K(capB, "o", [[2.5, 0], [2.6, 1, "outCubic"]]);
    K(capB, "y", [[2.5, 22], [2.95, 0, "outBack"]]);
    K(capB, "s", [[2.5, 0.9], [2.95, 1, "spring"]]);

    wipe(wipeLead, 3.45);
    wipe(wipeTrail, 3.57);
    swapAt = 4.26;
    endAt = 5.12;
  } else {
    // ======== interview -> casual: she loosens up, the blazer melts into the coral cardigan ========
    K(person, "s", [[0.12, 0.5], [0.95, 1, "spring"], [1.0, 1], [1.12, 0.93, "inOutCubic"], [1.6, 1, "spring"]]);
    K(person, "y", [[0.12, 70], [0.85, 0, "outExpo"], [1.0, 0], [1.12, 12, "inOutCubic"], [1.4, -14, "outCubic"], [1.95, 0, "spring"]]);
    // happy wiggle + bounce after the change
    procs.push((t) => {
      const u = t - 1.4;
      if (u > 0) {
        const decay = Math.exp(-2.2 * u);
        S(person).r += 4 * decay * Math.sin(u * 16);
        S(person).y -= 5 * decay * Math.abs(Math.sin(u * 9));
      }
    });
    C([[1.12, -90], [1.8, revealMax, "outCubic"]], setMask);
    C([[1.12, 1], [1.25, 1.12, "outCubic"], [1.7, 1, "inOutCubic"]], (v) => { person.style.filter = v > 1.001 ? `brightness(${v.toFixed(3)})` : ""; });
    ring(1.12, CHEST.x, CHEST.y, "var(--ink)", 250, 16);
    ring(1.2, CHEST.x, CHEST.y, "#ffe600", 190, 12);
    burst(1.12, CHEST.x, CHEST.y, ["#ffe600", "#168c91", "#e62e50", "#f5bfd5", "#ffffff"], 19);

    K(capA, "o", [[0.4, 0], [0.5, 1, "outCubic"], [1.55, 1], [1.75, 0, "inCubic"]]);
    K(capA, "y", [[0.4, 20], [0.8, 0, "outBack"], [1.55, 0], [1.75, -12, "inCubic"]]);
    K(capA, "s", [[0.4, 0.92], [0.8, 1, "spring"]]);
    K(capB, "o", [[1.7, 0], [1.78, 1, "outCubic"]]);
    K(capB, "y", [[1.7, 30], [2.0, 0, "outBack"]]);
    K(capB, "s", [[1.7, 0.6], [2.0, 1, "outBack"]]);
    K(capB, "r", [[1.7, 6], [2.0, -1.5, "outBack"]]);

    wipe(wipeLead, 2.0);
    wipe(wipeTrail, 2.12);
    swapAt = 2.81;
    endAt = 3.68;
  }

  function reset(st) {
    st.x = 0; st.y = 0; st.r = 0; st.s = 1; st.sx = 1; st.sy = 1; st.k = 1; st.o = null; st.fill = null;
  }
  function apply(el, st) {
    if (st.o !== null) el.style.opacity = st.o.toFixed(3);
    if (st.t) {
      el.style.transform = `${st.base}translate(${st.x.toFixed(2)}px,${st.y.toFixed(2)}px) rotate(${st.r.toFixed(2)}deg) scale(${(st.s * st.sx).toFixed(4)},${(st.s * st.sy * st.k).toFixed(4)})`;
    }
  }

  return {
    swapAt,
    endAt,
    evaluate(t) {
      for (const st of states.values()) reset(st);
      for (const tr of tracks) {
        const v = msSample(tr.keys, t);
        if (tr.custom) tr.custom(v);
        else S(tr.el)[tr.name] = v;
      }
      for (const p of procs) p(t);
      for (const [el, st] of states) apply(el, st);
    },
    dispose() {
      fxNodes.forEach((n) => n.remove());
      for (const el of states.keys()) el.removeAttribute("style");
      [bg, wipeLead, wipeTrail].forEach((el) => el && el.removeAttribute("style"));
    }
  };
}

window.buildShiftTimeline = buildShiftTimeline;
})();
