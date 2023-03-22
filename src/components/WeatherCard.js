import React from "react";
import "../style/weatherCard.css";
import { useGlobalContext } from "./context";
function WeatherCard({
  singleWeather,
  timeZone,
  setChosenWeather,
  swiperClass,
}) {
  const iconsUrl = `http://openweathermap.org/img/wn/${singleWeather.weather[0].icon}@2x.png`;
  const { isDarkMode } = useGlobalContext();
  const selectWeather = function () {
    setChosenWeather(singleWeather);
  };

  let weatherDate = new Date(
    (singleWeather.dt + timeZone) * 1000
  ).toLocaleDateString("en-us", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });

  return (
    <div
      className={
        isDarkMode
          ? `weather_card dark_weather_card ${swiperClass}`
          : `weather_card ${swiperClass}`
      }
      onClick={selectWeather}
    >
      <span className="date">{weatherDate}</span>
      <span className="temp">{`${Math.round(singleWeather.temp.day)}°`}</span>
      <img
        src={iconsUrl}
        className="single_weather_icon"
        alt={singleWeather.weather[0].description}
      />
    </div>
  );
}

export default WeatherCard;
