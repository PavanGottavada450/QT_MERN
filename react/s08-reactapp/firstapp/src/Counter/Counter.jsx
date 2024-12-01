import "./Counter.css"
import {useState} from "react"


function Counter(){

    var [State,setState] = useState(0);

    function incCount(){
        setState(State + 1);
    }

    return(
        <div className="counter">
            <h1>Count Value : {State} </h1>
            <br />
            <button onClick={incCount}>incCount</button>
        </div>
    )
}

export default Counter;