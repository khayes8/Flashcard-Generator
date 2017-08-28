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
   	//should only console log the answer but console logs lin 29 and 31's responses as well, but does work at least
   	//learned from this homework that I need to build my understanding of logical operators and practice using them more as well as ternarys
	answer.basicConfirm === true && answer.clozeConfirm == true ? console.log("Try again and only choose one choice next time."):answer.basicConfirm === false && answer.clozeConfirm == false;

	answer.basicConfirm === false && answer.clozeConfirm == false ? console.log("Try again another time."):answer.basicConfirm === true && answer.clozeConfirm == true;

 	answer.basicConfirm === true ? console.log(firstPresident) : answer.basicConfirm === false;

	answer.clozeConfirm === true ? console.log(firstPresidentCloze) : answer.clozeConfirm === false;
	
	});

