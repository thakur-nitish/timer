let timer;
let seconds = 0;

function start() {
  timer = setInterval(updateTimer, 1000);
}

function stop() {
  clearInterval(timer);
}

function reset() {
  clearInterval(timer);
  seconds = 0;
  document.getElementById("timer").innerText = "00:00:00";
}

function updateTimer() {
  seconds++;
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainderSeconds = seconds % 60;
  document.getElementById("timer").innerText = `${formatTime(
    hours
  )}:${formatTime(minutes)}:${formatTime(remainderSeconds)}`;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
