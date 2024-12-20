import "./Navbar.css"


function Navbar() {
  return (
    <div id="nav-container">
        <div id="brand">
            <h1>Brand-Name</h1>
        </div>
        <div id="anchors">
            <a href="">Home</a>
            <a href="">Mens</a>
            <a href="">Womens</a>
            <a href="">Electronics</a>
            <a href="">Jewelery</a>
        </div>
        <div id="logos">
            <a href="">Cart</a>
            <a href="">Fav</a>
            <button>Logout</button>
        </div>
        
    </div>
  )
}

export default Navbar