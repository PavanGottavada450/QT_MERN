import { useState } from "react";
import CounterDisplay from "./counterDisplay";
import "./CounterApp.css"

function CounterApp() {

  const [Count, setCount] = useState(0);

  return (
    <div id="container">
      <h1>Counter Display</h1><br />
      <CounterDisplay count={Count}/><br />

      <button onClick={()=>{setCount(Count - 1)}}>Decrement</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <button onClick={()=>{setCount(Count + 1)}}>Increment</button>

    </div>
  )
}

export default CounterApp;