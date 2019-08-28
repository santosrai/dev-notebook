---
title: "Javascript Fundamentals"
metaTitle: "Learning Javascript"
metaDescription: "Learning Javascript"
---
#### What is hoisting?
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution

```javascript
    //ES5
    console.log(a); // undefined
    var a = 5;
```

#### Difference between parameters and arguments
    - Parameters are variable defined in declaration of function
    - Arguments are value passed  to that variable that gets into function

Lets take a simple example:
```javascript
    var test = function(a)
    {
        console.log(a);//print 1
    }
    test(1);

```
Here a is parameter and passing 1 as argument


#### Short Notes on Pipe() and Compose() in javascript
These are Functional Programming Concepts
    - Pipe : 
        It combines n functions.
        It's a pipe flowing left-to-right calling each function with output of last one.
    Let's do example
```javascript
    getName = (name) =>name;

    getName('Ram');
```
Lets make function which will reverse order of it
```javascript
    reverseString = (string) =>
        string 
            .split('')
            .reverse()
            .join('');
    // applying reverseString with getName function 
    reverseString(getName('Ram'));       
``` 
Again Lets do uppercase the reversed value
```javascript

   uppercase(reverseString(getName('Ram')));       
```     
See how it is mess!!!!!
Pipe will rescue here for us

For demo purposes, I’ll use a pipe implementation from one of Eric Elliott’s functional programming articles.

 ```javascript

    pipe = (...fns) => (x) => fns.reduce((v, f) => f(v), x);

   pipe(
       getName,
       reverseString,
       uppercase
       )('Ram');
   //maR     

 ```   

- Compose :
    Its just pipe in the other direction
```javascript
    compose = (...fns) => (x) => fns.reduceRight((v, f) => f(v), x);

```
