---
title: "Javascript Promises"
metaTitle: "Learning Javascript Promises"
metaDescription: "Learning Javascript Promises"
---


### Promises :
Promises are like callback which will make wait to running next code


It has 3 stages:
  - Pending
  - Fulfilled
  - Rejected

```javascript
  runFunction().then(successFunc, failureFunc);
```
We use .then() method to register callbacks which may be success or failure

#### Chaining Promises
    We can chain asynchronous operations together using promises

```javascript
    new Promise(function(resolve, reject) {
        setTimeout(() => resolve(1), 2000);
        }).then((result) => {
          alert(result);
          return result + 2;
        }).then((result) => {
          alert(result);
          return result + 2;
        }).then((result) => {
          alert(result);
          return result + 2;
    });
    
  ```
       