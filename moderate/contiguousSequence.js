// You are given an array of integers. Find the contiguous sequence with the largest sum. Reutn the sum.

// Optimal solution - O(n) time
const maxSum = (arr) => {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > max) {
      max = sum;
    } else if (sum < 0) {
      sum = 0;
    }
  }
  return max;
}


// O(n2)
const maxSum = (arr) => {
  let sum = 0;

  for (let i = 0; i < arr.length - 1; i++) {
    let currentSum = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (currentSum + arr[j] > sum) {
        sum = currentSum + arr[j];
      }
    }
  }

  return sum;
}
