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
  
  if (intervalId) return; 

  intervalId = setInterval(() => {
    seconds--;
    if (seconds < 0) {
      seconds = 59;
      minutes--;
    }

    if (minutes === 0 && seconds === 0) {
      clearInterval(intervalId);
      alert('Time is up!');
    }

    updateTimerDisplay();
  }, 1000); // Update every second

  startButton.disabled = true;
  stopButton.disabled = false;
  document.querySelector('.controls').style.display = 'none';
}

function stopTimer() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    startButton.disabled = false;
    stopButton.disabled = true;
  }
  document.querySelector('.controls').style.animation = "fadeIn 1.3s";
  document.querySelector('.controls').style.display = 'flex';
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

updateTimerDisplay(); 
