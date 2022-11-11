console.log('addPokemon.js reporting for duty..');
const listBtn = document.getElementById('add-pokemon-btn');

async function handleClick(event) {
    event.preventDefault();

    const nameInput = document.getElementById('pokemon-name');
    const typeInput = document.getElementById('pokemon-type');
    const genderInput = document.getElementById('pokemon-gender');
    const attackInput = document.getElementById('pokemon-attacks');
    const numberInput = document.getElementById('pokemon-number');
    const descInput = document.getElementById('pokemon-description');
    const weaknessInput = document.getElementById('pokemon-weakness');

    const newPokemon = {
        name: nameInput.value,
        type: typeInput.value,
        gender: genderInput.value,
        attacks: attackInput.value,
        pokedexNumber: numberInput.value,
        description: descInput.value,
        weakness: weaknessInput.value
    };

    // console.log(newPokemon);

    await fetch('/api/v1/pokemon', {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json', 
        },
        body: JSON.stringify(newPokemon),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));    
    
    
};

listBtn.addEventListener('click', handleClick);
