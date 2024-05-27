const TAGS = document.getElementById('tags');
const TEXTAREA = document.getElementById('textarea');

TEXTAREA.focus();

TEXTAREA.addEventListener('keyup', (e) => {
    createTags(e.target.value);

    if (e.key === 'Enter') {
        setTimeout(() => {
            e.target.value = '';
        }, 10);

        randomSelect();
    }
});

function createTags(input) {
    const tags = input
        .split(',')
        .filter((tag) => tag.trim() !== '')
        .map((tag) => tag.trim());

    TAGS.innerHTML = '';

    tags.forEach((tag) => {
        const TAG = document.createElement('span');
        TAG.classList.add('tag');
        TAG.innerText = tag;
        TAGS.appendChild(TAG);
    });
}

function randomSelect() {
    const times = 30;

    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        if (randomTag !== undefined) {
            highlightTag(randomTag);

            setTimeout(() => {
                unHighlightTag(randomTag);
            }, 100);
        }
    }, 100);

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            const randomTag = pickRandomTag();

            highlightTag(randomTag);
        }, 100);
    }, times * 100);
}

function pickRandomTag() {
    const TAGS = document.querySelectorAll('.tag');
    return TAGS[Math.floor(Math.random() * TAGS.length)];
}

function highlightTag(tag) {
    tag.classList.add('highlight');
}

function unHighlightTag(tag) {
    tag.classList.remove('highlight');
}
