class QueueWithStack {
  constructor() {
    this.queue = [];
  }
  peek() {
    if (this.queue === 0) return "No Items queued";
    return this.queue[this.queue.length - 1];
  }
  enqueue(value) {
    this.queue.unshift(value);
    return this;
  }
  dequeue() {
    if (this.queue.length === 0) return "No Items queued";
    this.queue.pop();
    return this;
  }
}

const waitingLine = new QueueWithStack();

console.log(waitingLine.enqueue("Matt"));
console.log(waitingLine.enqueue("Trevor"));
console.log(waitingLine.enqueue("Alice"));
console.log(waitingLine.peek());
console.log(waitingLine.dequeue());
