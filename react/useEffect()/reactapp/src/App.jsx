import "./App.css";
import CleanUp from "./Components/timer/CleanUp";
import TimerNoDep from "./Components/timer/TimerNoDep";
import TimerWithDep from "./Components/timer/TimerWithDep";
import TimerWithValue from "./Components/timer/TimerWithValue";


function App() {

  return (
    <div>
      {/* <TimerNoDep /> */}
      {/* <TimerWithDep /> */}
      {/* <TimerWithValue /> */}
      <CleanUp /> 
    </div>
  );
}

export default App;
