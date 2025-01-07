import React from "react";

function Gallery({ images }) {
  return (
    <div>
      <ul>
        {images.map((element, index) => (
          <img
            src={element}
            alt=""
            key={index}
            width={"200px"}
            height={"200px"}
          />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
