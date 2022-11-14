console.log('addTrainer.js reporting for duty...');
const btn = document.getElementById('add-trainer-btn');

const handleClick = (event) => {
    console.log('Button clicked!');

    const nameInput = document.getElementById('trainer-name');
    const ageInput = document.getElementById('trainer-age');
    const hairInput = document.getElementById('trainer-hair');
    const eyeInput = document.getElementById('trainer-eye');

    const newTrainer = {
        name: nameInput.value,
        age: ageInput.value,
        hairColor: hairInput.value,
        eyeColor: eyeInput.value,
    }
    // console.log(newTrainer);

    fetch('http://localhost:3122/api/v1/trainers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTrainer),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
};

btn.addEventListener('click', handleClick);