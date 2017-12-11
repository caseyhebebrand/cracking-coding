// given a circular linked list, implement an algorithm that returns the node at the beginning of the loop.
const loopDetection = (list) => {
  let node1 = list;
  let node2 = list;
  
  while (node1 && node2) {
    if (node1 === node2) {
      return node1;
    }
    node1 = node1.next;
    node2 = node2.next.next;
  }
  
  return null;
}