import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function responseForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecastData(response.data.daily);
  }
  function forecastDay() {
    let date = new Date(forecastData[0].dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  if (loaded) {
    return (
      <div className="Weatherforecast">
        <div className="row">
          <div className="forecast-day">{forecastDay()}</div>
          <div className="">
            <WeatherIcon code={forecastData[0].weather[0].icon} size={56} />
          </div>
          <div className="">
            <span className="forecast-max">
              {Math.round(forecastData[0].temp.max)}°
            </span>{" "}
            <span className="forecast-min">
              {Math.round(forecastData[0].temp.min)}°
            </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "eae061c95483dd066657bfc7525418ed";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(responseForecast);
    return null;
  }
}
