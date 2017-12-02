// Remove duplicates from an unsorted linked list; O(n) time
const removeDups = (list) => {
  let nodes = {
    list.value: list,
    list.next.value: list
  };
  let previous = list;
  let current = list.next;
  
  while (current) {
    if (nodes[current.value]) {
      previous.next = current.next;
    } else {
      nodes[current.value];
      previous = current;
    }
    current = current.next;
  }
  return list;
}

// No buffer allowed; O(1) space but O(n2) time
const removeDupsNoBuffer = (list) => {
  let current = list;
  while (current) {
    let runner = current;
    while (runner) {
      if (runner.next.value == current.value) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return list;
}