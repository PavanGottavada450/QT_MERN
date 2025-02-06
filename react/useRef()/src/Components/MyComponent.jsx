// useState() = Re-render the component when the state value changes 

// useRef() = "use-reference" Does not re-render when its value changes.
//             When you want a component to "remember" some clientInformation,
//             but you don't want that information to trigger new renders.

//             1. Accessing / Interacting with DOM elements
//             2. Handling Focus, Animation, and Transitions 
//             3. Managing Timers and Intervals.

import React from 'react'
import { useState, useEffect,useRef } from 'react'

function MyComponent() {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log("component rendered");
    });

    function handleClick(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor = "yellow";
    }

  return (
        <div>
            <button onClick={handleClick}>
                click me😊
            </button>
            <input ref={inputRef}/>
        </div>
  )
}

export default MyComponent