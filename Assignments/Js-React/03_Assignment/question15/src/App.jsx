import "./App.css";
import Header from "./Components/Header/Header";
import WeatherCard from "./Components/weatherCard/WeatherCard";

function App() {

  const city = "Hyderabad";
  const temperature = "27°C";
  const weatherIcon = "https://uxwing.com/wp-content/themes/uxwing/download/weather/weather-icon.png";

  return (
    <div>
      <Header />
      <WeatherCard city={city} temperature = {temperature} weatherIcon = {weatherIcon}/>
    </div>
  );
}

export default App;
