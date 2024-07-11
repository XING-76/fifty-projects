const HOUR_EL = document.querySelector('.hour');
const MINUTE_EL = document.querySelector('.minute');
const SECOND_EL = document.querySelector('.second');
const TIME_EL = document.querySelector('.time');
const DATE_EL = document.querySelector('.date');
const TOGGLE_BTN = document.querySelector('.toggle');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

TOGGLE_BTN.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    TOGGLE_BTN.textContent = document.documentElement.classList.contains('dark')
        ? 'Light mode'
        : 'Dark mode';
});

function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';

    HOUR_EL.style.transform = `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
    )}deg)`;

    MINUTE_EL.style.transform = `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
    )}deg)`;

    SECOND_EL.style.transform = `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
    )}deg)`;

    TIME_EL.innerHTML = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    DATE_EL.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
}

//
/**
 * StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
 */
const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);
