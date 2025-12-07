import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./component/WeatherBox";
import WeatherButton from "./component/WeatherButton";
import "bootstrap/dist/css/bootstrap.min.css";
import { ClipLoader } from "react-spinners";
import API_Key from "./.env";

// 1. weather info by current location
// 2. city-name, C, F, condition
// 3. 5 buttons ((1)current (2)paris (3)seoul (4)LA (5)Newyork)
// 4. From buttons to the info
// 5. Current info -> changing
// 6. await -> loading spinner

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(false);

  const cities = ["Paris", "Seoul", "Tokyo", "New York"];

  const getCurrentLoca = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLoca(lat, lon);
    });
  };

  const getWeatherByCurrentLoca = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_Key}&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();

    setWeather(data);
    setLoading(false);
  };

  const handleCityChange = (city) => {
    if (city === "current") {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}units=metric`;
    setLoading(true);
    let resopnse = await fetch(url);
    let data = await resopnse.json();

    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == null) {
      getCurrentLoca();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader
            color="#00124eff"
            loading={loading}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton
            cities={cities}
            handleCityChange={handleCityChange}
            setCity={setCity}
          />
        </div>
      )}
    </div>
  );
}

export default App;
