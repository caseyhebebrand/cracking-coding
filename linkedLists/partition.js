// Partition a linked list around a value x, such that all nodes < x come before all nodes >= x. If x is in the lista it must appear in the right partition.

// EX: input 3->5->8->10->2->1, parition = 5;
// output: 3->1->2->10->5->5->8
const partition = (list, val) => {
  let head = list;
  let tail = list;
  let current = list;
  while (current) {
    let next = current.next;
    if (current.value < val) {
     current.next = head;
      head = current;
    } else {
      tail.next = current;
      tail = current;
    }
    current = next;
  }
  tail.next = null;
  return head;
}