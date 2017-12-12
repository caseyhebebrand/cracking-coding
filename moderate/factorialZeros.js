// Write an algorithm which computes the number of trailing zeros in n factorial.
const fives = (n) => {
  let count = 0;
  while (n % 5 === 0) {
    count++;
    n /= 5;
  }
  return count;
}

const factorialZeros = (n) => {
  let count = 0;
  for (let i = 2; i < n; i++) {
    count += fives(i);
  }
  return count;
};
