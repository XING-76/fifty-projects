const BOXES_CONTAINER = document.getElementById('boxes');
const BTN = document.getElementById('btn-transform');
const BTN_OTHER = document.getElementById('btn-other');

const BOX = document.getElementsByClassName('box');

const API = 'https://loremflickr.com/500/500';
const BOX_SIZE = 125;

BTN.addEventListener('click', () => BOXES_CONTAINER.classList.toggle('big'));
BTN_OTHER.addEventListener('click', handleOnGetNewImage);

function handleOnCreateBoxes() {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.style.backgroundPosition = `${-j * BOX_SIZE}px ${-i * BOX_SIZE}px`;
            fragment.appendChild(box);
        }
    }
    BOXES_CONTAINER.appendChild(fragment);
}

async function handleOnGetNewImage() {
    const data = await fetch(API);
    const imageUrl = data.url;

    for (let i = 0; i < BOX.length; i++) {
        BOX[i].style.backgroundImage = `url(${imageUrl})`;
    }
}

handleOnCreateBoxes();
