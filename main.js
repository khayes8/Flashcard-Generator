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
   	if (answer.basicConfirm && answer.clozeConfirm == true){
		console.log("Try again and only choose one choice next time.");
	}
	//if I write my code in ternarys, the above conditional statement ^^ doesnt't work. 
	// else if (answer.basicConfirm && answer.clozeConfirm == false){
	// 	console.log("Sounds like you're not interested in studying right now. Maybe study later?")
	// because I'm using inquirer and users arent typing 
	else if (answer.basicConfirm === true){
	console.log(firstPresident);
	}
	else if (answer.clozeConfirm === true){
		console.log(firstPresidentCloze)
	}
    
    //tried ternarys for cleaner more elegant code however kept getting the console log as well as flashcards
 	//answer.basicConfirm === true ? console.log(firstPresident) : answer.basicConfirm === false;
	// answer.clozeConfirm === true ? console.log(firstPresidentCloze) : answer.clozeConfirm === false;
	
	});

