// Design an algorithm to find all pairs of integers within an array which sum to a specified value.
const pairSum = (arr, sum) => {
  let pairs = [];
  let diff = {};

  for (let i = 0; i < arr.length; i++) {
    if (diff[arr[i]]) {
      pairs.push([diff[arr[i]], arr[i]]);
    } else {
      diff[sum - arr[i]] = arr[i];
    }
  }

  return pairs;
}
