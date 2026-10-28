const VARIANT_COUNTS = { eyes: 16, mouth: 18, nose: 9 };

export const DOODLE_TOTAL = 100;

const variantId = (index) => `variant${String(index + 1).padStart(2, "0")}`;

function componentsForChoice(choice) {
  // Coprime steps spread the 100 choices across every style variant.
  const eyes = (choice * 7) % VARIANT_COUNTS.eyes;
  const mouth = (choice * 11) % VARIANT_COUNTS.mouth;
  const nose = (choice * 5) % VARIANT_COUNTS.nose;
  return { eyes: variantId(eyes), mouth: variantId(mouth), nose: variantId(nose) };
}

export function doodleChoices() {
  return Array.from({ length: DOODLE_TOTAL }, (_, index) => ({
    index,
    ...componentsForChoice(index)
  }));
}

export function doodleForIndex(index) {
  const choice = Math.min(Math.max(0, Number(index) || 0), DOODLE_TOTAL - 1);
  return { index: choice, ...componentsForChoice(choice) };
}

export function closestDoodleChoice(legacyIndex) {
  const canonical = Math.min(Math.max(0, Number(legacyIndex) || 0), 16 * 18 * 9 - 1);
  const target = {
    eyes: Math.floor(canonical / (18 * 9)),
    mouth: Math.floor(canonical / 9) % 18,
    nose: canonical % 9
  };
  let best = 0;
  let bestDistance = Infinity;
  for (let choice = 0; choice < DOODLE_TOTAL; choice += 1) {
    const parts = componentsForChoice(choice);
    const distance = Number(parts.eyes !== variantId(target.eyes))
      + Number(parts.mouth !== variantId(target.mouth))
      + Number(parts.nose !== variantId(target.nose));
    if (distance < bestDistance) {
      best = choice;
      bestDistance = distance;
      if (distance === 0) break;
    }
  }
  return best;
}
