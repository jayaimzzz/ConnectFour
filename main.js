let columns = []
let board = document.getElementById('board')
let currentPlayer = 'red'
let nextPlayer = 'black'
createColumns(7)

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
        columns.push(column);
        board.appendChild(column);

    }
}

function roomInColumn(column) {
    let result = false;
    if (column.childElementCount < 7) {
        result = true;
    }
    return result;
}

function dropDisk(event) {
    const column = event.currentTarget;
    if (roomInColumn(column)) {
        let disk = createDisk(currentPlayer);
        column.appendChild(disk);
        switchPlayers();
    }
}

function switchPlayers() {
    let temp = nextPlayer;
    nextPlayer = currentPlayer;
    currentPlayer = temp;
}

for (let i = 0; i < columns.length; i++) {
    columns[i].addEventListener('click', dropDisk)
}