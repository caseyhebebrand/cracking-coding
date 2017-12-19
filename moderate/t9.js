// Implement and algorithm t return a list of matching words, given a sequence of digits. (I don't have a dictionary file so I am returning all possible combinations)
const TEXT = {
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz',
  0: '0',
}

const t9 = (digits) => {
  let words =[];
  // go through each digit
  const getWord = (str, index) => {
    if (str.length === digits.length) {
      words.push(str);
      return;
    }

    let text = TEXT[digits[index]];
    for (let i = 0; i < text.length; i++) {
      getWord(str + text[i], index + 1);
    }
  }
  getWord('', 0);
  return words;
};
