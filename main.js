function createPlayer (name, mark) {
    const getMark = () => `Player ${name}'s mark ${mark}`;
    return {name, mark, getMark};
}

const Jeramie = createPlayer("Jeramie", "X");
const Max = createPlayer("Max", "O");

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
    
    const logBoard = () => console.log(board);
    const placeMark = function(row,column) {
        board[row][column] = "X";
        logBoard();
    }
    

    return {placeMark, logBoard};
}

const player = Gameboard();

player.placeMark(0, 0);

player.placeMark(1, 1);

player.placeMark(2, 2);

