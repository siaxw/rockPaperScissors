function computerPlay(){
    let a = [
        'Rock', 
        'Paper', 
        'Scissors'
    ];
    let b = a[Math.floor(Math.random() * a.length)];
    return console.log(b);
}
computerPlay();


function playRound(playerSelection, computerSelection){
    // code here
}

const playerSelection = 'rock';
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerPlay));