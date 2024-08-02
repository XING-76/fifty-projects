const IMGS = document.getElementById('imgs');
const LEFT_BTN = document.getElementById('left');
const RIGHT_BTN = document.getElementById('right');
const IMG = document.querySelectorAll('#imgs img');

const IMAGE_WIDTH = 500;
const INTERVAL_TIME = 2000;

let idx = 0;
let interval = setInterval(run, INTERVAL_TIME);

function run() {
    idx++;
    changeImage();
}

function changeImage() {
    // make sure idx is in range
    idx = (idx + IMG.length) % IMG.length;
    IMGS.style.transform = `translateX(${-idx * IMAGE_WIDTH}px)`;
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(run, INTERVAL_TIME);
}

RIGHT_BTN.addEventListener('click', () => {
    idx++;
    changeImage();
    resetInterval();
});

LEFT_BTN.addEventListener('click', () => {
    idx--;
    changeImage();
    resetInterval();
});
