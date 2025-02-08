import { useReducer } from 'react'
import { reducer } from './reducer';

function UseReducer() {

    const [state, dispatch] = useReducer(reducer,0);
  
  return (
    <div className='container'>
        <h1>Count : {state}</h1>

        <button className='btn btn-success mx-2' onClick={()=>{
            dispatch({type:"like"})
        }}>Like</button>

        <button className='btn btn-danger mx-2' onClick={()=>{
            dispatch({type:"dislike"})
        }}>Dislike</button>

        <button className='btn btn-info mx-2' onClick={()=>{
            dispatch({type:"reset"})
        }}>Reset</button>
    </div>
  )
}

export default UseReducer;