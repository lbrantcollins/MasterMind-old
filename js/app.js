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

			// Look for correct color and position matches 
			if (this.guess[i] === this.code[i]) {
				this.blackPegs++;
				// console.log(`i = ${i}: one more black peg`);
			} else 

			// Look for correct color matches
			if (this.code.includes(this.guess[i])) {
				this.whitePegs++;
				// console.log(`i = ${i}: one more white peg`);
			}			
		}
		console.log("black pegs: " + this.blackPegs);
		console.log("white pegs: " + this.whitePegs);
	}

}

game.startGame();


