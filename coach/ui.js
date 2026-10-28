import { DOODLE_TOTAL, doodleChoices } from "./catalog.js";
import { coachSvgDataUri } from "./render.js";
import { normalizeCoachConfig, readSavedCoachConfig, saveCoachConfig } from "./state.js";

const preview = document.querySelector("#profileMascot");
const navAvatar = document.querySelector("#profileNavAvatar");
const customizer = document.querySelector("#mascotCustomizer");
const galleryPage = document.querySelector("#doodles");

if (preview && customizer && galleryPage) {
  let config = readSavedCoachConfig();
  let dirty = false;
  let previewRevision = 0;
  let galleryRevision = 0;
  const pngCache = new Map();
  const grid = galleryPage.querySelector("#coachDoodleGrid");
  const choices = doodleChoices();

  async function pngFor(index) {
    if (!pngCache.has(index)) pngCache.set(index, createPng(index));
    return pngCache.get(index);
  }

  async function createPng(index) {
    const svgData = coachSvgDataUri({ version: 5, doodle: index }, { title: `Croodles Neutral doodle ${index + 1}` });
    const image = new Image();
    image.decoding = "async";
    image.src = svgData;
    try {
      await image.decode();
      const canvas = document.createElement("canvas");
      canvas.width = 192;
      canvas.height = 192;
      const context = canvas.getContext("2d");
      context.fillStyle = "#fffdf7";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
      return canvas.toDataURL("image/png");
    } catch {
      return svgData;
    }
  }

  async function renderPreview() {
    const revision = ++previewRevision;
    const image = await pngFor(config.doodle);
    if (revision !== previewRevision) return;
    preview.innerHTML = `<img src="${image}" alt="Croodles Neutral profile picture, doodle ${config.doodle + 1}">`;
    if (navAvatar) navAvatar.innerHTML = `<img src="${image}" alt="">`;
    preview.setAttribute("role", "img");
    preview.setAttribute("aria-label", `Profile picture: doodle ${config.doodle + 1}`);
    const number = customizer.querySelector("#coachSelectedNumber");
    if (number) number.textContent = `Doodle ${String(config.doodle + 1).padStart(2, "0")}`;
  }

  function updateStatus() {
    const saveButton = galleryPage.querySelector('[data-action="save"]');
    const saveStatus = galleryPage.querySelector("#coachSaveStatus");
    if (saveButton) saveButton.disabled = !dirty;
    if (saveStatus) saveStatus.textContent = dirty ? "Choice ready to save" : "Your saved doodle";
  }

  function updateSelectedCard() {
    grid.querySelectorAll("[data-doodle]").forEach((button) => {
      const selected = Number(button.dataset.doodle) === config.doodle;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
      button.tabIndex = selected ? 0 : -1;
      button.setAttribute("aria-label", `Doodle ${String(Number(button.dataset.doodle) + 1).padStart(2, "0")}${selected ? ", selected" : ""}`);
    });
  }

  function update(index, { focus = false } = {}) {
    const next = normalizeCoachConfig({ version: 5, ...config, doodle: index });
    if (next.doodle === config.doodle) return;
    config = next;
    dirty = true;
    void renderPreview();
    updateStatus();
    updateSelectedCard();
    if (focus) requestAnimationFrame(() => grid.querySelector(`[data-doodle="${config.doodle}"]`)?.focus());
  }

  async function renderGallery() {
    const revision = ++galleryRevision;
    grid.innerHTML = choices.map(() => '<div class="coach-option is-loading" aria-hidden="true"></div>').join("");
    const pictures = await Promise.all(choices.map(async ({ index }) => ({ index, image: await pngFor(index) })));
    if (revision !== galleryRevision) return;
    grid.innerHTML = pictures.map(({ index, image }) => {
      const selected = index === config.doodle;
      const label = String(index + 1).padStart(2, "0");
      return `<button class="coach-option${selected ? " is-selected" : ""}" type="button" role="radio" aria-checked="${selected}" tabindex="${selected ? "0" : "-1"}" aria-label="Doodle ${label}${selected ? ", selected" : ""}" data-doodle="${index}"><span class="coach-option-art"><img src="${image}" alt="" loading="lazy"></span><span class="coach-option-label">${label}</span><span class="coach-option-check" aria-hidden="true">✓</span></button>`;
    }).join("");
  }

  function saveChoice() {
    if (!dirty) return;
    config = saveCoachConfig(config);
    dirty = false;
    updateStatus();
    window.dispatchEvent(new CustomEvent("speakup:coach-change", { detail: { config } }));
    location.hash = "#profile";
  }

  customizer.addEventListener("click", (event) => {
    if (event.target.closest('[data-action="choose-doodle"]')) {
      location.hash = "#doodles";
      return;
    }
    if (event.target.closest('[data-action="save"]')) saveChoice();
  });

  galleryPage.addEventListener("click", (event) => {
    const choice = event.target.closest("[data-doodle]");
    if (choice) {
      update(Number(choice.dataset.doodle));
      return;
    }
    if (event.target.closest('[data-action="back-profile"]')) {
      location.hash = "#profile";
      return;
    }
    if (event.target.closest('[data-action="save"]')) saveChoice();
  });

  galleryPage.addEventListener("keydown", (event) => {
    const option = event.target.closest('[role="radio"][data-doodle]');
    if (!option || !["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp", "Home", "End"].includes(event.key)) return;
    event.preventDefault();
    const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    const next = event.key === "Home" ? 0 : event.key === "End" ? DOODLE_TOTAL - 1 : Math.min(DOODLE_TOTAL - 1, Math.max(0, config.doodle + delta));
    update(next, { focus: true });
  });

  window.SpeakUpCoach = {
    getConfig: () => normalizeCoachConfig(config),
    setConfig(next) {
      if (dirty) return;
      config = normalizeCoachConfig(next);
      void renderPreview();
      if (grid.children.length) updateSelectedCard();
      updateStatus();
    }
  };

  updateStatus();
  void renderPreview();
  void renderGallery();
}
