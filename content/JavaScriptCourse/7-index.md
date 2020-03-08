---
title: 'Design Pattern in JavaScript'
metaTitle: 'Design Pattern in JavaScript'
metaDescription: 'Design Pattern in JavaScript'
---

Design pattern in JavaScript
Extracted from [scotch.io](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

KeyPoints
-Context: Where/under what circumstances is the pattern used?
-Problem:  What are we trying to solve?
-Solution: How does using this pattern solve our proposed problem?
-Implementation: What does the implementation look like?

-Module
-Prototype
-Observer
-Singleton

1.Module Design Pattern
Modules are JavaScript's classes
-encapsulation : protecting states and behaviors from being accessed from other classes
private and public access levels

Modules should be Immediately-Invoked-Function-Expressions (IIFE) to allow for private scopes - that is, a closure that protect variables and methods (however, it will return an object instead of a function)

```js
(function() {

    // declare private variables and/or functions

    return {
      // declare public variables and/or functions
    }

})();
```

Here code outside of the closure is unable to access these private variables since it is not in the same scope.

```js
var HTMLChanger = (function() {
  var contents = 'contents'

  var changeHTML = function() {
    var element = document.getElementById('attribute-to-change');
    element.innerHTML = contents;
  }

  return {
    callChangeHTML: function() {
      changeHTML();
      console.log(contents);
    }
  };

})();

HTMLChanger.callChangeHTML();       // Outputs: 'contents'
console.log(HTMLChanger.contents);  // undefined
```

Revealing Module Pattern
A variation of the module pattern is called the Revealing Module Pattern.
The purpose is to maintain encapsulation and reveal certain variables and methods
returned in an object literal.

```js
var Exposer = (function() {
  var privateVariable = 10;

  var privateMethod = function() {
    console.log('Inside a private method!');
    privateVariable++;
  }

  var methodToExpose = function() {
    console.log('This is a method I want to expose!');
  }

  var otherMethodIWantToExpose = function() {
    privateMethod();
  }

  return {
      first: methodToExpose,
      second: otherMethodIWantToExpose
  };
})();

Exposer.first();        // Output: This is a method I want to expose!
Exposer.second();       // Output: Inside a private method!
Exposer.methodToExpose; // undefined

```

Although this looks much cleaner, an obvious disadvantage is unable to refernce the private methods.
-This can pose unit testing challenges.
-Public behaviors are non-overridable

2.Prototype Design Pattern
Here the objects created are clone(shallow clones) of the original object
Instead of having to perform substantial database operation, it would be advantageous to clone the previously created object.

To clone an object, a constructor must exist to instantiate the first object. Next, by using the keyword prototype variables and methids bind to the object's structure.

```js
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype.go = function() {
  // Rotate wheels
}

TeslaModelS.prototype.stop = function() {
  // Apply brake pads
}
```

```js
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = {
  go: function() {
    // Rotate wheels
  },
  stop: function() {
    // Apply brake pads
  }
}
```

Revealing Prototype Pattern
It also provides encapsulation with public and private members since it returns an object literal

```js
var TeslaModelS = function() {
  this.numWheels    = 4;
  this.manufacturer = 'Tesla';
  this.make         = 'Model S';
}

TeslaModelS.prototype = function() {

  var go = function() {
    // Rotate wheels
  };

  var stop = function() {
    // Apply brake pads
  };

  return {
    pressBrakePedal: stop,
    pressGasPedal: go
  }

}();
```

3.Observer Design Pattern
If one part of the application changes, other parts needs to be updated.
Example in AngularJS, if the $scope object updates, an event can be triggered to notify another component.
If an object is modified it broadcasts to dependent objects that a change has occurred.

The necessary objects are 
-subject :contains reference to the concrete observers to notify for any changes
-observer : an abstract class that allows for the concrete observers to implements the notify method
-concrete

```js
// Controller 1
$scope.$on('nameChanged', function(event, args) {
    $scope.name = args.name;
});

...

// Controller 2
$scope.userNameChanged = function(name) {
    $scope.$emit('nameChanged', {name: name});
};
```
With the observer pattern, it is important to distinguish the independent object or the subject

Diadvantages : significant drop in performance

```js
var Subject = function() {
  this.observers = [];

  return {
    subscribeObserver: function(observer) {
      this.observers.push(observer);
    },
    unsubscribeObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers.splice(index, 1);
      }
    },
    notifyObserver: function(observer) {
      var index = this.observers.indexOf(observer);
      if(index > -1) {
        this.observers[index].notify(index);
      }
    },
    notifyAllObservers: function() {
      for(var i = 0; i < this.observers.length; i++){
        this.observers[i].notify(i);
      };
    }
  };
};

var Observer = function() {
  return {
    notify: function(index) {
      console.log("Observer " + index + " is notified!");
    }
  }
}

var subject = new Subject();

var observer1 = new Observer();
var observer2 = new Observer();
var observer3 = new Observer();
var observer4 = new Observer();

subject.subscribeObserver(observer1);
subject.subscribeObserver(observer2);
subject.subscribeObserver(observer3);
subject.subscribeObserver(observer4);

subject.notifyObserver(observer2); // Observer 2 is notified!

subject.notifyAllObservers();
// Observer 1 is notified!
// Observer 2 is notified!
// Observer 3 is notified!
// Observer 4 is notified!
```

4.Singleton Design Pattern
Single instantiation but many instance of the same object
Example
Using One printer in an office by 10 computers

```js
var printer = (function () {

  var printerInstance;

// create method is private
  function create () {

    function print() {
      // underlying printer mechanics
    }

    function turnOn() {
      // warm up
      // check for paper
    }

    return {
      // public + private states and behaviors
      print: print,
      turnOn: turnOn
    };
  }

  return {
    getInstance: function() { //public
      if(!printerInstance) {
        printerInstance = create();
      }
      return printerInstance;
    }
  };

})();

var officePrinter = printer.getInstance();

```

In AngularJs, Singletons are prevalent, the most notable being services, factories and providers.
