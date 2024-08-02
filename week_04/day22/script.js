const CANVAS = document.getElementById('canvas');
const BTN_INCREASE = document.getElementById('increase');
const BTN_DECREASE = document.getElementById('decrease');
const SIZE_EL = document.getElementById('size');
const COLOR_EL = document.getElementById('color');
const CLEAR_EL = document.getElementById('clear');

const ctx = CANVAS.getContext('2d');

let size = 10;
let isPressed = false;
COLOR_EL.value = 'black';
let color = COLOR_EL.value;
let x;
let y;

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    SIZE_EL.innerText = size;
}

CANVAS.addEventListener('mousedown', (e) => {
    isPressed = true;

    x = e.offsetX;
    y = e.offsetY;
});

document.addEventListener('mouseup', (e) => {
    isPressed = false;

    x = undefined;
    y = undefined;
});

CANVAS.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);

        x = x2;
        y = y2;
    }
});

BTN_INCREASE.addEventListener('click', () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }

    updateSizeOnScreen();
});

BTN_DECREASE.addEventListener('click', () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }

    updateSizeOnScreen();
});

COLOR_EL.addEventListener('change', (e) => (color = e.target.value));

CLEAR_EL.addEventListener('click', () => ctx.clearRect(0, 0, CANVAS.width, CANVAS.height));
