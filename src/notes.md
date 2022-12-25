### Intro to React
 
1. JSX -> JavaScript XML
2. JSX -> JS (Webpack + babel)
 
### Why className?
 
1. class is a reserved keyword in JS
2. for -> htmlFor in JSX
 
### Purpose index.js
 
1. Bootstrap (start) the react
 
App contains Logic + View
 
### StrictMode
 
1. React check for errors
 
### noscript
 
1. Msg displayed when - JS is disabled in the browser
 
### {} -> template syntax
 
1. Supports expression
 
### function to be considered as component
 
1. function should start with a capital letter
2. It should at least one jsx element
 
### props -> arguments
 
1. props -> properties of the components
 
### Task
 
1. Profile pic to every student
 
### Handy shortcuts
 
1. crtl + ` -> show / hide terminal
2. crtl + , -> settings | format on save
3. crtl + c -> stop react server in terminal
4. win + . -> emojis
 
### Hooks
 
1. React listen to changes made by hooks
2. Hooks - function
3. It starts with `use`
4. `useState`
   1. `const [state, setState] = useState(InitialValue)`
   2. state -> state of mind | state of the art technology | current
   3. In App state -> _current data_
   4. `setState` updates the value of `state`
   5. `setState` react listens and updates `state` & view
   6. `import { useState } from "react";`
   7. Flow: User clicks -> `onClick` trigger -> `setLike` -> React updates view
 
### Conditional rendering

## Life Cycle Of Component
Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.