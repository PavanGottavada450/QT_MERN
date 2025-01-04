import React, { useState } from 'react'
import "./SearchBar.css"

function SearchBar({names}) {

  const [searchInput,setSearchInput] = useState('');

  const filteredNames = names.filter((name) => 
    name.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div>
        <input 
          type="text" 
          placeholder='search items..'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <ul>
          {filteredNames.map((name, index) =>(
            <li key={index}>{name}</li>
          ))}
        </ul>
    </div>
  )
}

export default SearchBar