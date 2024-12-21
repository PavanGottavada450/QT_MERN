// import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Electronics from "./components/electronics/Electronics";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mens/Mens";
import Navbar from "./components/navBar/Navbar";
import Womens from "./components/womens/Womens";

function App() {

  return (
    <div>
        <Navbar/>
        <Electronics />
        <Jewelery /> 
        <Mens/>
        <Womens/>
    </div>
  );
}

export default App;
