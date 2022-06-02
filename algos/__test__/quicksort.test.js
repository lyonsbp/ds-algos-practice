import { jest } from "@jest/globals";

import quickSort from "../quicksort";

describe("quickSort", () => {
  const arr = [10, 1, 9, 2, 7, 3, 8, 4, 6, 5];

  it("should sort an array", () => {
    expect(quickSort(arr)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
