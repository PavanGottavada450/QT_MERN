import "./Profiles.css";


function Profiles({ name, email, id }) {
  return (
    
    <li id="card">
        <h1>{name}</h1>
        <p>Id : {id}</p>
        <p>Email : {email}</p>
    </li>
  );
}

export default Profiles;