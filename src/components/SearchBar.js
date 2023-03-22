import "../style/searchbar.css";

import Autocomplete from "@mui/material/Autocomplete";
import React from "react";
import TextField from "@mui/material/TextField";
import { UNIQUE_CITIES } from "../utils/CityList";
import { useGlobalContext } from "./context";
import { useState } from "react";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const { setCity, error } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(search);
    setSearch("");
  };

  const onChange = ({ target: { value } }) => setSearch(value);
  const onKeyDown = (e) => {
    const { key } = e;
    if (key === "Enter") {
      return handleSubmit(e);
    }
  };

  return (
    <form className="form-field" autoComplete="off">
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={UNIQUE_CITIES}
        onChange={(event, value) => setSearch(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            error={error.isError}
            fullWidth
            label="name your city here..."
            value={search}
            onChange={onChange}
            onKeyDown={onKeyDown}
          />
        )}
      />
    </form>
  );
};

export default SearchBar;
