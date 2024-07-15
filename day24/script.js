const API = 'https://randomuser.me/api/';

const HEADER = document.getElementById('header');
const TITLE = document.getElementById('title');
const EXCERPT = document.getElementById('excerpt');
const PROFILE_IMG = document.getElementById('profile_img');
const NAME = document.getElementById('name');
const DATE = document.getElementById('date');

const ANIMATED_BGS = document.querySelectorAll('.animated-bg');
const ANIMATED_BG_TEXTS = document.querySelectorAll('.animated-bg-text');

async function handleOnGetData() {
    const response = await (await fetch(API)).json();

    const data = response.results;

    if (data) {
        const {
            name: { first, last },
            dob: { date },
            picture: { thumbnail, large },
            location: { country },
            email,
        } = data[0];

        HEADER.innerHTML = `<img src=${large} alt="header-image" />`;
        TITLE.innerHTML = email;
        EXCERPT.innerHTML = country;
        PROFILE_IMG.innerHTML = `<img src=${thumbnail} alt="thumbnail" />`;
        NAME.innerHTML = `${last} ${first}`;
        DATE.innerHTML = new Date(date).toISOString().split('T')[0].replace(/-/g, '.');
    }

    ANIMATED_BGS.forEach((bg) => bg.classList.remove('animated-bg'));
    ANIMATED_BG_TEXTS.forEach((bg) => bg.classList.remove('animated-bg-text'));
}

// setTimeout(handleOnGetData, 2500);
handleOnGetData();
