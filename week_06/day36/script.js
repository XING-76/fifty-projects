const CONTAINER = document.getElementById('container');
const COLORS = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];
const SQUARES = 500;

for (let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => handleOnSetColor(square));
    square.addEventListener('mouseout', () => handleOnRemoveColor(square));

    CONTAINER.appendChild(square);
}

function handleOnSetColor(element) {
    const color = getRandomColor();
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function handleOnRemoveColor(element) {
    element.style.background = 'var(--square)';
    element.style.boxShadow = '0 0 2px var(--black)';
}

function getRandomColor() {
    return COLORS[Math.floor(Math.random() * COLORS.length)];
}
