var BasicCard = function(front, back) {
	this.Front = front;
	this.Back = back;
}

var frontArray = ["Roughly, how far from the Earth is the Sun (in miles)?"];
var backArray = ["93 million miles"];
var flashcards = [];

var generateNewCard = function() {
	for(i=0; i<frontArray.length; i++) {
		newCard = new BasicCard(frontArray[i], backArray[i]);
		flashcards.push(newCard);
	}
}

generateNewCard();

module.exports = flashcards;