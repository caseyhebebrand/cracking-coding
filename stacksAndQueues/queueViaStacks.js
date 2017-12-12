// implement a MyQueue class which implements a queue using two Stacks
class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push(val) {
    this.storage[++this.count] = val;
  }

  pop() {
    if (this.count > 0) {
      let top = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return top;
    }
  }

  isEmpty() {
    return this.count === 0;
  }
}

class MyQueue {
  constructor() {
    this.newest = new Stack();
    this.oldest = new Stack();
  }

  enqueue(val) {
    this.newest.push(val);
  }

  dequeue() {
    this.shift();
    return this.oldest.pop();
  }

  size() {
    return this.newest.count + this.oldest.count;
  }

  shift() {
    if (this.oldest.isEmpty) {
      while (!this.newest.isEmpty) {
        this.oldest.push(this.newest.pop())
      }
    }
  }
}
