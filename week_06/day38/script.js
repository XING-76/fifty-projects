const CONTENTS = document.querySelectorAll('.content');
const LIST_ITEMS = document.querySelectorAll('nav ul li');

LIST_ITEMS.forEach((item, idx) => {
    item.addEventListener('click', () => {
        hideAllContents();
        hideAllItems();

        item.classList.add('active');
        CONTENTS[idx].classList.add('show');
    });
});

function hideAllContents() {
    CONTENTS.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
    LIST_ITEMS.forEach((item) => item.classList.remove('active'));
}
