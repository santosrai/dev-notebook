---
title: "Data Structure and algorithms in Javascript"
metaTitle: "Learning Javascript"
metaDescription: "Learning Javascript"
---

I was always wondered how do I build queues, Stacks, Linked Lists? Because I only have experience of making arrays and dictionery.

So to find my question's answer, I began to search on different learning media starting from basic.
This post is a short summary of what I had learnt about data structure and algorithms.

Queues
[Why and when should I use stack or queue data structures instead of arrays/lists?](https://stackoverflow.com/questions/2074970/stack-and-queue-why)
    - Stack or queue help to manage the data in particular order.
    - Queue is first in, first out (FIFO)
    - Stack is last in, first out (LIFO)

Todo
Linked Lists
Binary Search Tree
    - Recursion
    - Depth First Traversal
    - Breadth First Traversal

Hash Tables

Linked Lists :
  It is a data structure that stores multiple values in a linear way.
  
  Why linked Lists use?
  At the begining of computer evolution, memory was scarce. Built-in Array in C, always reserve defined memory whether it will be or won't be filled by any data during execution.
  So to improve memory management, Link Lists are created

  Unlike arrays, data elements(nodes) are linked with pointers
Properties
-The last node points to null
-We can add and delete elements(nodes) without reoraganizing

Disadvantages:
  -It consume time for search operation, so it is slow.

Since JS doesnot have own link list so,  
Lets create Own

```js
//creating Node classs
class Node{
    constructor(data){
      this.data = data;
      this.next = null;
    }
}

//creating LinkedList class
class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  //LinkedList Feature functions
  add(element){
      //create new node
      var node = new Node(element);

      // store current node
      var current;

      // if list is empty
      if(this.head == null)
      {
          this.head = node;
      }else{
          current = this.head;
          //iterate to the end of list
          while(current.next){
            current = current.next;
          }
          //add node
          current.next = node;

      }

      this.size++;
  }


  printList(){
    var current_head = this.head;
    var value = "";

    while(current_head)
      {
        value += current_head + " ";
        current_head = current_head.next;
      }
    console.log(value);
  }
}
    // other feature to be added
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
//Implementation
  var list = new LinkedList();
  list.add("Ram");
  list.printList();

```

#### Hash Tables

It is data structure that store key-value pairs.

Lets look at Hash Table class taken from [jenjwong](https://gist.github.com/jenjwong/14a164b6c138fc60eba9f9e2c56e4d56#file-_hashtable-js)

```js
class Hashtable {
  constructor() {
    this._storage = [];
    this._storageLimit = 8;
  }

  insert(key, value) {
    let hash = getHash(key, this._storageLimit);
    this._storage[hash] ? this._storage[hash] = this._storage[hash] : 
    this._storage[hash] = [];

    for (let i = 0; i < this._storage[hash].length; i++) {
      let tupple = this._storage[hash][i];
      if (tupple[0] === key) {
        return 'key already exists; keys must be unique';
      }
    }
    this._storage[hash].push([key, value]);
    return 'inserted';
  }

  retrieve(key) {
    let hash = getHash(key, this._storageLimit);
    if (!this._storage[hash]) return 'key does not exist';
    for (let i = 0; i < this._storage[hash].length; i++) {
      let tupple = this._storage[hash][i];
      if (tupple[0] === key) {
        return tupple;
      }
    }
  }

 remove(key) {
  let hash = getHash(key, this._storageLimit);
    if (!this._storage[hash]) return 'key does not exist';
    for (let i = 0; i < this._storage[hash].length; i++) {
      if (this._storage[hash][i][0] === key) {
        this._storage[hash][i].splice(i, 2);
        return key + ' removed';
      }
    }
  }
  
};

// helper function that generates hash
var getHash = function (str, max) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; //
    hash = Math.abs(hash);
  }
  return hash % max;
};

```

So in hashtable class,
-it create empty array  
-it calculate a numeric value from the name using "hash" formula(here is getHash). Then it define the position of that array using that numeric value
-it store data on that position
-if position is already occupied,it will re-calculate until it find empty place

For searching data in hash table:
Lets take an example:
task : Search "Ram" with key "K1" hash table
-It calculate the hash value of "K1".
-Use that as the index into the array.
-It check whether it has "Ram" or not. If not it recalculate the hash and try again.

###Binary Search Tree (BST)

It has maximum 2 Children.So we have to remember 3 things:
-Root  : It is top node of tree
-Parent: It’s a predecessor node
-Child : It’s a successors of a parent node

Implementation Of Search Tree
