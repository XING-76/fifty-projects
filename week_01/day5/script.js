const BACKGROUND = document.querySelector('.bg');
const LOAD_TEXT = document.querySelector('.loading-text');

let loading = 0;

const count = setInterval(blurring, 30);

function blurring() {
    loading++;

    if (loading > 99) clearInterval(count);

    LOAD_TEXT.textContent = `${loading}%`;
    LOAD_TEXT.style.opacity = scale(loading, 0, 100, 1, 0);
    BACKGROUND.style.filter = `blur(${scale(loading, 0, 100, 30, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
