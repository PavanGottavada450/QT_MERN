import React from 'react'

function Table({data}) {
  return (
    <table frame="box" rules="all">
        <thead>
            <th>Name</th>
            <th>Age</th>
            <th>Location</th>
        </thead>
        <tbody>
            {data.map((Element, index) =>(
                <tr key={index}>
                    <td>{Element.name}</td>
                    <td>{Element.name}</td>
                    <td>{Element.name}</td>
                </tr>
            ))}
        </tbody>
    </table>
  )
}

export default Table