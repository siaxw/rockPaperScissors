const btn = document.getElementById('btn');

function computerPlay(){
    let arrOfChoices = [
        'rock',
        'paper',
        'scissors',
    ];
    let randomChoice = arrOfChoices[Math.floor(Math.random() * arrOfChoices.length )]
    return randomChoice;
};
