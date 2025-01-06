import "./App.css";
import Gallery from "./Components/Gallery";

function App() {

  const images = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg/800px-Ferrari_F8_Tributo_Genf_2019_1Y7A5665.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeS9orSTVjq2NBxy-RUQbybDLpyH3fiBP_gw&s"
  ];

  return (
    <div>
        <Gallery images = {images}/>
    </div>
  );
}

export default App;
