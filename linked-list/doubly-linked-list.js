class Node {
  constructor(value, next, prev) {
    this.value = value;
    this.next = next || null;
    this.prev = prev || null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    // if no nodes exist
    if (!this.tail) {
      this.head = this.tail = new Node(value);
      this.length++;
    } else {
      // create temporary variable to store old tail
      let oldTail = this.tail;

      // create new tail
      this.tail = new Node(value, null, oldTail);

      // change old tail next pointer to current tail
      oldTail.next = this.tail;

      // increment length
      this.length++;
    }
  }

  prepend(value) {
    // if no nodes exist
    if (!this.head) {
      this.head = this.tail = new Node(value);
      this.length++;
    } else {
      // create new temporary variable to store old Head
      let oldHead = this.head;

      // create new head
      this.head = new Node(value, oldHead, null);

      // change old head prev pointer to current head
      oldHead.prev = this.head;

      // change current head next pointer to old head
      // this.head.next = oldHead;

      // increment length
      this.length++;
    }
  }

  list() {
    let current = this.head;
    while (current.next) {
      console.log(current.value);
      current = current.next;
    }
    console.log(current.value);
  }

  find(item) {
    let current = this.head;
    let contains = false;
    let index = 1;
    while (current.next) {
      if (current.value === item && current.prev === null) {
        contains = true;
        index = "head";
        break;
      }
      if (current.value === item) {
        contains = true;
        break;
      }
      index++;
      current = current.next;
    }
    if (current.value === item && current.next === null) {
      contains = true;
      index = "tail";
    }
    if (contains === true) {
      console.log(
        `'${item}' found at location: ${index} of ${this.length} items`
      );
    } else {
      console.log(`'${item}' not found`);
    }
  }

  insert(value, location) {
    if (location === 1) {
      this.prepend(value);
    } else if (location === this.length + 1) {
      this.append(value);
    } else if (location > this.length + 1) {
      throw new Error(`Insert location (${location}) is greater than 
            current length of list (${this.length})`);
    } else {
      let current = this.head;
      let index = 1;
      while (location !== index) {
        current = current.next;
        index++;
      }
      let oldPrev = current.prev;
      current.prev = new Node(value, current, oldPrev);
      oldPrev.next = current.prev;
      this.length++;
    }
  }

  delete(location) {
    if (location === 1 || "head") {
      let oldHead = this.head;
      this.head = oldHead.next;
      this.head.prev = null;
      //delete oldHead;
      this.length--;
    } else if (location === this.length || "tail") {
      let oldTail = this.tail;
      this.tail = oldTail.prev;
      this.tail.next = next;
      //delete oldTail;
      this.length--;
    } else if (location > this.length) {
      throw new Error(
        `Delete location (${location}) is greater than current length of list (${this.length})`
      );
    } else {
      let current = this.head;
      let index = 1;
      while (location !== index) {
        current = current.next;
        index++;
      }
      let oldNode = current;
      oldNode.prev.next = oldNode.next;
      oldNode.next.prev = oldNode.prev;
      //delete oldNode;
    }
  }

  toArray() {
    let current = this.head;
    let array = [];
    while (current.next) {
      array.push(current.value);
      current = current.next;
    }
    array.push(current.value);
    console.log(array);
  }

  //fromArray(){}
}

const List = new LinkedList();

List.append("banana");
List.append("orange");
List.prepend("apple");
List.insert("kiwi", 3);
List.insert("mango", 4);
List.append("pear");
List.toArray();
List.delete("tail");
List.toArray();
