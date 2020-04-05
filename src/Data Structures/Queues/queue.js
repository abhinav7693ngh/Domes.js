

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


// ======== Queues ======== //



class QueueNode {

    constructor(data) {
        this.value = data;
        this.next = null;
    }

}


class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        try {
            if (this.head == null) {
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

    enqueue(val) {
        try {
            if (val == 0 || val == false || val) {
                let newNode = new QueueNode(val);
                if (this.head == null) {
                    this.head = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
                }
                else {
                    this.tail.next = newNode;
                    this.tail = newNode;
                    this.size++;
                    return val;
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

    dequeue() {
        try {
            if (this.head == null) {
                return null;
            }
            else {
                if (this.head == this.tail) {
                    let toDequeue = this.head.value;
                    this.head = null;
                    this.tail = null;
                    this.size--;
                    return toDequeue;
                }
                else {
                    let toDequeue = this.head.value;
                    let newHead = this.head.next;
                    this.head = newHead;
                    this.size--;
                    return toDequeue;
                }
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    toArray() {
        try {
            let toReturn = [];
            if (!this.isEmpty()) {
                let traverse = this.head;
                toReturn.push(traverse.value);
                while (traverse.next != null) {
                    traverse = traverse.next;
                    toReturn.push(traverse.value);
                }
                return toReturn;
            }
            else {
                return toReturn;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    peek() {
        try {
            if (this.head == null) {
                return null;
            }
            else {
                return this.tail.value;
            }
        }
        catch (e) {
            console.log(e);
        }
    }

    search(val) {
        try {
            if (val == 0 || val == false || val) {
                if (!this.isEmpty()) {
                    if ((typeof (val) === 'object') || (typeof (val) === 'function')) {
                        let traverse = this.head;
                        if (Object.compare(traverse.value, val)) {
                            return traverse;
                        }
                        while (traverse.next != null) {
                            traverse = traverse.next;
                            if (Object.compare(traverse.value, val)) {
                                return traverse;
                            }
                        }
                        return null;
                    }
                    else {
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

module.exports.Queue = Queue;