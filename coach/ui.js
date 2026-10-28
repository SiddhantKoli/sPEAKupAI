import { createIcons, UsersRound, Scissors, Smile, Glasses, Shirt, Badge, HatGlasses, Sparkles, Check } from "lucide";
import { COACH_CATEGORIES, COACH_PALETTE, HAIR_DEFAULTS, coachOptionsFor } from "./catalog.js";
import { renderCoachSvg, coachSvgDataUri } from "./render.js";
import { normalizeCoachConfig, readSavedCoachConfig, saveCoachConfig } from "./state.js";

const iconSet = {
  "users-round": UsersRound, scissors: Scissors, smile: Smile, glasses: Glasses, shirt: Shirt,
  badge: Badge, "hat-glasses": HatGlasses, sparkles: Sparkles, check: Check
};
const preview = document.querySelector("#profileMascot");
const customizer = document.querySelector("#mascotCustomizer");

if (preview && customizer) {
  let config = readSavedCoachConfig();
  let activeTab = "base";
  let dirty = false;

  function update(next) {
    config = normalizeCoachConfig(next);
    dirty = true;
    render();
  }

  function applyChoice(path, value, target = config) {
    const next = JSON.parse(JSON.stringify(target));
    const keys = path.split(".");
    const leaf = keys.pop();
    const parent = keys.reduce((result, key) => result[key], next);
    parent[leaf] = value;
    if (path === "base") {
      if (!coachOptionsFor("hair", value).some((part) => part.id === next.hair.style)) next.hair.style = HAIR_DEFAULTS[value];
      if (value !== "man") next.face.facialHair = "none";
    }
    if (path === "top.style") {
      const clothing = coachOptionsFor("clothes", next.base).find((part) => part.id === value);
      if (clothing?.suggestedColor) next.top.color = clothing.suggestedColor;
    }
    return normalizeCoachConfig(next);
  }

  function candidateFor(path, value) {
    return applyChoice(path, value);
  }

  function optionGrid({ label, choice, path, selected = null, overrides = {}, bases = config.base, selectedValues = null, accessory = false }) {
    const values = choice ? coachOptionsFor(choice, bases) : overrides.values || [];
    if (!values.length) return "";
    if (selected === null && path) selected = configValue(path);
    const id = `coach-options-${slug(label)}`;
    const cards = values.map((part) => {
      const value = part.id;
      let sample;
      let isSelected;
      if (accessory) {
        const chosen = config.accessories.includes(value);
        sample = normalizeCoachConfig({ ...config, accessories: chosen ? config.accessories : [...config.accessories.filter((item) => item !== value).slice(0, 2), value] });
        isSelected = chosen;
      } else {
        sample = candidateFor(path, value);
        if (choice === "clothes" && part.suggestedColor) sample.top.color = part.suggestedColor;
        if (path === "hair.style") sample = normalizeCoachConfig({ ...sample, hat: { ...sample.hat, style: "none" } });
        isSelected = selectedValues ? selectedValues.includes(value) : value === selected;
      }
      const previewTitle = `${part.label} ${label.toLowerCase()} preview`;
      const actionAttrs = accessory
        ? `aria-pressed="${isSelected}" data-accessory="${value}"`
        : `role="radio" aria-checked="${isSelected}" tabindex="${isSelected ? "0" : "-1"}" data-setting="${path}" data-value="${value}"`;
      return `<button class="coach-option${isSelected ? " is-selected" : ""}" type="button" ${actionAttrs} aria-label="${escapeHtml(part.label)}${accessory ? (isSelected ? ", selected" : ", add extra") : ""}"><span class="coach-option-art"><img src="${coachSvgDataUri(sample, { title: previewTitle })}" alt="" loading="lazy"></span><span class="coach-option-label">${escapeHtml(part.label)}</span><span class="coach-option-check" aria-hidden="true" data-lucide="check"></span></button>`;
    }).join("");
    const role = accessory ? "group" : "radiogroup";
    return `<fieldset class="coach-field"><legend>${escapeHtml(label)}${accessory ? `<span class="coach-field-note" id="coachAccessoryCount">${config.accessories.length} of 3 selected</span>` : ""}</legend><div class="coach-option-grid" id="${id}" role="${role}" aria-label="${escapeHtml(label)}">${cards}</div></fieldset>`;
  }

  function swatches(label, palette, path, current) {
    const options = palette.map((color, index) => {
      const selected = current === color;
      const name = colorName(color, index, palette.length);
      return `<button class="coach-swatch-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" aria-label="${escapeHtml(name)}" data-setting="${path}" data-value="${color}"><span class="coach-swatch swatch-${color.slice(1)}" aria-hidden="true"></span><span class="coach-swatch-check" aria-hidden="true" data-lucide="check"></span></button>`;
    }).join("");
    return `<fieldset class="coach-field coach-color-field"><legend>${escapeHtml(label)}</legend><div class="coach-swatches" role="radiogroup" aria-label="${escapeHtml(label)}">${options}</div></fieldset>`;
  }

  function patternChoices() {
    const values = [
      ["solid", "Solid"], ["stripes", "Stripes"], ["checks", "Checks"], ["dots", "Dots"]
    ];
    return `<fieldset class="coach-field"><legend>Pattern</legend><div class="coach-patterns" role="radiogroup" aria-label="Choose a clothing pattern">${values.map(([id, label]) => {
      const selected = config.top.pattern === id;
      return `<button class="coach-pattern-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" data-setting="top.pattern" data-value="${id}" aria-label="${label}"><span class="coach-pattern-sample pattern-${id}" data-color="${config.top.color}" aria-hidden="true"></span><span>${label}</span><span class="coach-option-check" aria-hidden="true" data-lucide="check"></span></button>`;
    }).join("")}</div></fieldset>`;
  }

  function renderPanel() {
    const category = COACH_CATEGORIES.find((item) => item.id === activeTab) || COACH_CATEGORIES[0];
    const commonHeader = `<div class="coach-panel-heading"><h3>${category.label}</h3><p>${category.description}</p></div>`;
    let content = "";
    if (activeTab === "base") {
      content = `${optionGrid({ label: "Player avatar", choice: "base", path: "base", bases: "woman" })}${swatches("Skin tone", COACH_PALETTE.skin, "skin", config.skin)}`;
    } else if (activeTab === "hair") {
      content = `${optionGrid({ label: "Hairstyle", choice: "hair", path: "hair.style" })}${swatches("Hair color", COACH_PALETTE.hair, "hair.color", config.hair.color)}`;
    } else if (activeTab === "face") {
      content = `${optionGrid({ label: "Eyes", choice: "eyes", path: "face.eyes" })}${optionGrid({ label: "Expression", choice: "mouth", path: "face.mouth" })}${optionGrid({ label: "Brows", choice: "brows", path: "face.brows" })}${config.base === "man" ? optionGrid({ label: "Facial hair", choice: "facialHair", path: "face.facialHair" }) : ""}`;
    } else if (activeTab === "glasses") {
      content = `${optionGrid({ label: "Frames", choice: "glasses", path: "glasses.style" })}${swatches("Frame color", COACH_PALETTE.glasses, "glasses.color", config.glasses.color)}`;
    } else if (activeTab === "clothes") {
      content = `${optionGrid({ label: "Clothing", choice: "clothes", path: "top.style" })}${swatches("Main color", COACH_PALETTE.clothes, "top.color", config.top.color)}${patternChoices()}`;
    } else if (activeTab === "neckwear") {
      content = `${optionGrid({ label: "Neckwear", choice: "neckwear", path: "neck.style" })}${swatches("Color", COACH_PALETTE.clothes, "neck.color", config.neck.color)}`;
    } else if (activeTab === "hats") {
      content = `${optionGrid({ label: "Hat", choice: "hats", path: "hat.style" })}${swatches("Hat color", COACH_PALETTE.clothes, "hat.color", config.hat.color)}`;
    } else if (activeTab === "extras") {
      content = `${optionGrid({ label: "Add up to three details", choice: "extras", accessory: true })}<p class="coach-extra-hint" id="coachExtraHint" role="status">Choose any three details to finish the look.</p>`;
    }
    return `<section class="coach-panel" id="coachPickerPanel" role="tabpanel" aria-labelledby="coachTab${slug(category.id)}">${commonHeader}<div class="coach-panel-content">${content}</div></section>`;
  }

  function renderTabs() {
    return COACH_CATEGORIES.map((category) => {
      const selected = category.id === activeTab;
      return `<button type="button" class="coach-tab${selected ? " is-active" : ""}" id="coachTab${slug(category.id)}" role="tab" aria-controls="coachPickerPanel" aria-selected="${selected}" tabindex="${selected ? "0" : "-1"}" data-coach-tab="${category.id}" aria-label="${category.label}"><span class="coach-tab-icon" data-lucide="${category.icon}" aria-hidden="true"></span><span>${category.label}</span></button>`;
    }).join("");
  }

  function render() {
    const name = config.base === "man" ? "Young man" : "Young woman";
    preview.innerHTML = renderCoachSvg(config, { title: `Your ${name.toLowerCase()} player avatar` });
    preview.setAttribute("role", "group");
    preview.setAttribute("aria-label", `Live preview: your ${name.toLowerCase()} player avatar`);
    const caption = customizer.querySelector("#mascotName");
    if (caption) caption.textContent = `Your ${name.toLowerCase()} avatar`;
    const summary = customizer.querySelector("#coachLookSummary");
    if (summary) summary.textContent = lookSummary();
    const tablist = customizer.querySelector("#coachTabs");
    if (tablist) tablist.innerHTML = renderTabs();
    const panel = customizer.querySelector(".coach-picker-panel");
    if (panel) panel.innerHTML = renderPanel();
    const saveButton = customizer.querySelector('[data-action="save"]');
    const saveStatus = customizer.querySelector("#coachSaveStatus");
    if (saveButton) saveButton.disabled = !dirty;
    if (saveStatus) saveStatus.textContent = dirty ? "Unsaved changes" : "All changes saved";
    const customCount = customizer.querySelector("#coachLookCount");
    if (customCount) customCount.textContent = `${config.accessories.length} ${config.accessories.length === 1 ? "extra" : "extras"}`;
    createIcons({ icons: iconSet, attrs: { class: "coach-icon", "aria-hidden": "true", focusable: "false" }, root: customizer });
  }

  function configValue(path) {
    return path.split(".").reduce((result, key) => result?.[key], config);
  }

  function lookSummary() {
    const hair = coachOptionsFor("hair", config.base).find((part) => part.id === config.hair.style)?.label || "Custom style";
    const clothes = coachOptionsFor("clothes", config.base).find((part) => part.id === config.top.style)?.label || "Outfit";
    const glasses = coachOptionsFor("glasses", config.base).find((part) => part.id === config.glasses.style)?.label;
    return [hair, glasses && glasses !== "No glasses" ? `${glasses} glasses` : "", clothes].filter(Boolean).join(" · ");
  }

  function setTab(id, focus = false) {
    activeTab = id;
    render();
    if (focus) customizer.querySelector(`[data-coach-tab="${id}"]`)?.focus();
  }

  function restoreOptionFocus(path, value) {
    customizer.querySelectorAll("[data-setting]").forEach((option) => {
      if (option.dataset.setting === path) option.tabIndex = option.dataset.value === value ? 0 : -1;
    });
    customizer.querySelector(`[data-setting="${path}"][data-value="${value}"]`)?.focus();
  }

  customizer.addEventListener("click", (event) => {
    const tab = event.target.closest("[data-coach-tab]");
    if (tab) { setTab(tab.dataset.coachTab); return; }
    const setting = event.target.closest("[data-setting]");
    if (setting) {
      const path = setting.dataset.setting;
      const value = setting.dataset.value;
      update(applyChoice(path, value));
      restoreOptionFocus(path, value);
      return;
    }
    const accessory = event.target.closest("[data-accessory]");
    if (accessory) {
      const value = accessory.dataset.accessory;
      const selected = config.accessories.includes(value);
      if (!selected && config.accessories.length >= 3) {
        const hint = customizer.querySelector("#coachExtraHint");
        if (hint) hint.textContent = "You already have three details. Remove one to add another.";
        return;
      }
      update({ ...config, accessories: selected ? config.accessories.filter((item) => item !== value) : [...config.accessories, value] });
      return;
    }
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "save" && dirty) {
      config = saveCoachConfig(config);
      dirty = false;
      render();
      window.dispatchEvent(new CustomEvent("speakup:coach-change", { detail: { config } }));
    }
  });

  customizer.addEventListener("keydown", (event) => {
    const tab = event.target.closest("[data-coach-tab]");
    if (tab && ["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) {
      event.preventDefault();
      const index = COACH_CATEGORIES.findIndex((item) => item.id === tab.dataset.coachTab);
      const next = event.key === "Home" ? 0 : event.key === "End" ? COACH_CATEGORIES.length - 1 : (index + (event.key === "ArrowRight" ? 1 : -1) + COACH_CATEGORIES.length) % COACH_CATEGORIES.length;
      setTab(COACH_CATEGORIES[next].id, true);
      return;
    }
    const option = event.target.closest('[role="radio"]');
    if (!option || !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
    const group = option.closest('[role="radiogroup"]');
    const options = [...group.querySelectorAll('[role="radio"]')];
    const index = options.indexOf(option);
    const next = event.key === "Home" ? 0 : event.key === "End" ? options.length - 1 : (index + (["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1) + options.length) % options.length;
    event.preventDefault();
    options[next].click();
  });

  window.SpeakUpCoach = {
    getConfig: () => normalizeCoachConfig(config),
    setConfig(next) { config = normalizeCoachConfig(next); dirty = false; render(); }
  };
  render();
}

function slug(value) { return value.toLowerCase().replace(/[^a-z0-9]+/g, ""); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]); }
function colorName(color, index, total) { return `Color ${index + 1} of ${total}, ${color.toUpperCase()}`; }
