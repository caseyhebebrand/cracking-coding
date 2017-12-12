// use a single array to implement 3 stacks

class MultiStack {
  constructor(capacity) {
    this.numStacks = 3;
    this.stackCapacity = capacity;
    this.values = this.generateValues();
    this.sizes = [0, 0, 0];
  }

  generateValues() {
    let num = 3 * this.stackCapacity;
    return new Array(num).fill(0);
  }

  push(stackNum, value) {
    if (!this.isFull(stackNum)) {
      this.sizes[stackNum]++;
      this.values[this.topIndex(stackNum)] = value;
    }
  }

  pop(stackNum) {
    if (!this.isEmpty(stackNum)) {
      let top = this.topIndex(stackNum);
      let value = this.values[top];
      this.values[top] = 0;
      this.sizes[stackNum]--;
      return value;
    }
  }

  top(stackNum) {
    if (!this.isFull(stackNum)) {
      return this.values[topIndex(stackNum)]
    }
  }

  isEmpty(stackNum) {
    return this.sizes[stackNum] === 0;
  }

  isFull(stackNum) {
    return this.sizes[stackNum] === this.stackCapacity;
  }

  topIndex(stackNum) {
    let top = stackNum * stackCapacity;
    let size = this.sizes[stackNum];
    return offset + size - 1;
  }
};
