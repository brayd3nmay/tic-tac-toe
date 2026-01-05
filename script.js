function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for (let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const placeMark = (row, column, player) => {
        if (board[row][column].getValue() === 0) {
            board[row][column].addMark(player);
        }
    };

    const printBoard = () => {
        const boardValues = board.map(row => row.map(column => column.getValue()));
        console.log(boardValues);
    };

    return {
        getBoard,
        placeMark,
        printBoard
    };
}

function Cell() {
    let value = 0;

    const addMark = (player) => {
        value = player;
    };

    const getValue = () => value;

    return {
        addMark,
        getValue
    };
}

