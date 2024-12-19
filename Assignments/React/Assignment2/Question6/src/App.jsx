import "./App.css";
import Header from "./Components/Header/Header";
import Profiles from "./Components/ListofUserProfiles/Profiles";


function App() {

  const profiles = [
    { "id": 1, "name": "John Doe", "email": "john@example.com" },
    { "id": 2, "name": "Jane Smith", "email": "jane@example.com" },
    { "id": 3, "name": "Alice Johnson", "email": "alice@example.com" }
  ];

  return (
    <div>
      <Header />
      <ol id="container">
        {profiles.map((profile, index)=>(
          <Profiles 
            key={index}
            name={profile.name}
            email={profile.email}
            id={profile.id}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
