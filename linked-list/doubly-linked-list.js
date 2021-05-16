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
        this.length=0;
    }

    append(value){

        // if no nodes exist
        if(!this.tail){
            this.head = this.tail = new Node(value);
            this.length++;
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

            // increment length
            this.length++;
        }
    }

    prepend(value) {

        // if no nodes exist
        if(!this.head) {
            this.head = this.tail = new Node(value);
            this.length++;
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

            // increment length
            this.length++;
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

    find(item) {
        let current = this.head;
        let contains = false;
        let index = 1;
        while(current.next) {
            if(current.value === item && current.prev === null) {
                contains = true;
                index = 'head';
                break;
            };
            if(current.value === item) {
                contains = true;
                break;
            };
            index++;
            current = current.next;
        }
        if(current.value === item && current.next === null) {
            contains = true;
            index = 'tail';
        };
        if(contains===true) {
            console.log(`'${item}' found at location: ${index}`)
        }
        else {
            console.log(`'${item}' not found`)
        }
    }

    //insert(value, location) {

    //}

    //delete(location) {

    //}
}

const List = new LinkedList();

List.append("banana");
List.append("orange");
List.prepend("apple");
List.list();

List.find('apple')
