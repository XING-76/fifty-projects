const RESULT_EL = document.getElementById('result');
const LENGTH_EL = document.getElementById('length');
const UPPERCASE_EL = document.getElementById('uppercase');
const LOWERCASE_EL = document.getElementById('lowercase');
const NUMBERS_EL = document.getElementById('numbers');
const SYMBOLS_EL = document.getElementById('symbols');
const GENERATE_EL = document.getElementById('generate');
const CLIPBOARD_EL = document.getElementById('clipboard');

const RANDOM_FUNC = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,
};

CLIPBOARD_EL.addEventListener('click', () => {
    const PASSWORD = RESULT_EL.innerText;
    if (!PASSWORD) {
        return;
    }
    navigator.clipboard.writeText(PASSWORD);
    alert('Password copied to clipboard!');
});

GENERATE_EL.addEventListener('click', () => {
    const LENGTH = +LENGTH_EL.value;
    const HAS_LOWER = LOWERCASE_EL.checked;
    const HAS_UPPER = UPPERCASE_EL.checked;
    const HAS_NUMBER = NUMBERS_EL.checked;
    const HAS_SYMBOL = SYMBOLS_EL.checked;

    RESULT_EL.innerText = generatePassword(HAS_LOWER, HAS_UPPER, HAS_NUMBER, HAS_SYMBOL, LENGTH);
});

function generatePassword(LOWER, UPPER, NUMBER, SYMBOL, LENGTH) {
    let GENERATED_PASSWORD = '';
    const TYPES_COUNT = LOWER + UPPER + NUMBER + SYMBOL;
    const TYPES_ARR = [
        { lower: LOWER },
        { upper: UPPER },
        { number: NUMBER },
        { symbol: SYMBOL },
    ].filter((item) => Object.values(item)[0]);

    if (TYPES_COUNT === 0) {
        return '';
    }

    for (let i = 0; i < LENGTH; i += TYPES_COUNT) {
        TYPES_ARR.forEach((type) => {
            const FUNC_NAME = Object.keys(type)[0];
            GENERATED_PASSWORD += RANDOM_FUNC[FUNC_NAME]();
        });
    }

    const FINAL_PASSWORD = GENERATED_PASSWORD.slice(0, LENGTH);

    return FINAL_PASSWORD;
}

/**
 * HTML ASCII Reference
 * https://www.w3schools.com/charsets/ref_html_ascii.asp
 */

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const SYMBOLS = '!@#$%^&*(){}[]=<>/,.';
    return SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
}
