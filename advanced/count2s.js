// Write a method to count the number of 2's that appear in all the numbers between 0 and n (inclusive).

// Ex: 25 --> 9 (2, 12, 20, 22, 23, 24, 25)
const count2 = (n) => {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    count += numTwos(i);
  }
  return count;
};

const numTwos = (n) => {
  let count = 0;
  while (n > 0) {
    if (n % 10 === 2) {
      count++;
    }

    n = Math.floor(n / 10);
  }

  return count;
};
