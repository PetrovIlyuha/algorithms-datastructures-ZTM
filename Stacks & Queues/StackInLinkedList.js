class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if (this.top) {
      return this.top.value;
    }
    return "No entries";
  }
  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this;
  }
  pop() {
    if (!this.top) {
      return "no values";
    }
    if (this.length === 1) {
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length--;
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
