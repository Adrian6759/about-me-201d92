'use strict';

console.log('hello world');
let correctAnswers = 0

let answer = prompt('What is your name?');
//console.log//(`Welcome to my site ${answer}! Please answer Yes or No to the following questions.`);
alert(`Welcome to my site ${answer}! Please answer Yes or No to the following questions.`);

function questionOne() {

  let guess1 = prompt('Guess my location. Do I live in the Contiguous United States?').toLowerCase();
  if (guess1 === 'yes' || guess1 === 'y') {
  //console.log//('You are correct');
    alert('You are correct');
    correctAnswers++;
  } else if (guess1 === 'no' || guess1 === 'n') {
  //console.log('Not quite. We\'ll get em on the next one.');
    alert('Not quite. We\'ll get em on the next one.');
  }
}
questionOne();

function questionTwo() {

  let guess2 = prompt('Do I live in the Midwest?').toLowerCase();
  if (guess2 === 'yes' || guess2 === 'y') {
  //console.log('Close... but no. I used to live in the midwest but it\'s not where I currently reside.');
    alert('Close... but no. I used to live in the midwest but it\'s not where I currently reside.');
  } else if (guess2 === 'no' || guess2 === 'n') {
  //console.log('That\'s correct. If you answered the previous question correctly. Nice job. If not, 1 out of 2 ain\'t too bad.');
    alert('That\'s correct. If you answered the previous question correctly. Nice job. If not, 1 out of 2 ain\'t too bad.');
    correctAnswers++;
  }
}
questionTwo();

function questionThree() {
  let guess3 = prompt('Do I live in a coastal state?').toLowerCase();
  if (guess3 === 'yes' || guess3 === 'y') {
  //console.log('That\'s correctomundo!');
    alert('That\'s correctomundo!');
    correctAnswers++;
  } else if (guess3 === 'no' || guess3 === 'n') {
  //console.log('That is unfortunately incorrect.');
    alert('That is unfortunately incorrect.');
  }
}
questionThree();

function questionFour() {
  let guess4 = prompt('Do I live on the east coast?').toLowerCase();
  if (guess4 === 'yes' || guess4 === 'y') {
  //console.log('That\'s incorrect. It\'s actually the West Coast. Let\'s try and get that last question right.');
    alert('That\'s incorrect. It\'s actually the West Coast. Let\'s try and get that last question right.');
  } else if (guess4 === 'no' || guess4 === 'n') {
  //console.log('That is correct! I live on the West Coast.');
    alert('That is correct! I live on the West Coast.');
    correctAnswers++;
  }
}
questionFour();

function questionfive() {
  let guess5 = prompt('Is my state capital Olympia?').toLowerCase();
  if (guess5 === 'yes' || guess5 === 'y') {
  //console.log('That answer is correct! Washington state is where I reside.');
    alert('That answer is correct! Washington state is where I reside.');
    correctAnswers++;
  } else if (guess5 === 'no' || guess5 === 'n') {
  //console.log('That is incorrect.');
    alert('That is incorrect.');
  }
}
questionfive();

function guess6() {
  let guessAttempts = 4;
  let myNum = 8;
  let guessSix;

  while (guessAttempts) {
    guessSix = prompt('I\'m thinking of a number between 1 and 15. What do you think that number is?');
    guessAttempts--;


    if (+guessSix === myNum) {
      alert('Woooo 8 easyyy!!! That is correct!!! You\'re one lucky guesser. Might have to bring you to the casino with me.');
      correctAnswers++;
      break;
    } else if (+guessSix > myNum) {
      alert('That number is higher than the one I\'m thinking of.');
    } else if (+guessSix < myNum) {
      alert('That number is lower than the one I\'m thinking of.');
    }
  }
}
guess6();

function guess7() {
  if (guessAttempts === 0) {
    alert('Nice try but the answer is 8.');
  }

  let favFoods = ['mexican', 'thai', 'korean', 'indian'];
  let favFoodsAttempts = 6;
  for (let i = 0; i < 6; i++) {
    let guessSeven = prompt('What is one of my favorite types of cuisine? For example... American, British, German, etc.').toLowerCase();
    favFoodsAttempts--;

    for (let j = 0; j < favFoods.length; j++) {

      if (favFoods[j] === guessSeven) {
        alert('Correct! You guessed one of my favorite types of food!');
        correctAnswers++;
        i = 50;
        break;
      }
    }
  }

  if (favFoodsAttempts === 0) {
    alert('The correct answers were Mexican, Thai, Korean, and Indian. I love most food but these are the top four.');
  }
}
guess7();


alert(`Thanks for playing ${answer}! You got ${correctAnswers}/7 questions correct. Hopefully you enjoyed yourself. Make sure to tune in next week for another round!`);
