import "../style/selectedweather.css";
import CurrentDate from "./CurrentDate";
import React from "react";
import { useGlobalContext } from "./context";
const SHORT = "short";
const thousend = 1000;

function SelectedWeather({ timeZone, chosenWeather }) {
  const { isDarkMode, geoData } = useGlobalContext();
  const iconsUrl = `http://openweathermap.org/img/wn/${chosenWeather.weather[0].icon}@2x.png`;

  let weatherDate = new Date(
    (chosenWeather.dt + timeZone) * thousend
  ).toLocaleDateString("en-us", {
    weekday: SHORT,
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={
        isDarkMode
          ? "selected_weather dark_selected_weather"
          : "selected_weather"
      }
    >
      <h2 className="location_name">{`${geoData[0].name} , ${geoData[0].country}`}</h2>
      <div className="selected_body">
        <img
          src={iconsUrl}
          className="selected_icon"
          alt={chosenWeather.weather[0].description}
        />
        <span>{`${Math.round(chosenWeather.temp.day)}°`}</span>
      </div>
      <div className="selected_date_wrapper ">
        <div className="selected_date">{weatherDate}</div>
        <div className="date_phone">
          <CurrentDate page="phone" />
        </div>
      </div>

      <ul className="selected_list">
        <li>{` day feels like: ${Math.round(
          chosenWeather.feels_like.day
        )}°`}</li>
        <li>{`night: ${Math.round(chosenWeather.temp.night)}°`}</li>
        <li>{`night feels like: ${Math.round(
          chosenWeather.feels_like.night
        )}°`}</li>
        <li>{`humidity: ${chosenWeather.humidity}%`}</li>
        <li>{`wind speed: ${chosenWeather.wind_speed} mph`}</li>
      </ul>
    </div>
  );
}

export default SelectedWeather;
