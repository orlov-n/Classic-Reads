import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";

export const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState('')

  const onSubmit = () => {
    handleSearch(query)
    setReset('')
  }

  const updateSearchField = (event) => {
    setQuery(event)
    setReset(event)
  }

  return (
    <div>
      <input
        onChange={(event) => updateSearchField(event.target.value)}
        placeholder="Search Here"
        type="text"
        value={reset}>
        
      </input>
      <NavLink to={"/books/search/results"}>
        <button onClick={() => onSubmit()}>SUBMIT</button>
      </NavLink>
    </div>
  );
};
