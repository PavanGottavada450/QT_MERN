import "./App.css";
import Header from "./Components/Header/Header";
// import Counter from './Components/Counter-q1/Counter'
import Greeting from "./Components/greeting/Greeting";

function App() {

  return (
    <div>
      <Header />
      <Greeting name="John"/>
    </div>
  );
}

export default App;
