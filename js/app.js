console.log("Welcome to the world of Master Mind!");

game = {
	numColors: null,
	availableColors: [],

	code: [],
	codeColorCount: [],

	guessNumber: 1,
	guess: [],
	guessColorCount: [],

	blackPegs: 0,
	whitePegs: 0,
	response: [],

	startGame () {
		this.numColors = 4;									//*** Let user choose number of colors

		this.initializeArrays();
		this.createCode();
	},	

	initializeArrays () {
		for (let i = 0; i < this.numColors; i++) {
			this.availableColors[i] = i;
			this.code[i] = 0;
			this.codeColorCount[i] = 0;
			this.guess[i] = 0;
			this.guessColorCount[i] = 0;
			this.response[i] = 0;
		}
	},

	createCode () {
		this.code = [2, 3, 2, 1];  						//*** randomly generate a code

		// Let user start guessing
		this.guessColors();

	},

	guessColors () {
		this.guess = [3, 3, 1, 2];  						//*** let user choose colors

		// Ask the computer to respond to the guess
		this.respondToGuess();

	},

	respondToGuess () {
		for (let i = 0; i < this.numColors; i++) {

			// Look for correct color and position matches 
			if (this.guess[i] === this.code[i]) {
				this.blackPegs++;
				console.log(`i = ${i}: one more black peg`);
			} else 

			// Look for correct color matches
			if (this.code.includes(this.guess[i])) {
				this.whitePegs++;
				console.log(`i = ${i}: one more white peg`);
			}			
		}
		console.log("black pegs: " + this.blackPegs);
		console.log("white pegs: " + this.whitePegs);

		// Remove any overcount of correct color matches (white pegs)
		// where count of occurrences in the code exceeds count in the guess.
		// Start by getting a count of each color appearing in the code and guess
		for (let i = 0; i < this.numColors; i++) {
			this.codeColorCount[this.code[i]] ++;
			this.guessColorCount[this.guess[i]]++;
		}
		// tally the number of times a color appears more often in the code than the guess
		let whitePegDecrement = 0;
		for (let i = 0; i < this.numColors; i++) {
			whitePegDecrement += Math.max(0, this.codeColorCount[i] - this.guessColorCount[i]); 
			console.log(`i: ${i} and whitePegDecrement: ${whitePegDecrement}`);
		}
		this.whitePegs -= whitePegDecrement;
		console.log(`whitePegs: ${this.whitePegs} and whitePegDecrement: ${whitePegDecrement}`);
	}

}

game.startGame();


