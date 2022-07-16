const btn = document.getElementById('btn');
let playerScore = 0;
let computerScore = 0;


function computerPlay(){
    let arrOfChoices = [
        'rock',
        'paper',
        'scissors',
    ];
    let randomNum = Math.floor(Math.random() * arrOfChoices.length);
    let randomChoice = arrOfChoices[randomNum];
    return randomChoice;
   
};

function playRound(playerSelection, computerSelection){
    console.log('1', playerSelection, '2', computerSelection);
    let tie = 'Tie! You both picked';
    let lose = 'You Lost!';
    let win = 'You Win!'
    // Tie
    if(playerSelection === 'rock' && computerSelection == 'rock'){
        return `${tie} rock`;
    }else if(playerSelection === 'paper' && computerSelection == 'paper'){
        return `${tie} paper`;
    }else if(playerSelection === 'scissors' && computerSelection == 'scissors'){
        return `${tie} scissors`;
    // Lose
    }else if(playerSelection === 'rock' && computerSelection == 'paper'){
        return `${lose} paper cover a rock`
    }else if(playerSelection === 'paper' && computerSelection == 'scissors'){
        return `${lose} scissors cutting a paper`
    }else if(playerSelection === 'scissors' && computerSelection == 'rock'){
        return `${lose} rock crushes a scissors`
    // Win
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return `${win} rock crushes a scissors`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return `${win} paper cover a rock`
    }else if(playerSelection === 'scissors' && computerSelection == 'paper'){
        return `${win} scissors cutting a paper`
    }
}

const playerSelection = 'rock';


const game = () =>{
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));

    }
}

game();
