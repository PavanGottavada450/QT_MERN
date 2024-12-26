import React from 'react'
import { useState, useEffect } from 'react'

function TimerWithDep() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1);
        },1000)
    },[])

  return (
    <div>
        <h1>I've renderd {count} times</h1>
    </div>
  )
}

export default TimerWithDep;