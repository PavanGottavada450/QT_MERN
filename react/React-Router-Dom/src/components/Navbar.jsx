import React from 'react'
import {NavLink, useNavigate } from 'react-router-dom'


function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='navbar'>
        <h1>Router</h1>
        <ul>
            <NavLink to="/"><li>Home</li></NavLink>
            <NavLink to="/product"><li>Products</li></NavLink>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            
        </ul>
        {/* <button onClick={() => navigate('/contact')}>Get Started</button> */}
        <button onClick={() => navigate('/contact', {replace: true})}>Get Started</button>
    </div>
  )
}

export default Navbar