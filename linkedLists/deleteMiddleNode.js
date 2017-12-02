// Implement an algorithm to delete a node in the middle of the list, given only access to that node.

// New linked list is missing the node:
// I: a -> b -> c-> d -> e-> f, O: a -> b -> d-> e -> f
const deleteMiddleNode = (node) => {
    if (!node || !node.next) {
      return false;
    }
    node.value = node.next.value;
    node.next = node.next.next;
    return true;
}