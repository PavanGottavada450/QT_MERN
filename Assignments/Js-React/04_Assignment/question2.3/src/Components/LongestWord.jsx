import React from 'react'

function LongestWord({words}) {

  const longestWord = words.reduce((longest, current) => 
    current.length > longest.length ? current : longest,
    ""
  );

  return (
    <div>
        <h3>Longest Word :</h3>
        <p>{longestWord}</p>
    </div>
  )
}

export default LongestWord