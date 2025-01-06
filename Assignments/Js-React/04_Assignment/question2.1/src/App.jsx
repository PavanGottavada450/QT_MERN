import "./App.css";
import FilteredList from "./Components/FilteredList";

function App() {

  return (
    <div>
      <FilteredList numbers={[1, 3, 7, 9, 2]} />
    </div>
  );
}

export default App;
