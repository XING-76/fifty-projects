const FORM = document.getElementById('form');
const INPUT = document.getElementById('input');
const TODOS_UL = document.getElementById('todos');

const TODOS = JSON.parse(localStorage.getItem('todos'));

if (TODOS) {
    TODOS.forEach((todo) => addTodo(todo));
}

FORM.addEventListener('submit', (event) => {
    event.preventDefault();
    addTodo();
});

function addTodo(todo) {
    let todoText = INPUT.value;

    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoElement = document.createElement('li');
        if (todo && todo.completed) {
            todoElement.classList.add('completed');
        }

        todoElement.innerText = todoText;

        todoElement.addEventListener('click', () => {
            todoElement.classList.toggle('completed');
            updateLocalStorage();
        });

        todoElement.addEventListener('contextmenu', (event) => {
            event.preventDefault();
            todoElement.remove();
            updateLocalStorage();
        });

        TODOS_UL.appendChild(todoElement);

        INPUT.value = '';

        updateLocalStorage();
    }
}

function updateLocalStorage() {
    const todoElements = document.querySelectorAll('li');

    const todos = [];

    todoElements.forEach((todoElement) => {
        todos.push({
            text: todoElement.innerText,
            completed: todoElement.classList.contains('completed'),
        });
    });

    localStorage.setItem('todos', JSON.stringify(todos));
}
