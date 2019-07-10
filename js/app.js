console.log("Welcome to the world of Master Mind!");

const game = {
	// game size (4, 6, 8) and all available colors
	numColors: null,
	color: ["rgb(255, 99, 71)", "rgb(65, 105, 225)", "rgb(60, 179, 113)", "rgb(255, 165, 0)", "purple", "pink", "yellow", "teal"],

	// computer code and response
	code: [],
	blackPegs: 0,
	whitePegs: 0,
	response: [],

	// player's guess information
	guess: [],
	guessNumber: 1,
	guessRowLocation: null,
	guessPegLocation: null,

	startGame () {
		this.numColors = 4;									//*** Let user choose number of colors
		this.displayAvailableColors();
		this.generateCode();
	},	

	displayAvailableColors () {
		const colorDiv = $('#color-container');
		for (i = 0; i < this.numColors; i++ ) {
		colorDiv.find(`[data-color-number = '${i}']`).css("background-color", this.color[i]);
		}
		// $('#color1').css("background-color", this.color[0]);
		// $('#color2').css("background-color", this.color[1]);
		// $('#color3').css("background-color", this.color[2]);
		// $('#color4').css("background-color", this.color[3]);
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

	highlightCurrentGuessPeg (e) {
		// find the current guess peg via event delegation
		// 1. find particular guess row div 
		// using html .guess class data (guess-number)
		this.guessRowLocation = $(`.guess[data-guess-number = '${this.guessNumber}']`);
		// 2. find the peg in the guess div using html data (peg-number)
		this.guessPegLocation = this.guessRowLocation.find( 
			`[data-peg-number = '${$(e.target).data().pegNumber}']`
			);
		// 3. highlight the location of the current peg (and un-highlight other pegs)
		for (let i = 1; i <=	this.numColors; i++) {
			if (i === $(e.target).data().pegNumber) {
				this.guessPegLocation.addClass("current-peg");
			}
			else {
				this.guessRowLocation.find(`[data-peg-number = '${i}']`).removeClass("current-peg");
			}
		}
	},

	colorCurrentGuessPeg (e) {
		this.guessPegLocation.css("background-color", 
			this.color[$(e.target).data().colorNumber]);
	},

	clearCurrentGuessFormatting(e) {
		this.guessPegLocation.removeClass("current-peg");
		for (let i = 1; i <=	this.numColors; i++) {
			this.guessRowLocation.find(`[data-peg-number = '${i}']`).css("border", "none");
		}
	},


	checkGuess () {
		// check to see that 
		//   1. the submit button clicked is the one for the current guess row
		//   2. all peg positions have a selected color
		this.guessRowLocation = $(`.guess[data-guess-number = '${game.guessNumber}']`);
		let validGuess = true;
		const guess = [];
		for (let i = 1; i <=	game.numColors; i++) {
			index = i - 1;
			if ( this.guessRowLocation.find(`[data-peg-number = '${i}']`).css("background-color") === "rgb(255, 255, 255)") {
				// this peg is white (not yet filled with a color)
				guess[index] = false;
				validGuess = false;
			} else {
				guess[index] = this.guessRowLocation.find(
					`[data-peg-number = '${i}']`).css("background-color"
					);
			}
		}
		console.log(guess);
		console.log(validGuess);
		if (validGuess) {
			for (let i = 0; i < game.numColors; i++) {
				for (let j = 0; j < game.numColors; j++) {

					//********************************************
					//********************************************
					// START HERE *********************************************************
					//********************************************
					//********************************************
				}
			}

		}
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
	game.highlightCurrentGuessPeg(e);	
})

// listen to all available-color divs at the same time (class = colors)
// push the chosen color onto the peg chosen by the guess-class event listener
$('.colors').on('click', (e) => {
	game.colorCurrentGuessPeg(e);
})

// listen for a guess to be submitted, but only act if
//   1. the submit button clicked is the one for the current guess row
//   2. all peg positions have a selected color
$('.guess-button').on('click', (e) => {
	game.clearCurrentGuessFormatting(e);
	game.checkGuess();
})



