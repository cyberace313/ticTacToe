const player1Name = document.getElementById("p1-name");
const player2Name = document.getElementById("p2-name");
const p1Symbol = document.getElementById("p1-symbol");
const p2Symbol = document.getElementById("p2-symbol");


const players = [
    {name: "Zafar", symbol: "X"},
    {name: "Angela", symbol: "O"},
]


player1Name.textContent = players[0].name;
player2Name.textContent = players[1].name;
p1Symbol.textContent = players[0].symbol;
p2Symbol.textContent = players[1].symbol;

const squares = document.querySelectorAll(".square");
console.log(squares);

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", () => {
        squares[i].textContent = players[1].symbol;
    })
}