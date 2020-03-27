// Singly Linked List Data Structures

class SinglyLinkedListNode {
    constructor(data) {
        this.value = data;
        this.next = null;
    }
}


class SinglyLinkedList {
    
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtStart(val){
        try{
            if(val){
                const newNode = new SinglyLinkedListNode(val);
                if(this.head == null){
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if(this.head != null){
                    newNode.next = this.head;
                    this.head = newNode;
                    this.size++;
                    return val;
                }
            }
            else{
                throw new Error('Cannot find passed value');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    insertAtEnd(val){
        try{
            if(val){
                const newNode = new SinglyLinkedListNode(val);
                if(this.head == null){
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if(this.head != null){
                    this.tail.next = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
            }
            else{
                throw new Error('Cannot find passed value');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    lookStart(){
        try{
            if(this.head == null){
                return undefined;
            }
            else if(this.head != null){
                return this.head.value;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    lookEnd(){
        try{
            if(this.head == null){
                return undefined;
            }
            else if(this.head != null){
                return this.tail.value;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    deleteFromStart(){
        try{
            if(this.head == null){
                return undefined;
            }
            else if(this.head != null){
                if(this.head == this.tail){
                    let deletedNodeValue = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return deletedNodeValue;
                }
                else{
                    let deletedNodeValue = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    this.size--;
                    return deletedNodeValue;
                }
            }
        }
        catch(e){
            console.log(e);
        }
    }

    deleteFromEnd(){
        try{
            if(this.head == null){
                return undefined;
            }
            else if(this.head != null){
                if(this.head == this.tail){
                    let deletedNodeValue = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return deletedNodeValue;
                }
                else{
                    let backNode = this.head;
                    let frontNode = this.head.next;
                    while(frontNode.next != null){
                        backNode = frontNode;
                        frontNode = frontNode.next;
                    }
                    let deletedNodeValue = frontNode.value;
                    backNode.next = null;
                    this.tail = backNode;
                    this.size--;
                    return deletedNodeValue;
                }
            }
        }
        catch(e){
            console.log(e);
        }
    }

    isEmpty(){
        try{
            if(this.head == null){
                return true;
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    toArray(){
        try{
            let toReturn = [];
            let traverse = this.head;
            while(traverse.next != null){
                toReturn.push(traverse.value);
                traverse = traverse.next;
            }
            toReturn.push(traverse.value);
            return toReturn;
        }
        catch(e){
            console.log(e);
        }
    }
}


const my = new SinglyLinkedList();

const myarr = [10,20,30];
myarr.forEach(ele => {
    my.insertAtEnd(ele);
});

console.log(my.toArray());


//my.insertAtStart('myvalue');
