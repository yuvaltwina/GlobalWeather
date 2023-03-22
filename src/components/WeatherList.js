import "../style/weatherlist.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import React from "react";
import WeatherCard from "./WeatherCard";

function WeatherList({
  weatherData,
  chosenWeather,
  setChosenWeather,
  todayWeather,
}) {
  const displayWeatherList = weatherData.daily.map((singleWeather) => {
    const { dt: singleWeatherDt } = singleWeather;
    const { dt: chosenWeatherDt } = chosenWeather || todayWeather;
    const isPrimaryAndSecondaryCardsTimesMatch =
      singleWeatherDt === chosenWeatherDt;
    const swiperClass = isPrimaryAndSecondaryCardsTimesMatch
      ? "chosen_weather_in_list"
      : "";
    return (
      <SwiperSlide key={singleWeatherDt}>
        <WeatherCard
          singleWeather={singleWeather}
          timeZone={weatherData.timezone_offset}
          setChosenWeather={setChosenWeather}
          swiperClass={swiperClass}
        />
      </SwiperSlide>
    );
  });

  return (
    <div className="swiper-container">
      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          900: {
            slidesPerView: 4,
          },
          1352: {
            slidesPerView: 6,
          },
          1500: {
            slidesPerView: 8,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {displayWeatherList}
      </Swiper>
    </div>
  );
}

export default WeatherList;
