document.addEventListener("DOMContentLoaded", () => {
  const warning = document.getElementById("screen-warning");
  const continueBtn = document.getElementById("continue-btn");

  if (!warning || !continueBtn) return;

  const isTouchDevice =
    navigator.maxTouchPoints > 0 ||
    window.matchMedia("(pointer: coarse)").matches;

  function showWarning() {
    warning.style.display = "flex";
    document.body.style.overflow = "hidden";
  }

  function hideWarning() {
    warning.style.display = "none";
    document.body.style.overflow = "";
  }

  if (isTouchDevice) {
    showWarning();
  }

  continueBtn.addEventListener("click", hideWarning);
});
