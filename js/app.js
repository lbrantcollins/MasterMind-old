console.log("Welcome to the world of Master Mind!");

const game = {
	numColors: null,
	availableColors: [0, 1, 2, 3, 4, 5, 6, 7, 8],

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
			this.code[i] = Math.floor( Math.random() * 4 );
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
				// console.log(`i = ${i}: one more black peg`);
			} else 

			// Look for correct color-only matches
			if (this.code.includes(this.guess[i])) {
				this.whitePegs++;
				this.response[i] = 1;
				// console.log(`i = ${i}: one more white peg`);
			}			
		}
		// sort response in descending order
		// 2 = black, 1 = white, 0 = no response
		this.response.sort( function(a, b) { return b - a } );  
		console.log("black pegs: " + this.blackPegs);
		console.log("white pegs: " + this.whitePegs);
		console.log("the response: ", this.response);
	}

}

game.startGame();


