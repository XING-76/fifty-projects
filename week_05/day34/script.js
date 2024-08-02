const NUMS = document.querySelectorAll('.nums span');
const COUNTER = document.querySelector('.counter');
const FINAL_MESSAGE = document.querySelector('.final');
const REPLAY = document.querySelector('#replay');

runAnimation();

function resetDOM() {
    COUNTER.classList.remove('hide');
    FINAL_MESSAGE.classList.remove('show');

    NUMS.forEach((NUM) => {
        NUM.classList.value = '';
    });

    NUMS[0].classList.add('in');
}

function runAnimation() {
    NUMS.forEach((NUM, IDX) => {
        const NEXT_TO_LAST = NUMS.length - 1;

        NUM.addEventListener('animationend', (e) => {
            if (e.animationName === 'goIn' && IDX !== NEXT_TO_LAST) {
                NUM.classList.remove('in');
                NUM.classList.add('out');
            } else if (e.animationName === 'goOut' && NUM.nextElementSibling) {
                NUM.nextElementSibling.classList.add('in');
            } else {
                COUNTER.classList.add('hide');
                FINAL_MESSAGE.classList.add('show');
            }
        });
    });
}

REPLAY.addEventListener('click', () => {
    resetDOM();
    runAnimation();
});
