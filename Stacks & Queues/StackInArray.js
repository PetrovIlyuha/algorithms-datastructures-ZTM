class Stack {
  constructor() {
    this.stack = [];
  }
  peek() {
    if (this.stack.length !== 0) {
      return this.stack[this.stack.length - 1];
    }
    return "You have an empty stack";
  }
  push(value) {
    this.stack.push(value);
    return this;
  }
  pop() {
    if (this.stack.length === 0) {
      return "You have an empty stack";
    }
    this.stack.pop();
    return this;
  }
}

const newStack = new Stack();
console.log(newStack.peek());
console.log(newStack.push("first floor"));
console.log(newStack.push("second floor"));
console.log(newStack.push("third floor"));
console.log(newStack.peek());
console.log("pop", newStack.pop());
