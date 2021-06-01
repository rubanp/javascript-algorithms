class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next || null;
  }
}

class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      this.length++;
    } else {
      if (!this.head.next) {
        this.head.next = new Node(value);
        this.length++;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = new Node(value);
        this.length++;
      }
    }
  }

  static fromArray(array) {
    let list = new LinkedList();
    for (let item of array) {
      list.append(item);
    }
    return list;
  }
}

const Animals = new LinkedList();
Animals.append("sheep");
Animals.append("pig");
Animals.append("cow");
console.log(Animals);

const fruit = ["banana", "mango", "apple"];
const FruitList = LinkedList.fromArray(fruit);
console.log(FruitList);
