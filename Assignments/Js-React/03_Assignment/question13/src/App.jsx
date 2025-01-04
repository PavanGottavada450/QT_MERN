import "./App.css";
import Header from "./Components/Header/Header";
import Rating from "./Components/rating/Rating";

function App() {



  return (
    <div>
      <Header />
      <Rating maxStars = {5}/>
    </div>
  );
}

export default App;
