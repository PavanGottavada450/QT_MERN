// import React from 'react'
// import CompD from './CompD'
// import { useContext } from 'react'
// import myContext from './Context'

// function CompC() {

//     const contextData = useContext(myContext)

//   return (
//     <div className='box'>
//         <h1>Component C</h1>
//         <h2>Hii Again {contextData}</h2>
//         <CompD/>
//     </div>
//   )
// }

// export default CompC

import React from "react";
import mycontext from "./Context";
import { useContext } from "react";
import CompD from "./CompD"

function CompC() {
  const contextData = useContext(mycontext);
  return (
    <div className="box">
      <h1>compC</h1>
      <h2>hii {contextData}</h2>
      <CompD />
    </div>
  );
}

export default CompC;
