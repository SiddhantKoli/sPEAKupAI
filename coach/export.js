import { renderCoachSvg } from "./render.js";

function download(url, filename) {
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.append(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export function downloadCoachSvg(config) {
  const svg = renderCoachSvg(config, { title: "My SpeakUp coach" });
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  download(url, "speakup-coach.svg");
}

export function downloadCoachPng(config) {
  const svg = renderCoachSvg(config, { title: "My SpeakUp coach" });
  const url = URL.createObjectURL(new Blob([svg], { type: "image/svg+xml;charset=utf-8" }));
  const image = new Image();
  image.onload = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 960;
    canvas.height = 960;
    const context = canvas.getContext("2d");
    if (!context) { URL.revokeObjectURL(url); return; }
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
    canvas.toBlob((blob) => {
      if (blob) download(URL.createObjectURL(blob), "speakup-coach.png");
      URL.revokeObjectURL(url);
    }, "image/png");
  };
  image.onerror = () => URL.revokeObjectURL(url);
  image.src = url;
}
