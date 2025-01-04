import "./App.css";
import Header from "./Components/Header/Header";
import ProductCard from "./Components/productcard/ProductCard";

function App() {

  const productName = "Nike Jorden";
  const productPrice = "$999";
  const productImage = "https://static.nike.com/a/images/w_1280,q_auto,f_auto/acc979db-e99d-488e-8791-7dcfcd7e2f37/air-jordan-1-ko-chicago-release-date.jpg";

  return (
    <div>
      <Header />
      <ProductCard productName={productName} productPrice = {productPrice} productImage = {productImage}/>
    </div>
  );
}

export default App;
