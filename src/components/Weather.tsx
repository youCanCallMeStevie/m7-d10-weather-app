import React from "react";
import { WeatherData } from "../store/types";

interface WeatherProps {
  data: WeatherData;
}
function Weather({ data }: WeatherProps) {
  const fDegrees = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const cDegrees = (data.main.temp - 273.15).toFixed(2);
  const backgroundImage= `/images/${data.weather[0].icon}.jpeg`
  return (
    <section style={{backgroundImage: `url(${backgroundImage})`, zIndex: -1, backgroundSize: "cover", display: "flex", justifyContent:"center", height:"100vh"}}>
      <div>
        <h1>
          {data.name} - {data.sys.country}
        </h1>
        <div>
          <p>{data.weather[0].description}.toCapital</p>
          <p>
            <img
              src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
              alt="icon representing weather condition"
            />
          </p>
        </div>
        <div>
          <p>Temp</p>
          <div>
            <p>
              {fDegrees}
              <sup>&#8457;</sup>
            </p>
            <p>
              {cDegrees}
              <sup>&#8451;</sup>
            </p>
          </div>
        </div>
        <div>
          <p>humidity</p>
          <p>{data.main.humidity}</p>
        </div>
        <div>
          <p>pressure</p>
          <p>{data.main.pressure}</p>
        </div>
        <div>
          <p>wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </section>
  );
}

export default Weather;
