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

function GameController(playerOneName, playerTwoName) {
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1,
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];
    
    let activePlayer = players[0];

    const getActivePlayer = () => activePlayer;

    const switchActivePlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };

    const printNewRound = () => {
        board.printBoard();
        console.log(`Player ${getActivePlayer().name} turn.`);
    };

    const playRound = (row, column) => {
        console.log(`Placing ${getActivePlayer().name}'s mark onto ${row}, ${column}.`);

        board.placeMark(row, column, getActivePlayer().token);

        switchActivePlayer();
        printNewRound();
    };

    return {
        getActivePlayer,
        playRound,
        getBoard: board.getBoard
    };
}