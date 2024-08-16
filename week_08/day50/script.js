const SCREENS = document.querySelectorAll('.screen');
const CHOOSE_INSECT_BTNS = document.querySelectorAll('.choose-insect-btn');
const START_BTN = document.getElementById('start-btn');
const GAME_CONTAINER = document.getElementById('game-container');
const TIME_ELEMENT = document.getElementById('time');
const SCORE_ELEMENT = document.getElementById('score');
const MESSAGE = document.getElementById('message');
let seconds = 0;
let score = 0;
let selectedInsect = {};

START_BTN.addEventListener('click', () => SCREENS[0].classList.add('up'));

CHOOSE_INSECT_BTNS.forEach((button) => {
    button.addEventListener('click', () => {
        const image = button.querySelector('img');
        const src = image.getAttribute('src');
        const alt = image.getAttribute('alt');
        selectedInsect = { src, alt };
        SCREENS[1].classList.add('up');
        setTimeout(createInsect, 1000);
        startGame();
    });
});

function startGame() {
    setInterval(increaseTime, 1000);
}

function increaseTime() {
    let minutes = Math.floor(seconds / 60);
    let secondsRemaining = seconds % 60;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    secondsRemaining = secondsRemaining < 10 ? `0${secondsRemaining}` : secondsRemaining;
    TIME_ELEMENT.innerHTML = `Time: ${minutes}:${secondsRemaining}`;
    seconds++;
}

function createInsect() {
    const insect = document.createElement('div');
    insect.classList.add('insect');
    const { x, y } = getRandomLocation();
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.innerHTML = `
        <img
            src="${selectedInsect.src}"
            alt="${selectedInsect.alt}"
            style="transform: rotate(${Math.random() * 360}deg)"
        />
    `;

    insect.addEventListener('click', catchInsect);

    GAME_CONTAINER.appendChild(insect);
}

function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y };
}

function catchInsect() {
    increaseScore();
    this.classList.add('caught');
    setTimeout(() => this.remove(), 2000);
    addInsects();
}

function addInsects() {
    setTimeout(createInsect, 1000);
    setTimeout(createInsect, 1500);
}

function increaseScore() {
    score++;
    if (score > 19) {
        MESSAGE.classList.add('visible');
    }
    SCORE_ELEMENT.innerHTML = `Score: ${score}`;
}
