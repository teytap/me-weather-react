import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="WeatherForecastDay mt-2 pt-2 pb-2">
      <div className="forecast-day mb-2">{forecastDay()}</div>
      <div className="icon">
        <WeatherIcon code={props.data.weather[0].icon} size={40} />
      </div>
      <div className="max-min">
        <span className="forecast-max">{Math.round(props.data.temp.max)}°</span>{" "}
        <span className="forecast-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
