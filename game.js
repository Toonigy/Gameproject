// Create a canvas element
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
document.body.appendChild(canvas);

// Set canvas size
canvas.width = 800;
canvas.height = 600;

// Draw white background
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// Define person properties
let personX = 50;
let personY = 50;
const personWidth = 20;
const personHeight = 40;

// Draw person
function drawPerson() {
    ctx.fillStyle = 'black';
    ctx.fillRect(personX, personY, personWidth, personHeight);
}

// Move person
function movePerson(event) {
    switch (event.key) {
        case 'ArrowUp':
            personY -= 10;
            break;
        case 'ArrowDown':
            personY += 10;
            break;
        case 'ArrowLeft':
            personX -= 10;
            break;
        case 'ArrowRight':
            personX += 10;
            break;
    }
    drawPerson();
}

// Event listener for keyboard input
document.addEventListener('keydown', movePerson);

// Initial draw
drawPerson();
