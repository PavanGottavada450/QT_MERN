import "./App.css";
import Header from "./Components/Header/Header";
import Product from "./Components/product/Product";
// import Counter from './Components/Counter-q1/Counter'
// import Greeting from "./Components/greeting/Greeting";

function App() {

  return (
    <div>
      <Header />
      <Product name="Laptop" price={1000} />
    </div>
  );
}

export default App;
