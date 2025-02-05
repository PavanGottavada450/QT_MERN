import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function NotFound() {

    const navigate = useNavigate();

  return (
    <div>
        <h1>404 PAGE NOT FOUND⚠️</h1>
        <br />
        <button onClick={() => navigate('/')}>Go To Home</button>
    </div>
  )
}

export default NotFound