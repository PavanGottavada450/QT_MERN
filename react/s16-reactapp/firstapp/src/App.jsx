// import { useState } from "react";
import "./App.css";
import { Route,Routes } from "react-router-dom";
import Electronics from "./components/electronics/Electronics";
import Jewelery from "./components/jewelery/Jewelery";
import Mens from "./components/mens/Mens";
import Navbar from "./components/navBar/Navbar";
import Womens from "./components/womens/Womens";
import Home from "./components/home/Home"
import ProductDetails from "./components/productDetails/ProductDetails";
import Profile from "./components/profile/Profile";
import PageNotFound from "./components/pageNotfOUND/PageNotFound";
import Details from "./components/details/Details";
import Help from "./components/help/Help";
import ChangePassword from "./components/changePassword/ChangePassword";
import Wishlist from "./components/wishlist/Wishlist";
import Orders from "./components/orders/Orders";

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


          <Route path="/profile" element={<Profile/>}>
            <Route path="details" element={<Details />}/>
            <Route path="orders" element={<Orders />}/>
            <Route path="wishlist" element={<Wishlist />}/>
            <Route path="changePassword" element={<ChangePassword/>}/>
            <Route path="help" element={<Help/>}/>
          </Route>


          <Route path="/productdetails/:id" element={<ProductDetails/>}/>
          <Route path="/*" element={<PageNotFound/>}/>
        </Routes>
    </div>
  );
}

export default App;
