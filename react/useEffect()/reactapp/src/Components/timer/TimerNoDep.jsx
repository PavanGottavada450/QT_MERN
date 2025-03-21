import React from 'react'
import { useState, useEffect } from 'react'

function TimerNoDep() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount((count) => count + 1)
        },1000)
    })

  return (
    <div>
        <h1>I've rendered {count} times</h1>
    </div>
  )
}

TimerNoDep()

export default TimerNoDep