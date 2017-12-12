// write a program to sort a stack such that the smallest items are on top. It supports the following operations: push, pop, peek, and isEmpty.
class Stack() {
  constructor() {
    this.size = 0;
    this.storage = {};
  }

  push(val) {
    this.storage[++this.size] = val;
  }

  pop() {
    if (this.size > 0) {
      let top = this.storage[this.size];
      delete this.storage[this.size];
      this.size--;
      return top;
    }
  }

  peek() {
    if (this.size > 0) {
      return this.storage[this.size];
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}

const sortStack = (stack) => {
  let tempStack = new Stack();
  while (!stack.isEmpty()) {
    let temp = stack.pop();
    while (!tempStack.isEmpty() && temp < tempStack.peek()) {
      stack.push(tempStack.pop());
    }
    tempStack.push(temp);
  }

  // copy elements back into Stack
  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

}
