// Given two arrays of integers, cpmpute the pair of values (one value in each array) with the smallest non-negative difference. Return the difference.
const smallestDiff = (arr1, arr2) => {
  let smallest;

  for (let i = 0; i < arr1.length; i++ {
    for (let j = 0; j < arr2.length; j++) {
      if (!smallest || Math.abs(arr1[i] - arr2[j] < smallest)) {
        smallest = Math.abs(arr1[i] - arr2[j]);
      }
    }
  }
  return smallest;
};

// optimized solution
const smallDiff = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let a = 0;
  let b = 0;
  let diff;
  while (a < arr1.length && b < arr2.length) {
    if (!smallest || Math.abs(arr1[i] - arr2[j] < smallest)) {
      smallest = Math.abs(arr1[i] - arr2[j]);
    }

    arr1[a] < arr2[b] ? a++ : b++;
  }
  return diff;
};
