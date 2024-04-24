// 

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.nextNode = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    size() {
        return this.size;
    }

    head() {
        return this.head;
    }

    tail() {
        return this.tail;
    }

    at(index) {
        if (index < 0 || index >= this.size) {
            throw new Error("Index out of bounds");
        }
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.nextNode;
        }
        return current;
    }

    pop() {
        if (!this.head) {
            throw new Error("Cannot pop from an empty list");
        }
        if (this.size === 1) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size--;
            return value;
        }
        let current = this.head;
        while (current.nextNode !== this.tail) {
            current = current.nextNode;
        }
        const value = current.nextNode.value;
        current.nextNode = null;
        this.tail = current;
        this.size--;
        return value;
    }

    contains(value) {
        let current = this.head;
        while (current) {
            if (current.value === value) {
                return true;
            }
            current = current.nextNode;
        }
        return false;
    }

    find(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) {
                return index;
            }
            current = current.nextNode;
            index++;
        }
        return null;
    }

    toString() {
        let result = "";
        let current = this.head;
        while (current) {
            result += `(${current.value}) -> `;
            current = current.nextNode;
        }
        result += "null";
        return result;
    }
}

const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);
myList.prepend(0);
console.log(myList.toString()); 
 console.log(myList.size); 
console.log(myList.head.value); 
console.log(myList.tail.value); 
console.log(myList.at(2).value); 
console.log(myList.pop); 
console.log(myList.toString()); 
console.log(myList.contains(2)); 
console.log(myList.find(2)); 
