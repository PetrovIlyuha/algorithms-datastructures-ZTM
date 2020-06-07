class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    if (this.first) {
      return this.first.value;
    }
    return 'Empty Queue';
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return 'No items in queue';
    }
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.length--;
    return this;
  }
}

const newQueue = new Queue();
console.log(newQueue.peek());
console.log(newQueue.enqueue('First floor'));
console.log(newQueue.enqueue('Second floor'));
console.log(newQueue.enqueue('Third floor'));
console.log(newQueue.peek());
console.log(newQueue.dequeue());
