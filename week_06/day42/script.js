const RESULT = document.getElementById('result');
const FILTER = document.getElementById('filter');
const LIST_ITEMS = [];

const API = 'https://randomuser.me/api?results=';
const API_COUNT = 50;

FILTER.addEventListener('input', (e) => filterData(e.target.value));

async function getData() {
    const res = await fetch(`${API}${API_COUNT}`);
    const { results } = await res.json();

    RESULT.innerHTML = '';

    results.forEach((user) => {
        const li = document.createElement('li');

        LIST_ITEMS.push(li);

        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `;

        RESULT.appendChild(li);
    });
}

function filterData(searchTerm) {
    LIST_ITEMS.forEach((item) => {
        if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove('hide');
        } else {
            item.classList.add('hide');
        }
    });
}

getData();
