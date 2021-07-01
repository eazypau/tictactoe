// welcome message
alert("Welcome to Tic Tac Toe. Player 1 is using O while Player 2 is using X.");

// grab reset button by ID
const resetButton = document.querySelector("#reset");
// grab the boxes by class
const allboxes = document.querySelectorAll(".box");
// grab announcement to show who's turn
let whosTurn = document.getElementById("playersTurn");
// game is set to active
let gameStatus = true;
// setting first player variable
let currentPlayer = "O";
// create winning conditions variable in array form
const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
// store our current game state here, the form of empty strings
// in an array will allow us to easily track played cell and
// validate the game state later on
let gameState = ["", "", "", "", "", "", "", "", ""];

whosTurn.innerHTML = "Player " + currentPlayer + " turn";

// create a function to return a text to show player's turn
const handlePlayerTurn = (currentPlayer) => {
  return (whosTurn.innerHTML = "Player " + currentPlayer + " turn.");
};
// handles the reset button
function resetBtn() {
  gameStatus = true;
  currentPlayer = "O";
  gameState = ["", "", "", "", "", "", "", "", ""];
  whosTurn.innerHTML = "Player " + currentPlayer + " turn";
  for (let i = 0; i < allboxes.length; i++) {
    allboxes[i].textContent = "";
  }
}
// handles the player input
function handleBoxClicked(clickedBox, boxIndex) {
  gameState[boxIndex] = currentPlayer;
  clickedBox.innerHTML = currentPlayer;
}
// validate the winning condition
function winningValidation() {
  let roundWon = false;
  for (let i = 0; i <= 7; i++) {
    const winningCondition = winningConditions[i];
    let a = gameState[winningCondition[0]];
    let b = gameState[winningCondition[1]];
    let c = gameState[winningCondition[2]];
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }
  if (roundWon) {
    gameStatus = false;
    return alert("Player " + currentPlayer + " won. Please click the reset button to play again~");
  }
  let roundDraw = !gameState.includes("");
  if (roundDraw) {
    gameStatus = false;
    return alert("Oh no, is a draw! Please click the reset button to play again~");
  }
  playerChange();
}

function playerChange() {
  // determine which player's turn
  currentPlayer = currentPlayer === "O" ? "X" : "O";
  whosTurn.innerHTML = handlePlayerTurn(currentPlayer);
}

function gameLogicSequence(clickedBoxEvent) {
  // define the logic sequence
  const clickedBox = clickedBoxEvent.target;

  const clickedBoxIndex = parseInt(clickedBox.getAttribute("data-cell-index"));

  if (gameState[clickedBoxIndex] !== "" || !gameStatus) {
    return;
  }

  handleBoxClicked(clickedBox, clickedBoxIndex);
  winningValidation();
}

resetButton.addEventListener("click", resetBtn);
allboxes.forEach((box) => {
  box.addEventListener("click", gameLogicSequence);
});
