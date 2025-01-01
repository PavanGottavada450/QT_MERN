import "./App.css";
import Header from "./Components/Header/Header";
import List from "./Components/list/List";
// import Counter from './Components/Counter-q1/Counter'
// import Greeting from "./Components/greeting/Greeting";

function App() {

  return (
    <div>
      <Header />
      <List items={['Apple', 'Banana', 'Cherry']} />
    </div>
  );
}

export default App;
