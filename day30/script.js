const TEXT_EL = document.getElementById('text');
const SPEED_EL = document.getElementById('speed');
const TEXT = 'We Love Programming!';

let idx = 1;
let speed = 300 / SPEED_EL.value;

function handleOnWriteText() {
    TEXT_EL.innerText = TEXT.slice(0, idx);

    idx++;

    if (idx > TEXT.length) idx = 1;

    setTimeout(handleOnWriteText, speed);
}

SPEED_EL.addEventListener('input', (e) => (speed = 300 / e.target.value));

handleOnWriteText();
