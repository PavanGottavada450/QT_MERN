import "./App.css";
import Header from "./Components/Header/Header";
import ImageGallery from "./Components/imagegallery/ImageGallery";

function App() {

  const images = [
    "https://media.istockphoto.com/id/1435226078/photo/front-of-a-white-bmw-m4-parked-on-a-street-with-trees-in-the-background.jpg?s=612x612&w=0&k=20&c=l1IupUrh-_Zbcse-hDkaUAh-qMD82hJspXjnN0IBZlg=",
    "https://images.pexels.com/photos/100650/pexels-photo-100650.jpeg?cs=srgb&dl=pexels-mikebirdy-100650.jpg&fm=jpg",
    "https://parkplus-bkt-img.parkplus.io/5_BMW_M8_Coupe_284aed6741.webp",
    "https://d2m3nfprmhqjvd.cloudfront.net/blog/20230522183642/BMW-X3-1160x653.webp",
    "https://imgd.aeplcdn.com/1280x720/n/cw/ec/130379/bmw-7-series-front-view1.jpeg?isig=0&wm=0",
  ]

  return (
    <div>
      <Header />
      <ImageGallery images={images} />
    </div>
  );
}

export default App;
