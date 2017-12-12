// Implement a data structure SetOfStacks that mimics a stack of plates. It should be composed of several stacks and should create a new stack once the previous stack exceeds capacity.

class SetOfStacks {
  constructor(capacity) {
    this.stacks = {
      1: {
        size: 0,
        storage: {}
      }
    }
    this.numStacks = 1;
    this.capacity = capacity;
  }

  push(val) {
    if (this.stacks[this.numStacks].size < this.capacity) {
      this.stacks[this.numStacks].storage[++this.stacks[this.numStacks].size] = val;
    } else {
      this.numStacks++;
      this.stacks[this.numStacks] = {};
      this.stacks[this.numStacks].size = 1;
      this.stacks[this.numStacks].storage = {};
      this.stacks[this.numStacks].storage[this.stacks[this.numStacks].size] = val;
    }
  }

  pop() {
    if (this.stacks[this.numStacks].size === 1) {
      let top = this.stack[this.numStacks - 1].storage[this.stacks[this.numStacks - 1].size];
      delete this.stacks[this.numStacks].storage[this.stacks[this.numStacks].size];
      this.numStacks--;
    } else {
      let top = this.stacks[this.numStacks].storage[this.stacks[this.numStacks].size - 1];
      delete this.stacks[this.numStacks].storage[this.stacks[this.numStacks].size];
    }
    return top;
  }

}
