
import "./Card.css"

function Card({name, id, role}) {
  return (
    <div id="card">
        <h1>Name : {name}</h1>
        <p>Id : {id}</p>
        <p>Role : {role}</p>
    </div>
  )
}

export default Card;