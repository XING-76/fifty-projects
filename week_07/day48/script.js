const CONTAINER = document.querySelector('.container');
const API_URL = 'https://loremflickr.com/';
const ROWS = 5;

for (let i = 0; i < ROWS * 3; i++) {
    const img = document.createElement('img');
    img.src = `${API_URL}${getRandomSize()}`;
    CONTAINER.appendChild(img);
}

function getRandomSize() {
    return `${getRandomNumber()}/${getRandomNumber()}`;
}

function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 300;
}
