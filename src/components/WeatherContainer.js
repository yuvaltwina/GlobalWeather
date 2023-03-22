import "../style/weatherContainer.css";

import React, { useEffect, useState } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import SelectedWeather from "./SelectedWeather";
import WeatherList from "./WeatherList";
import { useGlobalContext } from "./context";

const WeatherContainer = () => {
  const { weatherData, isLoading, error } = useGlobalContext();
  const [chosenWeather, setChosenWeather] = useState(null);

  useEffect(() => {
    setChosenWeather(null);
  }, [weatherData]);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error.isError) {
    return <div className="place_not_found">{error.errorMessage}</div>;
  }

  if (weatherData?.daily) {
    const todayWeather = weatherData.daily[0];
    return (
      <div className="main_weather_container">
        <div className="selected_weather_container">
          <SelectedWeather
            chosenWeather={chosenWeather ? chosenWeather : todayWeather}
            timeZone={weatherData.timezone_offset}
          />
        </div>
        <div className="weather_list_container">
          <WeatherList
            chosenWeather={chosenWeather}
            weatherData={weatherData}
            setChosenWeather={setChosenWeather}
            todayWeather={todayWeather}
          />
        </div>
      </div>
    );
  }
};

export default WeatherContainer;
