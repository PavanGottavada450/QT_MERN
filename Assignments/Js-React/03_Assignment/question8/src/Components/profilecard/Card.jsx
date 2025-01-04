import React from 'react'
import "./Card.css"

function Card({name, bio, profileImage}) {
  return (
    <div className='card'>
        <img 
            src={profileImage}
            alt="profile_pic" 
            width={"200px"} 
            height={"200px"} 
            
        />
        <div className="info">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Bio:</strong> {bio}
        </p>
      </div>
    </div>
  )
}

export default Card