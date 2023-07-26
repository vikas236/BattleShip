const field = document.querySelectorAll(".field");
let turn = 0;

const e = (() => {
  const recieveAttack = (board1, board2) => {
    let rows = field[1].childNodes;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        rows[i].childNodes[j].addEventListener("click", () => {
          if (turn == 1) {
            aiMove(board1);
            turn = 0;
          }
          changeColor(board2, 1, rows, i, j);
        });
      }
    }
  };

  const aiMove = async (board) => {
    let rows = field[0].childNodes;
    let x = getRandomNum();
    let y = getRandomNum();
    await setTimeout(() => {}, 2000);
    console.log(x, y);
    changeColor(board, 0, rows, x, y);
  };

  const changeColor = (board, n, rows, i, j) => {
    if (board[i][j] != "  ") {
      let cell = rows[i].childNodes[j];
      cell.classList.add("red");
      board[i][j] = "  ";
      checkWinner(board, n);
    } else {
      let cell = rows[i].childNodes[j];
      cell.classList.add("miss");
      turn = 1;
    }
  };

  const checkWinner = (board, n) => {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] != "  ") {
          return false;
        }
      }
    }
    n == 0 ? (n = 2) : (n = 1);
    console.log("Player" + n + " won the game");
    return true;
  };

  const getRandomNum = () => {
    return parseInt(Math.floor(Math.random() * 8));
  };

  return { recieveAttack };
})();

export { e };
