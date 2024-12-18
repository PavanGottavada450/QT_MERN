import "./Profiles.css";


function Profiles({ name, email, id }) {
  return (
    <div id="card">
        <h1>{name}</h1>
        <p>Id : {id}</p>
        <p>Email : {email}</p>
    </div>
  );
}

export default Profiles;