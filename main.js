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
/*
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
*/

/*
rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
    playerSelection = 'rock'
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🧻';
    playerSelection = 'paper'
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
    playerSelection = 'scissors'
});
*/

/*
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
    */
/*
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');

rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🧻';
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
});

function computerPlay(){
    let a = ['rock', 'paper', 'scissors'];
    let b = a[Math.floor(Math.random() * a.length)];
    return b;
}

function playRound(playerSelection, computerSelection){
   if(playerSelection == 'rock' && computerSelection == 'rock'){
    output.innerHTML = 'Tie';
    return console.log('work');
   }else if(playerSelection == 'rock' && computerSelection == 'paper'){
    output.innerHTML = 'You lose';
    return console.log('work');
   }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
    output.innerHTML = 'You win';
    return console.log('work'); 
   }else if(playerSelection == 'paper' && computerSelection == 'rock'){
     output.innerHTML = 'You win';
     return console.log('work');
   }else if(playerSelection == 'paper' && computerSelection == 'paper'){
     output.innerHTML = 'Tie';
     return console.log('work');
   }else if(playerSelection == 'paper' && computerSelection == 'scissors'){
     output.innerHTML = 'You lose';
     return console.log('work');
   }else if(playerSelection == 'scissors' && computerSelection == 'rock'){
     output.innerHTML = 'You lose';
     return console.log('work');
   }else if(playerSelection == 'scissors' && computerSelection == 'paper'){
     output.innerHTML = 'You win';
     return console.log('work');
   }else if(playerSelection == 'scissors' && computerSelection == 'scissors'){
     output.innerHTML = 'Tie';
     return console.log('work');
   }
};

let playerSelection;
const computerSelection = computerPlay();

*/

/*
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
const score = document.getElementById('score');

rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🧻';
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
});

function computerPlay(){
    let a = [
        'rock',
        'paper',
        'scissors'
    ];
    let b = a[Math.floor(Math.random() * a.length)];
    return b;
};




function playRound(playerSelection, computerSelection){
    let tie = 'Tie';
    let win = 'Win';
    let lose = 'Lose';
    let i = 0;
    let j = 0;
    for(;i < 1; i++){
        if(playerSelection == 'rock' && computerSelection == 'rock'){
            score.innerHTML = `${tie}`;
            return console.log('Tie');
        }else if(playerSelection == 'rock' && computerSelection == 'paper'){
            j++;
            score.innerHTML = `${lose} ${j}`;
            console.log('Lose')
            return console.log(j);
        }else if(playerSelection == 'rock' && computerSelection == 'scissors'){
            i++;
            score.innerHTML = `${win} ${i}`;
            console.log('Win');
            return console.log(i);
        }
    }
}



const playerSelection = 'rock';
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);
*/




const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
const output = document.getElementById('output');
const left = document.getElementById('left');
const right = document.getElementById('right');
const score = document.getElementById('score');

rock.addEventListener('click', () =>{
    left.innerHTML = '🪨';
});

paper.addEventListener('click', () =>{
    left.innerHTML = '🗞';
});

scissors.addEventListener('click', () =>{
    left.innerHTML = '✂️';
});

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

