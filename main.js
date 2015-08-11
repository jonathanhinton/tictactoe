
//THIS IS MY CODE THAT DOESN'T WORK
// LET'S START OVER. Things I'll need to do
// 1) Player variables:
//    a. determine whose turn it is with a function and automatically change
//       symbols accordingly.
//    b. store scores for players and check against winning scores
//    c. determine if player picked occupied square and either alert or
//       return nothing based on click.
// 2) Board
//    a. begin with empty squares
//    b. assign squares to players based on clicks and turn
//    c.
//

// var game = document.getElementById("gameboard");
// var spot = document.getElementsByTagName("TD");

// var board = [a, b, c, d, e, f, g, h, i];

// var wins = [
//   [a, b, c],
//   [d, e, f],
//   [g, h, i],
//   [a, d, g],
//   [b, e, h],
//   [c, f, i],
//   [a, e, i],
//   [c, e, g]
// ]

// var turn = "x";
// var score = "";
// var x = [];
// var o = [];



// function turn() {
//   if (turn === "x") {
//     turn = "o";
//     } else {
//     turn = "x";
//   }
// }

// function play(e) {

// }

// function gameplay(argument) {
//   for (i = 0; i < board.length; i++) {
//     var square = board[i];
//     if (turn === "x" && square === board[i]) {
//       x.unshift(board[i]);
//     } else {
//       o.unshift(board[i]);
//     }
//   }
// }
// console.log(turn);
// console.log(gameplay(b));
// console.log(x);
// THIS IS SOMEONE ELSE'S CODE THAT WORKS
(function () { //this starts the whole thing

    var squares = [], //empty array
        EMPTY = "\xA0",
        score,
        moves,
        turn = "X",
        oldOnload,
        wins = [7, 56, 448, 73, 146, 292, 273, 84],
        startNewGame = function () {
            var i;

            turn = "X";
            score = {"X": 0, "O": 0};
            moves = 0;
            for (i = 0; i < squares.length; i += 1) {
                squares[i].firstChild.nodeValue = EMPTY;
            }
        },
        win = function (score) {
            var i;
            for (i = 0; i < wins.length; i += 1) {
                if ((wins[i] & score) === wins[i]) {
                    return true;
                }
            }
            return false;
        },
        set = function () {
            if (this.firstChild.nodeValue !== EMPTY) {
                return;
            }
            this.firstChild.nodeValue = turn;
            moves += 1;
            score[turn] += this.indicator;
            if (win(score[turn])) {
                alert(turn + " wins!");
                startNewGame();
            } else if (moves === 9) {
                alert("Cat\u2019s game!");
                startNewGame();
            } else {
                turn = turn === "X" ? "O" : "X";
            }
        },
        play = function () {
            var board = document.createElement("table"),
                indicator = 1,
                i, j,
                row, cell,
                parent;
            board.border = 1;
            for (i = 0; i < 3; i += 1) {
                row = document.createElement("tr");
                board.appendChild(row);
                for (j = 0; j < 3; j += 1) {
                    cell = document.createElement("td");
                    cell.width = cell.height = 50;
                    cell.align = cell.valign = 'center';
                    cell.indicator = indicator;
                    cell.onclick = set;
                    cell.appendChild(document.createTextNode(""));
                    row.appendChild(cell);
                    squares.push(cell);
                    indicator += indicator;
                }
            }
        parent = document.getElementById("tictactoe") || document.body;
        parent.appendChild(board);
        startNewGame();
    };
    if (typeof window.onload === "function") {
        oldOnLoad = window.onload;
        window.onload = function () {
            oldOnLoad();
            play();
        };
    } else {
        window.onload = play;
    }
}());


















