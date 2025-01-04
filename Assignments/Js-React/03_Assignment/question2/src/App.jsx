import "./App.css";
import Header from "./Components/Header/Header";
import Table from "./Components/table/Table";

function App() {

  const data = [
    { name: "Alice", age: 25, location: "New York" },
    { name: "Bob", age: 30, location: "San Francisco" },
    { name: "Charlie", age: 35, location: "Los Angeles" }
  ];

  return (
    <div>
      <Header />
      <Table data={data}/>
    </div>
  );
}

export default App;
