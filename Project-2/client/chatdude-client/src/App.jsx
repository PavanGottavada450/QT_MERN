import "./App.css";
import RouteComp from "./components/config/RouteComp";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          duration: 5000,
        }}
      />
      <RouteComp />
    </div>
  );
}

export default App;
