// You have 2 numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order. Write a function that adds the two numbers and returns the sum as a linked list.
const sumLists = (list1, list2) => {
  let num1 = '';
  let num2 = '';
  
  let current1 = list1;
  while (current1) {
    num1 = current1.value + num1;
    current1 = current1.next;
  }
  
  let current2 = list2;
  while (current2) {
    num2 = current2.value + num2;
    current2 = current2.next;
  }
  
  return Number.parseInt(num1) + Number.parseInt(num2);
}

// forward order
const sumListsForward = (list1, list2) => {
  let num1 = '';
  let num2 = '';
  
  let current1 = list1;
  while (current1) {
    num1 += current1.value;
    current1 = current1.next;
  }
  
  let current2 = list2;
  while (current2) {
    num2 += current2.value;
    current2 = current2.next;
  }
  
  return Number.parseInt(num1) + Number.parseInt(num2);
}