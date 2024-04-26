const startButton = document.getElementById('startBtn');

// A variable to store the interval ID
let intervalId = null;

// Function to toggle button appearance and functionality
const toggleButton = () => {
  if (startButton.textContent === 'Start') {
    startButton.className = 'btn btn-danger';
    startButton.textContent = 'Stop';
    return true;
  } else {
    startButton.className = 'btn btn-primary';
    startButton.textContent = 'Start';
    return false;
  }
};

// Function to get a random integer
const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

// Function to change the background color of the body element
const changeBackgroundColor = () => {
  const bodyElement = document.body;
  const red = getRandomInt(256);
  const green = getRandomInt(256);
  const blue = getRandomInt(256);
  bodyElement.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 0.3)`;
};

// Function to start or stop the color change
const manageColorChange = () => {
  const intervalInput = document.getElementById('intervalInput');
  let intervalTime = parseInt(intervalInput.value, 10);

  if (isNaN(intervalTime) || intervalTime < 0) {
    intervalInput.value = '1';
    intervalTime = 1;
  }

  return setInterval(changeBackgroundColor, intervalTime * 1000);
};

// Main function to handle the button click event
const handleButtonClick = () => {
  const isActive = toggleButton();

  if (isActive) {
    intervalId = manageColorChange();
  } else {
    clearInterval(intervalId);
  }
};

startButton.addEventListener('click', handleButtonClick);
