const PROGRESS = document.getElementById('progress');
const PREV = document.getElementById('prev');
const NEXT = document.getElementById('next');
const CIRCLES = document.querySelectorAll('.circle');

let currentStep = 1;
const maxStep = CIRCLES.length;
const minStep = 1;

/**
 * Before
 * 
NEXT.addEventListener('click', () => {
    currentStep++;

    if (currentStep > maxStep) currentStep = maxStep;

    handleOnUpdate();
});

PREV.addEventListener('click', () => {
    currentStep--;

    if (currentStep < minStep) currentStep = minStep;

    handleOnUpdate();
});

function handleOnUpdate() {
    CIRCLES.forEach((circle, idx) => {
        if (idx === currentStep - 1) {
            circle.classList.add('current');
        } else {
            circle.classList.remove('current');
        }

        if (idx < currentStep) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    const actives = document.querySelectorAll('.active');

    PROGRESS.style.width = ((actives.length - 1) / (maxStep - 1)) * 100 + '%';

    if (currentStep === 1) {
        PREV.disabled = true;
    } else if (currentStep === maxStep) {
        NEXT.disabled = true;
    } else {
        PREV.disabled = false;
        NEXT.disabled = false;
    }
}
*/

/**
 * After
 */
NEXT.addEventListener('click', () => {
    handleOnStep(1);
});

PREV.addEventListener('click', () => {
    handleOnStep(-1);
});

function handleOnStep(step) {
    currentStep += step;
    currentStep = Math.max(minStep, Math.min(maxStep, currentStep));
    handleOnUpdate();
}

function handleOnUpdate() {
    CIRCLES.forEach((circle, idx) => {
        circle.classList.toggle('current', idx === currentStep - 1);
        circle.classList.toggle('active', idx < currentStep);
    });

    const actives = document.querySelectorAll('.active');

    PROGRESS.style.width = ((actives.length - 1) / (maxStep - 1)) * 100 + '%';

    PREV.disabled = currentStep === minStep;
    NEXT.disabled = currentStep === maxStep;
}
