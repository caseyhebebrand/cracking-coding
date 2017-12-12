// Given an array of integers write a method to find indices m and n such that if you sorted elements m through n, the entire array would be sorted. Minimize n - m.

// Ex: [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]; => (3, 9)
const subSort = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  let i = 0;
  while (arr[i] < arr[i + 1]) {
    left++;
    i++;
  }

  i = arr.length - 1;
  while (arr[i] > arr[i - 1]) {
    right--;
    i--;
  }

  let m = left + 1;
  let n = right - 1;
  while (arr[left] > arr[m]) {
    left--;
  }

  while (arr[right] < arr[n]) {
    right++;
  }
  return [left, right - 1];  
}
