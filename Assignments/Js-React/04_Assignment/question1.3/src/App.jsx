import "./App.css";
import {UserProfile,UserStatus} from "./Components/Profile";

function App() {

  return (
    <div>
      <UserProfile name="Jane" email="jane@example.com" />
      <UserStatus isOnline={true} />
    </div>
  );
}

export default App;
