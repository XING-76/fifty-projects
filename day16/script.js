const SMALL_CUPS = document.querySelectorAll('.cup-small');
const LITERS = document.getElementById('liters');
const PERCENTAGE = document.getElementById('percentage');
const REMAINED = document.getElementById('remained');

updateBigCup();

SMALL_CUPS.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCups(idx));
});

function highlightCups(idx) {
    const isCurrentFull = SMALL_CUPS[idx].classList.contains('full');
    const isNextFull = SMALL_CUPS[idx].nextElementSibling?.classList.contains('full');

    if (isCurrentFull && (idx === 7 || !isNextFull)) {
        idx--;
    }

    SMALL_CUPS.forEach((cup, idx2) => {
        cup.classList.toggle('full', idx2 <= idx);
    });

    updateBigCup();
}

function updateBigCup() {
    const FULL_CUPS = document.querySelectorAll('.cup-small.full').length;
    const TOTAL_CUPS = SMALL_CUPS.length;
    const PERCENTAGE_HEIGHT = (FULL_CUPS / TOTAL_CUPS) * 330;
    const PERCENTAGE_TEXT = `${(FULL_CUPS / TOTAL_CUPS) * 100}%`;
    const REMAINING_LITERS = 2 - (250 * FULL_CUPS) / 1000;

    if (FULL_CUPS === 0) {
        PERCENTAGE.style.visibility = 'hidden';
        PERCENTAGE.style.height = 0;
    } else {
        PERCENTAGE.style.visibility = 'visible';
        PERCENTAGE.style.height = `${PERCENTAGE_HEIGHT}px`;
        PERCENTAGE.innerText = PERCENTAGE_TEXT;
    }

    if (FULL_CUPS === TOTAL_CUPS) {
        REMAINED.style.visibility = 'hidden';
        REMAINED.style.height = 0;
    } else {
        REMAINED.style.visibility = 'visible';
        LITERS.innerText = `${REMAINING_LITERS}L`;
    }
}
