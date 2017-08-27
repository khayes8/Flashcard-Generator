function ClozeCard (cloze, text){
	this.cloze = cloze;
	this.fullText = text;
	this.partial = text.replace(cloze, "Partial: ")
};
module.exports = ClozeCard; 
