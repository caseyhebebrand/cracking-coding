// Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0;

const zeroMatrix = (matrix) => {
  let rows = [];
  let cols = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        rows.push(i);
        cols.push(j);
      }
    }
  }

  for (let i = 0; i < rows.length; i++) {
    for (let col = 0; col < matrix[0].length; col++) {
      matrix[rows[i]][col] = 0;
    }
  }

  for (let i = 0; i < cols.length; i++) {
    for (let row = 0; row < matrix.length; row++) {
      matrix[row][cols[i]] = 0;
    }
  }

  return matrix;
}
