import "./App.css";
import Header from "./Components/Header/Header";
import From from "./Components/from/From";

function App() {

  const fields = [
    { label: "Username", type: "text", name: "username" },
    { label: "Email", type: "email", name: "email" },
    { label: "Password", type: "password", name: "password" }
  ];

  return (
    <div>
      <Header />
      <From fields={fields}/>
    </div>
  );
}

export default App;
