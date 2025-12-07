import React from "react";
import { Button } from "react-bootstrap";

// Apply bootstrap

const WeatherButton = ({ cities, setCity, handleCityChange }) => {
  return (
    <div className="choice">
      <Button
        className="button"
        size="lg"
        variant="light"
        onClick={() => handleCityChange("current")}
      >
        Current Location
      </Button>

      {/* <button className="button" onclick={() => {}}>
        Paris
      </button>
      <button className="button" onclick={() => {}}>
        Seoul
      </button>
      <button className="button" onclick={() => {}}>
        LA
      </button>
      <button className="button" onclick={() => {}}>
        NewYork
      </button> 대신 자바스크립트 어레이함수 사용*/}

      {cities.map((item, index) => (
        <Button
          key={index}
          size="lg"
          variant="light"
          onClick={() => handleCityChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
