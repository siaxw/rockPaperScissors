/*
// Event listener for btns
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');

rock.addEventListener('click', () => {
    playerSelection = 'rock';
})

paper.addEventListener('click', () =>{
    playerSelection = 'paper';
})

scissors.addEventListener('click', () =>{
    playerSelection = 'scissors';
})


// Functions
function computerPlay(){
    let a = ['Rock', 'Paper', 'Scissors'];
    let b = a[Math.floor(Math.random() * a.length)];
    return b;
}
computerPlay();

function playRound(playerSelection, computerSelection){
    let won = 'You Won! Lucky Ass!';
    let lose = 'You Lose! ugly bad ass!';
    let tie = 'Try again! Tie!';
    if(playerSelection == 'Rock' && computerSelection == 'Rock'){
        output.innerText = `${tie}`;
        return `${tie}`
    }else if(playerSelection == 'Rock' && computerSelection == 'Paper'){
        output.innerText = `${lose}`;
        return `${lose}`;
    }else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        output.innerText = `${won}`;
        return `${won}`;
    }else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        output.innerText = `${won}`;
        return `${won}`;
    }else if(playerSelection == 'Paper' && computerSelection == 'Paper'){
        output.innerText = `${tie}`;
        return `${tie}`;
    }else if(playerSelection == 'Paper' && computerSelection == 'Scissors'){
        output.innerText = `${lose}`;
        return `${lose}`
    }else if(playerSelection == 'Scissors' && computerSelection == 'Rock'){
        output.innerHTML = `${lose}`
        return `${lose}`;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        output.innerText = `${won}`
        return `${won}`;
    }else if(playerSelection == 'Scissors' && computerSelection == 'Scissors'){
        output.innerHTML = '${tie}'
        return `${tie}`;
    }
}

let playerSelection;
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
*/


// Pseudo - code