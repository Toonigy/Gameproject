// JavaScript code for the game with a yellow square and chat feature
const menu = document.createElement('div');
menu.style.position = 'absolute';
menu.style.top = '50%';
menu.style.left = '50%';
menu.style.transform = 'translate(-50%, -50%)';
menu.style.textAlign = 'center';
document.body.appendChild(menu);

const title = document.createElement('h1');
title.textContent = 'My Game';
menu.appendChild(title);

const playButton = document.createElement('button');
playButton.textContent = 'Play';
playButton.addEventListener('click', () => {
  document.body.removeChild(menu);
  drawSquare();
});
menu.appendChild(playButton);

const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 600;
canvas.height = 600;
document.body.appendChild(canvas);

let squareX = 250;
let squareY = 250;
let chatMessage = "";

function drawSquare() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'yellow';
  ctx.fillRect(squareX, squareY, 50, 50);

  ctx.fillStyle = 'black';
  ctx.fillText(chatMessage, squareX, squareY - 10);
}

function handleKeyPress(e) {
  const key = e.keyCode;

  if (key === 37) {
    squareX -= 10;
  } else if (key === 39) {
    squareX += 10;
  } else if (key === 38) {
    squareY -= 10;
  } else if (key === 40) {
    squareY += 10;
  }

  drawSquare();
}

function handleSubmit() {
  const chatInput = document.getElementById('chatInput');
  chatMessage = chatInput.value.replace(/[^a-zA-Z0-9\s]/g, "");
  chatInput.value = "";
  drawSquare();
}

document.addEventListener('keydown', handleKeyPress);

const chatInput = document.createElement('input');
chatInput.id = 'chatInput';
chatInput.type = 'text';
chatInput.placeholder = 'Enter chat message';
document.body.appendChild(chatInput);

const submitButton = document.createElement('button');
submitButton.textContent = 'Submit Chat';
submitButton.addEventListener('click', handleSubmit);
document.body.appendChild(submitButton);

drawSquare();
