// import React, { useState } from "react";
// import CompB from "./CompB";
// import myContext from "./Context"

// function CompA() {
//   const [user, setUser] = useState("Mr.Pavan");

//   return (
//     <div className="box">
//       <h1>Component A</h1>
//       <h2>Hii {user}</h2>
//       <myContext.Provider value={user}>
//         <CompB user={user}/>
//       </myContext.Provider>
//     </div>
//   );
// }

// export default CompA;

import React, { useState } from "react";
import mycontext from "./Context";
import CompB from "./CompB"

function CompA() {
  const [user, setUser] = useState("pavan");

  return (
    <div className="box">
      <h1>comp 1</h1>
      <h2>hii {user}</h2>
      <mycontext.Provider value={user}>
        <CompB user={user}/>
      </mycontext.Provider>
    </div>
  );
}

export default CompA;
