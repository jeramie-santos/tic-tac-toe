const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const table = document.querySelector("table");

function Gameboard() {
    let board = [];

    for (let i = 0; i< 3; i++){
        board[i] = [];
        for (let j = 0; j < 3; j++){
            board[i].push("");
        }
    }
    
    const getBoard = () => board;
    const logBoard = () => {
        table.innerHTML = `
            <tr>
                <td>${board[0][0]}</td>
                <td>${board[0][1]}</td>
                <td>${board[0][2]}</td>
            </tr>
            <tr>
                <td>${board[1][0]}</td>
                <td>${board[1][1]}</td>
                <td>${board[1][2]}</td>
            </tr>
            <tr>
                <td>${board[2][0]}</td>
                <td>${board[2][1]}</td>
                <td>${board[2][2]}</td>
            </tr>
        `;
    };
    
    const placeMark = function(row, column, mark) {
        board[row][column] = mark;
        logBoard();
    }
    

    return {placeMark, logBoard, getBoard};
}

function GameController() {
    const players = [
        {
            name: "Jeramie",
            mark: "X",
        },
        {
            name: "Max",
            mark: "O",
        }
    ];

    let playerActive = players[0];

    const printPlayer = () => `Player ${playerActive.name}'s turn`;
    const printMark = () => `Mark ${playerActive.mark}`;



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
            h1.textContent = printPlayer();
            h2.textContent = printMark();
        } else {
            console.log("Cannot place a mark!");
        }
        
    }

    return {playRound, printPlayer, printMark ,logBoard};
}

const game = GameController();

h1.textContent = game.printPlayer();
h2.textContent = game.printMark();
game.logBoard();

