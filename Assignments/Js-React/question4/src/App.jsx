import "./App.css";
import Header from "./Components/Header/Header";
import UserProfile from "./Components/userProfile/UserProfile";
// import Counter from './Components/Counter-q1/Counter'
// import Greeting from "./Components/greeting/Greeting";

function App() {

  return (
    <div>
      <Header />
      <UserProfile user={{ name: "Alice", age: 32, location: "New York" }} />
    </div>
  );
}

export default App;
