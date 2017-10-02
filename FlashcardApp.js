var inquirer = require('inquirer');
var basicCards = require('./BasicCard.js');
var clozeCards = require('./ClozeCard.js');


var count = 0;
var discard = [];

inquirer.prompt([
{
	type: "list",
	message: "Which type of cards would you like?",
	choices: ['Basic Cards', 'Cloze Cards'],
	name: "Type"
}
]).then(function(answers) {
	if(answers.Type === 'Basic Cards') {
		inquirer.prompt([
		{
			type: "confirm",
			message: "Basic Flashcards Selected. Ready to Begin?",
			name: "Start"
		}
		]).then(function(answers) {
			basicPlay();
			function basicPlay(){
				if(answers.Start === true && count < basicCards.length) {
					inquirer.prompt([
					{
						name: "Basic Card",
						message: "Question: "+basicCards[0].Front+"  (Press enter when ready to flip.)"
					}
					]).then(function() {
						console.log(basicCards[0].Back);
						inquirer.prompt([
						{
							type: "confirm",
							message: "Did you answer correctly?",
							name: "outcome"
						}
						]).then(function(answer){
							if(answer.outcome === true) {
								console.log("Good Job!");
								discard = basicCards.splice(0, 1);
								count++;
								basicPlay();
							}
							else if(answer.outcome === false) {
								var temp = basicCards.splice(0, 1);
								basicCards.push(temp[0]);
								basicPlay();
							}
						})
					})
				}
				else if(answers.Start === false && count < basicCards.length) {
					return;
				}
				else {
					return;
				}
			}
		})
	}
	else if(answers.Type === 'Cloze Cards') {
		inquirer.prompt([
		{
			type: "confirm",
			message: "Cloze Flashcards Selected. Ready to Begin?",
			name: "Start"
		}
		]).then(function(answers) {
			clozePlay();
			function clozePlay() {
				if(answers.Start === true && count < clozeCards.length) {
					inquirer.prompt([
					{
						name: "Cloze Card",
						message: "Question: "+clozeCards[0].Partial+"  (Press enter when ready to flip.)"
					}
					]).then(function(answers) {
						console.log(clozeCards[0].Cloze);
						inquirer.prompt([
						{
							type: "confirm",
							message: "Did you answer correctly?",
							name: "outcome"
						}
						]).then(function(answer){
							if(answer.outcome === true) {
								console.log("Good Job!");
								console.log("Full Answer: "+clozeCards[0].Fulltext);
								discard = clozeCards.splice(0, 1);
								count++;
								clozePlay();
							}
							else {
								console.log("Answer: "+clozeCards[0].Cloze);
								console.log("Full Answer: "+clozeCards[0].Fulltext);
								var temp = clozeCards.splice(0, 1);
								clozeCards.push(temp[0]);
								clozePlay();
							}
						})
					})
				}
				else if(answers.Start === false && count < clozeCards.length) {
					return;
				}
				else {
					return;
				}
			}
		})
	}
})