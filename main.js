function createPlayer (name, mark) {
    const getMark = () => `Player ${name}'s mark ${mark}`;
    return {name, mark, getMark};
}

const Jeramie = createPlayer("Jeramie", "X");
const Max = createPlayer("Max", "O");