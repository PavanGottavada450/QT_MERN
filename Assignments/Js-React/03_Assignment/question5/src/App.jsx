import "./App.css";
import Header from "./Components/Header/Header";
import StatusMessage from "./Components/operation/StatusMessage";
import Operation from "./Components/operation/StatusMessage";

function App() {

  return (
    <div>
      <Header />
      <StatusMessage status="success" />
    </div>
  );
}

export default App;
