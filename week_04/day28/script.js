const API_URL = 'https://api.github.com/users/';

const MAIN = document.getElementById('main');
const FORM = document.getElementById('form');
const SEARCH = document.getElementById('search');

async function handleOnGetUser(username) {
    try {
        const { data } = await axios(API_URL + username);

        handleOnCreateUserCard(data);
        handleOnGetRepos(username);
    } catch (err) {
        if (err.response.status == 404) {
            handleOnCreateErrorCard('No profile with this username');
        }
    }
}

async function handleOnGetRepos(username) {
    try {
        const { data } = await axios(API_URL + username + '/repos?sort=created');

        handleOnAddReposToCard(data);
    } catch (err) {
        handleOnCreateErrorCard('Problem fetching repos');
    }
}

function handleOnCreateUserCard(user) {
    const userId = user.name || user.login;
    const userBio = user.bio ? `<p>${user.bio}</p>` : '';
    const cardHTML = `
        <div class="card">
            <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
            </div>
            <div class="user-info">
            <h2>${userId}</h2>
            ${userBio}
            <ul>
                <li>${user.followers} <strong>Followers</strong></li>
                <li>${user.following} <strong>Following</strong></li>
                <li>${user.public_repos} <strong>Repos</strong></li>
            </ul>

            <div id="repos"></div>
            </div>
        </div>
    `;

    MAIN.innerHTML = cardHTML;
}

function handleOnCreateErrorCard(msg) {
    const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;

    MAIN.innerHTML = cardHTML;
}

function handleOnAddReposToCard(repos) {
    const reposEl = document.getElementById('repos');

    repos.slice(0, 5).forEach((repo) => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo');
        repoEl.href = repo.html_url;
        repoEl.target = '_blank';
        repoEl.innerText = repo.name;

        reposEl.appendChild(repoEl);
    });
}

FORM.addEventListener('submit', (e) => {
    e.preventDefault();

    const user = SEARCH.value;

    if (user) {
        handleOnGetUser(user);

        SEARCH.value = '';
    }
});
