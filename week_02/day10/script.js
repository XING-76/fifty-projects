const JOKEEL = document.getElementById('joke');
const JOKEBTN = document.getElementById('jokeBtn');

const API_URL = 'https://icanhazdadjoke.com';

JOKEBTN.addEventListener('click', generateJoke);

generateJoke();

async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json',
        },
    };

    const res = await fetch(API_URL, config);

    const data = await res.json();

    JOKEEL.innerHTML = data.joke;
}
