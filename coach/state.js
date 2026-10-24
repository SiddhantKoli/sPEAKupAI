import { COACH_BASES, COACH_PALETTE, HAIR_DEFAULTS, coachOptionsFor } from "./catalog.js";

export const COACH_STORAGE_KEY = "speakup-profile-v1";
const OLD_HAIR_STYLE = { "curly-bob": "curly", "side-braid": "sides", pixie: "shortCurly", "long-wavy": "longButNotTooLong", "combed-back": "shortWaved", "side-part": "theCaesarAndSidePart", "bald-tuften": "shortFlat", "short-crop": "shortRound", "wild-tufts": "frizzle" };
const OLD_GLASSES = { square: "prescription02", none: "none", round: "round", sunglasses: "sunglasses" };
const OLD_CLOTHES = { blazer: "blazerAndShirt", cardigan: "collarAndSweater", sweater: "collarAndSweater", hoodie: "hoodie", shirt: "shirtCrewNeck" };
const OLD_SKIN_TONES = { "#edc39c": "#edb98a", "#d99d76": "#d08b5b", "#bd805e": "#ae5d29" };
const OLD_BASES = { grandma: "woman", grandpa: "man", woman: "woman", man: "man" };
const VALID = {
  hair: new Set(coachOptionsFor("hair", "woman").concat(coachOptionsFor("hair", "man")).map((part) => part.id)),
  glasses: new Set(coachOptionsFor("glasses").map((part) => part.id)),
  hats: new Set(coachOptionsFor("hats").map((part) => part.id)),
  eyes: new Set(coachOptionsFor("eyes").map((part) => part.id)),
  mouth: new Set(coachOptionsFor("mouth").map((part) => part.id)),
  brows: new Set(coachOptionsFor("brows").map((part) => part.id)),
  facialHair: new Set(coachOptionsFor("facialHair", "man").map((part) => part.id)),
  neck: new Set(coachOptionsFor("neckwear").map((part) => part.id))
};

export function defaultCoachConfig() {
  return withLegacyFields({
    version: 3,
    base: "woman",
    skin: COACH_PALETTE.skin[1],
    hair: { style: HAIR_DEFAULTS.woman, color: "#5a4035" },
    glasses: { style: "prescription02", color: COACH_PALETTE.glasses[0] },
    top: { style: "blazerAndShirt", color: "#0058be", pattern: "solid" },
    neck: { style: "scarf", color: COACH_PALETTE.green },
    hat: { style: "none", color: COACH_PALETTE.blue },
    face: { eyes: "default", mouth: "smile", brows: "default", facialHair: "none" },
    accessories: []
  });
}

