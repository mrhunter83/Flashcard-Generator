var ClozeCard = function(cloze, partial, fulltext) {
	this.Cloze = cloze,
	this.Partial = partial,
	this.Fulltext = fulltext
}

var cloze = ["Eli Whitney"];
var partial = [" ... created the cotton gin."];
var full = ["Eli Whitney created the cotton gin."]
var clozecards = [];

var generateNewCard = function() {
	for(i=0; i<partial.length; i++) {
		if(full[i].includes(cloze[i]) === true) {
			newCard = new ClozeCard(cloze[i], partial[i], full[i]);
			clozecards.push(newCard);
		}
		else {
			return console.log("Cloze card generator broken.");
		}
	}
}

generateNewCard();

module.exports = clozecards;