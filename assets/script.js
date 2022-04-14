// Store game status

const gameStatus = document.querySelector('.status');
 
// Variables

let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
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

// Player One

let currentPlayer = "X";

// Messages

const winningMessage = ()=> `Player ${CurrentPlayer} is victor!`;
const tieMessage = ()=> `Uh Oh! The battle of wills continues!`;
const currentTurn = ()=> `It's ${currentPlayer}'s move..`;

// Turn Dynamics

gameStatus.innerHTML = currentTurn();

function handleCellPlayed(clickedCell, clickedCellIndex){
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentTurn();
}

function handleResultValidation(){
    let roundWon = false;
    for(let i = 0; i < winningConditions.length; i++){
        const winCondition = winningConditions[i];
        let A = gameState[winCondition[0]];
        let B = gameState[winCondition[1]];
        let C = gameState[winCondition[2]];
        if(A === '' || B === '' || C === ''){
            if (A === B && B === C){
                roundWon = true;
                break
            }
        }
        if(roundWon){
            gameStatus.innerHTML = winningMessage();
            gameActive = false;
            return;
        }
    }
    let roundDraw = !gameState.includes("");
    if(roundDraw){
        gameStatus.innerHTML = tieMessage();
        gameActive = false;
        return;
    }
    handlePlayerChange();
}

function handleCellClicked(clickedCellEvent){
    const clickedCell = clickedCellEvent.target
    const clickedCellIndex = parseInt(
        clickedCell.getAttribute('data-cell-index')
    );
    if(gameState[clickedCellIndex] !== "" || !gameActive){
        return;
    }
    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation()
}

function handleRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    gameStatus.innerHTML = currentTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}

// Click event

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClicked));
document.querySelector('.restart').addEventListener('click', handleRestartGame);