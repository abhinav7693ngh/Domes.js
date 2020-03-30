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
                            return traverse;
                        }
                        traverse = traverse.next;
                    }
                    if (traverse.value === val) {
                        return traverse;
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
                        return traverse;
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

    remove(index){
        try{
            if (index == 0 || index == false || index) {
                if (typeof (index) === 'number') {
                    if (index < this.size && index >= 0) {
                        if(index === 0){
                            return this.deleteFromStart(this.head.value);
                        }
                        else if(index === (this.size-1)){
                            return this.deleteFromEnd(this.tail.value);
                        }
                        else{
                            let traverse = this.head.next;
                            for (let i = 1; i < index; i++) {
                                traverse = traverse.next;
                            }
                            return this.delete(traverse.value);
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not a number');
                }
            }
            else {
                throw new Error('Cannot find passed value or passed value is undefined/null');
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
                            return traverse;
                        }
                        traverse = traverse.next;
                    }
                    if(traverse.value === val){
                        return traverse;
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
                        return traverse;
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

    remove(index) {
        try {
            if (index == 0 || index == false || index) {
                if (typeof (index) === 'number') {
                    if (index < this.size && index >= 0) {
                        if (index === 0) {
                            return this.deleteFromStart(this.head.value);
                        }
                        else if (index === (this.size - 1)) {
                            return this.deleteFromEnd(this.tail.value);
                        }
                        else {
                            let traverse = this.head.next;
                            for (let i = 1; i < index; i++) {
                                traverse = traverse.next;
                            }
                            return this.delete(traverse.value);
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not a number');
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
                        return traverse;
                    }
                    while(traverse.next != null){
                        traverse = traverse.next;
                        if(traverse.value === val){
                            return traverse;
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
                        return traverse;
                    }
                    while (traverse.next != null) {
                        traverse = traverse.next;
                        if (traverse.value === val) {
                            return traverse;
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
    let newNode = new BinarySearchTreeNode(val,this.noOfNodes);
    let traverse = this.root;
    while (true) {
        if (newNode.value <= traverse.value) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
        else if (newNode.value > traverse.value) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
    }
}

function insertStringLength(val){
    let newNode = new BinarySearchTreeNode(val,this.noOfNodes);
    let traverse = this.root;
    while (true) {
        if (newNode.value.length <= traverse.value.length) {
            if (traverse.left != null) {
                traverse = traverse.left;
            }
            else {
                traverse.left = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
        else if (newNode.value.length > traverse.value.length) {
            if (traverse.right != null) {
                traverse = traverse.right;
            }
            else {
                traverse.right = newNode;
                this.nodeIDMap[this.noOfNodes] = newNode;
                break;
            }
        }
    }
}

function inOrder(current,visited){
    if(current == null){
        return;
    }
    inOrder(current.left,visited);
    visited.push({value : current.value, id : current.id});
    inOrder(current.right,visited);
}

function preOrder(current,visited){
    if (current == null) {
        return;
    }
    visited.push({ value: current.value, id: current.id });
    inOrder(current.left, visited);
    inOrder(current.right, visited);
}

function postOrder(current,visited){
    if (current == null) {
        return;
    }
    inOrder(current.left, visited);
    inOrder(current.right, visited);
    visited.push({ value: current.value, id: current.id });
}

function getIdFromValue(current,mynodes,val){
    if(current == null){
        return;
    }
    if(current.value === val){
        mynodes.push({value : current.value, id : current.id});
    }
    getIdFromValue(current.left, mynodes,val);
    getIdFromValue(current.right, mynodes, val);
}

function leaveNodes(current,leaves){
    if(current == null){
        return;
    }
    if (current.left == null && current.right == null) {
        leaves.push({ value: current.value, id: current.id });
    }
    leaveNodes(current.left,leaves);
    leaveNodes(current.right,leaves);
}

function findHeight(current){
    if(current == null){
        return 0;
    }
    else{
        let l = findHeight(current.left);
        let r = findHeight(current.right);
        return Math.max(l,r) + 1;
    }
}

function childs(current,id){
    if(current == null){
        return null;
    }
    else if(current.id === id){
        let toReturn = {
            count : 0
        };
        if(current.left != null){
            toReturn['left']  = {
                value : current.left.value,
                id : current.left.id
            };
            toReturn['count']++;
        }
        else{
            toReturn['left']=null;
        }
        if(current.right != null){
            toReturn['right'] = {
                value : current.right.value,
                id : current.right.id
            };
            toReturn['count']++;
        }
        else{
            toReturn['right'] = null;
        }
        return toReturn;
    }
    else{
        childs(current.left);
        childs(current.right);
    }
}

function fixingID(){
    let myroot = this.root;
    let queue = new Queue();
    let count = 1;
    queue.enqueue(myroot);
    while(queue.size > 0){
        let toChange = queue.dequeue();
        toChange.id = count;
        count++;
        if(toChange.left != null){
            queue.enqueue(toChange.left);
        }
        if(toChange.right != null){
            queue.enqueue(toChange.right);
        }
    }
}






class BinarySearchTreeNode{

    constructor(data,id){
        this.value = data;
        this.left = null;
        this.right = null;
        this.id = id;
    }

}



class BinarySearchTree{

    constructor(type,method){
        this.root = null;
        this.type = type;
        this.method = method;
        this.noOfNodes = 0;
        this.nodeIDMap = {}
    }

    insert(val){
        try{
            const myCurrentType = typesMap[this.type];
            if(arguments.length > 0){
                if (typeof (val) === myCurrentType) {
                    const supportedMethods = typesAndMethods[parseInt(this.type)];
                    if (supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))) {
                        if (this.root == null) {
                            this.noOfNodes++;
                            let newNode = new BinarySearchTreeNode(val, this.noOfNodes);
                            this.nodeIDMap[this.noOfNodes] = newNode;
                            this.root = newNode;
                            return val;
                        }
                        else if (this.type === 1 && this.method === 1) {
                            this.noOfNodes++;
                            insertNumberAndStringAscii.call(this, val);
                            return val;
                        }
                        else if (this.type === 2 && this.method === 1) {
                            this.noOfNodes++;
                            insertNumberAndStringAscii.call(this, val);
                            return val;
                        }
                        else if (this.type === 2 && this.method === 2) {
                            this.noOfNodes++;
                            insertStringLength.call(this, val);
                            return val;
                        }
                    }
                    else {
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods')
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    search(val){
        try{
            const myCurrentType = typesMap[this.type];
            if(arguments.length > 0){
                if (typeof (val) === myCurrentType) {
                    if (this.root != null) {
                        let traverse = this.root;
                        while (true) {
                            if (traverse.value === val) {
                                return { value: traverse.value, id: traverse.id };
                                break;
                            }
                            else if (val <= traverse.value && traverse.left != null) {
                                traverse = traverse.left;
                            }
                            else if (val > traverse.value && traverse.right != null) {
                                traverse = traverse.right;
                            }
                            else {
                                return null;
                            }
                        }
                    }
                    else {
                        return null;
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else{
                throw new Error('Argument not passed');
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

    BFS(id){
        try{
            if(arguments.length > 0){
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let queue = new Queue();
                        let visited = [];
                        queue.enqueue(myroot);
                        while (queue.size > 0) {
                            let toBeChecked = queue.dequeue();
                            visited.push({ value: toBeChecked.value, id: toBeChecked.id });
                            if (toBeChecked.left != null) {
                                queue.enqueue(toBeChecked.left);
                            }
                            if (toBeChecked.right != null) {
                                queue.enqueue(toBeChecked.right);
                            }
                        }
                        return visited;
                    }
                    else {
                        throw new Error('Please give a valid ID or Binary Search is Empty');
                    }
                }
                else {
                    throw new Error('ID passed is not of type number')
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    DFSInOrder(id){
        try{
            if(arguments.length > 0){
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        inOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    DFSPreOrder(id) {
        try {
            if(arguments.length > 0){
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        preOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    DFSPostOrder(id) {
        try {
            if(arguments.length > 0){
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        const myroot = this.nodeIDMap[id];
                        let visited = [];
                        postOrder.call(this, myroot, visited);
                        return visited;
                    }
                    else {
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    height(id){
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        return findHeight.call(this,myroot);
                    }
                    else {
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    rootNodeID(){
        try{
            if(this.root != null){
                return parseInt(this.root.id);
            }
            else{
                return null;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    getIdsOfValue(val,id){
        try{
            if(arguments.length > 0){
                const myCurrentType = typesMap[this.type];
                if (typeof (val) === myCurrentType) {
                    if(arguments.length > 1){
                        if(typeof(id) === 'number'){
                            if(id >=1 && id<=this.noOfNodes){
                                let myroot = this.nodeIDMap[id];
                                let mynodes = [];
                                getIdFromValue.call(this, myroot, mynodes, val);
                                return mynodes;
                            }
                            else{
                                throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                            }
                        }
                        else{
                            throw new Error('ID passed is not of type number');
                        }
                    }
                    else{
                        if(!this.isEmpty()){
                            let myroot = this.nodeIDMap[this.rootNodeID()];
                            let mynodes = [];
                            getIdFromValue.call(this,myroot,mynodes,val);
                            return mynodes;
                        }
                        else{
                            return null;
                        }
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Binary Search Tree');
                }
            }
            else{
                throw new Error('Argument/s not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    leaveNodes(id){
        try{
            if(arguments.length>0){
                if(typeof(id) === 'number'){
                    if(id>=1 && id<=this.noOfNodes){
                        let myroot = this.nodeIDMap[id];
                        let leaves = [];
                        leaveNodes.call(this, myroot, leaves);
                        return leaves;
                    }
                    else{
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else{
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed')
            }
        }
        catch(e){
            console.log(e);
        }
    }

    childNodes(id){
        try{
            if(arguments.length > 0){
                if(typeof(id)==='number'){
                    if(id>=1 && id<=this.noOfNodes){
                        let myroot = this.nodeIDMap[id];
                        return childs.call(this,myroot,id);
                    }
                    else{
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else{
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    delete(id){
        try{
            if(arguments.length > 0){
                if(typeof(id)==='number'){
                    if(id>=1 && id<=this.noOfNodes){
                        let myroot = this.root;
                        let node,parentNode;
                        let mystack = new Stack();
                        mystack.push(myroot);
                        while(mystack.size > 0){
                            let current = mystack.pop();
                            if(current.id === id){
                                node = current;
                                parentNode = null;
                                break;
                            }
                            if(current.left != null){
                                if(current.left.id === id){
                                    parentNode = current;
                                    node = current.left;
                                    break;
                                }
                            }
                            if(current.right != null){
                                if(current.right.id === id){
                                    parentNode = current;
                                    node = current.right;
                                    break;
                                }
                            }
                            if(current.left != null){
                                mystack.push(current.left);
                            }
                            if(current.right != null){
                                mystack.push(current.right);
                            }
                        }
                        console.log(node,parentNode);
                        // if(noOfChilds === 0){

                        // }
                        // else if(noOfChilds === 1){

                        // }
                        // else if(noOfChilds === 2){

                        // }
                    }
                    else{
                        throw new Error('Please give a valid ID or Binary Search Tree is Empty');
                    }
                }
                else{
                    throw new Error('ID passed is not of type number');
                }
            }
            else{
                throw new Error('Argument not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }
}





const my = new BinarySearchTree(1,1);
my.insert(30);
my.insert(20);
my.insert(50);
my.insert(10);
my.insert(25);
my.insert(40);
my.insert(60);
my.insert(15);
console.log(my.childNodes(4));
my.delete(3);
console.log(my);



