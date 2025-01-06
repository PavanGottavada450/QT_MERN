import "./App.css";
import users from "../users.json"

function App() {

  return (
    <div>
      <ol>
        {users.map((Element, index) => (
          <li key={index}>{Element.id} : {Element.name} </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
