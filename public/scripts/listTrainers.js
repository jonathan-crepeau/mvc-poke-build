console.log('listTrainer.js reporting for duty...');
const trainerList = document.getElementById('trainer-list');

const handleClick = (event) => {
    if (event.target.classList.contains('delete')) {
        console.log('Delete button clicked...');
        const trainerID = event.target.parentNode.id
        fetch(`http://localhost:3122/api/v1/trainers/${trainerID}`, {
            method: 'DELETE'
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .then(() => showAllTrainers())
            .catch((error) => console.log(error));
    }
};

trainerList.addEventListener('click', handleClick);

const render = (trainerArray) => {
    trainerList.innerHTML = '';
    for (let i = 0; i < trainerArray.length; i++) {
        const template = `
            <li id=${trainerArray[i]._id}>${trainerArray[i].name}
            <button class="delete">Delete</button></li>
        `
        trainerList.insertAdjacentHTML('afterBegin', template);
    }
};

const showAllTrainers = () => {
    fetch('http://localhost:3122/api/v1/trainers', {
        method: 'GET',
    })
        .then((response) => response.json())
        .then((data) => render(data))
        .catch((err) => console.log(err));
};

showAllTrainers();