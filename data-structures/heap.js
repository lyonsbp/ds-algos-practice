class BinaryHeap {
  constructor(arr) {}

  // Swaps element at index i with element at index j
  swap(i, j) {}

  // Returns index of left child of root
  left(root) {}

  // Returns index of right child of root
  right(root) {}

  // Returns index of parent element for subtree root
  parent(root) {}

  // Peeks root element without removing it
  peek() {}

  insert(val) {}

  delete(val) {}

  heapify(i) {}
}

export class MaxBinaryHeap extends BinaryHeap {
  constructor(arr) {
    super(arr);
  }

  compare(child, root) {}
}

export class MinBinaryHeap extends BinaryHeap {
  constructor(arr) {
    super(arr);
  }

  compare(child, root) {}
}
