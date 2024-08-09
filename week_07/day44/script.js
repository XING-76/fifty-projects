const RANGE = document.getElementById('range');

RANGE.addEventListener('input', (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const RANGE_WIDTH = getComputedStyle(e.target).getPropertyValue('width');
    const LABEL_WIDTH = getComputedStyle(label).getPropertyValue('width');

    const numWidth = +RANGE_WIDTH.substring(0, RANGE_WIDTH.length - 2);
    const numLabelWidth = +LABEL_WIDTH.substring(0, LABEL_WIDTH.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;
});

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, inMin, inMax, outMin, outMax) => {
    return ((num - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
