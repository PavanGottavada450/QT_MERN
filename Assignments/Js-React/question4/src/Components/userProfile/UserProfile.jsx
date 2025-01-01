import React from 'react'

function UserProfile({user}) {
  return (
    <div>
        User Name: {user.name} <br />
        Age: {user.age} <br />
        Location: {user.location} <br />
        Welcome, Mature User
    </div>
  )
}

export default UserProfile