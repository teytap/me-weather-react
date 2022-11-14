import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  return (
    <div className="Weatherforecast">
      <div className="row">
        <div className="forecast-day">Thu</div>
        <div className="">
          <ReactAnimatedWeather
            icon="RAIN"
            color="white"
            size={props.size}
            animate={true}
          />
        </div>
        <div className="">
          <span className="forecast-max">22°</span>{" "}
          <span className="forecast-min">12°</span>
        </div>
      </div>
    </div>
  );
}
