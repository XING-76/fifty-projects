const SEARCH = document.querySelector('.search');
const BUTTON = document.querySelector('.btn');
const INPUT = document.querySelector('.input');

BUTTON.addEventListener('click', () => {
    SEARCH.classList.toggle('active');
    INPUT.focus();
});
