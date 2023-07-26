// Import css files
import "./index.css";

// Import Modules
import { e as gameBoard } from "./gameBoard";
import { e as cells } from "./interface";
import { e as play } from "./play";

let board1 = gameBoard.placeShips();
let board2 = gameBoard.placeShips();
cells.createCells(0);
cells.createCells(1);
cells.addShips(board1, board2);
play.recieveAttack(board1, board2);
