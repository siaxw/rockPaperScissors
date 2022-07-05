// Создаем массив со словами

/*
let words = ["programm", "monkey", "wonderful", "flats"];

  

// Выбираем случайное слово

let word = words[Math.floor(Math.random() * words.length)];

  

// Создаем итоговый массив

let answerArray = [];

for (let i = 0; i < word.length; i++) {

answerArray[i] = "_";

}

  

let remainingLettters = word.length;

  

// Игровой цикл

while (remainingLettters > 0) {

// Показываем состояние игры

alert(answerArray.join(" "));

  

// Запрашиваем вариант ответа

let guess = prompt("Guess the letter, or press cancel for exit game");

if (guess === null) {

// Exit game

break;

} else if (guess.length !== 1) {

alert("Please, enter one letter");

} else {

// Update game state

for (let j = 0; j < word.length; j++) {

if (word[j] === guess) {

answerArray[j] = guess;

remainingLettters--;

}

}

}

  

// End game cycle

}

// Answer and congratulation!

alert(answerArray.join(" "));

alert("Great! guess word was " + word);
*/
