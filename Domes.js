// === Deeply check two objects are equal or not === //



Object.compare = function (obj1, obj2) {
    //Loop through properties in object 1
    for (var p in obj1) {
        //Check property exists on both objects
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) return false;

        switch (typeof (obj1[p])) {
            //Deep compare objects
            case 'object':
                if (!Object.compare(obj1[p], obj2[p])) return false;
                break;
            //Compare function code
            case 'function':
                if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString())) return false;
                break;
            //Compare values
            default:
                if (obj1[p] !== obj2[p]) return false;
        }
    }

    //Check object 2 for any extra properties
    for (var p in obj2) {
        if (typeof (obj1[p]) == 'undefined') return false;
    }
    return true;
};




// ================================================= //


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
                    if((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (Object.compare(traverse.value,val)) {
                                return traverse;
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            return traverse;
                        }
                        return null;
                    }
                    else{
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        if(Object.compare(this.head.value,val)){
                            return this.deleteFromStart(val);
                        }
                        else if(Object.compare(this.tail.value,val)){
                            return this.deleteFromEnd(val);
                        }
                        else{
                            let backNode = this.head;
                            let currentNode = this.head.next;
                            let frontNode = this.head.next.next;
                            while (frontNode.next != null) {
                                if (Object.compare(currentNode.value,val)) {
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
                            return this.deleteFromStart();
                        }
                        else if(index === (this.size-1)){
                            return this.deleteFromEnd();
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        let i;
                        for (i = 0; i < (this.size - 1); i++) {
                            if (Object.compare(traverse.value,val)) {
                                toReturn.count++;
                                toReturn.positions.push(i);
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        return toReturn;
                    }
                    else{
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (!Object.compare(traverse.value,val)) {
                                newSingly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (!Object.compare(traverse.value,val)) {
                            newSingly.insertAtEnd(traverse.value);
                        }
                        return newSingly;
                    }
                    else{
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (traverse.value !== val) {
                                newSingly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value !== val) {
                            newSingly.insertAtEnd(traverse.value);
                        }
                        return newSingly;
                    }
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

    updateWithValue(val,updatedVal){
        try{
            if((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)){
                if(!this.isEmpty()){
                    let node = this.search(val);
                    if(node != null){
                        node.value = updatedVal;
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
                    return false;
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

    updateWithIndex(index,updatedVal){
        try{
            if((updatedVal == 0 || updatedVal == false || updatedVal) && (index == 0 || index == false || index)){
                if(typeof(index)==='number'){
                    if (index < this.size && index >= 0){
                        let node = this.get(index);
                        node.value = updatedVal;
                        return true;
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
                throw new Error('Cannot find passed values or passed value is undefined/null');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    updateAllWithValue(val,updatedVal){
        try {
            if ((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)) {
                if (!this.isEmpty()) {
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (Object.compare(traverse.value,val)) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else{
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (traverse.value === val) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value === val) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    return false;
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (Object.compare(traverse.value,val)) {
                                return traverse;
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            return traverse;
                        }
                        return null;
                    }
                    else{
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
                        if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                            if (Object.compare(this.head.value,val)) {
                                return this.deleteFromStart(val);
                            }
                            else if (Object.compare(this.tail.value,val)) {
                                return this.deleteFromEnd(val);
                            }
                            else {
                                let backNode = this.head;
                                let currentNode = this.head.next;
                                let frontNode = this.head.next.next;
                                while (frontNode.next != null) {
                                    if (Object.compare(currentNode.value,val)) {
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
                                if (Object.compare(currentNode.value,val)) {
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        let i;
                        for (i = 0; i < (this.size - 1); i++) {
                            if (Object.compare(traverse.value,val)) {
                                toReturn.count++;
                                toReturn.positions.push(i);
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            toReturn.count++;
                            toReturn.positions.push(i);
                        }
                        return toReturn;
                    }
                    else{
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (!Object.compare(traverse.value,val)) {
                                newDoubly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (!Object.compare(traverse.value,val)) {
                            newDoubly.insertAtEnd(traverse.value);
                        }
                        return newDoubly;
                    }
                    else{
                        let traverse = this.head;
                        while (traverse.next != null) {
                            if (traverse.value !== val) {
                                newDoubly.insertAtEnd(traverse.value);
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value !== val) {
                            newDoubly.insertAtEnd(traverse.value);
                        }
                        return newDoubly;
                    }
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
                            return this.deleteFromStart();
                        }
                        else if (index === (this.size - 1)) {
                            return this.deleteFromEnd();
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

    updateWithValue(val, updatedVal) {
        try {
            if ((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)) {
                if (!this.isEmpty()) {
                    let node = this.search(val);
                    if (node != null) {
                        node.value = updatedVal;
                        return true;
                    }
                    else {
                        return false;
                    }
                }
                else {
                    return false;
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

    updateWithIndex(index, updatedVal) {
        try {
            if ((updatedVal == 0 || updatedVal == false || updatedVal) && (index == 0 || index == false || index)) {
                if (typeof (index) === 'number') {
                    if (index < this.size && index >= 0) {
                        let node = this.get(index);
                        node.value = updatedVal;
                        return true;
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
                throw new Error('Cannot find passed values or passed value is undefined/null');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateAllWithValue(val, updatedVal) {
        try {
            if ((val == 0 || val == false || val) && (updatedVal == 0 || updatedVal == false || updatedVal)) {
                if (!this.isEmpty()) {
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (Object.compare(traverse.value,val)) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (Object.compare(traverse.value,val)) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else{
                        let traverse = this.head;
                        let count = 0;
                        while (traverse.next != null) {
                            if (traverse.value === val) {
                                traverse.value = updatedVal;
                                count++;
                            }
                            traverse = traverse.next;
                        }
                        if (traverse.value === val) {
                            traverse.value = updatedVal;
                            count++;
                        }
                        if (count > 0) {
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    return false;
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        if (Object.compare(traverse.value,val)) {
                            return traverse;
                        }
                        while (traverse.next != null) {
                            traverse = traverse.next;
                            if (Object.compare(traverse.value,val)) {
                                return traverse;
                            }
                        }
                        return null;
                    }
                    else{
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
                    if ((typeof(val) === 'object') || (typeof(val) === 'function')){
                        let traverse = this.head;
                        if (Object.compare(traverse.value,val)) {
                            return traverse;
                        }
                        while (traverse.next != null) {
                            traverse = traverse.next;
                            if (Object.compare(traverse.value,val)) {
                                return traverse;
                            }
                        }
                        return null;
                    }
                    else{
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
        this.nodeIDMap[count] = toChange;
        count++;
        if(toChange.left != null){
            queue.enqueue(toChange.left);
        }
        if(toChange.right != null){
            queue.enqueue(toChange.right);
        }
    }
}

function deleteHelperBFS(myroot){
    let queue = new Queue();
    queue.enqueue(myroot);
    let myarr = [];
    while(queue.size > 0){
        let my = queue.dequeue();
        if(myarr.length === 0){
            myarr.push({value : my.value, id : my.id});
        }
        if(myarr.length > 0){
            if(my.value <= myarr[0].value){
                myarr.pop();
                myarr.push({value : my.value, id : my.id});
            }
        }
        if(my.left != null){
            queue.enqueue(my.left);
        }
        if(my.right != null){
            queue.enqueue(my.right);
        }
    }
    return myarr;
}

function treeTraverse(myroot,id){
    let queue = new Queue();
    queue.enqueue(myroot);
    while (queue.size > 0) {
        let my = queue.dequeue();
        if(my.id === id){
            return my;
        }
        if (my.left != null) {
            queue.enqueue(my.left);
        }
        if (my.right != null) {
            queue.enqueue(my.right);
        }
    }
}

function returnNodeUsingValue(myroot,val){
    let queue = new Queue();
    queue.enqueue(myroot);
    while (queue.size > 0) {
        let my = queue.dequeue();
        if (my.value === val) {
            return my;
        }
        if (my.left != null) {
            queue.enqueue(my.left);
        }
        if (my.right != null) {
            queue.enqueue(my.right);
        }
    }
    return null;
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                                throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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
                        let noOfChilds = this.childNodes(id);
                        let deletedNode = {
                            value: node.value,
                            id: node.id
                        };
                        if(node.id === myroot.id){
                            if(noOfChilds.count === 0){
                                this.root = null;
                                this.noOfNodes--;
                                this.nodeIDMap = {};
                                return deletedNode;
                            }
                            else if(noOfChilds.count === 1){
                                if(node.left != null){
                                    this.root = node.left;
                                    this.noOfNodes--;
                                    this.nodeIDMap = {};
                                    fixingID.call(this);
                                    return deletedNode;
                                }
                                if(node.right != null){
                                    this.root = node.right;
                                    this.noOfNodes--;
                                    this.nodeIDMap = {};
                                    fixingID.call(this);
                                    return deletedNode;
                                }
                            }
                            else if(noOfChilds.count === 2){
                                let minLeftObj =  deleteHelperBFS.call(this,node.right);
                                let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                let temp = this.root.value;
                                this.root.value = myNextNode.value;
                                myNextNode.value = temp;
                                this.delete(parseInt(myNextNode.id));
                                return deletedNode;
                            }
                        }
                        else{
                            if(noOfChilds.count === 0){
                                if(parentNode.left != null){
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = null;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                                if(parentNode.right != null){
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = null;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                            }
                            else if(noOfChilds.count === 1){
                                if(node.left != null){
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = node.left;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = node.left;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                                if(node.right != null){
                                    if (parentNode.left.id === node.id) {
                                        parentNode.left = node.right;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                    if (parentNode.right.id === node.id) {
                                        parentNode.right = node.right;
                                        this.noOfNodes--;
                                        this.nodeIDMap = {};
                                        fixingID.call(this);
                                        return deletedNode;
                                    }
                                }
                            }
                            else if(noOfChilds.count === 2){
                                if(parentNode.left != null){
                                    if (parentNode.left.id === node.id) {
                                        let minLeftObj = deleteHelperBFS.call(this, node.right);
                                        let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                        let temp = node.value;
                                        node.value = myNextNode.value;
                                        myNextNode.value = temp;
                                        this.delete(parseInt(myNextNode.id));
                                        return deletedNode;
                                    }
                                }
                                if(parentNode.right != null){
                                    if (parentNode.right.id === node.id) {
                                        let minLeftObj = deleteHelperBFS.call(this, node.right);
                                        let myNextNode = treeTraverse.call(this, this.root, minLeftObj[0].id);
                                        let temp = node.value;
                                        node.value = myNextNode.value;
                                        myNextNode.value = temp;
                                        this.delete(parseInt(myNextNode.id));
                                        return deletedNode;
                                    }
                                }
                            }
                        }
                    }
                    else{
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
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

    updateWithValue(val,updatedVal){
        try{
            if(arguments.length > 0){
                const myCurrentType = typesMap[this.type];
                if(typeof(val) === myCurrentType && typeof(updatedVal) === myCurrentType){
                    let toUpdate = returnNodeUsingValue.call(this,this.root,val);
                    if(toUpdate != null){
                        this.delete(toUpdate.id);
                        this.insert(updatedVal);
                        return true;
                    }
                    else{
                        return false;
                    }
                }
                else{
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

    updateWithID(id,updatedVal){
        try{
            if(arguments.length > 0){
                const myCurrentType = typesMap[this.type];
                if(typeof(id)==='number' && typeof(updatedVal)===myCurrentType){
                    if(id>=1 && id<=this.noOfNodes){
                        this.delete(id);
                        this.insert(updatedVal);
                        return true;
                    }
                    else{
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else{
                    throw new Error('Passed updated value does not match the type of Binary Search Tree or id is not number');
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

    getNodeValueWithId(id){
        try {
            if (arguments.length > 0) {
                if (typeof (id) === 'number') {
                    if (id >= 1 && id <= this.noOfNodes) {
                        let myroot = this.nodeIDMap[id];
                        let node = treeTraverse.call(this,myroot,id);
                        return {value : node.value , id : node.id};
                    }
                    else {
                        throw new Error(`Please give a valid ID or Binary Search Tree is Empty (Valid ID Ranges from ${1} and ${this.noOfNodes} both inclusive)`);
                    }
                }
                else {
                    throw new Error('ID passed is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}





// =================================== //







// ======= Max Binary Heaps =========== //


/*

=>  Types of Max Binary Heap
    1. number
    2. string

=>  Comparison Methods of Min Binary Heap
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length

*/

// function maxHeapify(myindex) {

//     let valueIndex = myindex;
//     let parentIndex = Math.floor((valueIndex - 1) / 2);
//     if (this.type === 1 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 2) {
//         while (parentIndex >= 0 && this.values[parentIndex].length < this.values[valueIndex].length) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
// }



const maxHeaptypesMap = {
    1: 'number',
    2: 'string'
}


const maxHeaptypesAndMethods = {
    1: [1],
    2: [1, 2]
}





class MaxBinaryHeap{

    constructor(type,method){
        this.values = [];
        this.type = type;
        this.method = method;
    }

    insert(val){
        try{
            const myCurrentType = maxHeaptypesMap[this.type];
            if(arguments.length > 0){
                if(typeof(val) === myCurrentType){
                    const supportedMethods = maxHeaptypesAndMethods[parseInt(this.type)];
                    if(supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))){
                        this.values.push(val);
                        let valueIndex = this.values.length - 1;
                        let parentIndex = Math.floor((valueIndex - 1) / 2);
                        if(this.type === 1 && this.method === 1){
                            while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if(this.type === 2 && this.method === 1){
                            while (parentIndex >= 0 && this.values[parentIndex] < this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if(this.type === 2 && this.method === 2){
                            while (parentIndex >= 0 && this.values[parentIndex].length < this.values[valueIndex].length) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                    }
                    else{
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods');
                    }
                }
                else{
                    throw new Error('Passed value does not match the type of Max Binary Heap');
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

    extractMax(){
        try{
            if(this.values.length !== 0){
                if(this.values.length === 1){
                    return this.values.pop();
                }
                else if(this.values.length === 2){
                    return this.values.shift();
                }
                else if(this.values.length === 3){
                    let max = this.values.shift();
                    if(this.type === 2 && this.method === 2){
                        if (this.values[0].length < this.values[1].length){
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    else{
                        if (this.values[0] < this.values[1]){
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    return max;
                }
                else{
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const max = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    if(this.type === 1 && this.method === 1){
                        while (this.values[index] < left || this.values[index] < right) {
                            if (right < left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if((2*index + 1) < (this.values.length)){
                                    left = this.values[2 * index + 1];
                                }
                                else{
                                    left = undefined;
                                }
                                if((2*index + 2) < (this.values.length)){
                                    right = this.values[2 * index + 2];
                                }
                                else{
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
                    else if(this.type === 2 && this.method === 1){
                        while (this.values[index] < left || this.values[index] < right) {
                            if (right < left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
                    else if(this.type === 2 && this.method === 2){
                        while (this.values[index].length < left.length || this.values[index].length < right.length) {
                            if (right.length < left.length) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: -Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: -Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: -Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: -Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return max;
                    }
                }
            }
            else{
                return null;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    toArray(){
        try{
            return this.values;
        }
        catch(e){
            console.log(e);
        }
    }

    isEmpty(){
        try{
            if(this.values.length === 0){
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

    size(){
        try{
            return this.values.length;
        }
        catch(e){
            console.log(e);
        }
    }
}









// =========================================== //







//========== Min Binary Heap ==================//






/*

=>  Types of Min Binary Heap
    1. number
    2. string

=>  Comparison Methods of Min Binary Heap
    1. number
        1. Normal comparison (<,>,=)
    2. string
        1. Normal ASCII Comparing
        2. Based on Length

*/



// function minHeapify(myindex){
//     let valueIndex = myindex;
//     let parentIndex = Math.floor((valueIndex - 1) / 2);
//     if (this.type === 1 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 1) {
//         while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
//     else if (this.type === 2 && this.method === 2) {
//         while (parentIndex >= 0 && this.values[parentIndex].length > this.values[valueIndex].length) {
//             let temp = this.values[parentIndex];
//             this.values[parentIndex] = this.values[valueIndex];
//             this.values[valueIndex] = temp;
//             valueIndex = parentIndex;
//             parentIndex = Math.floor((valueIndex - 1) / 2);
//         }
//     }
// }




const minHeaptypesMap = {
    1: 'number',
    2: 'string'
}


const minHeaptypesAndMethods = {
    1: [1],
    2: [1, 2]
}





class MinBinaryHeap {

    constructor(type, method) {
        this.values = [];
        this.type = type;
        this.method = method;
    }

    insert(val) {
        try {
            const myCurrentType = minHeaptypesMap[this.type];
            if (arguments.length > 0) {
                if (typeof (val) === myCurrentType) {
                    const supportedMethods = minHeaptypesAndMethods[parseInt(this.type)];
                    if (supportedMethods.find(ele => parseInt(ele) === parseInt(this.method))) {
                        this.values.push(val);
                        let valueIndex = this.values.length - 1;
                        let parentIndex = Math.floor((valueIndex - 1) / 2);
                        if (this.type === 1 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 1) {
                            while (parentIndex >= 0 && this.values[parentIndex] > this.values[valueIndex]) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                        else if (this.type === 2 && this.method === 2) {
                            while (parentIndex >= 0 && this.values[parentIndex].length > this.values[valueIndex].length) {
                                let temp = this.values[parentIndex];
                                this.values[parentIndex] = this.values[valueIndex];
                                this.values[valueIndex] = temp;
                                valueIndex = parentIndex;
                                parentIndex = Math.floor((valueIndex - 1) / 2);
                            }
                            return val;
                        }
                    }
                    else {
                        throw new Error('Method specified is not supported for this selected type please refer documentation for supported methods');
                    }
                }
                else {
                    throw new Error('Passed value does not match the type of Max Binary Heap');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    extractMin() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    return this.values.pop();
                }
                else if (this.values.length === 2) {
                    return this.values.shift();
                }
                else if (this.values.length === 3) {
                    let min = this.values.shift();
                    if (this.type === 2 && this.method === 2) {
                        if (this.values[0].length > this.values[1].length) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    else {
                        if (this.values[0] > this.values[1]) {
                            let temp = this.values[1];
                            this.values[1] = this.values[0];
                            this.values[0] = temp;
                        }
                    }
                    return min;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const min = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    if (this.type === 1 && this.method === 1) {
                        while (this.values[index] > left || this.values[index] > right) {
                            if (right > left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
                    else if (this.type === 2 && this.method === 1) {
                        while (this.values[index] > left || this.values[index] > right) {
                            if (right > left) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) < (this.values.length)) {
                                    left = this.values[2 * index + 1];
                                }
                                else {
                                    left = undefined;
                                }
                                if ((2 * index + 2) < (this.values.length)) {
                                    right = this.values[2 * index + 2];
                                }
                                else {
                                    right = undefined;
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
                    else if (this.type === 2 && this.method === 2) {
                        while (this.values[index].length > left.length || this.values[index].length > right.length) {
                            if (right.length > left.length) {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 1];
                                this.values[2 * index + 1] = temp2;
                                index = 2 * index + 1;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                            else {
                                let temp2 = this.values[index];
                                this.values[index] = this.values[2 * index + 2];
                                this.values[2 * index + 2] = temp2;
                                index = 2 * index + 2;
                                if ((2 * index + 1) > (this.values.length - 1)) {
                                    left = { length: Infinity };
                                }
                                else {
                                    left = this.values[2 * index + 1];
                                }
                                if (2 * index + 2 > (this.values.length - 1)) {
                                    right = { length: Infinity };
                                }
                                else {
                                    right = this.values[2 * index + 2];
                                }
                            }
                        }
                        this.values = this.values.filter(ele => ele !== undefined);
                        return min;
                    }
                }
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    toArray() {
        try {
            return this.values;
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.values.length === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }
}





// ===================================== //





// ========= Priority Queue ============ //





/*

Our Priority queue in general can take any value apart from undefined and null.

But our priority will always be in number format

In section will contain both MinHeap Priority queue and MaxHeap Priority Queue

*/


// function minHeapifyPriorityQueue(myindex) {
//     let newNodeIndex = myindex;
//     let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
//     while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[newNodeIndex].priority) {
//         let temp = this.values[parentIndex];
//         this.values[parentIndex] = this.values[newNodeIndex];
//         this.values[newNodeIndex] = temp;
//         newNodeIndex = parentIndex;
//         parentIndex = Math.floor((newNodeIndex - 1) / 2);
//     }
// }





class PriorityQueueNode{

    constructor(data,prior){
        this.value = data;
        this.priority = prior;
    }

}


class MinPriorityQueue{

    constructor() {
        this.values = [];
    }

    enqueue(val,priority){
        try{
            if(arguments.length > 0){
                if(val === 0 || val === false || val){
                    if(typeof(priority) === 'number' && isFinite(priority)){
                        const newNode = new PriorityQueueNode(val, priority);
                        this.values.push(newNode);
                        let newNodeIndex = (this.values.length) - 1;
                        let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
                        while (parentIndex >= 0 && this.values[parentIndex].priority > this.values[newNodeIndex].priority) {
                            let temp = this.values[parentIndex];
                            this.values[parentIndex] = this.values[newNodeIndex];
                            this.values[newNodeIndex] = temp;
                            newNodeIndex = parentIndex;
                            parentIndex = Math.floor((newNodeIndex - 1) / 2);
                        }
                        return val;
                    }
                    else{
                        throw new Error('Priority is not of type number apart from Infinity/-Infinity or not passed');
                    }
                }
                else{
                    throw new Error('Passed value is undefined/null');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    dequeue(){
        try{
            if(this.values.length !== 0){
                if (this.values.length === 1) {
                    let myValue = this.values.pop();
                    return myValue.value;
                }
                else if (this.values.length === 2) {
                    let myValue;
                    if (this.values[0].priority < this.values[1].priority) {
                        myValue = this.values.shift();
                    }
                    else {
                        myValue = this.values.pop();
                    }
                    return myValue.value;
                }
                else if (this.values.length === 3) {
                    let myValue = this.values.shift();
                    if (this.values[0].priority > this.values[1].priority) {
                        let temp = this.values[0];
                        this.values[0] = this.values[1];
                        this.values[1] = temp;
                    }
                    return myValue.value;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const myValue = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    while (this.values[index].priority > left.priority || this.values[index].priority > right.priority) {
                        if (right.priority > left.priority) {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 1];
                            this.values[2 * index + 1] = temp2;
                            index = 2 * index + 1;
                            if ((2*index + 1) > (this.values.length - 1)) {
                                left = {priority : Infinity};
                            }
                            else{
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = {priority : Infinity};
                            }
                            else{
                                right = this.values[2 * index + 2];
                            }
                        }
                        else {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 2];
                            this.values[2 * index + 2] = temp2;
                            index = 2 * index + 2;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = {priority : Infinity};
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = {priority : Infinity};
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                    }
                    this.values = this.values.filter(ele => ele.value!==undefined);
                    return myValue.value;
                }
            }
            else{
                return null;
            }
        }
        catch(e){
            console.log(e);
        }
    }

    size(){
        try{
            return this.values.length;
        }
        catch(e){
            console.log(e);
        }
    }

    toArray(){
        try{
            let toReturn = [];
            for(let i=0;i<this.values.length;i++){
                toReturn.push({value : this.values[i].value, priority : this.values[i].priority});
            }
            return toReturn;
        }
        catch(e){
            console.log(e);
        }
    }

    getNodeInfo(index){
        try{
            if(arguments.length > 0){
                if(typeof(index) === 'number'){
                    if(index >= 0 && index < this.values.length){
                        if(this.values.length !== 0){
                            for(let i=0;i<this.values.length;i++){
                                if(i===index){
                                    return {value : this.values[index].value, priority : this.values[index].priority };
                                }
                            }
                        }
                        else{
                            return null;
                        }
                    }
                    else{
                        throw new Error('Index out of range');
                    }
                }
                else{
                    throw new Error('Index is not of type number');
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
            if(this.values.length === 0){
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

    updateValue(index,updatedValue){
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if(updatedValue === 0 || updatedValue === false || updatedValue){
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    this.values[i].value = updatedValue;
                                    return true;
                                }
                            }
                        }
                        else{
                            throw new Error('Updated value not passed or passed undefined/null');
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}







class MaxPriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        try {
            if (arguments.length > 0) {
                if (val === 0 || val === false || val) {
                    if (typeof (priority) === 'number' && isFinite(priority)) {
                        const newNode = new PriorityQueueNode(val, priority);
                        this.values.push(newNode);
                        let newNodeIndex = (this.values.length) - 1;
                        let parentIndex = Math.floor(((newNodeIndex) - 1) / 2);
                        while (parentIndex >= 0 && this.values[parentIndex].priority < this.values[newNodeIndex].priority) {
                            let temp = this.values[parentIndex];
                            this.values[parentIndex] = this.values[newNodeIndex];
                            this.values[newNodeIndex] = temp;
                            newNodeIndex = parentIndex;
                            parentIndex = Math.floor((newNodeIndex - 1) / 2);
                        }
                        return val;
                    }
                    else {
                        throw new Error('Priority is not of type number or not passed');
                    }
                }
                else {
                    throw new Error('Passed value is undefined/null');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    dequeue() {
        try {
            if (this.values.length !== 0) {
                if (this.values.length === 1) {
                    let myValue = this.values.pop();
                    return myValue.value;
                }
                else if (this.values.length === 2) {
                    let myValue;
                    if (this.values[0].priority > this.values[1].priority) {
                        myValue = this.values.shift();
                    }
                    else {
                        myValue = this.values.pop();
                    }
                    return myValue.value;
                }
                else if (this.values.length === 3) {
                    let myValue = this.values.shift();
                    if (this.values[0].priority < this.values[1].priority) {
                        let temp = this.values[0];
                        this.values[0] = this.values[1];
                        this.values[1] = temp;
                    }
                    return myValue.value;
                }
                else {
                    let temp = this.values[0];
                    this.values[0] = this.values[this.values.length - 1];
                    this.values[this.values.length - 1] = temp;
                    const myValue = this.values.pop();
                    let index = 0;
                    let left = this.values[2 * index + 1];
                    let right = this.values[2 * index + 2];
                    while (this.values[index].priority < left.priority || this.values[index].priority < right.priority) {
                        if (right.priority < left.priority) {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 1];
                            this.values[2 * index + 1] = temp2;
                            index = 2 * index + 1;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: -Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: -Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                        else {
                            let temp2 = this.values[index];
                            this.values[index] = this.values[2 * index + 2];
                            this.values[2 * index + 2] = temp2;
                            index = 2 * index + 2;
                            if ((2 * index + 1) > (this.values.length - 1)) {
                                left = { priority: -Infinity };
                            }
                            else {
                                left = this.values[2 * index + 1];
                            }
                            if (2 * index + 2 > (this.values.length - 1)) {
                                right = { priority: -Infinity };
                            }
                            else {
                                right = this.values[2 * index + 2];
                            }
                        }
                    }
                    this.values = this.values.filter(ele => ele.value !== undefined);
                    return myValue.value;
                }
            }
            else {
                return null;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    size() {
        try {
            return this.values.length;
        }
        catch (e) {
            console.log(e);
        }
    }

    toArray() {
        try {
            let toReturn = [];
            for (let i = 0; i < this.values.length; i++) {
                toReturn.push({ value: this.values[i].value, priority: this.values[i].priority });
            }
            return toReturn;
        }
        catch (e) {
            console.log(e);
        }
    }

    getNodeInfo(index) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (this.values.length !== 0) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    return { value: this.values[index].value, priority: this.values[index].priority };
                                }
                            }
                        }
                        else {
                            return null;
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    isEmpty() {
        try {
            if (this.values.length === 0) {
                return true;
            }
            else {
                return false;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    updateValue(index, updatedValue) {
        try {
            if (arguments.length > 0) {
                if (typeof (index) === 'number') {
                    if (index >= 0 && index < this.values.length) {
                        if (updatedValue === 0 || updatedValue === false || updatedValue) {
                            for (let i = 0; i < this.values.length; i++) {
                                if (i === index) {
                                    this.values[i].value = updatedValue;
                                    return true;
                                }
                            }
                        }
                        else {
                            throw new Error('Updated value not passed or passed undefined/null');
                        }
                    }
                    else {
                        throw new Error('Index out of range');
                    }
                }
                else {
                    throw new Error('Index is not of type number');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}





// ======================================== //



// =============== Graphs ================== //



// Below is type of Graph Node ID Accepted

const typeID = {
    1 : 'number',
    2 : 'string'
};



function GraphBFSHelper(myans,myqueue,visited){
    while(myqueue.size > 0){
        let myvertex = myqueue.dequeue();
        if(!visited[myvertex]){
            myans.push({value : this.allVertex[myvertex].value, id : this.allVertex[myvertex].id});
            visited[myvertex] = true;
            for(let i of this.adjacencyList[myvertex]){
                myqueue.enqueue(i.id);
            }
        }
    }
}

function GraphDFSHelper(myans,mystack,visited){
    while(mystack.size > 0){
        let myvertex = mystack.pop();
        if(!visited[myvertex]){
            myans.push({value : this.allVertex[myvertex].value, id : this.allVertex[myvertex].id});
            visited[myvertex] = true;
            for(let i of this.adjacencyList[myvertex]){
                mystack.push(i.id);
            }
        }
    }
}


class GraphNode{

    constructor(data,id) {
        this.value = data;
        this.id = id;
    }

}



class UWUDGraph{

    constructor(type) {
        this.adjacencyList = {};
        this.type=type;
        this.allVertex = {};
    }

    addVertex(val,ID){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(currentType === typeof(ID)){
                    if(currentType === 'number'){
                        if(isFinite(ID)){
                            if(val === 0 || val === false || val===null || val){
                                if(this.allVertex.hasOwnProperty(ID)){
                                    return false;
                                }
                                else{
                                    let newNode = new GraphNode(val,ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else{
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else{
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if(val === 0 || val === false || val ===null || val){
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else{
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else{
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else{
                throw new Error('Arguments not passed')
            }
        }
        catch(e){
            console.log(e);
        }
    }

    addEdge(ID1,ID2){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(typeof(ID1)===currentType && typeof(ID2)===currentType){
                    if(currentType === 'number'){
                        if(isFinite(ID1) && isFinite(ID2)){
                            if(this.adjacencyList.hasOwnProperty(ID1)){
                                let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                                if(found){
                                    return true;
                                }
                            }
                            if(this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)){
                                this.addVertex(null,ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if(this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)){
                                this.addVertex(null,ID1);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if(!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)){
                                this.addVertex(null,ID1);
                                this.addVertex(null,ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                            else if(this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)){
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                this.adjacencyList[ID2].push(this.allVertex[ID1]);
                                return true;
                            }
                        }
                        else{
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                            if (found) {
                                return true;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID2) && !this.adjacencyList.hasOwnProperty(ID1)) {
                            this.addVertex(null, ID1);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            this.adjacencyList[ID2].push(this.allVertex[ID1]);
                            return true;
                        }
                    }
                }
                else{
                    throw new Error('Either of the ID passed do not match the type of graph');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    updateValue(ID,updatedValue){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(typeof(ID) === currentType){
                    if(currentType === 'number'){
                        if(isFinite(ID)){
                            if(updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue){
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else{
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else{
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if(updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue){
                            if(this.allVertex.hasOwnProperty(ID)){
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                        else{
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else{
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    getValue(ID){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(ID1,ID2){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(typeof(ID1)===currentType && typeof(ID2)===currentType){
                    if(currentType === 'number'){
                        if(isFinite(ID1) && isFinite(ID2)){
                            if(this.adjacencyList.hasOwnProperty(ID1)){
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id===ID2);
                                if(found === -1){
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                                this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.id !== ID1);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else{
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                            this.adjacencyList[ID2] = this.adjacencyList[ID2].filter(ele => ele.id !== ID1);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else{
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    removeVertex(ID){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(currentType === typeof(ID)){
                    if(currentType === 'number'){
                        if(isFinite(ID)){
                            if(this.adjacencyList.hasOwnProperty(ID)){
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for(let i in this.adjacencyList){
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                                }
                                return true;
                            }
                            else{
                                return false;
                            }
                        }
                        else{
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else{
                    throw new Error('ID passed does not match the type of graph');
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

    BFS(ID){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(currentType === typeof(ID)){
                    if(currentType === 'number'){
                        if(isFinite(ID)){
                            let myans = [];
                            if(this.allVertex.hasOwnProperty(ID)){
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                GraphBFSHelper.call(this,myans,myqueue,visited);
                                return myans;
                            }
                            else{
                                return myans;
                            }
                        }
                        else{
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            GraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else{
                    throw new Error('ID passed does not match the type of graph');
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

    DFS(ID){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                GraphDFSHelper.call(this,myans,mystack,visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            GraphDFSHelper.call(this,myans,mystack,visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    neighbours(ID){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for(let i of this.adjacencyList[ID]){
                                    myans.push({value : i.value, id : i.id});
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for(let i of this.adjacencyList[ID]){
                                myans.push({value : i.value, id : i.id});
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    shortestPath(ID1,ID2){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(currentType === typeof(ID1) && currentType === typeof(ID2)){
                    if(currentType === 'number'){
                        if(isFinite(ID1) && isFinite(ID2)){
                            let path = {
                                steps: 0,
                                nodes: []
                            };
                            if(this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)){
                                let levelMap = {};
                                let visited = {};
                                let helperVisited = {};
                                if (ID1 === ID2) {
                                    path.nodes.push(ID1);
                                    return path;
                                }
                                else {
                                    let found = 0;
                                    let myqueue = new Queue();
                                    myqueue.enqueue(ID1);
                                    levelMap[ID1] = { parent: null, level: 0 };
                                    while (myqueue.size > 0) {
                                        let current = myqueue.dequeue();
                                        if (!visited[current]) {
                                            visited[current] = true;
                                            helperVisited[current] = true;
                                            for (let i of this.adjacencyList[current]) {
                                                if(!helperVisited[i.id]){
                                                    myqueue.enqueue(i.id);
                                                    levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                    helperVisited[i.id] = true;
                                                }
                                                if (i.id === ID2) {
                                                    found = 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (found === 1) {
                                        path.steps = levelMap[ID2].level;
                                        let my = levelMap[ID2];
                                        path.nodes.push(ID2);
                                        while (my.parent != null) {
                                            path.nodes.push(my.parent);
                                            my = levelMap[my.parent];
                                        }
                                        path.nodes.reverse();
                                        return path;
                                    }
                                    else {
                                        return path;
                                    }
                                }
                            }
                            else{
                                return path;
                            }
                        }
                        else{
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        let path = {
                            steps: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let levelMap = {};
                            let visited = {};
                            let helperVisited = {};
                            if (ID1 === ID2) {
                                path.nodes.push(ID1);
                                return path;
                            }
                            else {
                                let found = 0;
                                let myqueue = new Queue();
                                myqueue.enqueue(ID1);
                                levelMap[ID1] = { parent: null, level: 0 };
                                while (myqueue.size > 0) {
                                    let current = myqueue.dequeue();
                                    if (!visited[current]) {
                                        visited[current] = true;
                                        helperVisited[current] = true;
                                        for (let i of this.adjacencyList[current]) {
                                            if (!helperVisited[i.id]) {
                                                myqueue.enqueue(i.id);
                                                levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                helperVisited[i.id] = true;
                                            }
                                            if (i.id === ID2) {
                                                found = 1;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (found === 1) {
                                    path.steps = levelMap[ID2].level;
                                    let my = levelMap[ID2];
                                    path.nodes.push(ID2);
                                    while (my.parent != null) {
                                        path.nodes.push(my.parent);
                                        my = levelMap[my.parent];
                                    }
                                    path.nodes.reverse();
                                    return path;
                                }
                                else {
                                    return path;
                                }
                            }
                        }
                        else {
                            return path;
                        }
                    }
                }
                else{
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    noOfNodes(){
        try{
            return Object.keys(this.allVertex).length;
        }
        catch(e){
            console.log(e);
        }
    }

    hasEdge(ID1,ID2){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else{
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else{
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }
}










class UWDGraph{
    
    constructor(type) {
        this.adjacencyList = {};
        this.type = type;
        this.allVertex = {};
    }

    noOfNodes(){
        try{
            return Object.keys(this.allVertex).length;
        }
        catch(e){
            console.log(e);
        }
    }

    addVertex(val, ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (val === 0 || val === false || val === null || val) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    return false;
                                }
                                else {
                                    let newNode = new GraphNode(val, ID);
                                    this.allVertex[ID] = newNode;
                                    this.adjacencyList[ID] = [];
                                    return true;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (val === 0 || val === false || val === null || val) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                return false;
                            }
                            else {
                                let newNode = new GraphNode(val, ID);
                                this.allVertex[ID] = newNode;
                                this.adjacencyList[ID] = [];
                                return true;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of Graph');
                }
            }
            else {
                throw new Error('Arguments not passed')
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    addEdge(ID1,ID2){
        try{
            if(arguments.length > 0){
                const currentType = typeID[this.type];
                if(typeof(ID1)===currentType && typeof(ID2)===currentType){
                    if(currentType === 'number'){
                        if(isFinite(ID1) && isFinite(ID2)){
                            if(this.adjacencyList.hasOwnProperty(ID1)){
                                let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                                if(found){
                                    return true;
                                }
                            }
                            if(this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)){
                                this.addVertex(null,ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                            else if(!this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)){
                                this.addVertex(null,ID1);
                                this.adjacencyList[ID1].push(this.addVertex[ID2]);
                                return true;
                            }
                            else if(!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)){
                                this.addVertex(null,ID1);
                                this.addVertex(null,ID2);
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                            else if(this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)){
                                this.adjacencyList[ID1].push(this.allVertex[ID2]);
                                return true;
                            }
                        }
                        else{
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if(currentType === 'string'){
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].find(ele => ele.id === ID2);
                            if (found) {
                                return true;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.adjacencyList[ID1].push(this.addVertex[ID2]);
                            return true;
                        }
                        else if (!this.adjacencyList.hasOwnProperty(ID1) && !this.adjacencyList.hasOwnProperty(ID2)) {
                            this.addVertex(null, ID1);
                            this.addVertex(null, ID2);
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                        else if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1].push(this.allVertex[ID2]);
                            return true;
                        }
                    }
                }
                else{
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else{
                throw new Error('Arguments not passed');
            }
        }
        catch(e){
            console.log(e);
        }
    }

    updateValue(ID,updatedValue){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                                if (this.allVertex.hasOwnProperty(ID)) {
                                    this.allVertex[ID].value = updatedValue;
                                    return true;
                                }
                                else {
                                    return false;
                                }
                            }
                            else {
                                throw new Error('Value passed is undefined');
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (updatedValue === 0 || updatedValue === false || updatedValue === null || updatedValue) {
                            if (this.allVertex.hasOwnProperty(ID)) {
                                this.allVertex[ID].value = updatedValue;
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Value passed is undefined');
                        }
                    }
                }
                else {
                    throw new Error('ID passed do not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    getValue(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                return this.allVertex[ID].value;
                            }
                            else {
                                return undefined;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            return this.allVertex[ID].value;
                        }
                        else {
                            return undefined;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    neighbours(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                for (let i of this.adjacencyList[ID]) {
                                    myans.push({ value: i.value, id: i.id });
                                }
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            for (let i of this.adjacencyList[ID]) {
                                myans.push({ value: i.value, id: i.id });
                            }
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeEdge(ID1,ID2){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                            }
                            if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                                this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                        }
                        if (this.adjacencyList.hasOwnProperty(ID1) && this.adjacencyList.hasOwnProperty(ID2)) {
                            this.adjacencyList[ID1] = this.adjacencyList[ID1].filter(ele => ele.id !== ID2);
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    hasEdge(ID1,ID2){
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (typeof (ID1) === currentType && typeof (ID2) === currentType) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            if (this.adjacencyList.hasOwnProperty(ID1)) {
                                let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                                if (found === -1) {
                                    return false;
                                }
                                else{
                                    return true;
                                }
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed are not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID1)) {
                            let found = this.adjacencyList[ID1].findIndex(ele => ele.id === ID2);
                            if (found === -1) {
                                return false;
                            }
                            else{
                                return true;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID does not match the type of graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    removeVertex(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            if (this.adjacencyList.hasOwnProperty(ID)) {
                                delete this.allVertex[ID];
                                delete this.adjacencyList[ID];
                                for (let i in this.adjacencyList) {
                                    this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                                }
                                return true;
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            throw new Error('ID passed is not Finite');
                        }
                    }
                    else if (currentType === 'string') {
                        if (this.adjacencyList.hasOwnProperty(ID)) {
                            delete this.allVertex[ID];
                            delete this.adjacencyList[ID];
                            for (let i in this.adjacencyList) {
                                this.adjacencyList[i] = this.adjacencyList[i].filter(ele => ele.id !== ID);
                            }
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    BFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let myqueue = new Queue();
                                let visited = {};
                                myqueue.enqueue(ID);
                                GraphBFSHelper.call(this, myans, myqueue, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let myqueue = new Queue();
                            let visited = {};
                            myqueue.enqueue(ID);
                            GraphBFSHelper.call(this, myans, myqueue, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    DFS(ID) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID)) {
                    if (currentType === 'number') {
                        if (isFinite(ID)) {
                            let myans = [];
                            if (this.allVertex.hasOwnProperty(ID)) {
                                let visited = {};
                                let mystack = new Stack();
                                mystack.push(ID);
                                GraphDFSHelper.call(this, myans, mystack, visited);
                                return myans;
                            }
                            else {
                                return myans;
                            }
                        }
                        else {
                            throw new Error('ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let myans = [];
                        if (this.allVertex.hasOwnProperty(ID)) {
                            let visited = {};
                            let mystack = new Stack();
                            mystack.push(ID);
                            GraphDFSHelper.call(this, myans, mystack, visited);
                            return myans;
                        }
                        else {
                            return myans;
                        }
                    }
                }
                else {
                    throw new Error('ID passed does not match the type of graph');
                }
            }
            else {
                throw new Error('Argument not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    shortestPath(ID1, ID2) {
        try {
            if (arguments.length > 0) {
                const currentType = typeID[this.type];
                if (currentType === typeof (ID1) && currentType === typeof (ID2)) {
                    if (currentType === 'number') {
                        if (isFinite(ID1) && isFinite(ID2)) {
                            let path = {
                                steps: 0,
                                nodes: []
                            };
                            if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                                let levelMap = {};
                                let visited = {};
                                let helperVisited = {};
                                if (ID1 === ID2) {
                                    path.nodes.push(ID1);
                                    return path;
                                }
                                else {
                                    let found = 0;
                                    let myqueue = new Queue();
                                    myqueue.enqueue(ID1);
                                    levelMap[ID1] = { parent: null, level: 0 };
                                    while (myqueue.size > 0) {
                                        let current = myqueue.dequeue();
                                        if (!visited[current]) {
                                            visited[current] = true;
                                            helperVisited[current] = true;
                                            for (let i of this.adjacencyList[current]) {
                                                if (!helperVisited[i.id]) {
                                                    myqueue.enqueue(i.id);
                                                    levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                    helperVisited[i.id] = true;
                                                }
                                                if (i.id === ID2) {
                                                    found = 1;
                                                    break;
                                                }
                                            }
                                        }
                                    }
                                    if (found === 1) {
                                        path.steps = levelMap[ID2].level;
                                        let my = levelMap[ID2];
                                        path.nodes.push(ID2);
                                        while (my.parent != null) {
                                            path.nodes.push(my.parent);
                                            my = levelMap[my.parent];
                                        }
                                        path.nodes.reverse();
                                        return path;
                                    }
                                    else {
                                        return path;
                                    }
                                }
                            }
                            else {
                                return path;
                            }
                        }
                        else {
                            throw new Error('Either of the ID passed is not finite');
                        }
                    }
                    else if (currentType === 'string') {
                        let path = {
                            steps: 0,
                            nodes: []
                        };
                        if (this.allVertex.hasOwnProperty(ID1) && this.allVertex.hasOwnProperty(ID2)) {
                            let levelMap = {};
                            let visited = {};
                            let helperVisited = {};
                            if (ID1 === ID2) {
                                path.nodes.push(ID1);
                                return path;
                            }
                            else {
                                let found = 0;
                                let myqueue = new Queue();
                                myqueue.enqueue(ID1);
                                levelMap[ID1] = { parent: null, level: 0 };
                                while (myqueue.size > 0) {
                                    let current = myqueue.dequeue();
                                    if (!visited[current]) {
                                        visited[current] = true;
                                        helperVisited[current] = true;
                                        for (let i of this.adjacencyList[current]) {
                                            if (!helperVisited[i.id]) {
                                                myqueue.enqueue(i.id);
                                                levelMap[i.id] = { parent: current, level: levelMap[current].level + 1 };
                                                helperVisited[i.id] = true;
                                            }
                                            if (i.id === ID2) {
                                                found = 1;
                                                break;
                                            }
                                        }
                                    }
                                }
                                if (found === 1) {
                                    path.steps = levelMap[ID2].level;
                                    let my = levelMap[ID2];
                                    path.nodes.push(ID2);
                                    while (my.parent != null) {
                                        path.nodes.push(my.parent);
                                        my = levelMap[my.parent];
                                    }
                                    path.nodes.reverse();
                                    return path;
                                }
                                else {
                                    return path;
                                }
                            }
                        }
                        else {
                            return path;
                        }
                    }
                }
                else {
                    throw new Error('Either of the ID passed do not match the type of the graph');
                }
            }
            else {
                throw new Error('Arguments not passed');
            }
        }
        catch (e) {
            console.log(e);
        }
    }

}








let my = new UWDGraph(1);
my.noOfNodes();
my.addVertex('my',1);
my.addVertex(200,2);
my.addEdge(1,2);
my.addEdge(1,3);
my.addEdge(3,4);
my.addEdge(1,5);


// console.log(my.removeEdge(1,3));
// console.log(my.removeEdge(1,2));
// console.log(my.hasEdge(2,3));
// console.log(my.removeVertex(1));
// console.log(my.DFS(8));

console.log(my.shortestPath(1,4));


console.log(my);