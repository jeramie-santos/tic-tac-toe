function Gameboard() {
    const rows = 3;
    const columns = 3;
    let board = [];

    for (let i = 0; i< rows; i++){
        board[i] = [];
        for (let j = 0; j < columns; j++){
            board[i].push("");
        }
    }
    
    const getBoard = () => board;
    const logBoard = () => console.table(board);
    const placeMark = function(row, column, mark) {
        board[row][column] = mark;
        logBoard();
    }
    

    return {placeMark, logBoard, getBoard};
}

function GameController() {
    const players = [
        {
            playerName: "Jeramie",
            mark: "X",
        },
        {
            playerName: "Max",
            mark: "O",
        }
    ];

    let playerActive = players[0];

    const printPlayer = () => `Player ${playerActive.playerName}'s turn`;



    gameBoard = Gameboard();

    

    const switchPlayer = function() {
        playerActive.mark == "X" ? playerActive = players[1] : playerActive = players[0];
    }

    const playRound = function(a, b) {
        switchPlayer();
        console.log(printPlayer());
        gameBoard.placeMark(a, b, playerActive.mark);
    }

    return {playRound, printPlayer};
}

const game = GameController();

console.log(game.printPlayer());

