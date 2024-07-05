const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

function updateProgress() {
  circles.forEach((circle, idx) => {
    circle.classList.toggle("active", idx < currentActive);
  });

  const progressWidth = ((currentActive - 1) / (circles.length - 1)) * 100;
  progress.style.width = `${progressWidth}%`;

  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

function moveProgress(direction) {
  currentActive += direction;
  currentActive = Math.max(1, Math.min(currentActive, circles.length));
  updateProgress();
}

next.addEventListener("click", () => moveProgress(1));
prev.addEventListener("click", () => moveProgress(-1));

updateProgress();
