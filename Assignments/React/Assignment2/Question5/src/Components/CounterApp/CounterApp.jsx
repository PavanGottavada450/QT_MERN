import { useState } from "react";


function CounterApp() {

  const [State, setState] = useState(0);

  return (
    <div id="container">
      <h1>Counter Display</h1><br />
      <h2>{State}</h2><br />

      <button onClick={()=>{setState(State - 1)}}>Decrement</button>
      <button onClick={()=>{setState(0)}}>Reset</button>
      <button onClick={()=>{setState(State + 1)}}>Increment</button>

    </div>
  )
}

export default CounterApp;