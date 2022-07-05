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


function playRound(playerSelection, computerSelection){
    let tie = 'Tie';
    let win = 'Win';
    let lose = 'Lose';
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

let playerSelection = 'rock';
let computerSelection = computerPlay();

function game(){
    let playerScore = 0;
    let computerScore = 0;
    score1.innerHTML = playerScore;
    score2.innerHTML = computerScore;
    playRound(playerSelection, computerSelection);
    for(let i = 0; i < 5; i++){
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            return console.log('Tie');
        }else if(playerSelection == 'rock' && computerSelection == 'paper'){
            computerScore++;
            return console.log(computerScore);
        }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            playerScore++;
            return console.log(playerScore);
        }else if(playerSelection == 'paper' && computerSelection == 'rock'){
            playerScore++;
            return console.log(playerScore)
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
};

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


