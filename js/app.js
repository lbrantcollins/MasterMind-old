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
	guessPegLocation: null,

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

// listen to all guess rows at the same time (class = guess)
// find, save, and highlight the location of the chosen peg (in the guess area)
$('.guess').on('click', (e) => {
	const guessDiv = $(`.guess[data-guess-number = '${game.guessNumber}']`);
	game.guessPegLocation = guessDiv.find(`[data-peg-number = '${$(e.target).data().pegNumber}']`);
	game.guessPegLocation.css("border-color", "red");
})


// listen to all available-color divs at the same time (class = colors)
// push the chosen color onto the peg chosen by the guess-class event listener
$('.colors').on('click', (e) => {
	game.guessPegLocation.css("background-color", game.color[$(e.target).data().colorNumber]);
})



