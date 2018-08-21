let columns = [];
let board = document.getElementById('board');
let currentPlayer = 'red';
let nextPlayer = 'black';
let winner = '';
let isThereAMatch = false;
let boardData = [
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],
    ['0', '0', '0', '0', '0', '0', '0'],

]
const edgeX = boardData[0].length - 3;
const edgeY = boardData.length - 3;
const lenghtOfX = boardData[0].length;
const lengthOfY = boardData.length;
let cell = '';
let cell2 = '';
let cell3 = '';
let cell4 = '';


createColumns(7)
addListnersToColumns(columns);

function createDisk(color) {
    let disk = document.createElement('div');
    disk.className = "disc";
    disk.style.backgroundColor = color;
    return disk
}

function createColumns(numberOfColumns) {
    for (let i = 0; i < numberOfColumns; i++) {
        let column = document.createElement('div');
        column.className = "column";
        column.id = "column" + i;
        column.dataset.columnNumber = i;
        columns.push(column);
        board.appendChild(column);
    }
}

function addListnersToColumns(columns) {
    for (let i = 0; i < columns.length; i++) {
        columns[i].addEventListener('click', dropDisk)
    }
}

function removeListeners(columns) {
    for (let i = 0; i < columns.length; i++) {
        columns[i].removeEventListener("click", dropDisk);
    }
}

function roomInColumn(column) {
    let result = false;
    if (column.childElementCount == 5) {
        column.style.cursor = "not-allowed"
    }
    if (column.childElementCount < 6) {
        result = true;
    }
    return result;
}

function dropDisk(event) {
    const column = event.currentTarget;
    if (roomInColumn(column)) {
        let disk = createDisk(currentPlayer);
        column.appendChild(disk);
        addToBoardData(column, currentPlayer)
        checkForWinner();
        if (checkForWinner()) {
            winner = currentPlayer;
            displayWinner(winner);
            removeListeners(columns);
        }
        switchPlayers();
        // console.log(boardData)
    }
}

function switchPlayers() {
    let temp = nextPlayer;
    nextPlayer = currentPlayer;
    currentPlayer = temp;
}

function addToBoardData(column, currentPlayer) {
    let columnNumber = column.dataset.columnNumber;
    let numberOfDiscsInColumn = column.childElementCount;
    boardData[6 - numberOfDiscsInColumn][columnNumber] = currentPlayer;

}



function checkForWinner() {
    if (checkVertical() || checkHorizontal() || checkDiagonallyDownRight() || checkDiagonallyUpRight()) {
        isThereAMatch = true;
    }
    return isThereAMatch;
}

function checkVertical() {
    let result = false;
    for (let x = 0; x < lenghtOfX; x++) {
        for (let y = 0; y < edgeY; y++) {
            cell = boardData[y][x];
            cell2 = boardData[y + 1][x];
            cell3 = boardData[y + 2][x];
            cell4 = boardData[y + 3][x];
            if (cell == cell2 && cell == cell3 && cell == cell4 && cell !== '0') {
                // console.log('match found');
                result = true;
            }
        }
    }
    return result;
}

function checkHorizontal() {
    let result = false;
    for (let y = 0; y < lengthOfY; y++) {
        for (let x = 0; x < edgeX; x++) {
            cell = boardData[y][x]
            cell2 = boardData[y][x + 1]
            cell3 = boardData[y][x + 2]
            cell4 = boardData[y][x + 3]
            if (cell == cell2 && cell == cell3 && cell == cell4 && cell !== '0') {
                // console.log('match found');
                result = true;
            }
        }
    }
    return result;
}

function checkDiagonallyDownRight() {
    let result = false;
    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < edgeX; x++) {
            cell = boardData[y][x];
            cell2 = boardData[y + 1][x + 1];
            cell3 = boardData[y + 2][x + 2];
            cell4 = boardData[y + 3][x + 3];
            if (cell == cell2 && cell == cell3 && cell == cell4 && cell !== '0') {
                console.log('diagonal down match found');
                result = true;
            }
        }
    }
    return result;
}

function checkDiagonallyUpRight() {
    let result = false;
    for (let y = 3; y < lengthOfY; y++) {
        for (let x = 0; x < edgeX; x++) {
            cell = boardData[y][x];
            cell2 = boardData[y - 1][x + 1];
            cell3 = boardData[y - 2][x + 2];
            cell4 = boardData[y - 3][x + 3];
            if (cell == cell2 && cell == cell3 && cell == cell4 && cell !== '0') {
                console.log('diagonal up to the right match found');
                result = true;
            }
        }
    }
    return result;
}

function displayWinner(winner) {
    let text = document.createTextNode(winner + " wins!");
    let p = document.createElement('p');
    p.appendChild(text);
    let dest = document.getElementById('winnerDiv');
    dest.appendChild(p);
}