import "./App.css";
import SearchableList from "./Components/SearchableList";

function App() {

  const cities = ["New York", "Los Angeles", "Chicago", "Houston",
    "Phoenix"];

  return (
    <div>
        <SearchableList cities={cities}/>
    </div>
  );
}

export default App;
