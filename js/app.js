'use strict';

console.log('hello world');

let answer = prompt('What is your name?');
//console.log//(`Welcome to my site ${answer}! Please answer Yes or No to the following questions.`);
alert(`Welcome to my site ${answer}! Please answer Yes or No to the following questions.`);

let guess1 = prompt('Guess my location. Do I live in the Contiguous United States?').toLowerCase();
if (guess1 === 'yes' || guess1 === 'y') {
    //console.log//('You are correct');
    alert('You are correct');
} else if (guess1 === 'no' || guess1 === 'n') {
     //console.log('Not quite. We\'ll get em on the next one.');
    alert('Not quite. We\'ll get em on the next one.')
}

let guess2 = prompt('Do I live in the Midwest?').toLowerCase();
if (guess2 === 'yes' || guess2 === 'y') {
    //console.log('Close... but no. I used to live in the midwest but it\'s not where I currently reside.');
    alert('Close... but no. I used to live in the midwest but it\'s not where I currently reside.')
} else if (guess2 === 'no' || guess2 === 'n') {
    //console.log('That\'s correct. If you answered the previous question correctly. Nice job. If not, 1 out of 2 ain\'t too bad.');
    alert('That\'s correct. If you answered the previous question correctly. Nice job. If not, 1 out of 2 ain\'t too bad.')
}

let guess3 = prompt('Do I live in a coastal state?').toLowerCase();
if (guess3 === 'yes' || guess3 === 'y') {
    //console.log('That\'s correctomundo!');
    alert('That\'s correctomundo!')
} else if (guess3 === 'no' || guess3 === 'n') {
    //console.log('That is unfortunately incorrect.');
    alert('That is unfortunately incorrect.')
}

let guess4 = prompt('Do I live on the east coast?').toLowerCase();
if (guess4 === 'yes' || guess4 === 'y') {
    //console.log('That\'s incorrect. It\'s actually the West Coast. Let\'s try and get that last question right.');
    alert('That\'s incorrect. It\'s actually the West Coast. Let\'s try and get that last question right.')
} else if (guess4 === 'no' || guess4 === 'n') {
    //console.log('That is correct! I live on the West Coast.');
    alert('That is correct! I live on the West Coast.')
}

let guess5 = prompt("Is my state capital Olympia?").toLowerCase();
if (guess5 === 'yes' || guess5 === 'y') {
    //console.log('That answer is correct! Washington state is where I reside.');
    alert('That answer is correct! Washington state is where I reside.')
} else if (guess5 === 'no' || guess5 === 'n') {
    //console.log('That is incorrect.');
    alert('That is incorrect.')
}

alert(`Thanks for playing ${answer}! Hopefully you enjoyed yourself. Make sure to tune in next week for another round!`)