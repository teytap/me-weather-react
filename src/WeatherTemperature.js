import React from "react";
export default function WeatherTemperature(props) {
  return (
    <span className="WeatherTemperature">
      <span className="temperature">{props.celcius}</span>
      <span className="unit">°C</span>
    </span>
  );
}
