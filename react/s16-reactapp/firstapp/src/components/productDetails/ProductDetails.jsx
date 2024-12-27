import React from "react";
import "./ProductDetails.css"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const [product, setProduct] = useState({
    id: 0,
    category: "",
    image: "",
    title: "",
    price: 0,
    description: "",
    rating: { rate: 0, count: 0 },
  });

  let { id } = useParams(); // obj = { }

  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((error) => {
        alert("error while fectching the data");
      });
  }, []);

  return (
    <div className="productDetailsContainer">
      <div className="leftDiv">
        <img src={product.image} alt="" width={"100%"} height={"400"} />
      </div>
      <div className="rightDiv">
        <dl>
        <dt>
            <b>Product Id</b>
          </dt>
          <dd>
            <h5>{product.id}</h5>
          </dd>
          <dt>
            <b>Product Details</b>
          </dt>
          <dd>
            <h5>{product.title}</h5>
          </dd>
          <dt>
            <b>Price</b>
          </dt>
          <dd>
            <h5>${product.price}</h5>
          </dd>
          <dt>
            <b>Category</b>
          </dt>
          <dd>
            <h5>{product.category}</h5>
          </dd>
          <dt>
            <b>Description</b>
          </dt>
          <dd>
            <h5>{product.description}</h5>
          </dd>
          <dt>
            <b>Rating</b>
          </dt>
          <dd>
            <h5>{product.rating.rate}⭐</h5>
          </dd>
        </dl>

        <button className="btn btn-outline-primary mx-2">Add To Cart</button>
        <button className="btn btn-outline-success">Back To Products</button>
      </div>
    </div>
  );
}

export default ProductDetails;
