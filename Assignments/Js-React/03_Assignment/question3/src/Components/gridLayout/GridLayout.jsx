import React from 'react'
import "./GridLayout.css"

function GridLayout({products}) {
  return (
    <div className='grid-container'>
        {products.map((item,index) => (
            <div className='grid-item' key={index}>
                {item}
            </div>
        ))}
    </div>
  )
}

export default GridLayout