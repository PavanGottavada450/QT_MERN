import React from 'react'

function FilteredList({numbers}) {

    const filterednumbers = numbers.filter((num) => num > 5)

  return (
    <h3>
        filterednumbers : {filterednumbers.join(",")}
    </h3>
  )
}

export default FilteredList