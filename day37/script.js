const POKE_CONTAINER = document.getElementById('poke-container');

const URL = 'https://pokeapi.co/api/v2/pokemon';
const IMG_URL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon';
const POKEMON_COUNT = 150;
const COLORS = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5',
};

const MAIN_TYPES = Object.keys(COLORS);

const handleOnGetData = async () => {
    for (let i = 1; i <= POKEMON_COUNT; i++) {
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    const url = `${URL}/${id}`;
    const data = await (await fetch(url)).json();

    createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('pokemon');

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const id = pokemon.id.toString().padStart(3, '0');

    const pokeTypes = pokemon.types.map((type) => type.type.name);
    const type = MAIN_TYPES.find((type) => pokeTypes.indexOf(type) > -1);
    const color = COLORS[type];

    pokemonEl.style.backgroundColor = color;

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="${IMG_URL}/${pokemon.id}.png"" alt="${name}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type}</span> </small>
    </div>
    `;

    pokemonEl.innerHTML = pokemonInnerHTML;

    POKE_CONTAINER.appendChild(pokemonEl);
};

handleOnGetData();
