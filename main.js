
//THIS IS MY CODE THAT DOESN'T WORK
//
var board = [a1, a2, a3, b1, b2, b3, c1, c2, c3]
console.log(board);


var wins = {
  win1: [a1, a2, a3],
  win2: [b1, b2, b3],
  win3: [c1, c2, c3],
  win4: [a1, b1, c1],
  win5: [a2, b2, c2],
  win6: [a3, b3, c3],
  win7: [a1, b2, c3],
  win8: [a3, b2, c1]
}
console.log(wins);

var turn = "x";
var score = "";
var x = [];
var o = [];

if (turn === "x") {
  turn = "o";
  } else {
  turn = "x";
}

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


















