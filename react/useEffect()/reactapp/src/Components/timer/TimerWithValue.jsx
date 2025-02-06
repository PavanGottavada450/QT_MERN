import React from 'react'
import { useState, useEffect } from 'react'

function TimerWithValue() {

    const [count, setCount] = useState(0);
    const [cal,setCal] = useState(0)
 
    useEffect(()=>{
      setCal(count * 2);
    },[count]);

    const addCount = () => {
        setCount(count + 1);
    }
  return (
    <div>
        <h1>Count : {count}</h1>
        <button onClick={addCount}>Click Me</button>
        <p>calculation : {cal}</p>
    </div>
  )
}

export default TimerWithValue