import { jest } from "@jest/globals";

import mergeSort from "../mergesort";

describe("mergeSort", () => {
  const arr = [10, 1, 9, 2, 7, 3, 8, 4, 6, 5];

  it("should sort an array", () => {
    expect(mergeSort(arr, 0, arr.length - 1)).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10
    ]);
  });
});
