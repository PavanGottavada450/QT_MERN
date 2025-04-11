import React from 'react'
// import { UserContext } from './CompA'
import { useContext } from 'react'
import myContext from './Context';

function CompD() {

    const contextData = useContext(myContext);

  return (
    <div className='box'>
        <h1>Component D</h1>
        <h2>Bye {contextData}</h2>
    </div>
  )
}

export default CompD