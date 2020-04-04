# Domes.js
---

## Introduction

If you want to give boost to your javascript code or always afraid of implementing complex data structures then this is the perfect library for you to use. Domes has implementations of many useful extended data structures like Singly Linked List, Doubly Liked List, Stacks, Queues, Binary Search Trees and many more which if smartly used can give your javascript code an edge in terms of performance and time complexity. We have also implemented many possible methods for these data structures that might be helpful in doing your daily tasks. So rest assured and use efficiently to get best results out of it. These implementations are based on basic fundamentals of these data structures.

Currently we have implementations of below data structures which you can use.
* Singly Linked List
* Doubly Linked List
* Stack
* Queue
* Binary Search Tree
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


We have implemented these data structures as classes.

*IF Built in methods don't suffice the needs then you are free to dive in and create your own extended methods for these classes.*

*Suggestions are always welcomed for improvements.*

---

## Installation

You can install this normally using npm command
```
npm install --save domes.js
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

---
## Binary Search Tree

As Binary Search Tree work on the fundamental of values greater or less than a value in terms of storing data, So in our implementation currently you can store data either in number or string format as of now and there are 2 comparsion methods also. So when making a Binary Search Tree object you have to pass the configuration in the constructor.

* **Available types of data that can be stored.**
    1. Number
    2. String
* **Comparison methods.**
    1. Normal Comparion (>,<)
        1. In Number config it simply compares whether the number is greater or small.
        2. In String config it compares according to the ASCII value.
    2. Length Comparsion
        2. In String config it compares according to the length of String.

* **Available Configurations.**
    * 1 , 1 - It means you can store number format and comparsion will be normal comparsion.
    * 2 , 1 - It means you can store string format and comparsion will be normal comparison.
    * 2 , 2 - It means you can store string format and comparsion will be based on length of string.

> You have to pass these configuration in Binary Search Tree constructor while making its object.

Now you can make different types of Binary Search Trees as follows.

*   ```javascript
    const my_Binary_Search_Tree = new BinarySearchTree(1,1);
    ```
*   ```javascript
    const my_Binary_Search_Tree = new BinarySearchTree(2,1);
    ```
*   ```javascript
    const my_Binary_Search_Tree = new BinarySearchTree(2,2);
    ```

In addition we are using the concept of ID in these as values can be more than 1 so to really specify which node we are targeting we have to specify its ID.

> **How these IDs are allocated ?**
* When you are normally inserting values IDs will be automatically be given. For e.g, inserting the first node i.e. the root node will have ID=1 and second node will have ID=2 and so on.
* But when we delete a node these IDs are automatically reshuffled in order as per the BFS order of the resultant tree build after deletion of node. For e.g, if after deletion your BFS order is ['This','is','my','BFS'] this array (these are array of node values in BFS) then the IDs will be 1 for 'This', 2 for 'is', 3 for 'my', 4 for 'BFS'. So as you can see it reshuffled its IDs for the nodes. So you can clearly figure out that our root node will always have ID=1.

> **IMPORTANT**
* As you will see in many of our methods it will ask you to provide ID as a parameter and if the method involves a task that will be performed on the whole tree e.g. BFS or DFS etc, these tasks are performed on whole tree and you are just asked to provide the root node, So in these type of methods you can provide any valid ID and the node with that ID will be treated as root node even if it is not, Hence these type of methods can also work on ***Sub Trees*** as well.

> *Keep in mind - Values are accepted as per the configuration.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

> BST - Binary Search Tree.

Now you can run the following methods on this object.

* **insert()**
    * **Parameter/s**
        1. Value is to be inserted.
    * **Returns**
        * The same passed value.
        
* **search()**
    * **Parameter/s**
        1. Value is needed to be searched.
    * **Returns**
        * An object with **value** and **id** if found.
        * null if not found.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **BFS()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in BFS order.

* **DFSInOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS InOrder.

* **DFSPreOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS PreOrder.

* **DFSPostOrder()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property in DFS PostOrder.

* **height()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * A Number which is the max height.

* **rootNodeID()**
    * **Parameter/s** - None.
    * **Returns**
        * ID of the root node of Main BST.
        * null if BST is empty.

* **getIdsOfValue()**
    * **Parameter/s**
        1. Value of node of which you want to know the ID.
    * **Returns**
        * An Array of objects with **value** and **id** property specifying all nodes with that value.

* **leaveNodes()**
    * **Parameter/s**
        1. ID of the root node.
    * **Returns**
        * An Array of objects with **value** and **id** property specifying all leave nodes.

* **childNodes()**
    * **Parameter/s**
        1. ID of the parent node of which we want the childs.
    * **Returns**
        * An object with **count**, **left** and **right** property, count gives us the number of childs, left and right are objects with **value** and **id** property to give info about the left and right nodes. If left or right node is not present they have null in them.

* **delete()**
    * **Parameter/s**
        1. ID of the node that you want to delete.
    * **Returns**
        * An object with **value** and **id** property of the deleted node. Keep in mind after deleting the node IDs are reshuffled as per BFS order. Please read **How IDs are allocated section above.**

* **updateWithValue()**
    * **Parameter/s**
        1. Value that needed to be updated (Does not work with multiple if multiple exist update the first encountered node with that value).
        2. Updated value.
    * **Returns**
        * Boolean true if successful.
        * Boolean false if unsuccessful (Means no node is present with that value).
    * **Keep in Mind (Behind the scenes)**
        * Behind the scenes this operation is doing 2 operations.
            1. Deleting the node with that value
            1. Inserting a new node with the updated value, Hence IDs will reshuffle in this operation in order to keep the property of BST.

* **updateWithID()**
    * **Parameter/s**
        1. ID of the node that is needed to be updated.
        2. Updated value.
    * **Returns**
        * Boolean true.
    * **Keep in Mind (Behind the scenes)**
        * Behind the scenes this operation is doing 2 operations.
            1. Deleting the node with that ID.
            1. Inserting a new node with the updated value, Hence IDs will reshuffle in this operation in order to keep the property of BST.

* **getNodeValueWithID()**
    * **Parameter/s**
        1. ID of the node of which we want corresponding value.
    * **Returns**
        * An Object with **value** and **id** property.

* **noOfNodes** - This is a property which gives us the number of how many nodes we have currently.

---

## Binary Heaps

As Binary Heaps work on the fundamental of values greater or less than a value in terms of storing data, So in our implementation currently you can store data either in number or string format as of now and there are 2 comparison methods also. So when making a Binary Heap (Max or Min) object you have to pass the configuration in the constructor.

> We have implemented Array implementation of Binary Heaps.

* **Available types of data that can be stored.**
    1. Number
    2. String
* **Comparison methods.**
    1. Normal Comparion (>,<)
        1. In Number config it simply compares whether the number is greater or small.
        2. In String config it compares according to the ASCII value.
    2. Length Comparsion
        2. In String config it compares according to the length of String.

* **Available Configurations.**
    * 1 , 1 - It means you can store number format and comparsion will be normal comparsion.
    * 2 , 1 - It means you can store string format and comparsion will be normal comparison.
    * 2 , 2 - It means you can store string format and comparsion will be based on length of string.

> You have to pass these configuration in Binary Heaps (Max or Min) constructor while making its object.

### **Max Binary Heap**

You can make Max Binary Heap object in following ways.

*   ```javascript
    const my_Max_Binary_Heap = new MaxBinaryHeap(1,1);
    ```
*   ```javascript
    const my_Max_Binary_Heap = new MaxBinaryHeap(2,1);
    ```
*   ```javascript
    const my_Max_Binary_Heap = new MaxBinaryHeap(2,2);
    ```

> *Keep in mind - Values are accepted as per the configuration.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **insert()**
    * **Parameter/s**
        1. Value that is needed to be inserted. It automatically max heapify behind the scene.
    * **Returns**
        * The same passed value.

* **extractMax()**
    * **Parameter/s** - None.
    * **Returns**
        * The Maximum element as per the comparsion specified (The Root Element).

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of all the elements present as per BFS Order.

* **toEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in heap.

### **Min Binary Heap**

You can make Max Binary Heap object in following ways.

*   ```javascript
    const my_Min_Binary_Heap = new MinBinaryHeap(1,1);
    ```
*   ```javascript
    const my_Min_Binary_Heap = new MinBinaryHeap(2,1);
    ```
*   ```javascript
    const my_Min_Binary_Heap = new MinBinaryHeap(2,2);
    ```

> *Keep in mind - Values are accepted as per the configuration.*

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **insert()**
    * **Parameter/s**
        1. Value that is needed to be inserted. It automatically max heapify behind the scene.
    * **Returns**
        * The same passed value.

* **extractMin()**
    * **Parameter/s** - None.
    * **Returns**
        * The Minimum element as per the comparsion specified (The Root Element).

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of all the elements present as per BFS Order.

* **toEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in heap.

---

## Priority Queues

> We have used our own Max/Min Binary Heap in implementing the Max/Min Priority Queue which is in turn an Array impelmentation of Heap.

> ***Keep in mind while using this, that you can only give priority in number format apart from Infinity/-Infinity***

> *All values are accepted to store apart from undefined/null.*

> *If Priority are same for two or more elements then they can come in any order for that priority, it doesn't depend on their value.*

### **Max Priority Queue**

You can make Max Priority Queue object as follows.

```javascript
    const my_Max_Priority_Queue = new MaxPriorityQueue();
