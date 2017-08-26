function ClozeCard (cloze, text){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(cloze, "Partial: ____________")
	this.printInfo = function() {
	    console.log(this.cloze + this.text);
	  };
};

var firstPresidentCloze = new ClozeCard ("George Washington", "George Washington was the first president of the United States.");
console.log(firstPresidentCloze.fullText);
console.log(firstPresidentCloze.cloze);
module.exports = ClozeCard; 


/*If the user */
//partial text shows if we remove cloze deletion from the full text 
//throw err when close deletopn does not appear in inputtext
//useprototype to attach these messages whenever possible

