var inquirer = require("inquirer");
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");

var firstPresidentCloze = new clozeCard("George Washington", "George Washington was the first president of the United States.");


var firstPresident = new basicCard("Who was the first president of the United States?", "George Washington");

inquirer
  .prompt([
  	 {
  	  type: "confirm",
      message: "Do you want to use the basic flashcard?",
      name: "basicConfirm",
      default: true
    },
    {
      type: "confirm",
      message: "Do you want to use the cloze flashcard?",
      name: "clozeConfirm",
      default: true
    }
	])
   .then(function(answer) {
    if (answer.basicConfirm === true) {
      console.log(firstPresident);
    }

    else if (answer.clozeConfirm === true) {
      console.log(firstPresidentCloze);
    }
	});
// If both equal true, tell the user they can only use on style of flashcards
// If both equal false, tell the user "Okay, maybe you can study later."


	 // if (answer.flashcard = "Cloze Card") {
  //    	console.log(answer.flashcard);
  //    }

  //    else (answer.flashcard = "Basic Card") {
  //    	console.log(answer.flashcard);
  //    }

