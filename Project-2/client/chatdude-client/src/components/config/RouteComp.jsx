import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import SignUp from "../pages/Signup";
import SignIn from "../pages/Signin";
import NotFound from "../pages/NotFound";

function RouteComp() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} /> {/* Default route */}
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default RouteComp;
