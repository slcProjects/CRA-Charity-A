let timer = 0;
let lastTime = 0;
let isRunning = false;

function update(time) {
  if (isRunning === true) {
    if (lastTime === 0) {
      lastTime = time; // Set the lastTime to the current time when starting the timer
    }
    const deltaTime = (time - lastTime) / 1000;
    timer += deltaTime;
    lastTime = time;
    
  } else if (isRunning === false) {
    console.log("It's Off");
  }
}

function getTimer() {
  return timer;
}

function resetTimer() {
  timer = 0;
  lastTime = 0;
  isRunning = false; // Ensure the timer is not running after resetting
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes} minutes ${remainingSeconds} seconds`;
}

function startTimer() {
  resetTimer(); // Reset the timer to zero before starting
  isRunning = true;
}

export default { update, getTimer, formatTime, startTimer, resetTimer };
