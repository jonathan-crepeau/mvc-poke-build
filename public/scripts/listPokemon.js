console.log('listPokemon.js reporting for duty..');
const listing = document.getElementById('pokemon-list');


listing.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete')) {
        const pokemonID = event.target.parentNode.id;

        fetch(`/api/v1/pokemon/${pokemonID}`, {
            method: 'DELETE',
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(() => showAllPokemon())
            .catch((err) => console.log(err));
            
    };
});

const render = (pokemonArr) => {
    // console.log(pokemonArr.data);
    listing.innerHTML = '';
    for (let i = 0; i < pokemonArr.data.length; i++) {
        // console.log(pokemonArr.data[i]);
        template = `<li id=${pokemonArr.data[i]._id}>${pokemonArr.data[i].name}<button class="delete">&times;</button></li>`;

        listing.insertAdjacentHTML('afterbegin', template)
    }
};

const showAllPokemon = (pokemonArr) => {

    fetch('/api/v1/pokemon', {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => render(data))
        .catch((err) => console.log(err));
}

showAllPokemon();