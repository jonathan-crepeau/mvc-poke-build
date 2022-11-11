console.log('addPokemon.js reporting for duty..');
const listBtn = document.getElementById('add-pokemon-btn');

function handleClick() {

     // NOTE - Upgrade: add all 'xxxValue' names into an array. for loop cycles through each div within the form loop; selects the input name and matches it to the correct array value.
    //for loop that cycles through each div within the form and selects the <input> id name and adds it..
    
    // const valueTitles = ['nameInput', 'typeInput'];

    // for (let i = 0; i < valueTitles.length; i++) {
    //     console.log('')
    //     console.log(valueTitles[i]);
    // };

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

    console.log(newPokemon);

    fetch('/api/v1/pokemon', {
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
