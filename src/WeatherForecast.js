import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  function responseForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecastData(response.data.daily);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="Weatherforecast">
        <div className="row d-flex justify-content-between">
          {forecastData.map(function (element, index) {
            if (index < 5) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={element} />
                </div>
              );
            } else {
              return null;
            }
          })}
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
