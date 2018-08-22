let columns = [];
let board = document.getElementById('board');
let currentDiscDiv = document.getElementById('currentDisc');
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
function howManyPixelsAboveLastDisc(column){
    let result = 0;
    console.log(column.childElementCount)
    result = 480 - (column.childElementCount * 80);
    return result;
}

function dropDisk(event) {
    const column = event.currentTarget;
    if (roomInColumn(column)) {
        let disk = createDisk(currentPlayer);
        column.appendChild(disk);
        animateDiscDropping(disk, column);
        addToBoardData(column, currentPlayer)
        checkForWinner();
        if (checkForWinner()) {
            winner = currentPlayer;
            displayWinner(winner);
            removeListeners(columns);
        }
        switchPlayers();
    }
}

function animateDiscDropping(disk, column) {
    console.log(howManyPixelsAboveLastDisc(column))
    let marginBottom = howManyPixelsAboveLastDisc(column)
    let id = setInterval(frame, 7)
    let i = 1;
    function frame(){
        if (marginBottom <= 5){
            clearInterval(id);
            marginBottom = 5;
            disk.style.marginBottom = marginBottom + 'px';
        } else{
            marginBottom = marginBottom - (1 + i);
            i = i + .1;
            disk.style.marginBottom = marginBottom + 'px';
        }
    }
}

function switchPlayers() {
    let temp = nextPlayer;
    nextPlayer = currentPlayer;
    currentPlayer = temp;
    currentDiscDiv.style.backgroundColor = currentPlayer;
    let text = document.createTextNode(currentPlayer + "'s turn")
    let p = document.createElement('span');
    p.appendChild(text);
    currentDiscDiv.innerHTML = "";
    currentDiscDiv.appendChild(p);

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
                result = true;
            }
        }
    }
    return result;
}

function displayWinner(winner) {
    winner = winner.slice(0, 1).toUpperCase() + winner.slice(1);
    let text = document.createTextNode(winner + " wins!");
    let p = document.createElement('h4');
    p.appendChild(text);
    let dest = document.getElementById('winnerDiv');
    dest.innerHTML = "";
    dest.appendChild(p);
}