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

    append(value){

        // if no nodes exist
        if(!this.tail){
            this.head = this.tail = new Node(value);
        }

        else {
            // create temporary variable to store old tail
            let oldTail = this.tail;

            // create new tail
            this.tail = new Node(value);

            // change old tail next pointer to current tail
            oldTail.next = this.tail;

            // change current tail prev pointer to old tail
            this.tail.prev = oldTail;
        }
    }

    prepend(value) {

        // if no nodes exist
        if(!this.head) {
            this.head = this.tail = new Node(value);
        }

        else {
            // create new temporary variable to store old Head
            let oldHead = this.head;

            // create new head
            this.head = new Node(value);

            // change old head prev pointer to current head
            oldHead.prev = this.head;
            
            // change current head next pointer to old head
            this.head.next = oldHead;
        }
    }

    list() {
        let current = this.head;
        while(current.next) {
            console.log(current.value);
            current = current.next;
        }
        console.log(current.value);
    }
}

const List = new LinkedList();

List.append("banana");
List.append("orange");
List.prepend("apple");
List.list();
console.log(List);
