import React from "react";
import "./Weather.css";
export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
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
        </div>
      </form>
      <h1>New York</h1>
      <ul>
        <li>Wednesday, 07:00</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
              alt=""
              className="float-left"
            ></img>
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul>
            <li>Precipitation:15%</li>
            <li>Humidity:40%</li>
            <li>Wind:4km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
