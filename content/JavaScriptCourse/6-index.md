---
title: 'Creating objects in JavaScript'
metaTitle: 'creating objects in javascript'
metaDescription: 'creating objects in javascript'
---

JavaScript is a class-less language and the functions are used to simulate a class for it.

Different ways of creating object in JavaScript are as follows

1. New Operator or Constructor

```js
// Function acting as a Class.
    function copyClass(name, age) {
        this.name = name;
        this.age = age;
        this.getInfo = function() {
            console.log(this.name);
            console.log(this.age);
        }
    }

    // Creating the object of copyClass
    // and initializing the parameters.
    var obj = new copyClass("Ram", 20);

    // Calling the method of copyClass.
    obj.getInfo();

```

2.Object literals

```js
    // Creating Object
    var obj = {
        name:"",
        age:"",
        getInfo : function(){
            console.log(this.name);
            console.log(this.age);
        }

    }

    //Initializing the parameters
    obj.name = "Hari";
    obj.age = 20;

    //Using method of object
    obj.getInfo();
```

3.Object.create Method

```js
var obj = {
    name:"",
    age:"",
    getInfo: function(){
        console.log(this.name);
        console.log(this.age);
    }
  }

  // obj Object as a prototype to another object
  var person = Object.create(obj);

  person.name = "Hari"   //console.log(person.name)=> Hari

```

4.ECMAScript Class

ECMAScript 6 introduced the class keyword to create classes in JavaScript

```js

class obj {
    constructor(name,age){
        this.name = name;
        this.age =age
    }

    getInfo{
        console.log(this.name);
        console.log(this.age);
    }
}

//Creating object from class
 var person = new obj("Hari", 20)
 //Using method of obj
 person.getInfo();

```

