import "./App.css";
import FilteredProducts from "./Components/FilteredProducts";

function App() {

  const products = [
    { id: 1, name: "Laptop", price: 900 },
    { id: 2, name: "Keyboard", price: 40 },
    { id: 3, name: "Mouse", price: 25 },
    { id: 4, name: "Monitor", price: 150 },
  ];

  return (
    <div>
        <FilteredProducts products={products}/>
    </div>
  );
}

export default App;
