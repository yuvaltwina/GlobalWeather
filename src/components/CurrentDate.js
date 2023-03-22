import "../style/currentDate.css";

import React from "react";
import useCalculateCurrentTime from "../hooks/useCalculateCurrentTIme";
import { useGlobalContext } from "./context";

const SHORT = "short";
const NUMERIC = "numeric";
const LONG = "long";
const TIME_FORMAT = "en-us";
const DISPLAY_TYPE_PHONE = "phone";

function CurrentDate({ page }) {
  const { weatherData, isDarkMode, error } = useGlobalContext();
  const { timezone = "Asia/Jerusalem" } = weatherData || {};
  const { currentTime } = useCalculateCurrentTime();

  const timeByTimeZone = currentTime.toLocaleString(TIME_FORMAT, {
    timeZone: timezone,
    timeZoneName: SHORT,
    hour: NUMERIC,
    minute: NUMERIC,
    weekday: SHORT,
    day: NUMERIC,
    month: LONG,
  });

  const timeByTimeZoneSplited = timeByTimeZone.split(" ");
  const [dayName, month, dayInMonth, , fullTime, amOrPm, currentTimeZone] =
    timeByTimeZoneSplited;
  const [hours, minutes] = fullTime.split(":");

  if (error.isError) {
    return null;
  }

  if (page === DISPLAY_TYPE_PHONE) {
    const digitalTimeFormat = `${fullTime} ${amOrPm} ${currentTimeZone}`;
    return (
      <div className={`selected_time`}>
        <span>{digitalTimeFormat}</span>
      </div>
    );
  }

  const dialDarkModeCheck = isDarkMode ? "dark_dial" : "";
  const dateContainerDarkModeCheck = isDarkMode ? "dark_date_container" : "";
  const minuteDialRotaitionDeg = `${minutes * 6}deg`;
  const hourDialRotaitionDeg = `${hours * 30 + minutes * 0.5}deg`;
  const todaysDateDisplayOrder = `${dayName} ${month} ${dayInMonth}, ${currentTimeZone}`;

  return (
    <div
      className={`date-container ${dateContainerDarkModeCheck}`}
      style={{
        "--minute-dial-rotaition-deg": minuteDialRotaitionDeg,
        "--hour-dial-rotaition-deg": hourDialRotaitionDeg,
      }}
    >
      <div className={`time_container`}>
        <div className={`time`}>
          <span>{fullTime}</span>
          <span>{amOrPm}</span>
        </div>
        <span className="time_zone">{currentTimeZone}</span>
      </div>
      <span className="header_date">{todaysDateDisplayOrder}</span>
      <div className={`minute_dial ${dialDarkModeCheck}`} />
      <div className={`hour_dial ${dialDarkModeCheck}`} />
    </div>
  );
}

export default CurrentDate;
