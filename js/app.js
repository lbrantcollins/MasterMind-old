console.log("Welcome to the world of Master Mind!");

const game = {
	numColors: null,
	colors: [1, 2, 3, 4, 5, 6, 7, 8],


	code: [],
	guess: [],
	guessNumber: 1,

	blackPegs: 0,
	whitePegs: 0,
	response: [],

	startGame () {
		this.numColors = 4;									//*** Let user choose number of colors
		this.generateCode();
	},	

	generateCode () {
		// randomly generate a code
		for (let i = 0; i < this.numColors; i++) {
			this.code[i] = Math.floor( Math.random() * this.numColors );
		}
		console.log("the code: ", this.code);

		// Let user start guessing
		this.guessColors();

	},

	guessColors () {
		this.guess = [3, 3, 1, 2];  						//*** let user choose colors
		console.log("the guess: ", this.guess);

		// Ask the computer to respond to the guess
		this.respondToGuess();

	},

	respondToGuess () {
		for (let i = 0; i < this.numColors; i++) {

			this.response[i] = 0;
			// Look for correct color-and-position matches 
			if (this.guess[i] === this.code[i]) {
				this.blackPegs++;
				this.response[i] = 2;
			} else 

			// Look for correct color-only matches
			if (this.code.includes(this.guess[i])) {
				this.whitePegs++;
				this.response[i] = 1;
			}			
		}
		// sort response in descending order for ease of output
		// 2 = black, 1 = white, 0 = no response
		this.response.sort( function(a, b) { return b - a } );
		console.log("the response: ", this.response);

		// re-code the response as values for CSS "background-color" property
		for (let i = 0; i < this.numColors; i++) {
			if (this.response[i] === 2) {
				this.response[i] = "black";
			} else if (this.response[i] === 1) {
				this.response[i] = "white";
			} else {
				this.response[i] = "none";
			}
		}
		console.log("the response: ", this.response);	
	}

}

//*************************************************************************
game.startGame();
//*************************************************************************


//*************************************************************************
// Event listeners
//*************************************************************************

// instead of adding listeners for each available-color button
// we will listen to the container (e.currentTarget)
$('#color-container').on('click', (e) => {
	console.log(e.currentTarget);
	console.log(e.target);
	$('#guess1-1').css("background-color", "purple");
})


// document.getElementById('container-div').addEventListener('click', (e) => {

// console.log(e);
//   // e.target is the actual thing we clicked
//   // and when we click inside a button div, we know the button value
//   if (e.target.className === "button-div") {
//     // pass along the text on the button and the button div id
//      calculator.takeActionForButton(e.target.textContent, e.target.id);
//    }
  

// })



