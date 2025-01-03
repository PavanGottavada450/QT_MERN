import "./Counter.css"
import {useState} from "react"


function Counter(){

    var [State,setState] = useState(0);

    function incCount(){
        setState(State + 1);
    }

    function decCount(){
        setState(State - 1);
    }

    function reset(){
        setState(0);
    }

    return(
        <div className="counter">
            <h1>Count App</h1>
            <br />
            <h2>{State}</h2>
            <button onClick={decCount}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={incCount}>Increment</button>
        </div>
    )
}

export default Counter;