import React, { useState } from 'react'
import "./Rating.css"

function Rating({maxStars}) {

    const [rating ,setRating] = useState(0);
    const [hover, setHover] = useState(0);

  return (
    <div className='rating-container'>
        {[...Array(maxStars)].map((star,index) => (
            
            <span
                key={index}
                className={`star ${index < ( rating || hover ) ? "filled" : ""}`}
                onClick={() => setRating(index + 1)}
                onMouseOver={() => setHover(index + 1)}
                onMouseLeave={() => setHover(rating)}
            >
                &#9733;
            </span>
        ))}
        <br />
        <p>{rating ? `you rated ${rating} star${rating > 1 ? "s" : ""}` : "click on a star to rate"}</p>
    </div>
  )
}

export default Rating