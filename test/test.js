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
        computerScore++;
        return `${lose} paper cover a rock`
    }else if(playerSelection === 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return `${lose} scissors cutting a paper`
    }else if(playerSelection === 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return `${lose} rock crushes a scissors`
    // Win
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return `${win} rock crushes a scissors`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return `${win} paper cover a rock`
    }else if(playerSelection === 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return `${win} scissors cutting a paper`
    }
}




const game = () =>{
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        const playerSelection = prompt('Please enter your choose: rock, paper or scissors').toLowerCase();
        if(playerSelection == ''){
            break;
        }else if(playerSelection == 'fuck you'){
            alert('Fuck you too!')
            break;
        }
        playRound(playerSelection, computerSelection);
    }

    if(playerScore > computerScore){
        return 'You beat computer great job!'
    }else if(computerScore > playerScore){
        return 'You lose to a computer! Shame on you!'
    }else{
        return 'You tied! Try Again!'
    }
}

console.log(game());
