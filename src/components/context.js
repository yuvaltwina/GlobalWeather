import React, { useCallback, useContext, useEffect, useState } from "react";

import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState({});
  const [geoData, setGeoData] = useState({});
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [city, setCity] = useState("jerusalem");
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMessage: "City not found",
  });
  // לקבל הסבר על דיפנדנסיס
  const fetchDataWithSearch = useCallback(async () => {
    if (city) {
      setError((prevState) => ({ ...prevState, isError: false }));
      setLoading(true);
      try {
        const geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.REACT_APP_KEY}`;
        const geoResponse = await axios.get(geoUrl);
        const geoData = geoResponse.data;
        if (!geoData[0]) {
          setGeoData("");
          setError((prevState) => ({ ...prevState, isError: true }));
          setLoading(false);
          return;
        }
        setGeoData(geoData);
        const weekWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${geoData[0].lat}&lon=${geoData[0].lon}&units=metric&appid=${process.env.REACT_APP_KEY}`;
        const weekWeatherResponse = await axios.get(weekWeather);
        const weekWeatherData = await weekWeatherResponse.data;
        setWeatherData(weekWeatherData);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError({ errorMessage: "could not fetch data", isError: true });
      }
    }
    setLoading(false);
  }, [city, setGeoData, setWeatherData]);

  useEffect(() => {
    fetchDataWithSearch();
  }, [fetchDataWithSearch]);

  return (
    <AppContext.Provider
      value={{
        setWeatherData,
        weatherData,
        geoData,
        setGeoData,
        isDarkMode,
        setIsDarkMode,
        setCity,
        fetchDataWithSearch,
        isLoading,
        error,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
