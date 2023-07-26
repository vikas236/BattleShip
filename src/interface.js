const field = document.querySelectorAll(".field");

const e = (() => {
  const createCells = (num) => {
    for (let i = 0; i < 9; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 9; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
      }
      field[num].appendChild(row);
    }
  };
  const addShips = (board1, board2) => {
    const rows0 = field[0].childNodes;
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board1[i][j] != "  ") {
          rows0[i].childNodes[j].style.background = "coral";
        }
      }
    }
  };

  return { createCells, addShips };
})();

export { e };
