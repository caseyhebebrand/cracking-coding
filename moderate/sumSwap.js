// given 2 arrays of integers, fins a pair of values (one from each array) that you can swap to give the two arrays the same sum
const sumSwap = (arr1, arr2) => {
  let sum1 = arr1.reduce((accum, num) => {
    accum += num;
    return accum;
  })

  let sum2 = arr2.reduce((accum, num) => {
    accum += num;
    return accum;
  })

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if ((sum1 - arr1[i] + arr2[j]) === (sum2 - arr2[j] + arr1[i])) {
        return [i, j];
      }
    }
  }
  return null;
}
