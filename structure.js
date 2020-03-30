// ===== Singly Linked List ===== //

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
            if(val==0 || val==false || val){
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
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    insertAtEnd(val){
        try{
            if(val==0 || val==false || val){
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
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    lookStart(){
        try{
            if(this.head == null){
                return null;
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
                return null;
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
                return null;
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
                return null;
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
            if(!this.isEmpty()){
                let traverse = this.head;
                while (traverse.next != null) {
                    toReturn.push(traverse.value);
                    traverse = traverse.next;
                }
                toReturn.push(traverse.value);
            }
            return toReturn;
        }
        catch(e){
            console.log(e);
        }
    }

    search(val){
        try{
            if(val==0 || val==false || val){
                if(!this.isEmpty()){
                    let traverse = this.head;
                    while (traverse.next != null) {
                        if (traverse.value === val) {
                            return val;
                        }
                        traverse = traverse.next;
                    }
                    if (traverse.value === val) {
                        return val;
                    }
                    return null;
                }
                else{
                    return null;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    delete(val){
        try{
            if(val==0 || val==false || val){
                if(this.search(val)){
                    if (this.head.value === val) {
                        return this.deleteFromStart(val);
                    }
                    else if (this.tail.value === val) {
                        return this.deleteFromEnd(val);
                    }
                    else {
                        let backNode = this.head;
                        let currentNode = this.head.next;
                        let frontNode = this.head.next.next;
                        while (frontNode.next != null) {
                            if(currentNode.value === val){
                                backNode.next = frontNode;
                                this.size--;
                                return val;
                            }
                            backNode = currentNode;
                            currentNode = frontNode;
                            frontNode = frontNode.next;
                        }
                        backNode.next = frontNode;
                        this.size--;
                        return val;
                    }
                }
                else{
                    return null;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    reverse(){
        try{
            if(!this.isEmpty()){
                if(this.size === 1){
                    return true;
                }
                else if(this.size === 2){
                    this.tail.next = this.head;
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    this.tail.next = null;
                    return true;
                }
                else{
                    let backNode = this.head;
                    let currentNode = this.head.next;
                    let frontNode = this.head.next.next;
                    while(currentNode.next != null){
                        currentNode.next = backNode;
                        backNode = currentNode;
                        currentNode = frontNode;
                        frontNode = frontNode.next;
                    }
                    currentNode.next = backNode;
                    let temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    this.tail.next = null;
                    return true;
                }
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    get(index){
        try{
            if(index==0 || index==false || index){
                if(typeof(index)==='number'){
                    if (index < this.size && index>=0) {
                        let traverse = this.head;
                        for (let i = 0; i < index; i++) {
                            traverse = traverse.next;
                        }
                        return traverse.value;
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else{
                    throw new Error('Index is not a number');
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    set(val,index){
        try{
            if((index==0 || index==false || index) && (val==0 || val==false || val)){
                if(typeof(index)==='number'){
                    if(index>=0 && index<=this.size){
                        if(index == 0){
                            return this.insertAtStart(val);
                        }
                        else if(index == this.size){
                            return this.insertAtEnd(val);
                        }
                        else{
                            let newNode = new SinglyLinkedListNode(val);
                            let backNode = this.head;
                            let frontNode = this.head.next;
                            for(let i=0;i<(index-1);i++){
                                backNode = frontNode;
                                frontNode = frontNode.next;
                            }
                            newNode.next = frontNode;
                            backNode.next = newNode;
                            this.size++;
                            return val;
                        }
                    }
                    else{
                        throw new Error('Index out of range, So cannot set value');
                    }
                }
                else{
                    throw new Error('Index is not a number');
                }
            }
            else{
                throw new Error('Cannot find passed value or passed values are undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    searchAll(val){
        try{
            if(val == 0 || val == false || val){
                let toReturn = {
                    count : 0,
                    positions : []
                };
                if(!this.isEmpty()){
                    let traverse = this.head;
                    let i;
                    for(i=0;i<(this.size-1);i++){
                        if(traverse.value === val){
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        traverse = traverse.next;
                    }
                    if(traverse.value === val){
                        toReturn.count++;
                        toReturn.positions.push(i);
                    }
                    return toReturn;
                }
                else{
                    return toReturn;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    deleteAll(val){
        try{
            if(val==0 || val==false || val){
                let newSingly = new SinglyLinkedList();
                if(!this.isEmpty()){
                    let traverse = this.head;
                    while(traverse.next != null){
                        if(traverse.value !== val){
                            newSingly.insertAtEnd(traverse.value);
                        }
                        traverse = traverse.next;
                    }
                    if(traverse.value !== val){
                        newSingly.insertAtEnd(traverse.value);
                    }
                    return newSingly;
                }
                else{
                    return newSingly;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }
}





// =============================== //



// ====== Doubly Linked List ====== //



class DoublyLinkedListNode{

    constructor(data){
        this.prev = null;
        this.value = data;
        this.next = null;
    }

}


class DoublyLinkedList{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtStart(val){
        try{
            if(val==0 || val==false || val){
                let newNode = new DoublyLinkedListNode(val);
                if(this.head == null){
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if(this.head != null){
                    newNode.next = this.head;
                    this.head.prev = newNode;
                    this.head = newNode;
                    this.size++;
                    return val;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null')
            }
        }
        catch(e){
            console.log(e);
        }
    }

    insertAtEnd(val){
        try{
            if(val==0 || val==false || val){
                let newNode = new DoublyLinkedListNode(val);
                if(this.head==null){
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else if(this.head != null){
                    this.tail.next = newNode;
                    newNode.prev = this.tail;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    deleteFromStart(){
        try{
            if(this.head == null){
                return null;
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
                    newHead.prev = null;
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
                return null;
            }
            else if(this.head != null){
                if(this.head == this.tail){
                    let deletedNodeValue = this.tail.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return deletedNodeValue;
                }
                else{
                    let frontNode = this.head.next;
                    let backNode = this.head;
                    while(frontNode.next != null){
                        backNode = frontNode;
                        frontNode = frontNode.next;
                    }
                    let deletedNodeValue = frontNode.value;
                    this.tail = backNode;
                    backNode.next = null;
                    frontNode.prev = null;
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
            else if(this.head != null){
                return false;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    lookStart(){
        try{
            if(this.isEmpty()){
                return null;
            }
            else{
                return this.head.value;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    lookEnd(){
        try{
            if(this.isEmpty()){
                return null;
            }
            else{
                return this.tail.value;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    toArray(){
        try{
            let toReturn = [];
            if(!this.isEmpty()){
                let traverse = this.head;
                while(traverse.next != null){
                    toReturn.push(traverse.value);
                    traverse = traverse.next;
                }
                toReturn.push(traverse.value);
                return toReturn;
            }
            else{
                return toReturn;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    search(val){
        try{
            if(val==0 || val== false || val){
                if(!this.isEmpty()){
                    let traverse = this.head;
                    while(traverse.next != null){
                        if(traverse.value === val){
                            return val;
                        }
                        traverse = traverse.next;
                    }
                    if(traverse.value === val){
                        return val;
                    }
                    return null;
                }
                else{
                    return null;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    get(index){
        try{
            if(index == 0 || index == false || index){
                if(typeof(index)==='number'){
                    if((index>=0) && (index < (this.size))){
                        let traverse = this.head;
                        for(let i=0;i<index;i++){
                            traverse = traverse.next;
                        }
                        return traverse.value;
                    }
                    else{
                        throw new Error('Index out of range')
                    }
                }
                else{
                    throw new Error('Index is not a number');
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    set(val,index){
        try{
            if((index == 0 || index == false || index) && (val == 0 || val == false || val)){
                if(typeof(index)==='number'){
                    if(index>=0 && index<=this.size){
                        if(index == 0){
                            return this.insertAtStart(val);
                        }
                        else if(index == this.size){
                            return this.insertAtEnd(val);
                        }
                        else{
                            let newNode = new DoublyLinkedListNode(val);
                            let backNode = this.head;
                            let frontNode = this.head.next;
                            for(let i=0;i<(index-1);i++){
                                backNode = frontNode;
                                frontNode = frontNode.next;
                            }
                            newNode.next = frontNode;
                            newNode.prev = backNode;
                            backNode.next = newNode;
                            frontNode.prev = newNode;
                            this.size++;
                            return val;
                        }
                    }
                    else{
                        throw new Error('Index out of range');
                    }
                }
                else{
                    throw new Error('Index is not a number');
                }
            }
            else{
                throw new Error('Cannot find passed value or passed values are undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    delete(val){
        try{
            if(val==0 || val==false || val){
                if(!this.isEmpty()){
                    if(this.search(val)){
                        if (this.head.value === val) {
                            return this.deleteFromStart(val);
                        }
                        else if (this.tail.value === val) {
                            return this.deleteFromEnd(val);
                        }
                        else {
                            let backNode = this.head;
                            let currentNode = this.head.next;
                            let frontNode = this.head.next.next;
                            while (frontNode.next != null) {
                                if (currentNode.value === val) {
                                    let deletedNodeValue = currentNode.value;
                                    backNode.next = frontNode;
                                    frontNode.prev = backNode;
                                    currentNode.next = null;
                                    currentNode.prev = null;
                                    this.size--;
                                    return deletedNodeValue;
                                }
                                backNode = currentNode;
                                currentNode = frontNode;
                                frontNode = frontNode.next;
                            }
                            if (currentNode.value === val) {
                                let deletedNodeValue = currentNode.value;
                                backNode.next = frontNode;
                                frontNode.prev = backNode;
                                currentNode.next = null;
                                currentNode.prev = null;
                                this.size--;
                                return deletedNodeValue;
                            }
                        }
                    }
                    else{
                        return null;
                    }
                }
                else{
                    return null;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    reverse(){
        try{
            if(!this.isEmpty()){
                if(this.size == 1){
                    return true;
                }
                else{
                    let traverse = this.head;
                    let temp;
                    for(let i=0;i<this.size;i++){
                        temp = traverse.next;
                        traverse.next = traverse.prev;
                        traverse.prev = temp;
                        traverse = traverse.prev;
                    }
                    temp = this.head;
                    this.head = this.tail;
                    this.tail = temp;
                    return true;
                }
            }
            else{
                return false;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    searchAll(val) {
        try {
            if (val == 0 || val == false || val) {
                let toReturn = {
                    count: 0,
                    positions: []
                };
                if (!this.isEmpty()) {
                    let traverse = this.head;
                    let i;
                    for (i = 0; i < (this.size - 1); i++) {
                        if (traverse.value === val) {
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        traverse = traverse.next;
                    }
                    if (traverse.value === val) {
                        toReturn.count++;
                        toReturn.positions.push(i);
                    }
                    return toReturn;
                }
                else {
                    return toReturn;
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    deleteAll(val){
        try{
            if(val == 0 || val == false || val){
                let newDoubly = new DoublyLinkedList();
                if(!this.isEmpty()){
                    let traverse = this.head;
                    while(traverse.next != null){
                        if(traverse.value !== val){
                            newDoubly.insertAtEnd(traverse.value);
                        }
                        traverse = traverse.next;
                    }
                    if(traverse.value !== val){
                        newDoubly.insertAtEnd(traverse.value);
                    }
                    return newDoubly;
                }
                else{
                    return newDoubly;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }
}





// ================================== //



// ============ Stacks ============== //



class StackNode{
    constructor(data){
        this.value = data;
        this.next = null;
    }
}


class Stack{
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    push(val){
        try{
            if(val==0 || val== false || val){
                let newNode = new StackNode(val);
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
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    pop(){
        try{
            if(this.head == null){
                return null;
            }
            else{
                if(this.head == this.tail){
                    let toPop = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return toPop;
                }
                else{
                    let toPop = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    this.size--;
                    return toPop;
                }
            }
        }
        catch(e){
            console.log(e);
        }
    }

    top(){
        try{
            if(this.head == null){
                return null;
            }
            else{
                return this.head.value;
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
            if(!this.isEmpty()){
                let traverse = this.head;
                toReturn.push(traverse.value);
                while(traverse.next != null){
                    traverse = traverse.next;
                    toReturn.push(traverse.value);
                }
                return toReturn;
            }
            else{
                return toReturn;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    search(val){
        try{
            if(val == 0 || val == false || val){
                if(!this.isEmpty()){
                    let traverse = this.head;
                    if(traverse.value === val){
                        return val;
                    }
                    while(traverse.next != null){
                        traverse = traverse.next;
                        if(traverse.value === val){
                            return val;
                        }
                    }
                    return null;
                }
                else{
                    return null;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }
}





// ======================= //





// ======== Queues ======== //



class QueueNode{

    constructor(data){
        this.value = data;
        this.next = null;
    }

}


class Queue{

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
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

    enqueue(val){
        try{
            if(val == 0 || val == false || val){
                let newNode = new QueueNode(val);
                if(this.head == null){
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else{
                    this.tail.next = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
            }
            else{
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    dequeue(){
        try{
            if(this.head == null){
                return null;
            }
            else{
                if(this.head == this.tail){
                    let toDequeue = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return toDequeue;
                }
                else{
                    let toDequeue = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    this.size--;
                    return toDequeue;
                }
            }
        }
        catch(e){
            console.log(e);
        }
    }

    toArray(){
        try{
            let toReturn = [];
            if(!this.isEmpty()){
                let traverse = this.head;
                toReturn.push(traverse.value);
                while(traverse.next != null){
                    traverse = traverse.next;
                    toReturn.push(traverse.value);
                }
                return toReturn;
            }
            else{
                return toReturn;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    peek(){
        try{
            if(this.head == null){
                return null;
            }
            else{
                return this.tail.value;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    search(val) {
        try {
            if (val == 0 || val == false || val) {
                if (!this.isEmpty()) {
                    let traverse = this.head;
                    if (traverse.value === val) {
                        return val;
                    }
                    while (traverse.next != null) {
                        traverse = traverse.next;
                        if (traverse.value === val) {
                            return val;
                        }
                    }
                    return null;
                }
                else {
                    return null;
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}




// =============================== //




// ===== Binary Search Trees ===== //


/*

=>  Types of Binary Search Trees 
    1. number
    2. string

=>  Comparison Methods of Binray Search Trees
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length 

*/


const typesMap = {
    1 : 'number',
    2 : 'string'
}


const typesAndMethods = {
    1 : [1],
    2 : [1,2]
}




function insertNumberAndStringAscii(val){
    let newNode = new BinarySearchTreeNode(val);
    let traverse = this.root;
    while (true) {
        if (newNode.value <= traverse.value) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                break;
            }
        }
        else if (newNode.value > traverse.value) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                break;
            }
        }
    }
}

function insertStringLength(val){
    let newNode = new BinarySearchTreeNode(val);
    let traverse = this.root;
    while (true) {
        if (newNode.value.length <= traverse.value.length) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                break;
            }
        }
        else if (newNode.value.length > traverse.value.length) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                break;
            }
        }
    }
}



class BinarySearchTreeNode{

    constructor(data){
        this.value = data;
        this.left = null;
        this.right = null;
    }

}



class BinarySearchTree{

    constructor(type,method){
        this.root = null;
        this.type = type;
        this.method = method;
    }

    insert(val){
        try{
            const myCurrentType = typesMap[this.type];
            if (typeof (val) === myCurrentType){
                const supportedMethods = typesAndMethods[parseInt(this.type)];
                if(supportedMethods.find(ele => parseInt(ele)===parseInt(this.method))){
                    if (this.root == null) {
                        let newNode = new BinarySearchTreeNode(val);
                        this.root = newNode;
                        return val;
                    }
                    else if (this.type === 1 && this.method === 1) {
                        insertNumberAndStringAscii.call(this, val);
                        return val;
                    }
                    else if (this.type === 2 && this.method === 1) {
                        insertNumberAndStringAscii.call(this, val);
                        return val;
                    }
                    else if (this.type === 2 && this.method === 2) {
                        insertStringLength.call(this, val);
                        return val;
                    }
                }
                else{
                    throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods')
                }
            }
            else{
                throw new Error('Passed value does not match the type of Binary Search Tree');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    search(val){
        try{
            const myCurrentType = typesMap[this.type];
            if (typeof (val) === myCurrentType) {
                if(this.root != null){
                    let traverse = this.root;
                    while(true){
                        if(traverse.value === val){
                            return true;
                            break;
                        }
                        else if(val <= traverse.value && traverse.left!=null){
                            traverse = traverse.left;
                        }
                        else if(val > traverse.value && traverse.right!=null){
                            traverse = traverse.right;
                        }
                        else{
                            return false;
                        }
                    }
                }
                else{
                    return false;
                }
            }
            else{
                throw new Error('Passed value does not match the type of Binary Search Tree');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    isEmpty(){
        try{
            if(this.root == null){
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
}









const my = new BinarySearchTree(1,1);


my.insert(30);
my.insert(10);
my.insert(20);
my.insert(40);
my.insert(50);

console.log(my.search(10));

console.log(my.isEmpty());






console.log(my);
