import React from 'react'
import { useReducer } from 'react'
import { reducer } from './reducer';

function UseReducer() {

    const [state, dispatch] = useReducer(reducer,0);
  
  return (
    <div>
        <h1>Count : {state}</h1>

        <button onClick={()=>{
            dispatch({type:"like"})
        }}>Like</button>

        <button onClick={()=>{
            dispatch({type:"dislike"})
        }}>Dislike</button>

        <button onClick={()=>{
            dispatch({type:"reset"})
        }}>Reset</button>
    </div>
  )
}

export default UseReducer;