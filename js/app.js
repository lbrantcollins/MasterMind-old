console.log("Welcome to the world of Master Mind!");

const game = {
	// game size (4, 6, 8) and all available colors
	numColors: null,
	color: ["red", "blue", "green", "orange", "purple", "pink", "yellow", "teal"],

	// computer code and response
	code: [],
	blackPegs: 0,
	whitePegs: 0,
	response: [],

	// player's guess information
	guess: [],
	guessNumber: 1,
	guessPegPosition: null,

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
	console.log($(e.target).attr("id"));
	// The div IDs are "color1", "color2",... (extract the last number from the ID)
	const colorId = $(e.target).attr("id");
	const colorNumber = parseInt(colorId[colorId.length - 1]);
	console.log(colorId, colorNumber, game.color[colorNumber - 1]);
	console.log("#guess" + game.guessNumber + "-" + game.guessPegPosition);
	$("#guess" + game.guessNumber + "-" + game.guessPegPosition).css("background-color", game.color[colorNumber - 1]);
})

// listen to the container for guess row #1
// get back the position clicked (1, 2, ... , numColors)
$('#guess1-div').on('click', (e) => {
	console.log($(e.target).attr("id"));
	// The div IDs are "guess1-1", "guess1-2",... (extract the last number from the ID)
	const guessId = $(e.target).attr("id");
	game.guessPegPosition = parseInt(guessId[guessId.length - 1]);
	console.log("guessPegPosition: " + game.guessPegPosition);
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



