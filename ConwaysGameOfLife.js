const example1 = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
];

const example2 = [
    [0, 1, 0],
    [1, 1, 1],
    [0, 1, 0],
];

const example3 = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
];

const example4 = [
    [1, 0, 1],
    [0, 0, 0],
    [1, 0, 0],
];

const glider = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 0, 0, 0, 0],
];

const smallExploder = [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
];

const exploder = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

const rowOf10 = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const lightweightSpaceship = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
];

const tumbler = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [0, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
];

const checkerboard = [
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
    [0, 1, 0, 1, 0, 1, 0, 1, 0],
    [1, 0, 1, 0, 1, 0, 1, 0, 1],
];

const bigShape = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

/*
N = arr[i - 1][j]
NE = arr[i - 1][j + 1]
E = arr[i][j + 1]
SE = arr[i + 1][j + 1]
S = arr[i + 1][j]
SW = arr[i + 1][j - 1]
W = arr[i][j - 1]
NW = arr[i - 1][j - 1]
*/

function gameOfLife(board) {
    var neighbours = 0;
    var str = "";
    for (var i = 0; i < board.length; i++) {
        for (var j = 0; j < board[i].length; j++) {
            // UPPER-LEFT CORNER
            if (i === 0 && j === 0) {
                neighbours = board[i][j + 1] // E
                    + board[i + 1][j + 1] // SE
                    + board[i + 1][j]; // S
            }
            // UPPER-RIGHT CORNER
            else if (i === 0 && j === board[i].length - 1) {
                neighbours = board[i + 1][j] // S
                    + board[i + 1][j - 1] // SW
                    + board[i][j - 1]; // W
            }
            // LOWER-RIGHT CORNER
            else if (i === board.length - 1 && j === board[i].length - 1) {
                neighbours = board[i - 1][j] // N
                    + board[i][j - 1] // W
                    + board[i - 1][j - 1]; // NW
            }
            // LOWER-LEFT CORNER
            else if (i === board.length - 1 && j === 0) {
                neighbours = board[i - 1][j] // N
                    + board[i - 1][j + 1] // NE
                    + board[i][j + 1]; // E
            }
            // UPPER-ROW INNER
            else if (i === 0 && j > 0 && j < board[i].length - 1) {
                neighbours = board[i][j + 1] // E
                    + board[i + 1][j + 1] // SE
                    + board[i + 1][j] // S
                    + board[i + 1][j - 1] // SW
                    + board[i][j - 1]; // W
            }
            // RIGHT-COLUMN INNER
            else if (i > 0 && i < board.length - 1 && j === board[i].length - 1) {
                neighbours = board[i - 1][j] // N
                    + board[i + 1][j] // S
                    + board[i + 1][j - 1] // SW
                    + board[i][j - 1] // W
                    + board[i - 1][j - 1]; // NW
            }
            // BOTTOM-ROW INNER
            else if (i === board.length - 1 && j > 0 && j < board[i].length - 1) {
                neighbours = board[i - 1][j] // N
                    + board[i - 1][j + 1] // NE
                    + board[i][j + 1] // E
                    + board[i][j - 1] // W
                    + board[i - 1][j - 1]; // NW
            }
            // LEFT-COLUMN INNER
            else if (i > 0 && i < board.length - 1 && j === 0) {
                neighbours = board[i - 1][j] // N
                    + board[i - 1][j + 1] // NE
                    + board[i][j + 1] // E
                    + board[i + 1][j + 1] // SE
                    + board[i + 1][j]; // S
            }
            // INSIDE
            else {
                neighbours = board[i - 1][j] // N
                    + board[i - 1][j + 1] // NE
                    + board[i][j + 1] // E
                    + board[i + 1][j + 1] // SE
                    + board[i + 1][j] // S
                    + board[i + 1][j - 1] // SW
                    + board[i][j - 1] // W
                    + board[i - 1][j - 1]; // NW
            }

            if (board[i][j] === 1 && neighbours === 2 || board[i][j] === 1 && neighbours === 3) {
                str += "█";
            } else if (board[i][j] === 0 && neighbours === 3) {
                str += "█";
            } else {
                str += "░";
            }
            neighbours = 0;

        }
        str += "\\n";
    }
    return str.slice(0, str.length - 2);
}

console.log("example1:", gameOfLife(example1));
console.log("\nexample2:", gameOfLife(example2));
console.log("\nexample3:", gameOfLife(example3));
console.log("\nexample4:", gameOfLife(example4));
console.log("\nglider:", gameOfLife(glider));
console.log("\nsmallExploder:", gameOfLife(smallExploder));
console.log("\nexploder:", gameOfLife(exploder));
console.log("\nrowOf10:", gameOfLife(rowOf10));
console.log("\nlightweightSpaceship:", gameOfLife(lightweightSpaceship));
console.log("\ntumbler:", gameOfLife(tumbler));
console.log("\ncheckerboard:", gameOfLife(checkerboard));
console.log("\nbigShape:", gameOfLife(bigShape));