# Domes.js
---

## Introduction
---

If you want to give your boost to your javascript code or afraid of implementing complex data structures then this is the perfect library for you to use. Domes has implementations of many useful extended data sttuctures, which if smartly which if smartly used can give javascript code an edge in terms of performance and time complexity. We have implemented the methods of these data structures in order to reduce the time complexity to the best possible. So rest assured and use efficiently to get best results out of it.

Currently we have implementations of below data structures which you can use.
* Singly Linked List
* Doubly Linked List
* Stacks
* Queues
* Binary Search Trees
* Binary Heaps
    * Max Binary Heap
    * Min Binary Heap
* Priority Queue
    * Max Priority Queue
    * Min Priority Queue
* Graphs
    * Unweighted Undirected Graph (UWUD)
    * Unweighted Directed Graph (UWD)
    * Weighted Undirected Graph (WUD)
    * Weighted Directed Graph (WD)


These data structures are implemented as classes, so you just have to import the desired class and start using by normally making an object of that class.


*IF Built in methods don't suffice the needs you are free to dive in and create your own extended methods for these classes.*

*Suggestions are always welcomed for improvements.*

### Below is the list of all methods with their parameter/s and returning value/s available to you by the classes.

---

## Installation

You can install this normally using npm command
```
npm install domes.js
```
---
## How to use
You can use this in node.js by simply importing it using require().
```javascript
const domes = require('domes.js');
```
---

## Singly Linked List

You can simply create a Singly Linked List object.

```javascript
    const my_Singly_Linked_List = new domes.SinglyLinkedList();
```

> *Keep in mind - All values are accepted apart from Undefined and null.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

> SLL - Singly Linked List.

> Index is always starting from 0.

Now you can run the following methods on this object.

* **insertAtStart()** - Adds an element at the start of SLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **insertAtEnd()** - Adds an element at the end of SLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **lookStart()** - Returns value of start node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Value present at the start if SLL is not empty.

* **lookEnd()** - Returns value of end node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Value present at the end if SLL is not empty.

* **deleteFromStart()** -  Deletes a node from start.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Deleted node value i.e. the start node if SLL is not empty.

* **deleteFromEnd()** - Deletes a node from end.
    * **Parameter/s** - None.
    * **Returns**
        * null - if SLL is empty.
        * Deleted node value i.e. the end node if SLL is not empty.

* **isEmpty()** - Checks if the SLL is empty or not.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - Means SLL is not empty.
        * Boolean false - Means SLL is empty.

* **toArray()** - Returns an array of your SLL.
    * **Parameter/s** - None.
    * **Returns**
        * An Array.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The SLL node object if found.
        * null if not found.
    
* **delete()** - Deletes a node, This deleted the first found node with that value if there are multiple with that same value.
    * **Parameter/s**
        1. The Value contained in the node to be deleted.
    * **Returns**
        * null - If node not found with that value.
        * The same passed value if successful.

* **reverse()** - Reverses the SLL.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - if successful.
        * Boolean false - if unsuccessful.

* **get()** - Gets a node object using index, Keep in mind index start from 0 like an Array.
    * **Parameter/s**
        1. Index (number).
    * **Returns**
        * A node object present at that index.

* **set()** - Inserts a value at a particular index.
    * **Parameter/s**
        1. Value that is to be inserted.
        2. Index (number).
    * **Returns**
        * The same passed value is successful.

* **remove()** - Deletes an element at a particular index.
    * **Parameter/s**
        1. Index(number).
    * **Returns**
        * Deleted value that is present at that index.

* **searchAll()** - Search a particular value in SLL and returns all ocuurences in an object.
    * **Parameters**
        1. Value that is to be searched.
    * **Returns**
        * An Object with 2 properties
            1. **count** - Number of occurence of that value.
            1. **positions** - This contains all the indexes that contains that value.

* **deleteAll()** - This does not delete all arguments but insteas returns a new SLL which does not have this value.
    * **Parameter/s**
        1. Value that needed to be removes.
    * **Returns**
        * A new SLL with same elements present apart from the passed value.

* **updateWithValue()** - This updates a value of a node, If multiple present updates the first encountered from start.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.


* **updateAllWithValue()** - This updates a value to a updated value of all nodes with that value.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Booleans false - If Successful.

* **updateWithIndex()** - This updates a value of a node present at a particular index.
    * **Parameter/s**
        1. Index (number).
        2. Updated Value
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.

* **size** - This is a property that returns number of elements present.

---

## Doubly Linked List

You can simply create a Doubly Linked List object.

```javascript
    const my_Doubly_Linked_List = new domes.DoublyLinkedList();
```

> *Keep in mind - All values are accepted apart from Undefined and null.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

> DLL - Doubly Linked List.

> Index is always starting from 0.

