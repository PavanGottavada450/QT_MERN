import "./App.css";
import Header from "./Components/Header/Header";
import Table from "./Components/Table/Table";


function App() {

  const orders = [
    { "orderId": "1001", "customer": "John Doe", "amount": "$120" },
    { "orderId": "1002", "customer": "Jane Smith", "amount": "$250" },
    { "orderId": "1003", "customer": "Alice Johnson", "amount": "$75" }
  ];

  return (
    <div>
      <Header />
      <Table orders={orders}/>

    </div>
  );
}

export default App;
