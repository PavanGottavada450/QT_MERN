import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
// import Counter from './Components/Counter/Counter'
// import ImageC from './Components/imagec/imageC'
import Profile from './Components/profile/profile'
// import Map from "./Components/Map/Map";

function App() {

  const [state, setState] = useState();

  const handleName = (value) =>{
    setState(value)
  }

  return (
    <div>
      <h1>{state}</h1>
      <Header subbarao={handleName} />
      {/* <Counter /> */}
      {/* <ImageC/> */}
      <Profile/>
    </div>
  );
}

export default App;
