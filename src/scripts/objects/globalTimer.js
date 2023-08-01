let timer = 0;
let lastTime = 0; // Keep track of the last update time
let isRunning = false; // To check if the timer is running

function update(time) {
  if (isRunning === true) {
    const currentTime = time;
    const deltaTime = (currentTime - lastTime) / 1000; // Convert delta to seconds
    timer += deltaTime;
    lastTime = currentTime;
    console.log("Current Time" + currentTime);
  }
}

function getTimer() {
  return timer;
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes} minutes ${remainingSeconds} seconds`;
}

// Function to start the timer
function startTimer() {
  isRunning = true;
}

export default { update, getTimer, formatTime, startTimer };
