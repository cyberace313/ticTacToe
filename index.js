const player1Name = document.getElementById("p1-name");
const player2Name = document.getElementById("p2-name");
const p1Symbol = document.getElementById("p1-symbol");
const p2Symbol = document.getElementById("p2-symbol");

const player1 = {
    name: "Zafar",
    Symbol: "X",
}

const player2 = {
    name: "Angela",
    Symbol: "O",
}

player1Name.textContent = player1.name;
player2Name.textContent = player2.name;
p1Symbol.textContent = player1.Symbol;
p2Symbol.textContent = player2.Symbol;