// You have an integer matrix representing a plot of land where the value at that location represents height above sea level. a value of 0 is water. Compute the sizes of all ponds in the matrix.
const pondSizes = (map) => {
  let ponds = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0]. length; j++) {
      if (map[i][j] === 0) {
        let size = getPondSize(map, i, j);
        ponds.push(size);
      }
    }
  }
  return ponds;
}

const getPondSize = (map, row, col) => {
  if (row >= map.length || row < 0 || col < 0 || col >= map[0].length || map[row][col] !== 0) {
    return 0;
  }

  let size = 1;
  map[row][col] = -1; // mark as visited
  for (let i = row - 1; i <= row + 1; i++) {
    for (let j = col - 1; j <= col + 1; j++) {
        size += getPondSize(map, i, j);
    }
  }
  return size
}
