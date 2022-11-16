import React, { useState } from "react";
import axios from "axios";
import NewDate from "./NewDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState(null);
  let [city, setCity] = useState(props.city);
  let [ready, setReady] = useState(false);

  function showWeather(response) {
    setWeatherData({
      temperature: response.data.main.temp,
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });

    console.log(response.data);
    setReady(true);
  }
  function searchCityWeather() {
    let apiKey = "1223d92fc1f5a88dccf0859beb3b3425";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function submitCity(event) {
    event.preventDefault();
    searchCityWeather();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={submitCity}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                class="form-control"
                onChange={changeCity}
              ></input>
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Seach"
                class="btn btn-primary w-100"
              ></input>
            </div>
            <div className="col-3">
              <button className="btn btn-primary w-100">Current</button>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <NewDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-4 mb-5">
          <div className="col-6">
            <div className="clearfix d-flex">
              <div className="float-left">
                <WeatherIcon
                  code={weatherData.icon}
                  alt={weatherData.description}
                  size={100}
                />
              </div>

              <div className="float-left">
                <WeatherTemperature celcius={weatherData.temperature} />
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <WeatherForecast size={100} coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCityWeather();
    return "<p>Loading..</p>";
  }
}
