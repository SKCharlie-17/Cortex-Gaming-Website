const MIN_WIDTH = 1024;

document.addEventListener("DOMContentLoaded", () => {
  const warning = document.getElementById("screen-warning");
  const continueBtn = document.getElementById("continue-btn");

  if (!warning || !continueBtn) return;

  function showWarning() {
    warning.style.display = "flex";
    document.body.classList.add("warning-open");
  }

  function hideWarning() {
    warning.style.display = "none";
    document.body.classList.remove("warning-open");
  }

  if (window.innerWidth < MIN_WIDTH) {
    showWarning();
  }

  continueBtn.addEventListener("click", hideWarning);
});
