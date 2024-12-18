/* eslint-disable react/prop-types */
import "./Header.css"

function Header({subbarao}) {
  return (
    <div className="header">
      <h1>{subbarao("Pavan")}Component</h1>
    </div>
  );
}

export default Header;