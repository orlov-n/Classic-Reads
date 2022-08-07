import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";

export const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search Here"
        type="text">
      </input>
      <NavLink to={"/books/search/results"}>
        <button onClick={() => handleSearch(query)}>SUBMIT</button>
      </NavLink>
    </div>
  );
};
