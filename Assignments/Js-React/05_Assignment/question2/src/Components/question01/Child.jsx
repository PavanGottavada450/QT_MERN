import React from 'react'

function Child({title}) {
  return (
    <div>
       <h1> Prop from Parent to Child</h1> 
       <p>{title}</p>
    </div>
  )
}

export default Child