import { jest } from "@jest/globals";
import { TreeNode } from "../binary-tree";

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

describe("Binary Tree", () => {
  it("Creates tree and can traverse it in level order", () => {
    const root = new TreeNode(arr[0]);
    expect(root.val).toBe(1);

    root.left = new TreeNode(arr[1]);
    root.right = new TreeNode(arr[2]);

    root.left.left = new TreeNode(arr[3]);
    root.left.right = new TreeNode(arr[4]);

    root.right.left = new TreeNode(arr[5]);
    root.right.right = new TreeNode(arr[6]);

    let queue = [root];
    let counter = 0;
    while (queue.length) {
      const curr = queue.shift();

      if (curr.left) queue.push(curr.left);
      if (curr.right) queue.push(curr.right);

      expect(curr.val).toBe(arr[counter]);
      counter++;
    }
  });
});