Now you can run the following methods on this object.

* **insertAtStart()** - Adds an element at the start of DLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **insertAtEnd()** - Adds an element at the end of DLL.
    * **Parameter/s**
        1. Any value.
    * **Returns** - Same passed value.

* **lookStart()** - Returns value of start node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Value present at the start if SLL is not empty.

* **lookEnd()** - Returns value of end node.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Value present at the end if DLL is not empty.

* **deleteFromStart()** -  Deletes a node from start.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Deleted node value i.e. the start node if SLL is not empty.

* **deleteFromEnd()** - Deletes a node from end.
    * **Parameter/s** - None.
    * **Returns**
        * null - if DLL is empty.
        * Deleted node value i.e. the end node if DLL is not empty.

* **isEmpty()** - Checks if the DLL is empty or not.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - Means DLL is not empty.
        * Boolean false - Means DLL is empty.

* **toArray()** - Returns an array of your DLL.
    * **Parameter/s** - None.
    * **Returns**
        * An Array.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The DLL node object if found.
        * null if not found.
    
* **delete()** - Deletes a node, This deleted the first found node with that value if there are multiple with that same value.
    * **Parameter/s**
        1. The Value contained in the node to be deleted.
    * **Returns**
        * null - If node not found with that value.
        * The same passed value if successful.

* **reverse()** - Reverses the DLL.
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true - if successful.
        * Boolean false - if unsuccessful.

* **get()** - Gets a node object using index, Keep in mind index start from 0 like an Array.
    * **Parameter/s**
        1. Index (number).
    * **Returns**
        * A node object present at that index.

* **set()** - Inserts a value at a particular index.
    * **Parameter/s**
        1. Value that is to be inserted.
        2. Index (number).
    * **Returns**
        * The same passed value is successful.

* **remove()** - Deletes an element at a particular index.
    * **Parameter/s**
        1. Index(number).
    * **Returns**
        * Deleted value that is present at that index.

* **searchAll()** - Search a particular value in SLL and returns all ocuurences in an object.
    * **Parameters**
        1. Value that is to be searched.
    * **Returns**
        * An Object with 2 properties
            1. **count** - Number of occurence of that value.
            1. **positions** - This contains all the indexes that contains that value.

* **deleteAll()** - This does not delete all arguments but insteas returns a new DLL which does not have this value.
    * **Parameter/s**
        1. Value that needed to be removes.
    * **Returns**
        * A new DLL with same elements present apart from the passed value.

* **updateWithValue()** - This updates a value of a node, If multiple present updates the first encountered from start.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.


* **updateAllWithValue()** - This updates a value to a updated value of all nodes with that value.
    * **Parameter/s**
        1. Value that is needed to be updated.
        2. Updated Value.
    * **Returns**
        * Boolean true - If Successful.
        * Booleans false - If Successful.

* **updateWithIndex()** - This updates a value of a node present at a particular index.
    * **Parameter/s**
        1. Index (number).
        2. Updated Value
    * **Returns**
        * Boolean true - If Successful.
        * Boolean false - If Unsuccessful.

* **size** - This is a property that returns number of elements present.



---

## Stacks

You can simply create a Stack object.

```javascript
    const my_Stack = new domes.Stack();
```

> *Keep in mind - All values are accepted apart from Undefined and null.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **push()** - This pushes an element on the top of stack.
    * **Parameter/s**
        1. Value that is needed to be pushed.
    * **Returns**
        * The same passed value.

* **pop()** - This pops out the top element from the stack.
    * **Parameter/s** - None.
    * **Returns**
        * The top popped value.

* **top()**
    * **Parameter/s** - None.
    * **Returns**
        * The top value if stack is not empty.
        * null if stack is empty.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of elements from top to bottom of stack, means top will be the starting element of the Array and bottom will be last element.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if found.
        * Boolean false if not found.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The Stack node object if found.
        * null if not found.

---

## Queues

You can simply create a Queue object.

```javascript
    const my_Queue = new domes.Queue();
```

> *Keep in mind - All values are accepted apart from Undefined and null.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **enqueue()** - This enqueues an element in the back of queue.
    * **Parameter/s**
        1. Value that is needed to be enqueued.
    * **Returns**
        * The same passed value.

* **dequeue()** - This dequeues the front element from the queue.
    * **Parameter/s** - None.
    * **Returns**
        * The dequeued value.

* **peek()**
    * **Parameter/s** - None.
    * **Returns**
        * The front element if queue is not empty.
        * null if queue is empty.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of elements from front to back of queue, means front element will be the starting element of the Array and back element will be last element.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if found.
        * Boolean false if not found.

* **search()**
    * **Parameter/s**
        1. Value that is needed to be searched.
    * **Returns**
        * The Queue node object if found.
        * null if not found.