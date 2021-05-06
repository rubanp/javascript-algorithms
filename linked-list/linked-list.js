class Node {
  constructor(value, next, prev) {
    this.value=value;
    this.next=next||null;
    this.prev=prev||null;
  }
}

class LinkedList {
  constructor(){
    this.head=null;
    this.tail=null;
  }
  append(){
    if(!this.head){
      this.head = this.tail = new Node
    }
  }
}
