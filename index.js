// inquirer or prompt npm package
var inquirer = require("inquirer");

// require word.js
var Word = require('./Word.js');

//================ GLOBAL VARIABLES ==================//
//array of words to randomly select from- baking theme
var computerChoices = ["profiteroles", "red velvet cake", "angel food cake", "boston cream pie", "strawberry shortcake", "chocolate eclair", "croissant", "soda bread", "baguette", "ciabatta bread", "jelly donut", "apple pie", "lemon meringue pie", "cherry pie", "buttermilk biscuit", "cheesecake", "baked alaska", "cheese danish", "opera cake", "figgy pudding", "tiramisu", "white bread", "cupcake", "rhubarb pie", "fruit tart", "custard tart", "swiss roll", "creme brulee", "madeira cake", "lemon drizzle cake", "shortcrust", "snickerdoodle"];
    //TODO- add a rule to automatically add spaces as if they've been guessed already

//init variable to hold answer word
var computerAnswer = "";

//================ END GLOBAL VARIABLES ==================//

//================ FUNCTIONS =============================//

//Randomly select a word from array 
function newAnswer() {
    computerAnswer =  computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log("computer answer is " + computerAnswer);
    return computerAnswer;
}

//================ END FUNCTIONS =============================//

// use the `Word` constructor to store the answer word
var finalComputerAnswer = new Word(newAnswer());
console.log(finalComputerAnswer);

//Prompt the user for each guess
//keep track of the user's remaining guesses