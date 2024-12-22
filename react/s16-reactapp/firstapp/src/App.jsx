// import { useState } from "react";
import "./App.css";
import Electronics from "./components/electronics/Electronics";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mens/Mens";
import Navbar from "./components/navBar/Navbar";
import Womens from "./components/womens/Womens";
import Home from "./components/home/Home"
import { Route,Routes } from "react-router-dom";
import PageNotFound from "./components/pageNotfOUND/PageNotFound";
import ProductDetails from "./components/productDetails/ProductDetails";
import Profile from "./components/profile/Profile";


function App() {

  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/electronics" element={<Electronics />}/>
          <Route path="/jewelery" element={<Jewelery /> }/>
          <Route path="/mens" element={<Mens /> }/>
          <Route path="/womens" element={<Womens/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/productdetails" element={<ProductDetails/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
        
    </div>
  );
}

export default App;
