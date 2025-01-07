import "./App.css";
import Gallery from "./Components/Gallery";
import image1 from "./assets/image1.jpg";
import image2 from './assets/image2.jpg';

function App() {

  const images = [image1, image2];

  console.log(images);
  return (
    <div>
        <Gallery images = {images}/>
    </div>
  );
}

export default App;
