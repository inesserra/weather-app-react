import React from "react";

import "./Overview.css";

export default function Overview() {
  let tempDisplay = {
    city: "New York",
    temperature: 12,
    date: "Friday 16:06",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    humidity: 83,
    wind: 2,
  };
  return (
    <div className="Overview">
      <div className="container">
        <h1>{tempDisplay.city}</h1>
        <ul>
          <li>{tempDisplay.date}</li>
          <li>{tempDisplay.description}</li>
        </ul>

        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img
                src={tempDisplay.imgUrl}
                alt="{description}"
                className="float-left weather-image"
              />
              <span className="float-left">
                <strong> {tempDisplay.temperature}</strong>
                <span className="units">
                  <a href="/" className="active">
                    °C
                  </a>{" "}
                  |<a href="/">°F</a>
                </span>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>{tempDisplay.humidity}</span>%
              </li>
              <li>
                Wind: <span>{tempDisplay.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
