// inquirer or prompt npm package
var inquirer = require("inquirer");

// require word.js
var Word = require('./Word.js');

//================ GLOBAL VARIABLES ==================//
//array of words to randomly select from- baking theme
var computerChoices = ["profiteroles", "red velvet cake", "angel food cake", "boston cream pie", "strawberry shortcake", "chocolate eclair", "croissant", "soda bread", "baguette", "ciabatta bread", "jelly donut", "apple pie", "lemon meringue pie", "cherry pie", "buttermilk biscuit", "cheesecake", "baked alaska", "cheese danish", "opera cake", "figgy pudding", "tiramisu", "white bread", "cupcake", "rhubarb pie", "fruit tart", "custard tart", "swiss roll", "creme brulee", "madeira cake", "lemon drizzle cake", "shortcrust", "snickerdoodle", "praline", "meringue"];
    //TODO- add a rule to automatically add spaces as if they've been guessed already

//init variable to hold answer word
var computerAnswer = "";

//init variable to hold user guess count- 10 wrong guesses allowed
var userGuessCount = 10;

//================ END GLOBAL VARIABLES ==================//

//================ FUNCTIONS =============================//

//Randomly select a word from array 
function newAnswer() {
    computerAnswer =  computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer answer is " + computerAnswer);
    return computerAnswer;
}

//User Prompt For Guess Function
function userPrompt(finalComputerAnswer) {
    inquirer
      .prompt([
          // Guess a letter
          {
              type: "input",
              message: "\nGuess a Letter: ",
              name: "userGuessLetter"
          }
      ])
      .then(function(inquirerResponse){ //process user's responses
      //1- Check against answer- Word.compareGuess method
        //run the compare function from Word to update "guessed" value
        finalComputerAnswer.compareGuess(inquirerResponse.userGuessLetter);

      //2- display Correct or incorrect- will need separate function for this
        //if incorrect update number of guesses to 1 less
      //3- check if word is complete- if guessed is false for any letter in Word.answerArray.guessed then go to normal program flow, otherwise go to "You Win! \nPlay again?"
      //4- print current representation of word with blanks
      console.log(finalComputerAnswer.buildWordString());
    });
};

//================ END FUNCTIONS =============================//

// use the `Word` constructor to store the answer word- calling newAnswer function to select a word.
// var finalComputerAnswer = new Word(newAnswer());
computerAnswer = newAnswer();
console.log(computerAnswer);
var finalComputerAnswer = new Word(computerAnswer);
//TESTING
console.log(finalComputerAnswer);



//display welcome message-
    //"Welcome to Words with Node!
    // \nTo Play, try to guess the word below one letter at a time.
    // \nYou get 10 wrong guesses.
    // \nReady? Let's Play!\n"

//display current blanks representation of word- calling .buildWordString method on answer
console.log(finalComputerAnswer.buildWordString());
//prompt user for a guess and display # of guesses remaining
userPrompt(finalComputerAnswer);