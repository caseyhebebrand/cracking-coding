// You are building a diving board by placing a bunch of wood end-to-end. There are two types of planks, one of length shorter and one of length longer. You must use exactly k planks of wood. Write a method to generate all possible lengths for the diving board.
const divingBoard = (k, shorter, longer) => {
  let lengths =[];

  for (let i = 0; i <= k; i++) {
    let numShort = k - i;
    let len = (longer * i) + (shorter * numShort);
    if (!lengths.includes(len)) {
      lengths.push(len);
    }
  }

  return lengths;
};
