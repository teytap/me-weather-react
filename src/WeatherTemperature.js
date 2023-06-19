import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelcius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  if (unit === "celcius") {
    return (
      <span className="WeatherTemperature d-flex">
        <span className="temperature">{Math.round(props.celcius)}</span>
        <span className="unit">
          <span className="celcius">°C</span> |
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </span>
    );
  } else {
    return (
      <span className="WeatherTemperature d-flex align-items-start">
        <span className="temperature">
          {Math.round((props.celcius * 9) / 5 + 32)}
        </span>
        <div className="unit">
          <a href="/" className="celcius" onClick={showCelcius}>
            °C
          </a>{" "}
          |<span className="fahrenheit">°F</span>
        </div>
      </span>
    );
  }
}
