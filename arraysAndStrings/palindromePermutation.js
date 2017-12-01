// given a string, check if it is a permutation of a palindrome. The palindrome is not limited to just dictionary words. Do not include spaces as characters contributing towards the palindrome.

// isPalPerm('Tact Coa') --> true

const isPalPerm = (str) => {
  let count = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char !== ' ') {
      count[char] ? count[char]++ : count[char] = 1;
    }
  }

  let odds = 0;
  for (let key in count) {
    if (count[key] % 2 === 1) {
      odds++;
    }
  }

  return odds < 2;
}
