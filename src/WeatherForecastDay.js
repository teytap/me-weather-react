import React from "react";
import WeatherIcon from "./WeatherIcon";
export default function WeatherForecastDay(props) {
  function forecastDay() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="">
      <div className="forecast-day">{forecastDay()}</div>
      <div className="">
        <WeatherIcon code={props.data.weather[0].icon} size={56} />
      </div>
      <div className="">
        <span className="forecast-max">{Math.round(props.data.temp.max)}°</span>{" "}
        <span className="forecast-min">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
