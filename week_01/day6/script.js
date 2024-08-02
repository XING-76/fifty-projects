const BOXES = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

// show the first without scroll start
checkBoxes();

function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    BOXES.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
