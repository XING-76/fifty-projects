const ADD_BTN = document.getElementById('add');

const NOTES = JSON.parse(localStorage.getItem('notes'));

if (NOTES) {
    NOTES.forEach((NOTE) => addNewNote(NOTE));
}

ADD_BTN.addEventListener('click', () => addNewNote());

function addNewNote(TEXT = '') {
    const NOTE = document.createElement('div');
    NOTE.classList.add('note');

    NOTE.innerHTML = `
    <div class="tools">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="main ${TEXT ? '' : 'hidden'}"></div>
    <textarea class="${TEXT ? 'hidden' : ''}"></textarea>
    `;

    const EDIT_BTN = NOTE.querySelector('.edit');
    const DELETE_BTN = NOTE.querySelector('.delete');
    const MAIN = NOTE.querySelector('.main');
    const TEXT_AREA = NOTE.querySelector('textarea');

    TEXT_AREA.value = TEXT;
    MAIN.innerHTML = marked(TEXT);

    DELETE_BTN.addEventListener('click', () => {
        NOTE.remove();

        updateLS();
    });

    EDIT_BTN.addEventListener('click', () => {
        MAIN.classList.toggle('hidden');
        TEXT_AREA.classList.toggle('hidden');
    });

    TEXT_AREA.addEventListener('input', (e) => {
        const { value } = e.target;

        MAIN.innerHTML = marked(value);

        updateLS();
    });

    document.body.appendChild(NOTE);
}

function updateLS() {
    const NOTES_TEXT = document.querySelectorAll('textarea');

    const NOTES = [];

    NOTES_TEXT.forEach((NOTE) => NOTES.push(NOTE.value));

    localStorage.setItem('notes', JSON.stringify(NOTES));
}
