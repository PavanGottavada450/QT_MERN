import React from 'react'

function Child3({btn, message}) {
  return (
    <div>
        <h1>Pass an Event Handler to the Child</h1>
        <button onClick={btn}>Click Me 😊</button>
        {message && <h3>{message}</h3>}
    </div>
  )
}

export default Child3