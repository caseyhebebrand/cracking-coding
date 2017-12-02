// Implement an algorithm to find the kth to last element of a singly linked list
const returnKth = (list, k) => {
  let length = 0;
  let current = list;
  while (current) {
    length++;
    current = current.next;
  }
  
  current = list;
  let tot = 0;
  while (tot < length - k) {
    tot++;
    current = current.next;
  }
  return current;
}