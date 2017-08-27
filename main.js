var inquirer = require("inquirer");
var basicCard = require("./BasicCard.js");
var clozeCard = require("./ClozeCard.js");

// inquirer.prompt([{
//     name: 'song',
//     message: 'Type in the name of a song.'
// }]);

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
     // if (answer.flashcard = "Cloze Card") {
     // 	console.log(answer.flashcard);
     // }

     // else (answer.flashcard = "Basic Card") {
     // 	console.log(answer.flashcard);
     // }
	])
   .then(function(answer) {
    // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
    if (answer.basicConfirm === true) {
      console.log("You chose the basic flashcard");
    }

    else if (answer.clozeConfirm === true) {
      console.log("You chose the cloze flashcard");
    }
//If both equal true, tell the user they can only use on style of flashcards
//If both equal false, tell the user "Okay, maybe you can study later."




    // else {
    //   console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
    // }
  });