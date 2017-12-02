// Implement a function to check if a linked list is a palindrome
const isPalindrome = (list) => {
  let fwd = '';
  let rev = '';
  while (list) {
    fwd += list.value;
    rev = list.value + rev;
    list = list.next;
  }
  
  return fwd === rev;
}