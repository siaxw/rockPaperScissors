const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
const score = document.getElementById('score');

function computerPlay(){
    let a = [
        'rock',
        'paper',
        'scissors'
    ];
    let b = a[Math.floor(Math.random() * a.length)];
    return b;
}

function playRound(playerSelection, computerSelection){
    let tie = 'Tie';
    let win = 'Win';
    let lose = 'Lose';
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            score.innerHTML = `${tie}`;
            right.innerHTML = '🪨';
            return tie;
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
const computerSelection = computerPlay();

rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
    playerSelection = 'rock'
    playRound(playerSelection, computerSelection);
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🗞';
    playerSelection = 'paper';
    playRound(playerSelection, computerSelection);
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
    playerSelection = 'scissors';
    playRound(playerSelection, computerSelection);
});


