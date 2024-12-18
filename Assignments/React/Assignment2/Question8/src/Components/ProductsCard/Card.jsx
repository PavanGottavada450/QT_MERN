import "./Card.css"


function Card({name, id, price, image}) {
  return (
    <div id="card">
        <img src={image} alt="" width={100} height={100}/>
        <h1>{name}</h1>
        <p>id : {id}</p>
        <p>Price : {price}</p>

    </div>
  )
}

export default Card;