// given an image represented by an NxN matrix, where each pixel is 4 bytes, torate the image by 90 deg. Can you do this in place?

const rotateImage = (matrix) => {
  let n = matrix.length;
  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - 1 - i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[n - 1 - j][i];
      matrix[n - 1 - j][i] = matrix[n - 1 - i][n - 1 - j];
      matrix[n - 1 - i][n - 1 - j] = matrix[j][n - 1 - i];
      matrix[j][n - 1 - i] = temp;
    }
  }

  return matrix;
}
