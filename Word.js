var Letter = require("./Letter.js");

//console.log(new Letter("a"));//used to check if Letter was required correctly- passed, but leaving for future ref if I change things


// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

//   * An array of `new` Letter objects representing the letters of the underlying word

//   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

//==================== GLOBAL VARIABLES =================================//
var answerWord = "awesomeness";// hard-coding placeholder for word
//NOTE- When creating array of answer words, use only lower-case letters for now

var answerArray = Array.from(answerWord); //split into array

// TODO, fix this below for single character guesses
// var userGuessWord = ""; //init user guess variable- if user guesses a whole word, oops
// var userGuessArray = Array.from(userGuessWord);// split into array

//==================== END GLOBAL VARIABLES =================================//

for (let i = 0; i < answerArray.length; i++) {
    answerArray[i] = new Letter(answerArray[i]); //sets the spot in the answer array that contained the letter to now contain the entire object representing the letter    
}

console.log(answerArray);
