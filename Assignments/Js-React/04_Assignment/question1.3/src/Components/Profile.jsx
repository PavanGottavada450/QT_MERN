import React from 'react'

export function UserProfile({name, email}) {
  return (
    <div>
        <strong>Name :  {name}</strong>
        <br />
        <strong>Email : {email}</strong>
    </div>
  )
}


export function UserStatus({isOnline}) {
  return (
    <div>
        <strong>Status : {isOnline ? 'Online' : 'Offline'}</strong>
    </div>
  )
}
