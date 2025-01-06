import React from 'react'

function CapitalizeWords({words}) {

    const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

  return (
    <div>
        <h3>Capitalized Words :</h3>
        <p>{words.map(capitalize).join(",")}</p>
    </div>
  )
}

export default CapitalizeWords