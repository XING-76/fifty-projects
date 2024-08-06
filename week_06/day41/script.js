const CODES = document.querySelectorAll('.code');
const checkFirstInputTime = 3000;

function handleKeyDown(e, idx) {
    if (e.key >= 0 && e.key <= 9) {
        CODES[idx].value = '';
        setTimeout(() => {
            if (idx + 1 < CODES.length) {
                CODES[idx + 1].focus();
            }
        }, 10);
    } else if (e.key === 'Backspace') {
        setTimeout(() => {
            if (idx - 1 >= 0) {
                CODES[idx - 1].focus();
            }
        }, 10);
    }
}

function addEventListeners() {
    CODES.forEach((code, idx) => {
        code.addEventListener('keydown', (e) => handleKeyDown(e, idx));
    });
}

function handleOnEmpty() {
    setInterval(() => {
        if (!CODES[0].value) {
            CODES[0].focus();
        }
    }, checkFirstInputTime);
}

function initialize() {
    CODES[0].focus();
    addEventListeners();
    handleOnEmpty();
}

initialize();
