// How would you design a stack which, in addition to push and pop, has a funciton min which returns the minimum element? Push, pop and min should all operate in O(1) time.

class StackMin {
  constructor() {
    this.storage = {};
    this.count = 0;
    this.min;
  }

  push(val) {
    this.storage[++this.count] = val;
    if (!this.min) {
      this.min = val;
    } else {
      this.min = Math.min(val, this.min);
    }
  }

  pop() {
    if (this.count > 0) {
      let top = this.storage[--this.count];
      delete this.storage[this.count];
      return top;
    }
  }

  min() {
    return this.min;
  }
}
