const { ship } = require("./index");
const { board } = require("./gameBoard");

test("ship", () =>
  expect(ship.ship(4)).toEqual({ length: 4, hits: 0, sunk: false }));

test("board", () => expect());
