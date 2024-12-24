import {useState} from 'react'

function UseState() {

    const [state, setState] = useState(0)

  return (
    <div>
        <h1>Count : {state}</h1>
        <button onClick={()=>{
            setState(state + 1)
        }}>Like</button>
        <button onClick={()=>{
            setState(state - 1)
        }}>Dislike</button>
        <button onClick={()=>{
            setState(0)
        }}>Reset</button>
    </div>
  )
}

export default UseState