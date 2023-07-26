import { ship } from "./ship";

const e = (() => {
  const createBoard = (rows, columns) => {
    const arr = new Array(rows);
    for (let i = 0; i < rows; i++) {
      arr[i] = new Array(columns).fill("  ");
    }
    return arr;
  };

  const placeShips = () => {
    // board to place ships
    let board = createBoard(9, 9);
    let ships = [];
    // make ships
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j <= i; j++) {
        ships.push({ name: `v${i}`, ship: ship.make(4 - i) });
      }
    }
    fill(board, ships);
    return board;
  };

  // place each ship on the board
  const fill = (board, ships) => {
    ships.forEach((ship) => {
      let { x, y } = position(board, ship);
      place(board, ship, x, y);
    });
  };

  // Place the ship on the board
  const place = (board, ship, x, y) => {
    for (let i = 0; i < ship.ship.length; i++) {
      if (x % 2 == 0) {
        board[x + i][y] = ship.name;
      } else if (x % 2 != 0) {
        board[x][y + i] = ship.name;
      }
    }
  };

  // Check the availability of a position
  const checkAvailability = (board, ship, x, y) => {
    let l = ship.ship.length;
    if (x < 0 || x >= board.length - l || y < 0 || y >= board.length - l) {
      return false;
    }
    for (let i = 0; i < l; i++) {
      if (board[x + i][y] != "  " && x % 2 == 0) {
        return false;
      } else if (board[x][y + i] != "  " && x % 2 != 0) {
        return false;
      }
    }
    return true;
  };

  // x and y coordinates for the ship
  const position = (board, ship) => {
    let l = board.length;
    let x = randomNum(l);
    let y = randomNum(l);
    let check = checkAvailability(board, ship, x, y);
    if (check == false) {
      return position(board, ship);
    }
    return { x, y };
  };

  // Random number for coordinates of the ship
  const randomNum = (l) => {
    return Math.floor(Math.random() * l);
  };

  // Display the board
  const prettyPrint = (board) => {
    board.forEach((e) => {
      console.log(`${e}` + " ");
    });
  };

  return { placeShips, prettyPrint };
})();

export { e };
