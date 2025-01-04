import React from 'react'

function From({fields}) {
  return (
    <div className='from-container'>

        {fields.map((Element) => {
          return <div className='from-item'>
              <label >{Element.label}</label>
              <input type={Element.type} placeholder={Element.name}/>
          </div>
        }
        )}
    </div>
  )
}

export default From