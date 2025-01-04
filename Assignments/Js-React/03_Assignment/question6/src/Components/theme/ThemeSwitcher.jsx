// import React, { useState } from 'react'
// import "./ThemeSwitcher.css"

// function ThemeSwitcher() {

//   const [theme,setTheme] = useState('light');

//   const toggleTheme = (selectedTheme) =>{
//     setTheme(selectedTheme);
//   };

//   return (
//     <div className={`container ${theme}`}>
//         <h3>Name :</h3> 
//         <p>pavan</p><br />

//         <h3>Role</h3>
//         <p>MERN Stack developer</p><br />

//         <h3>Discription</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora corporis sint consequatur soluta at error labore perferendis repudiandae voluptatum!</p>
//         <br />
//         <button onClick={() => toggleTheme('light')} id='light-btn'>Light Mode</button>
//         <button onClick={() => toggleTheme('dark')} id='dark-btn'>Dark Mode</button>
//     </div>
//   )
// }

// export default ThemeSwitcher


import React, { useState } from 'react'
import "./ThemeSwitcher.css"

function ThemeSwitcher() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = (selectedTheme) =>{
    setTheme(selectedTheme);
  }

  return (
    <div className={`container ${theme}`}>
      <h3>Name :</h3> 
      <p>pavan</p><br />

      <h3>Role</h3>
      <p>MERN Stack developer</p><br />

      <h3>Discription</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum tempora corporis sint consequatur soluta at error labore perferendis repudiandae voluptatum!</p>
      <br />
      <button onClick={() => toggleTheme('light')}>Light Mode</button>
      <button onClick={() => toggleTheme('dark')}>Dark Mode</button>
    </div>
  )
}

export default ThemeSwitcher