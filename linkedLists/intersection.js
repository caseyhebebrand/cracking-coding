// determine where two linked lists intersect
const intersection = (list1, list2) => {
  if (list1 === null || list2 === null) {
    return null;
  }

  let end1 = getTailNode(list1);
  let end2 = getTailNode(list2);
  // if the end nodes are different, then do not intersect
  if (end1.current !== end2.current) {
    return null;
  }

  let shorter = end1.size < end2.size ? list1 : list2;
  let longer = end1.size > end2.size ? list1 : list2;

  // get kth node on longer list
  longer = getKthNode(longer, Math.abs(end1.size - end2.size));

  while (shorter !== longer) {
    shorter = shorter.next;
    longer = longer.next;
  }

  return shorter;
}

const getTailNode = (list) => {
  if (list === null) {
    return null;
  }

  let size = 1;
  let current = list;
  while (current.next !== null) {
    current = current.next;
    size++;
  }

  return {current: current, size: size}
}

const getKthNode = (list, k) => {
  let current = list;
  while (k > 0 && current) {
    current = current.next;
    k--;
  }
  return current;
}
