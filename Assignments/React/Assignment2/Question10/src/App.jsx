import "./App.css";
import Header from "./Components/Header/Header";
import Card from "./Components/Card/Card";


function App() {

  const teamMembers = [
    { "id": 1, "name": "Alice", "role": "Developer" },
    { "id": 2, "name": "Bob", "role": "Designer" },
    { "id": 3, "name": "Carol", "role": "Project Manager" }
  ]

  return (
    <div>
      <Header />
      <div id="container">
      {
        teamMembers.map((teamMember,index)=>(
            <Card 
              key={index}
              name = {teamMember.name}
              role = {teamMember.role}
              id = {teamMember.id}
            />
        ))
      }
      </div>
      
    </div>
  );
}

export default App;
