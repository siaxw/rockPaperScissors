const gameStatus = document.getElementById('status');

const userScore = document.getElementById('score1');
const compScore = document.getElementById('score2');

const userChoose = document.getElementById('choose1');
const compChoose = document.getElementById('choose2');

const btnRock = document.getElementById('buttonRock');
const btnPaper = document.getElementById('buttonPaper');
const btnScissors = document.getElementById('buttonScissors');

let playerScore = 0;
let computerScore = 0;

userScore.innerHTML = playerScore;
compScore.innerHTML = computerScore;

function computerPlay(){
    let arrOfChoices = [
        'rock',
        'paper',
        'scissors'
    ];
    let randomNum = Math.floor(Math.random() * arrOfChoices.length);
    let randomChoice = arrOfChoices[randomNum];
    return randomChoice;
}

function playRound(playerSelection, computerSelection){
    console.log('1', playerSelection, '2', computerSelection);
    let tie = 'Tie! You both picked';
    let lose = 'You Lost!';
    let win = 'You Win!'
    // Tie
    if(playerSelection === 'rock' && computerSelection == 'rock'){
        return gameStatus.innerHTML = `${tie} rock`;
    }else if(playerSelection === 'paper' && computerSelection == 'paper'){
        return gameStatus.innerHTML = `${tie} paper`;
    }else if(playerSelection === 'scissors' && computerSelection == 'scissors'){
        return gameStatus.innerHTML = `${tie} scissors`;
    // Lose
    }else if(playerSelection === 'rock' && computerSelection == 'paper'){
        computerScore++;
        return gameStatus.innerHTML = `${lose} paper cover a rock`
    }else if(playerSelection === 'paper' && computerSelection == 'scissors'){
        computerScore++;
        return gameStatus.innerHTML = `${lose} scissors cutting a paper`
    }else if(playerSelection === 'scissors' && computerSelection == 'rock'){
        computerScore++;
        return gameStatus.innerHTML = `${lose} rock crushes a scissors`
    // Win
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        playerScore++;
        return gameStatus.innerHTML = `${win} rock crushes a scissors`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        playerScore++;
        return gameStatus.innerHTML = `${win} paper cover a rock`
    }else if(playerSelection === 'scissors' && computerSelection == 'paper'){
        playerScore++;
        return gameStatus.innerHTML = `${win} scissors cutting a paper`
    }
}

const game = () =>{
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
        let playerSelection;
        
        btnRock.addEventListener('click', () =>{
            playerSelection = 'rock';
            userChoose.innerHTML = '🪨'
        });

        btnPaper.addEventListener('click', () => {
            playerSelection = 'paper';
            userChoose.innerHTML = '🗞'
        });

        btnScissors.addEventListener('click', () => {
            playerSelection = 'scissors'
            userChoose.innerHTML = '🗡'
        });
   

    if(computerSelection == 'rock'){
        compChoose.innerHTML = '🪨';
    }else if(computerSelection == 'paper'){
       compChoose.innerHTML = '🗞';
    }else if(computerSelection == 'scissors'){
       compChoose.innerHTML = '🗡';
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
/*
const game = () =>{
    for(let i = 0; i < 5; i++){
        const computerSelection = computerPlay();
       // const playerSelection = prompt('Please enter your choose: rock, paper or scissors').toLowerCase();
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

*/

