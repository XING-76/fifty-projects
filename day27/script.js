const BTN = document.getElementById('button');
const TOASTS = document.getElementById('toasts');

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];

const types = ['info', 'success', 'error'];

const timeout = 3000;

function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
    return types[Math.floor(Math.random() * types.length)];
}

BTN.addEventListener('click', () => handleOnCreateNotification());

function handleOnCreateNotification(message = null, type = null) {
    const notify = document.createElement('div');
    notify.classList.add('toast');
    notify.classList.add(type ? type : getRandomType());

    notify.innerText = message ? message : getRandomMessage();

    TOASTS.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, timeout);
}
