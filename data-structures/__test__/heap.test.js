import { jest } from "@jest/globals";
import { MaxBinaryHeap, MinBinaryHeap } from "../heap";

const arr = [34, 53, 21, 89, 20, 54, 94, 7, 11];

describe("Max Binary Heap", () => {
  it("Correctly sets max of heap", () => {
    const maxHeap = new MaxBinaryHeap([...arr]);

    expect(maxHeap.peek()).toBe(94);
  });
});

describe("Min Binary Heap", () => {
  it("Correctly sets min of heap", () => {
    const minHeap = new MinBinaryHeap([...arr]);

    expect(minHeap.peek()).toBe(7);
  });
});
