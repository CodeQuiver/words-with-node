var Letter = require("./Letter.js");

//console.log(new Letter("a"));//used to check if Letter was required correctly- passed, but leaving for future ref if I change things

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess.


//==================== GLOBAL VARIABLES =================================//

var userGuessChar = ""; //init user guess variable, for a single character


//==================== END GLOBAL VARIABLES =================================//


// word constructor
var Word = function(answerWord) {
    //======== DEFINE ARRAY of `new` Letter objects representing the letters of the underlying word ===//
    answerWord = answerWord.toLowerCase(); //doing this for comparisons later
    var answerArray = Array.from(answerWord); //split into array
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i] = new Letter(answerArray[i]); //sets the spot in the answer array that contained the letter to now contain the entire object representing the letter    
    }
    this.answerArray = answerArray; //finally assigns the finished new array of objects to the new object with the key "answerArray"
    //============= END DEFINE ARRAY ===================================================================//

        //=================== METHOD 1 =====================================================================//
        //returns a string representing the word. This should call the function on each letter object ( getChar() in `Letter.js`) that displays the character or an underscore and concatenate those together.

        this.buildWordString = function() {
            //init wordString to build on
            var wordString = "";
            //loop through each Letter object in answerArray
            for (let i = 0; i < answerArray.length; i++) {
                // console.log("Word.builddWordString: About to call getChar for this.answerArray ele "+ i);
                var stringResult = this.answerArray[i].getChar(); //call getChar
                wordString = wordString + stringResult; //concatenate all returns together
            }
            // console.log("This is the return from buildWordString");
            // console.log(wordString);
            return wordString;
        }

        //=================== END METHOD 1 ==================================================================//


        //=================== METHOD 2 ======================================================================//
        //takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
        this.compareGuess = function(userGuessChar) {
            userGuessChar = userGuessChar.toString();
            userGuessChar = userGuessChar.toLowerCase(); //doing this for comparisons later
            // console.log("Word.compareGuess: answerArray.length =" + answerArray.length);
            for (let i = 0; i < answerArray.length; i++) {
                // console.log("Word.compareGuess: About to call checkCharGuess for this.answerArray ele "+ i);
                this.answerArray[i].checkCharGuess(userGuessChar);
                // return this.answerArray[i].checkCharGuess(userGuessChar);//this returns as the function value the true or false return from the functions being called, so we can tell the user if their guess was correct
            }
        }

        //=================== END METHOD 2 ==================================================================//
}

// //TEST FUNCTION
// function testWord() {
//     console.log("I'm going to test word.js");
//     var newWord = new Word("Awesome");
//     newWord.compareGuess("A");
//     newWord.buildWordString();
// }
// //END TEST FUNCTION

// console.log(new Word("Awesome"));

// testWord();

module.exports = Word;