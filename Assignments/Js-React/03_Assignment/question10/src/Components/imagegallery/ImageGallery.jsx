import React from "react";
import "./ImageGallery.css"

function ImageGallery({images}) {
  return (
    <div className="container">
      {images.map((url, index) => (
        <div className="image-card">
          <img src={url} alt={`image ${index}`} width={"150px"} height={"150px"}/>
        </div>
      ))}
    </div>
  );
}

export default ImageGallery;
