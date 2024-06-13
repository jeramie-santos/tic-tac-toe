function Gameboard() {
    let board = [];

    for (let i = 0; i< 3; i++){
        board[i] = [];
        for (let j = 0; j < 3; j++){
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

    const logBoard = () => gameBoard.logBoard();

    

    const switchPlayer = function() {
        playerActive.mark == "X" ? playerActive = players[1] : playerActive = players[0];
    }

    const playRound = function(a, b) {
        let updateBoard = gameBoard.getBoard();
        if (updateBoard[a][b] == "") {
            gameBoard.placeMark(a, b, playerActive.mark);
            switchPlayer();
            console.log(printPlayer());
        } else {
            console.log("Cannot place a mark!");
        }
        
    }

    return {playRound, printPlayer, logBoard};
}

const game = GameController();

console.log(game.printPlayer());
console.log(game.logBoard());

