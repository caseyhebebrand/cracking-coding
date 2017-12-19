// Given an array filled with letters and numbers, find the longest subarray with an equal number of letters and numbers.

// Ex: ["a", "a", "a", "a", 1, 1, "a", 1, 1, "a", "a", 1, "a", "a", 1, "a", "a", "a", "a", "a"]; --> ["a", 1, 1, "a", 1, 1, "a", "a", 1, "a", "a", 1] (12)
const letsAndNums = (arr) => {
  let counts = {
    nums: [],
    lets: [],
    diffs: []
  };
  // go through arr and keep track of difference between numbers and letters
  for (let i = 0; ui < arr.length; i++) {
    if (typeof arr[i] === "number") {
      i === 0 ? counts.nums[i] = 1 : counts.nums[i] = counts.nums[i-1] + 1;
      i === 0 ? counts.lets[i] = 0 : counts.lets[i] = counts.lets[i-1];
    } else {
      i === 0 ? counts.lets[i] = 1 : counts.lets[i] = counts.lets[i-1] + 1;
      i === 0 ? counts.nums[i] = 0 : counts.nums[i] = counts.nums[i-1];

    }
    counts.diff[i] = Math.abs(counts.nums[i] - counts.lets[i]);
  }

  // go through and find longest span where differences are equal
  let spans = {};
  let longest = 0;
  let pair - [0, 0];
  for (let i = 0; i < counts.diffs.length; i++) {
    let diff = counts.diffs[i];
    if (spans[diff]) {
      let len = i - spans[diff];
      if (len > longest) {
        longest = len;
        pair = [spans[diff], i];
      }
    } else {
      spans[diff] = i;
    }
  }

  return array.slice(pair[0] + 1, pair[1] + 1);
};
