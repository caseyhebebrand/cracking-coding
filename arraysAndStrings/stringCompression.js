// perform basic string compression using the counts of repeated characters. If the compressed string is not smaller the original string, return the original string.

// compress('aabcccccaaa') --> 'a2b1c5c3'
// compress('abc') --> 'abc'

const compressString = (str) => {
  let answer = '';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    count++;
    if (i === str.length - 1 || str[i] !== str[i + 1]) {
      answer += str[i] + count;
      count = 0;
    }
  }
  return answer.length < str.length ? answer : str;
}
