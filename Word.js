var Letter = require("./Letter.js");

//console.log(new Letter("a"));//used to check if Letter was required correctly- passed, but leaving for future ref if I change things

// * **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:



//==================== GLOBAL VARIABLES =================================//

// var userGuessChar = ""; //init user guess variable, for a single character
// userGuessChar = userGuessChar.toLowerCase(); //doing this for comparisons later

//==================== END GLOBAL VARIABLES =================================//


// word constructor
var Word = function (answerWord) {
    //======== DEFINE ARRAY of `new` Letter objects representing the letters of the underlying word ===//
    answerWord = answerWord.toLowerCase(); //doing this for comparisons later
    var answerArray = Array.from(answerWord); //split into array
    for (let i = 0; i < answerArray.length; i++) {
        answerArray[i] = new Letter(answerArray[i]); //sets the spot in the answer array that contained the letter to now contain the entire object representing the letter    
    }
    this.answerArray = answerArray; //finally assigns the finished new array to the new object with the key "answerArray"
    //============= END DEFINE ARRAY ===================================================================//

    //=================== METHOD 1 =====================================================================//
    //   * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    //=================== END METHOD 1 ==================================================================//


    //=================== METHOD 2 ======================================================================//
    //   * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
    
    //=================== END METHOD 2 ==================================================================//

}

// console.log(new Word("Awesome"));

