const decreaseButton = document.getElementById('decrease');
const increaseButton = document.getElementById('increase');
const timerDisplay = document.querySelector('.timer');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const clearButton = document.getElementById('clear');

let minutes = 0;
let seconds = 0;
let intervalId;

function updateTimerDisplay() {
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');
  timerDisplay.textContent = `${formattedMinutes}:${formattedSeconds}`;
}

function decreaseTime() {
  if (minutes > 0) {
    minutes--;
    seconds = 0;
    updateTimerDisplay();
  }
}

function increaseTime() {
  minutes++;
  seconds = 0;
  updateTimerDisplay();
}

function startTimer() {
  if (intervalId) return; // Prevent multiple timers

  decreaseButton.disabled = true;
  increaseButton.disabled = true;

  intervalId = setInterval(() => {
    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      alert('Time is up!');
      decreaseButton.disabled = false;
      increaseButton.disabled = false;
      return;
    }

    if (seconds === 0) {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        seconds = 0;
      }
    } else {
      seconds--;
    }

    updateTimerDisplay();
  }, 1000); // Update every second

  startButton.style.display = "none";
  stopButton.style.display = "";
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }

  decreaseButton.disabled = false;
  increaseButton.disabled = false;

  startButton.style.display = "";
  stopButton.style.display = "none";
}

function clearTimer() {
  stopTimer();
  minutes = 0;
  seconds = 0;
  updateTimerDisplay();
}

decreaseButton.addEventListener('click', decreaseTime);
startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
clearButton.addEventListener('click', clearTimer);
increaseButton.addEventListener('click', increaseTime);

updateTimerDisplay(); // Set initial display

function login(){
  window.location.href = '/index.html';
}