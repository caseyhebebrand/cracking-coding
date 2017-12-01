// given two strings, write a method to decide if one is a permutation of the other

// checkPermutation('taco', 'coat') --> true;
// checkPermutation('hello', 'goodbye') --> false;
const checkPermutation = (str1, str2) => {
  return str1.split('').sort().join('') === str2.split('').sort().join('');
}
