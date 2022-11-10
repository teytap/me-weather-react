import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function Weather() {
  let [weatherData, setWeatherData] = useState(null);
  let [ready, setReady] = useState(false);

  function showWeather(response) {
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      humidity: Math.round(response.data.main.humidity),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      city: response.data.name,
      iconUrl: "#",
      date: "Wednesday, 07:00",
    });

    console.log(response.data);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="Type a city.."
                class="form-control"
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
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix d-flex">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              ></img>
              <div className="float-left">
                <span className="temperature">{weatherData.temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <ul>
              <li>Precipitation:15%</li>
              <li>Humidity:{weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    //const apiKey = "ta54a851ba838f3efeo0560843fba113";
    let city = "Ankara";
    let apiKey = "1223d92fc1f5a88dccf0859beb3b3425";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
    return <p>Loading..</p>;
  }
}
