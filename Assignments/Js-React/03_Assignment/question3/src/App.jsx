import "./App.css";
import Header from "./Components/Header/Header";
import GridLayout from "./Components/gridLayout/GridLayout";

function App() {

  const products = ["Laptop", "Smartphone", "Tablet", "Smartwatch","Camera"];

  return (
    <div>
      <Header />
      <GridLayout products={products}/>
    </div>
  );
}

export default App;
