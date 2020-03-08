---
title: 'Learning React'
metaTitle: 'Learning React'
metaDescription: 'Learning React'
---

#### State Management Technique in React ####

There are mostly two types of state in React

1. Local State  : Used within the components that were created  
2. Global State : Shared across several components

For these states, we use

1. useState   : Handle simple values like numbers or strings
2. useReducer : Handle complex data structures

useContext Method:
Context allows us to lift and share state up to a higher component in the tree - which then allows us to share it with other components.

Define shared context

```jsx
const AppContext = React.createContext({});
```

provide it to our app by wrapping the entire app with it:

```jsx
<AppContext.Provider value={{ username: 'superawesome' }}>
  <div className="App">
    <Navbar />
    <Messages />
  </div>
</AppContext.Provider>
```

consume that context in the child components

```jsx
const Navbar = () => {
  const { username } = useContext(AppContext)
  return (
    <div className="navbar">
      <p>AwesomeSite</p>
      <p>{username}</p>
    </div>
  )
}
```

useReducer Method:
Define Reducer function

```jsx
const myReducer = (state, action) => {
  switch(action.type) {
    case('countUp'):
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}
```

use useReducer function hook, where useReducer function get custom reducer and a default state. Get current state and a dispatch using destructure way.

```jsx
const [state, dispatch] = useReducer(myReducer, { count: 0 })
```

We can use this
-state to show the current value
-dispatch to change the state

```jsx
<div className="App">
  <button onClick={() => dispatch({ type: 'countUp' })}>
    +1
  </button>
  <p>Count: {state.count}</p>
</div>
```

useEffect Method

Use for reusable logic inside of our actions where we can write custom hooks
It allows to run asynchronous actions like http requests
It lets us re-run those actions whenever certian data changes

```jsx
useEffect(() => {
  // Async Action
}, [dependencies])
```

This is just like a Redux action with redux-thunk installed.

```jsx
const [person, setPerson] = useState({})
useEffect(() => {
  fetch(`https://swapi.co/api/people/${personId}/`)
    .then(response => response.json())
    .then(data => setPerson(data))
}, [personId])
```

