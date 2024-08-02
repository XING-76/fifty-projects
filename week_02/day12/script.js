const TOGGLES = document.querySelectorAll('.faq-toggle');

TOGGLES.forEach((toggle) => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active');
    });
});
