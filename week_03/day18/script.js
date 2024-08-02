const BODY = document.body;
const SLIDES = document.querySelectorAll('.slide');
const LEFT_BTN = document.getElementById('left');
const RIGHT_BTN = document.getElementById('right');

let activeSlide = 0;

RIGHT_BTN.addEventListener('click', () => {
    activeSlide++;

    if (activeSlide > SLIDES.length - 1) {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlide();
});

LEFT_BTN.addEventListener('click', () => {
    activeSlide--;

    if (activeSlide < 0) {
        activeSlide = SLIDES.length - 1;
    }

    setBgToBody();
    setActiveSlide();
});

function setBgToBody() {
    BODY.style.backgroundImage = SLIDES[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
    SLIDES.forEach((slide) => slide.classList.remove('active'));

    SLIDES[activeSlide].classList.add('active');
}

setBgToBody();
