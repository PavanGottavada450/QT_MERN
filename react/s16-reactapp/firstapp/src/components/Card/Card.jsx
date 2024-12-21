import "./Card.css"

function Card({data}) {

  const {image, title, price, rating } = data;

  return (
    <div className="card">
        <img src={image} alt="" width={"100%"} height={200} />
        <h4>{title}</h4>
        <p>Price : ${price}</p>
        <p>Rating : {rating.rate}⭐</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <div style={{display: "flex", justifyContent: "space-evenly"}}>
            <button>Product Details</button>
            <button>Add to Cart</button>
        </div>
        
    </div>
  )
}

export default Card;