import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

export const SearchBar = ({ handleSearch, tempUserInput }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery(tempUserInput);
  }, [tempUserInput]);

  const onSubmit = () => {
    handleSearch(query);
  };

  const updateSearchField = (event) => {
    setQuery(event);
  };

  return (
    <div className="search-bar-container">
      <input
        onChange={(event) => updateSearchField(event.target.value)}
        placeholder="Search Here"
        type="text"
        value={query}
      ></input>

      <NavLink to={`/search/${query}/1`} style={{ textDecoration: "none" }}>
        <button
          className="search-button"
          onClick={() => onSubmit()}
          disabled={query.length === 0}
        >
          SUBMIT
        </button>
      </NavLink>
    </div>
  );
};

// SearchBar.propTypes = {
//   handleSearch: PropTypes.func.isRequired
// };
