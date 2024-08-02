const TOGGLES = document.querySelectorAll('.toggle');
const GOOD = document.querySelector('#good');
const CHEAP = document.querySelector('#cheap');
const FAST = document.querySelector('#fast');

TOGGLES.forEach((TOGGLE) => TOGGLE.addEventListener('change', (e) => doTheTrick(e.target)));

function doTheTrick(THE_CLICKED_ONE) {
    if (GOOD.checked && CHEAP.checked && FAST.checked) {
        if (GOOD === THE_CLICKED_ONE) {
            FAST.checked = false;
        }

        if (CHEAP === THE_CLICKED_ONE) {
            GOOD.checked = false;
        }

        if (FAST === THE_CLICKED_ONE) {
            CHEAP.checked = false;
        }
    }
}
