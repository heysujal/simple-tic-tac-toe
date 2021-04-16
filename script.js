const rowcells = document.querySelectorAll(".row-cell");
const winner = document.querySelector(".winner");
var gameOver = 0;
var len = null;

rowcells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (cell.innerHTML == "") {
      if (!gameOver) {
        cell.innerHTML = "⭕";

        cell.classList.add("clicked");

        checkwin();
      }

      setTimeout(() => {
        if (gameOver) alert("Game Over");
        else {
          fillCPU();
          checkwin();
        }
      }, 100);
    }
  });
});

function fillCPU() {
  
  var emptyIndices = [];
  rowcells.forEach((cell, index) => {
    if (cell.innerHTML == "") {
      emptyIndices.push(index);
    }
  });

  len = emptyIndices.length;

  var randomIndex = Math.floor(Math.random() * len);
  if (len != 0) {
    if (rowcells[emptyIndices[randomIndex]].innerHTML == "") {
      if (!gameOver) {
        rowcells[emptyIndices[randomIndex]].innerHTML = "❌";
        rowcells[emptyIndices[randomIndex]].classList.add("clicked");
      }
    }
  }
}
function checkwin() {
  if (
    (rowcells[0].innerHTML == rowcells[1].innerHTML &&
      rowcells[1].innerHTML == rowcells[2].innerHTML &&
      rowcells[2].innerHTML == "⭕") ||
    (rowcells[3].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[5].innerHTML &&
      rowcells[5].innerHTML == "⭕") ||
    (rowcells[6].innerHTML == rowcells[7].innerHTML &&
      rowcells[7].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "⭕") ||
    (rowcells[0].innerHTML == rowcells[3].innerHTML &&
      rowcells[3].innerHTML == rowcells[6].innerHTML &&
      rowcells[6].innerHTML == "⭕") ||
    (rowcells[1].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[7].innerHTML &&
      rowcells[7].innerHTML == "⭕") ||
    (rowcells[2].innerHTML == rowcells[5].innerHTML &&
      rowcells[5].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "⭕") ||
    (rowcells[0].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "⭕") ||
    (rowcells[2].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[6].innerHTML &&
      rowcells[6].innerHTML == "⭕")
  ) {
    winner.innerHTML = "You Won!";
    gameOver = 1;
  } else if (
    (rowcells[0].innerHTML == rowcells[1].innerHTML &&
      rowcells[1].innerHTML == rowcells[2].innerHTML &&
      rowcells[2].innerHTML == "❌") ||
    (rowcells[3].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[5].innerHTML &&
      rowcells[5].innerHTML == "❌") ||
    (rowcells[6].innerHTML == rowcells[7].innerHTML &&
      rowcells[7].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "❌") ||
    (rowcells[0].innerHTML == rowcells[3].innerHTML &&
      rowcells[3].innerHTML == rowcells[6].innerHTML &&
      rowcells[6].innerHTML == "❌") ||
    (rowcells[1].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[7].innerHTML &&
      rowcells[7].innerHTML == "❌") ||
    (rowcells[2].innerHTML == rowcells[5].innerHTML &&
      rowcells[5].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "❌") ||
    (rowcells[0].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[8].innerHTML &&
      rowcells[8].innerHTML == "❌") ||
    (rowcells[2].innerHTML == rowcells[4].innerHTML &&
      rowcells[4].innerHTML == rowcells[6].innerHTML &&
      rowcells[6].innerHTML == "❌")
  ) {
    winner.innerHTML = "Bot Won!";
    gameOver = 1;
  } else {
    if (len == 0) {
      winner.innerHTML = "Draw";
      gameOver = 1;
    }
  }
}
