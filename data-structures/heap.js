class BinaryHeap {
  constructor(arr) {
    this.heapArr = arr;
    this.size = this.heapArr.length;
    this.heapify();
  }

  // Swaps element at index i with element at index j
  swap(i, j) {
    const tmp = this.heapArr[i];
    this.heapArr[i] = this.heapArr[j];
    this.heapArr[j] = tmp;
  }

  // Returns index of left child of root
  left(root) {
    return 2 * root + 1;
  }

  // Returns index of right child of root
  right(root) {
    return 2 * root + 2;
  }

  // Returns index of parent element for subtree root
  parent(root) {
    if (root === 0) return null;

    return Math.floor((root - 1) / 2);
  }

  // Peeks root element without removing it
  peek() {
    return this.heapArr[0];
  }

  insert(val) {
    this.heapArr.push(val);
    this.size++;
    this.heapify();
  }

  heapify(i) {
    // Allows us to default i for the first recursive call
    if (i === undefined) i = Math.ceil(this.size / 2 - 1);
    // Base case, prevent recursive loop
    if (i < 0) return;

    let largest = i;
    let left = this.left(i);
    let right = this.right(i);

    if (left < this.size && this.compare(left, i)) largest = left;
    if (right < this.size && this.compare(right, largest)) largest = right;

    // Only swap if a larger/smaller element was found
    if (largest !== i) this.swap(i, largest);

    this.heapify(i - 1);
  }
}

export class MaxBinaryHeap extends BinaryHeap {
  constructor(arr) {
    super(arr);
  }

  compare(child, root) {
    return this.heapArr[child] > this.heapArr[root];
  }
}

export class MinBinaryHeap extends BinaryHeap {
  constructor(arr) {
    super(arr);
  }

  compare(child, root) {
    return this.heapArr[child] < this.heapArr[root];
  }
}
