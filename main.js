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
    const logBoard = () => console.log(board);
    const placeMark = function(row, column, mark) {
        board[row][column] = "X";
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

    gameBoard = Gameboard();

    gameBoard.placeMark(0, 0,players[0].mark);
}

const game = GameController();

