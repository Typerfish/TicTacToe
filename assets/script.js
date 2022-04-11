// Store game status

const gameStatus = document.querySelector('.status');
// Variables

let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
// Player One

let currentPlayer = "Cat";
// Messages

const winningMessage = ()=> `Play ${CurrentPlayer} is victor!`;
const tieMessage = ()=> `Uh Oh! The battle of wills continues!`;
const currentTurn = ()=> `It's ${currentPlayer}'s move..`;

// Turn Dynamics

statusDisplay.innerHTML = currentTurn();

function handleCellPlayed(){

}
function handlePlayerChange(){

}
function handleResultValidation(){

}
function handleCellClick(){

}
function handleRestartGame(){

}

// Click event

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.restart').addEventListener('click', handleRestartGame);