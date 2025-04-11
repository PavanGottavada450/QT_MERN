import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NameC from "./Components/redux/NameC";
import { Provider } from "react-redux";
import mystore from "./store/store";

function App() {
  return (
    <Provider store={mystore}>
      <NameC />
    </Provider>
  );
}

export default App;
