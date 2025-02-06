import React, { useState } from 'react'
import { useEffect } from 'react'

function CleanUp() {

    const [count, setCount] = useState(0);

    useEffect(()=>{
        let timer = setTimeout(()=>{
            setCount(count + 1)
        },1000);


        return ()=> clearInterval(timer)
    },[]);

    const addCount = () => {
        setCount(count + 1)
    }

  return (
    <h1>I've rendered {count} time <button onClick={addCount}>Click Me!</button></h1>
    
  )
}

export default CleanUp