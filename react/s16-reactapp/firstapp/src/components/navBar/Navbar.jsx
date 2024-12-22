import { Link } from "react-router-dom"
import "./Navbar.css"


function Navbar() {
  return (
    <div id="nav-container">
        <div id="brand">
            <h1>Ecomm</h1>
        </div>
        <div id="anchors">
            <Link to="/">Home</Link>
            <Link to="/mens">Mens</Link>
            <Link to="/womens">Womens</Link>
            <Link to="/electronics">Electronics</Link>
            <Link to="/jewelery">Jewelery</Link>
            <Link to="/profile">Profile</Link>
        </div>
        <div id="logos">
            <Link to="">Cart</Link>
            <Link to="">Fav</Link>
            <button>Logout</button>
        </div>
        
    </div>
  )
}

export default Navbar