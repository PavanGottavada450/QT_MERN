import React, { useState, createContext } from "react";
import CompB from "./CompB";
import UserContext from "./Context"

// export const UserContext = createContext();

function CompA() {
  const [user, setUser] = useState("Mr.Pavan");

  return (
    <div className="box">
      <h1>Component A</h1>
      <h2>Hii {user}</h2>
      <UserContext.Provider value={user}>
        <CompB user={user}/>
      </UserContext.Provider>
    </div>
  );
}

export default CompA;