```

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **enqueue()**
    * **Parameter/s**
        1. Value that is needed to be inserted.
        1. Priority in number format apart from Infinity/-Infinity.
    * **Returns**
        * The same passed value.

* **dequeue()**
    * **Parameter/s** - None.
    * **Returns**
        * Value of element with maximun priority.
        * null if priority queue is empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in priority queue.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of objects with **value** and **priority** property in BFS Order.

* **getNodeInfo()**
    * **Parameter/s**
        1. Index of the node.
    * **Returns**
        * An object with **value** and **priority** property of that node.
    
* **updateValue()**
    * **Parameter/s**
        1. Index of the node.
        1. Updated value.
    * **Returns**
        * Boolean true.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

### **Min Priority Queue**

You can make Min Priority Queue object as follows.

```javascript
    const my_Min_Priority_Queue = new MinPriorityQueue();
```

> Parameter number can be derived as argument number. E.g. 1 means first argument, 2 means 2nd argument... etc.

Now you can run the following methods on this object.

* **enqueue()**
    * **Parameter/s**
        1. Value that is needed to be inserted.
        1. Priority in number format apart from Infinity/-Infinity.
    * **Returns**
        * The same passed value.

* **dequeue()**
    * **Parameter/s** - None.
    * **Returns**
        * Value of element with minimum priority.
        * null if priority queue is empty.

* **size()**
    * **Parameter/s** - None.
    * **Returns**
        * Number of elements in priority queue.

* **toArray()**
    * **Parameter/s** - None.
    * **Returns**
        * An Array of objects with **value** and **priority** property in BFS Order.

* **getNodeInfo()**
    * **Parameter/s**
        1. Index of the node.
    * **Returns**
        * An object with **value** and **priority** property of that node.
    
* **updateValue()**
    * **Parameter/s**
        1. Index of the node.
        1. Updated value.
    * **Returns**
        * Boolean true.

* **isEmpty()**
    * **Parameter/s** - None.
    * **Returns**
        * Boolean true if empty.
        * Boolean false if not empty.

