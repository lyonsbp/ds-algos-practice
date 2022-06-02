import LinkedList from "../linked-list";

describe("LinkedList", () => {
  it("Should make an empty list", () => {
    const linkedList = new LinkedList();

    expect(linkedList.head.value).toBe(null);
    expect(linkedList.head.next).toBe(null);
    expect(linkedList.tail.value).toBe(null);
  });

  it("Should initialize with correct value", () => {
    const linkedList = new LinkedList(0);

    expect(linkedList.head.value).toBe(0);
  });

  it("Should track the correct length", () => {
    const linkedList = new LinkedList(1);
    linkedList.append(2);
    linkedList.append(3);

    expect(linkedList.length).toBe(3);
  });

  it("Should traverse in order", () => {
    const linkedList = new LinkedList(1);
    linkedList.append(2);
    linkedList.append(3);

    let i = 1;
    for (const node of linkedList.traverse()) {
      expect(node.value).toBe(i);
      i++;
    }
  });
});
