import React from "react";

const WeatherBox = ({ weather }) => {
  console.log("weather", weather);
  return (
    <div className="weather-box">
      <div>
        <h3 className="city">{weather?.name}</h3>
        <h2 className="temperature">
          {`${Math.floor(weather?.main.temp)}C / ${Math.floor(
            (weather?.main.temp * 9) / 5 + 32
          )}F`}
        </h2>
        <h2 className="condition">{weather?.weather[0].description}</h2>
      </div>
    </div>
  );
};

export default WeatherBox;
