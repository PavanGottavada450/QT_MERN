import "./App.css";
import Child from "./Components/question01/Child";
import Header from "./Components/Header/Header";
import Child2 from "./Components/question02/Child2";
import Child3 from "./Components/question03/Child3";
import { useState } from "react";

function App() {

  const [message,setMessage] = useState('');

  const title= "Welcome to React"
  const fullName = {firstName: "John", lastName: "Doe"};
  const handleButton = () => {
    console.log("Button Clicked");
    setMessage("Button Clicked😁");
  }

  return (
    <div>
      <Header />
      <Child title={title}/>
      <Child2 fullName= {fullName}/>
      <Child3 btn={handleButton} message={message} />
    </div>
  );
}

export default App;
