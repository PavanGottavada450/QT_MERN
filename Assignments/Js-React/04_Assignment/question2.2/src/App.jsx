import "./App.css";
import CapitalizeWords from "./Components/CapitalizeWords";

function App() {

  return (
    <div>
      <CapitalizeWords words={['react', 'javascript', 'html']} />
    </div>
  );
}

export default App;
