//create a constructor for basic card
function BasicCard (front, back){
	this.front = front;
	this.back = back;
	this.printInfo = function() {
	    console.log(this.front + this.back);
	  };
}

//call the function and implementing two arguments
var firstPresident = new BasicCard ("Who was the first president of the United States? ", "George Washington");

firstPresident.printInfo();
console.log(firstPresident.front);
console.log(firstPresident.back);

