// Action for hitting and sinking the ship
const ship = (() => {
  // Return ship node with length, hits and sunk/unsunk
  const make = (length, hits = 0, sunk = false) => {
    return { length, hits, sunk };
  };

  const hit = (ship) => {
    ship.hits++;
    return ship;
  };

  const isSunk = (ship) => {
    if (ship.length == ship.hits) {
      ship.sunk = true;
    }
    return ship;
  };

  return { make, hit, isSunk };
})();

export { ship };
