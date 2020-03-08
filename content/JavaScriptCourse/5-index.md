---
title: "Note on computational complexity in Javascript"
metaTitle: "Learning Javascript"
metaDescription: "Learning Javascript"
---

Knowing computational complexity
It has short name complexity

Example 1

```javascript
function fn(n, m) {  return n * m}
```

Its complexity is O(1). Because no matter what arguments you pass, it has only one operation
ie multiply n and m

Example 2

```javascript
function fn(n, m)
  {
    let s = 0;
    for (i = 0; i < 3; i++) {    s += n * m  };
    return s;
  }  
```

You would think its complexity is O(3), right?
But its O(1). Because O(3) has constants and they are always considered as same as O(1).

Example 3

``` javascript
function fn(n, m)
  {
    let s = [];
    for (i = 0; i < n; i++) {    s.push(m)  };
    return s;
  }

```

Here for loop is directly linked to n.
So its O(n).

Example 4

```javascript
function fn(n, m)
  {
    let s = [];
    for (i = 0; i < 2*n; i++) {    s.push(m)  };
    return s;
  }  
```

It's complexity is O(n). It is because O(2n) has constant "2" which is ignored.

Example 5

```javascript
function fn(n, m)
  {
    let s = [];
    for (i = 0; i < n; i++) {
        for (i = 0; i < n; i++) {
                  s.push(m)
        }  
    };
    return s;
  }  
```

It's complexity is O(n^2) because it has nested loop.

Example 6

```javascript
function fn(n, m)
  {
    let s = [];
    for (i = 0; i < n; i++) {    s.push(n)  };
    for (i = 0; i < m; i++) {    s.push(m)  };
    return s;
  }  
```

It's complexity is O(n+m) because it has different two loops.

***
Note: O(1) always perform much better than one with O(n).

computational complexity has three measures:
    best scenarios       : O(1)
    average scenarios    : between O(1) to O(n)
    worst-case scenarios : O(n)
