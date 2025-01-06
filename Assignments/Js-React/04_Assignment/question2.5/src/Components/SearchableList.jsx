import React, { useState } from 'react'

function SearchableList({cities}) {

    const [searchInput, setSearchInput] = useState("");

    const filteredCities = cities.filter(city =>
        city.toLowerCase().includes(searchInput.toLowerCase())  
    );

  return (
    <div>
        <input 
            type="text" 
            placeholder='search cities' 
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
        />

        <ol>
            {filteredCities.map((city, index) =>(
                <li key={index}>{city}</li>
            ))}
        </ol>
    </div>
  )
}

export default SearchableList