/*
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
const score = document.getElementById('score');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

function computerPlay(){
    let a = [
        'rock',
        'paper',
        'scissors'
    ];
    let b = a[Math.floor(Math.random() * 0.5 * a.length)];
    return b;
}



function playRound(playerSelection, computerSelection){
    let tie = 'Tie';
    let win = 'Win';
    let lose = 'Lose';

rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
    playerSelection = 'rock';
    computerSelection = computerPlay();
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🗞';
    playerSelection = 'paper';
    computerSelection = computerPlay();
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
    playerSelection = 'scissors';  
    computerSelection = computerPlay();
});
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            score.innerHTML = `${tie}`;
            right.innerHTML = '🪨';
            return console.log(tie);
        }else if(playerSelection == 'rock' && computerSelection == 'paper'){
            score.innerHTML = `${lose}`;
            right.innerHTML = '🗞'
            return console.log(lose);
        }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            score.innerHTML = `${win}`;
            right.innerHTML = '✂️';
            return console.log(win);
        }else if(playerSelection == 'paper' && computerSelection == 'rock'){
            score.innerHTML = `${win}`;
            right.innerHTML = '🪨';
            return console.log(win)
        }else if(playerSelection == 'paper' && computerSelection == 'paper'){
            score.innerHTML = `${tie}`;
            right.innerHTML = '🗞';
            return console.log(tie);
        }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            score.innerHTML = `${lose}`;
            right.innerHTML = '✂️';
            return console.log(lose);
        }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            score.innerHTML = `${lose}`;
            right.innerHTML = '🪨';
            return console.log(lose);
        }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            score.innerHTML = `${win}`;
            right.innerHTML = '🗞';
            return console.log(win);
        }else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
            score.innerHTML = `${tie}`;
            right.innerHTML = '✂️';
            return console.log(tie);
        }
    }

let playerSelection;
let computerSelection = computerPlay();

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);
        if(playerSelection == 'rock' && computerSelection == 'scissors'){
            playerScore++;
            return console.log(playerScore,computerScore);
        }else{
            computerScore++;
            return console.log(computerScore, playerScore)
        }
    }
    console.log(playerScore,computerScore);
    return console.log("game");
}

game();

/*
rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
    playerSelection = 'rock';
    playRound(playerSelection, computerSelection);
    computerPlay();
    computerSelection = computerPlay();

});

paper.addEventListener('click', () =>{
    left.innerHTML = '🗞';
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
    computerPlay();
    computerSelection = computerPlay();
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
    playerSelection = 'scissors';  
    playRound(playerSelection, computerSelection);
    computerPlay();
    computerSelection = computerPlay();
});
*/

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
const score = document.getElementById('score');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');

function computerPlay(){
    let a = [
        "rock",
        "paper",
        "scissors"
    ];

    let b = a[Math.floor(Math.random() * a.length)];
    return b;
}

function playRound(){
    let win = 'Win';
    let lose = 'Lose';
    let tie = 'Tie';

    rock.addEventListener('click', () =>{
        left.innerHTML = '🪨';
        playerSelection = 'rock';
        computerSelection = computerPlay();
        if(computerSelection == 'rock'){
            right.innerHTML = '🪨';
            score.innerHTML = tie;
            return tie;
        }else if(computerSelection == 'paper'){
            right.innerHTML = '🗞';
            score.innerHTML = lose;
            return lose;
        }else if(computerSelection == 'scissors'){
            right.innerHTML = '✂️';
            score.innerHTML = win;
            return win;
        }
    });

    paper.addEventListener('click', () =>{
        left.innerHTML = '🗞';
        playerSelection = 'paper';
        computerSelection = computerPlay();
        if(computerSelection == 'rock'){
            right.innerHTML = '🪨';
            score.innerHTML = win;
            return win;
        }else if(computerSelection == 'paper'){
            right.innerHTML = '🗞';
            score.innerHTML = tie;
            return tie;
        }else if(computerSelection == 'scissors'){
            right.innerHTML = '✂️';
            score.innerHTML = lose; 
            return lose;
        }
    });

    scissors.addEventListener('click', () =>{
        left.innerHTML = '✂️';
        playerSelection = 'scissors';
        computerSelection = computerPlay();
        if(computerSelection == 'rock'){
            right.innerHTML = '🪨';
            score.innerHTML = lose;
            return lose;
        }else if(computerSelection == 'paper'){
            right.innerHTML = '🗞';
            score.innerHTML = win;
            return win;
        }else if(computerSelection == 'scissors'){
            right.innerHTML = '✂️';
            score.innerHTML = tie;
            return tie;
        }
    });
}

let playerSelection;
let computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;
score1.innerHTML = playerScore;
score2.innerHTML = computerScore;

function game(){
    for(let i = 0; i < 5; i++){

    }
};


game();
