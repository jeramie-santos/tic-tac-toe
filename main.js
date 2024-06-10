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
            board[i].push("0");
        }
    }
}

Gameboard();