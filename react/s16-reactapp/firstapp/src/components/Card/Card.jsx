import ProductDetails from "../productDetails/ProductDetails";
import "./Card.css"
import {Link} from "react-router-dom"

function Card({data}) {

  const {image, title, price, rating, id } = data;

  return (
    <div className="card">
        <img src={image} alt="" width={"100%"} height={200} />
        <h4 className="h5 text-warning">{title.slice(0,7)}</h4>
        <p>Price : ${price}</p>
        <p>Rating : {rating.rate}⭐</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
        <Link to={`/productdetails/${id}`} >
          <button>Product Details</button>
        </Link>
        
        <button>Add to Cart</button>

        
        </div>
        
    </div>
  )
}

export default Card;