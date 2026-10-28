import { closestDoodleChoice, DOODLE_TOTAL } from "./catalog.js";

export const COACH_STORAGE_KEY = "speakup-profile-v1";

export function defaultCoachConfig() {
  return { version: 5, style: "croodles-neutral", doodle: 0 };
}

export function normalizeCoachConfig(input = {}) {
  const raw = input && typeof input === "object" ? input : {};
  const index = Number(raw.doodle ?? raw.index);
  const isLegacyConfig = Number(raw.version) > 0 && Number(raw.version) < 5;
  const choice = isLegacyConfig
    ? (Number.isInteger(index) && index >= 0 ? closestDoodleChoice(index) : 0)
    : (Number.isInteger(index) && index >= 0 && index < DOODLE_TOTAL ? index : 0);
  return {
    version: 5,
    style: "croodles-neutral",
    doodle: choice
  };
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
    // Keep the chosen doodle in memory when browser storage is disabled.
  }
  return normalized;
}
