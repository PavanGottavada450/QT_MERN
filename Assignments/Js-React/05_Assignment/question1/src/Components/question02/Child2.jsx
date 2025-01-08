import React from 'react'

function Child2({fullName}) {
  return (
    <div>
        <h1>Multiple Props for Full Name</h1>
        <strong>FirstName:{fullName.firstName}</strong>
        <br />
        <strong>LastName:{fullName.lastName}</strong>
    </div>
  )
}

export default Child2