import "../style/header.css";

import CurrentDate from "./CurrentDate";
import DarkModeButton from "./DarkModeButton";
import React from "react";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <section className="header">
      <div className="main_header">
        <h1 className="header_title">GlobalWeather</h1>
        <div>
          <DarkModeButton />
        </div>
      </div>
      <div className="search_bar_and_time">
        <div className="date_computer">
          <CurrentDate page="computer" />
        </div>
        <SearchBar />
      </div>
    </section>
  );
};

export default Header;
