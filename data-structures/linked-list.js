class Node {
  constructor(initialValue = null, next = null) {
    this.value = initialValue;
    this.next = next;
  }

  setNext(node) {
    this.next = node;
  }
}

class DoubleNode {
  constructor(initialValue = null, next = null, prev = null) {
    this.value = initialValue;
    this.next = next;
    this.prev = prev;
  }

  get next() {
    return this.next;
  }

  get prev() {
    return this.prev;
  }

  setNext(node) {
    this.next = node;
  }

  setPrev(node) {
    this.prev = node;
  }
}

export default class LinkedList {
  constructor(initialValue = null) {
    this.head = new Node(initialValue);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    this.tail.setNext(new Node(value));
    this.tail = this.tail.next;
    this.length++;
  }

  insert(value) {
    const newHead = new Node(value);
    newHead.setNext(this.head);
    this.head = newHead;
    this.length++;
  }

  *traverse() {
    let current = this.head;
    while (current !== null) {
      yield current;
      current = current.next;
    }
  }
}

export class DoublyLinkedList {}
