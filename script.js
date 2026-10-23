"use strict";

// All content and native video controls remain usable without JavaScript.
const teaser = document.querySelector("#teaser");
const playButton = document.querySelector("#teaser-play");
const teaserFrame = document.querySelector("#teaser-frame");

if (teaser && playButton) {
  playButton.hidden = false;
  playButton.addEventListener("click", async () => {
    playButton.disabled = true;
    try {
      await teaser.play();
      teaser.focus();
    } catch {
      playButton.hidden = false;
    } finally {
      playButton.disabled = false;
    }
  });
  teaser.addEventListener("play", () => {
    playButton.hidden = true;
    teaserFrame.classList.add("is-playing");
  });
  teaser.addEventListener("pause", () => {
    playButton.hidden = false;
    playButton.setAttribute("aria-label", "Resume the project trailer");
    teaserFrame.classList.remove("is-playing");
  });
  teaser.addEventListener("ended", () => {
    playButton.hidden = false;
    playButton.setAttribute("aria-label", "Replay the project trailer");
    teaserFrame.classList.remove("is-playing");
  });
}

const dialog = document.querySelector("#figure-dialog");
const dialogImage = document.querySelector("#dialog-image");
const dialogTitle = document.querySelector("#figure-dialog-title");

if (dialog && typeof dialog.showModal === "function") {
  document.querySelectorAll("[data-figure]").forEach((button) => {
    button.addEventListener("click", () => {
      dialogImage.src = button.dataset.figure;
      dialogImage.alt = button.closest("figure").querySelector("img").alt;
      dialogTitle.textContent = button.dataset.title;
      dialog.showModal();
      document.body.classList.add("modal-open");
    });
  });
  document
    .querySelector("#close-figure")
    .addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (
      event.clientX < rect.left ||
      event.clientX > rect.right ||
      event.clientY < rect.top ||
      event.clientY > rect.bottom
    )
      dialog.close();
  });
  dialog.addEventListener("close", () =>
    document.body.classList.remove("modal-open"),
  );
} else {
  document.querySelectorAll("[data-figure]").forEach((button) => {
    button.addEventListener("click", () => {
      window.location.href = button.dataset.figure;
    });
  });
}

const copyButton = document.querySelector("#copy-citation");
const citation = document.querySelector("#bibtex");
const copyStatus = document.querySelector("#copy-status");
let copyReset;

if (copyButton && citation) {
  copyButton.hidden = false;
  copyButton.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim() + "\n");
      copyButton.querySelector("span").textContent = "Copied!";
      copyStatus.textContent = "BibTeX citation copied to clipboard.";
      clearTimeout(copyReset);
      copyReset = setTimeout(() => {
        copyButton.querySelector("span").textContent = "Copy citation";
      }, 2500);
    } catch {
      // File previews and some browsers disable the Clipboard API. Select the
      // actual citation so a normal copy shortcut remains available.
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      copyStatus.textContent =
        "Citation selected. Press Ctrl+C or Command+C to copy.";
      copyButton.querySelector("span").textContent =
        "Selected — press Ctrl/Cmd+C";
    }
  });
}
