# MasterMind

### Summary of the Game

#### 1. The computer chooses a "code"

  * A code is sequence of N ordered "pegs" chosen from N available colors (N = 4, 6, 8, 10).  
  * The code may include more than one of any of the colors. That is, not every color is required to appear in the code.  
  * In fact, a code where every peg is red is allowed.
  * The set of $N$ available colors is known by the player, but the player does **not** know the code generated by the computer.
  
##### Example 

  * N = 4 available colors :red_circle: :white_circle: :large_blue_circle: :black_circle:
  * Computer code: :red_circle: :red_circle: :black_circle: :large_blue_circle:
    
#### 2. The player takes a guess at the code

  * A guess is sequence of N ordered "pegs" chosen from N available colors (N = 4, 6, 8, 10). 
  * The rules for a valid guess are the same as the rules for a valid code above.
  
##### Example (continued)

  * Player guess: :black_circle: :red_circle: :large_blue_circle: :white_circle:
    
#### 3. The computer responds to the player's guess

  * The computer gives some hints as to the accuracy of player's guess
  * If a peg in the guess matches both the color _and_ position of a peg in the code, the computer places one black peg in the response area
  * A black peg does **not** indicate _which_ peg position is correct, only that there is a peg in the guess that is correct.
  * If a peg in the guess matches in color only (not in the correct position), the computer places one white peg in the response area
  
##### Example

  * Computer response: :black_medium_small_square:, :white_medium_small_square:, :white_medium_small_square:
  
##### NOTE: 
Because of the possibility of multiple uses of a single color in both the code and the guess, the following example should make clear the rules for the computer's response in such cases.

For example ([paraphrased](https://en.wikipedia.org/wiki/Mastermind_(board_game)#Gameplay_and_rules)), if the hidden code is :red_circle: :red_circle: :large_blue_circle: :large_blue_circle: and the player guesses :red_circle: :red_circle: :red_circle: :large_blue_circle:, the computer will award two black pegs for the two correct :red_circle:, nothing for the third :red_circle: as there is not a third :red_circle: in the code, and will award a black peg for the :large_blue_circle: guess. In particular, no indication is given of the fact that the code also includes a second :large_blue_circle:.
    
#### 4. Repeat steps 2 and 3 until...

  * The player is allowed M guesses (usually, M = 8, 10, 12).
  * The game ends when either
    * **WIN:** the player guesses the correct code
    * **LOSE:** M incorrect guesses have been made
    * The 
