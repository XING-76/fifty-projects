const RATINGS = document.querySelectorAll('.rating');
const RATINGS_CONTAINER = document.querySelector('.ratings-container');
const SEND_BTN = document.querySelector('#send');
const PANEL = document.querySelector('#panel');
let selectedRating = 'Satisfied';

RATINGS_CONTAINER.addEventListener('click', (e) => {
    if (e.target.parentNode.classList.contains('rating') && e.target.nextElementSibling) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.nextElementSibling.innerHTML;
    } else if (
        e.target.parentNode.classList.contains('rating') &&
        e.target.previousSibling &&
        e.target.previousElementSibling.nodeName === 'IMG'
    ) {
        removeActive();
        e.target.parentNode.classList.add('active');
        selectedRating = e.target.innerHTML;
    }
});

SEND_BTN.addEventListener('click', () => {
    PANEL.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
    for (let i = 0; i < RATINGS.length; i++) {
        RATINGS[i].classList.remove('active');
    }
}
