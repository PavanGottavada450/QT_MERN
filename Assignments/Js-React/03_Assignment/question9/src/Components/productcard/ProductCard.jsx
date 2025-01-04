import React from "react";
import "./ProductCard.css"

function ProductCard({ productName, productPrice, productImage }) {
  return (
    <div className="card">
      <img
        src={productImage}
        alt="product_image"
        width={"200px"}
        height={"200px"}
      />
      <h4>{productName}</h4>
      <h3>{productPrice}</h3>
    </div>
  );
}

export default ProductCard;
