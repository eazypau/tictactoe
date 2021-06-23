// welcome message
alert(
  "Welcome to Tic Tac Toe. Player 1 is using O while Player 2 is using X. The first player to win 3 times wins!"
);

// grab reset button by ID
const resetButton = document.querySelector("#reset");
// grab the boxes by class
const allboxes = document.querySelectorAll(".box");
// grab player 1 score board
let scoreP1 = document.getElementById("player1Score");
// grab player 2 score board
let scoreP2 = document.getElementById("player2Score");
// grab announcement to show who's turn
let whosTurn = document.getElementById("playersturn");
// game is set to active
let gameStatus = true;
// setting first player variable
let currentPlayer = 'O'
// add winning array
const winningArray = []
// variable to store player's score
let scoreOfP1 = []
let scoreOfP2 = []
// create variable text for the annoucement

function resetBtn() {
  gameStatus = true;
  currentPlayer = 'o';
  scoreP1.textContent = 0;
  scoreP2.textContent = 0;
  for (let i = 0; i < allboxes.length; i++) {
    allboxes[i].textContent = '';
  }
}

function handlePlay() {}
// handle the player input

function winningLogic() {}
// define the winning algorithm
// update the player score here

function roundsToWin() {
  if (scoreOfP1.length = 3) {
    alert("Player 1 wins!");
    gameStatus = false;
  } else if (scoreOfP2.length = 3) {
    alert("Player 2 wins!");
    gameStatus = false;
  }
}

function playersTurn() {
  // determine which player's turn
  currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
  whosTurn.innerHTML =
}

function gameLogicSequence() {
  // define the logic sequence

}

resetButton.addEventListener("click", resetBtn)

