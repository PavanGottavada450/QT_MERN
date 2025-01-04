import React from 'react'
import './WeatherCard.css'

function WeatherCard({city, temperature, weatherIcon}) {
  return (
    <div className='container'>
        <h1 style={{color : "red"}}>WeatherCard</h1>
        <img src={weatherIcon} alt="" width={"100px"}  height={"100px"}/>
        <h3>{city}</h3>
        <p>{temperature}</p>
    </div>
  )
}

export default WeatherCard