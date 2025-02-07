import React from 'react'
import CompD from './CompD'
// import { UserContext } from './CompA'
import { useContext } from 'react'
import UserContext from './Context'

function CompC() {

    const contextData = useContext(UserContext)

  return (
    <div className='box'>
        <h1>Component C</h1>
        <h2>Hii Again {contextData}</h2>
        <CompD/>
    </div>
  )
}

export default CompC