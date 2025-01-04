import React from 'react'

function LoginForm() {
  return (
    <form className='container'>
        <label >UserName :</label>
        <input type="text" placeholder="Enter UserName"/>
        <br />
        <label>Password :</label>
        <input type="password" placeholder='password'/>
        <br />
        <button type="submit" >Login</button>
    </form>
  )
}

export default LoginForm