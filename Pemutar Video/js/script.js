const pemutar = document.querySelector(`.Pemutar`);
const video = pemutar.querySelector(`.pemirsa`);
const progress = pemutar.querySelector(`.progress`);
const progressBar = pemutar.querySelector(`.progress-filed`);
const toggle = pemutar.querySelector(`.toggle`);
const skipb = pemutar.querySelectorAll(`[data-skip]`);
const range = pemutar.querySelectorAll(`.pemutar_slider`);

function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();
}
function upadtaB() {
  const icon = this.paused ? "►" : "❚ ❚";
  console.log(icon);
  toggle.textContent = icon;
}
function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeU() {
  video[this.name] = this.value;
}
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

video.addEventListener(`click`, togglePlay);
video.addEventListener(`play`, upadtaB);
video.addEventListener(`pause`, upadtaB);
video.addEventListener(`timeupdate`, handleProgress);

toggle.addEventListener(`click`, togglePlay);
skipb.forEach((b) => b.addEventListener(`click`, skip));
range.forEach((r) => r.addEventListener(`change`, handleRangeU));
range.forEach((r) => r.addEventListener(`mousemove`, handleRangeU));

let mousedown = false;
progress.addEventListener(`click`, scrub);
progress.addEventListener(`mousemove`, (e) => mousedown && scrub(e));
progress.addEventListener(`mousedown`, () => (mousedown = true));
progress.addEventListener(`mouseup`, () => (mousedown = false));
