// Given any integer, print an English phrase that describes the integer.
const numbersToWords = {
  0: 'zero',
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};
const numbersToPlace = {
  0: 'hundred',
  1: 'thousand',
  2: 'million',
  3: 'billion',
  4: 'trillion',
  5: 'quadrillion',
  6: 'quintillion',
};

const englishInt = (int) => {
  if (int === 0) {
    return numbersToWords[0];
  } else if (int < 0) {
    return 'negative' + ' ' + englishInt(-1 * int);
  }
  let string = '';
  let count = 0;
  while (int >= 1) {
    if (int % 1000 !== 0) {
      string = convert(int % 1000) + ' ' + numbersToPlace[count] + ' ' + string;
    }
    int = Math.floor(int/1000);
    count++;
  }
  return string;
}

const convert = (num) => {
  let str = '';
  if (num >= 100) {
    str += numbersToWords[Math.floor(num/100)] + ' ' + 'hundred ';
    num = num % 100;
  }

  if (num >=10 && num <= 19) {
    str += numbersToWords[num];
  } else if (num > 20) {
    str += numbersToWords[Math.floor(num/10) * 10] + ' ';
    num = num % 10;
  }

  if (num < 10) {
    str += numbersToWords[num];
  }

  return str;
}