export function normalizeCoachConfig(input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  const defaults = defaultCoachConfig();
  const base = OLD_BASES[raw.base] || OLD_BASES[raw.character] || defaults.base;
  const rawHair = raw.hair && typeof raw.hair === "object" ? raw.hair : {};
  const oldHairColor = typeof raw.hair === "string" ? raw.hair : raw.hairColor;
  const hairColor = validColor(rawHair.color || oldHairColor, COACH_PALETTE.hair) || defaults.hair.color;
  const oldHairStyle = OLD_HAIR_STYLE[rawHair.style] || rawHair.style;
  const hairChoices = new Set(coachOptionsFor("hair", base).map((part) => part.id));
  const hairStyle = hairChoices.has(oldHairStyle) ? oldHairStyle : HAIR_DEFAULTS[base];
  const rawGlasses = raw.glasses && typeof raw.glasses === "object" ? raw.glasses : {};
  const rawTop = raw.top && typeof raw.top === "object" ? raw.top : {};
  const rawNeck = raw.neck && typeof raw.neck === "object" ? raw.neck : {};
  const rawHat = raw.hat && typeof raw.hat === "object" ? raw.hat : {};
  const rawFace = raw.face && typeof raw.face === "object" ? raw.face : {};
  const oldGlasses = rawGlasses.style || (typeof raw.glasses === "string" ? raw.glasses : defaults.glasses.style);
  const oldTop = rawTop.style || defaults.top.style;
  const mappedTop = OLD_CLOTHES[oldTop] || oldTop;
  const topChoices = new Set(coachOptionsFor("clothes", base).map((part) => part.id));
  const accessories = Array.isArray(raw.accessories)
    ? [...new Set(raw.accessories.filter((item) => typeof item === "string" && coachOptionsFor("extras", base).some((part) => part.id === item) && item !== "none"))].slice(0, 3)
    : [];

  return withLegacyFields({
    ...defaults,
    ...raw,
    version: 3,
    base,
    skin: OLD_SKIN_TONES[String(raw.skin || "").toLowerCase()] || validColor(raw.skin, COACH_PALETTE.skin) || defaults.skin,
    hair: { style: hairStyle, color: hairColor },
    glasses: {
      style: VALID.glasses.has(OLD_GLASSES[oldGlasses] || oldGlasses) ? (OLD_GLASSES[oldGlasses] || oldGlasses) : "none",
      color: validColor(rawGlasses.color, COACH_PALETTE.glasses) || defaults.glasses.color
    },
    top: {
      style: topChoices.has(mappedTop) ? mappedTop : defaults.top.style,
      color: validColor(rawTop.color || raw.shirt, COACH_PALETTE.clothes) || defaults.top.color,
      pattern: ["solid", "stripes", "checks", "dots"].includes(rawTop.pattern) ? rawTop.pattern : "solid"
    },
    neck: {
      style: VALID.neck.has(rawNeck.style || raw.accessory) ? (rawNeck.style || raw.accessory) : defaults.neck.style,
      color: validColor(rawNeck.color, COACH_PALETTE.clothes) || defaults.neck.color
    },
    hat: {
      style: VALID.hats.has(rawHat.style) ? rawHat.style : "none",
      color: validColor(rawHat.color, COACH_PALETTE.clothes) || defaults.hat.color
    },
    face: {
      eyes: VALID.eyes.has(rawFace.eyes) ? rawFace.eyes : defaults.face.eyes,
      mouth: VALID.mouth.has(rawFace.mouth) ? rawFace.mouth : defaults.face.mouth,
      brows: VALID.brows.has(rawFace.brows) ? rawFace.brows : defaults.face.brows,
      facialHair: base === "man" && VALID.facialHair.has(rawFace.facialHair) ? rawFace.facialHair : "none"
    },
    accessories
  });
}

function validColor(value, allowed) {
  if (typeof value !== "string" || !/^#[\da-f]{6}$/i.test(value)) return null;
  return allowed && !allowed.includes(value.toLowerCase()) ? null : value.toLowerCase();
}

export function withLegacyFields(config) {
  const normalized = { ...config };
  const base = COACH_BASES.includes(normalized.base) ? normalized.base : "woman";
  const hair = typeof normalized.hair === "object" ? normalized.hair : { style: HAIR_DEFAULTS[base], color: COACH_PALETTE.hair[1] };
  const glasses = typeof normalized.glasses === "object" ? normalized.glasses : { style: "none", color: COACH_PALETTE.glasses[0] };
  const top = typeof normalized.top === "object" ? normalized.top : { style: "blazerAndShirt", color: normalized.shirt || "#0058be", pattern: "solid" };
  const neck = typeof normalized.neck === "object" ? normalized.neck : { style: normalized.accessory || "scarf", color: "#168c91" };
  return { ...normalized, base, character: base, hair: { ...hair }, glasses: { ...glasses }, top, neck, hairColor: hair.color, shirt: top.color, accessory: neck.style };
}

export function readSavedCoachConfig() {
  try {
    const profile = JSON.parse(localStorage.getItem(COACH_STORAGE_KEY) || "null");
    return normalizeCoachConfig(profile?.mascot || {});
  } catch {
    return defaultCoachConfig();
  }
}

export function saveCoachConfig(config) {
  const normalized = normalizeCoachConfig(config);
  try {
    const profile = JSON.parse(localStorage.getItem(COACH_STORAGE_KEY) || "{}") || {};
    localStorage.setItem(COACH_STORAGE_KEY, JSON.stringify({ ...profile, mascot: normalized }));
  } catch {
    // Keep the chosen look in memory when browser storage is disabled.
  }
  return normalized;
}
