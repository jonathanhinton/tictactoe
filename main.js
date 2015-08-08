var player1 = prompt("Please type your name player 1");
var player2 = prompt("Please type your name player 2");
console.log(player1);
console.log(player2);

var player1name = document.getElementById("playerone");
var player2name = document.getElementById("playertwo");

player1name.innerHTML = player1;
player2name.innerHTML = player2;