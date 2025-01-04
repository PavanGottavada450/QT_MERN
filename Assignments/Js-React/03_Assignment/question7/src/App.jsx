import "./App.css";
import Header from "./Components/Header/Header";
import SearchBar from "./Components/seacrhbar/SearchBar";

function App() {

  const names =['Alice', 'Bob', 'Charlie', 'Pavan', 'Sai', 'Durga'];

  return (
    <div>
      <Header />
      <SearchBar names={names} />
    </div>
  );
}

export default App;
