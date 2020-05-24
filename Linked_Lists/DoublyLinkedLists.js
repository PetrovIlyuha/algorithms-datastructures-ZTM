class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return console.log(array);
  }
  insert(index, value) {
    if (index >= this.length) {
      return this.append(value);
    }
    let newNode = new Node(value);
    const leader = this.traverseToIndex(index - 1);
    const holderPointer = leader.next;
    leader.next = newNode;
    newNode.next = holderPointer;
    this.length++;
    return this;
  }
  traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    if (index < 0 || index > this.length) {
      return console.log(
        "think twice before you ask to do what is impossible, man"
      );
    }
    if (index === 0) {
      this.head = this.traverseToIndex(index).next;
      return this;
    }
    const leader = this.traverseToIndex(index - 1);
    const removable = leader.next;
    leader.next = removable.next;
    this.length--;
    return this;
  }
  peekInto(index) {
    return console.log(this.traverseToIndex(index).value);
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
