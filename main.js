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

/*
function playRound(playerSelection, computerSelection){
    let tie = 'Tie';
    let win = 'Win';
    let lose = 'Lose';
    let i = 0;
    let j = 0;
    for(;i < 1; i++){
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            score.innerHTML = `${tie}`;
            right.innerHTML = '🪨';
            return console.log('Tie');
        }else if(playerSelection == 'rock' && computerSelection == 'paper'){
            j++;
            score.innerHTML = `${lose} ${j}`;
            console.log('Lose')
            right.innerHTML = '🗞'
            return console.log(j);
        }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            i++;
            score.innerHTML = `${win} ${i}`;
            console.log('Win');
            right.innerHTML = '✂️';
            return console.log(i);
        }else if(playerSelection == 'paper' && computerSelection == 'rock'){
            i++;
            score.innerHTML = `${win} ${i}`;
            console.log('Win');
            right.innerHTML = '🪨';
            return console.log(i)
        }else if(playerSelection == 'paper' && computerSelection == 'paper'){
            score.innerHTML = `${tie}`;
            console.log('Tie');
            right.innerHTML = '🗞';
            return console.log(i);
        }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
            j++;
            score.innerHTML = `${lose} ${j}`;
            console.log('Lose');
            right.innerHTML = '✂️';
            return console.log(j);
        }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
            j++;
            score.innerHTML = `${lose} ${j}`;
            console.log('Lose');
            right.innerHTML = '🪨';
            return console.log(j);
        }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
            i++;
            score.innerHTML = `${win} ${i}`;
            console.log('Win');
            right.innerHTML = '🗞';
            return console.log(i);
        }else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
            score.innerHTML = `${tie}`;
            console.log('Tie');
            right.innerHTML = '✂️';
            return console.log(12);
        }
    }
}
*/
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
    playerSelection = 'scissors'
    playRound(playerSelection, computerSelection);
});

