const RESET_BTN = document.querySelector('#reset');
const PLAY_BTN = document.querySelector('#play');
const TIMER_ELEMENT = document.querySelector('#timer');
const ROOT = document.querySelector(':root');

const TOTAL_SECONDS = 60;
let isPlaying = false;
let currentSeconds = TOTAL_SECONDS;
TIMER_ELEMENT.innerText = formatTime(TOTAL_SECONDS);

const TIMER_INTERVAL = setInterval(runTimer, 1000);

PLAY_BTN.addEventListener('click', () => {
    isPlaying = !isPlaying;
    PLAY_BTN.classList.toggle('play');
    PLAY_BTN.classList.toggle('bg-green-500');
    const playIcon = PLAY_BTN.querySelector('i');
    playIcon.classList.toggle('fa-play');
    playIcon.classList.toggle('fa-pause');
});

RESET_BTN.addEventListener('click', resetAll);

function runTimer() {
    if (isPlaying) {
        currentSeconds -= 1;
        if (currentSeconds <= 0) {
            clearInterval(TIMER_INTERVAL);
            resetAll();
        }

        TIMER_ELEMENT.innerText = formatTime(currentSeconds);
        ROOT.style.setProperty('--degrees', calculateDegrees());
    }
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const newSeconds = seconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
}

function calculateDegrees() {
    return `${360 - (currentSeconds / TOTAL_SECONDS) * 360}deg`;
}

function resetAll() {
    isPlaying = false;
    PLAY_BTN.classList.remove('play');
    PLAY_BTN.classList.remove('bg-green-500');
    const playIcon = PLAY_BTN.querySelector('i');
    playIcon.classList.remove('fa-pause');
    playIcon.classList.add('fa-play');
    currentSeconds = TOTAL_SECONDS;
    TIMER_ELEMENT.innerText = formatTime(TOTAL_SECONDS);
    ROOT.style.setProperty('--degrees', '0deg');
}
