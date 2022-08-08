import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";

export const SearchBar = ({ handleSearch }) => {
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)


  const onSubmit = () => {
    handleSearch(query)
    setReset('')
    setButtonDisabled(true)
  }

  const updateSearchField = (event) => {
    setQuery(event)
    setReset(event)
    setButtonDisabled(false)
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
        <button className='search-button' onClick={() => onSubmit()} disabled={buttonDisabled}>SUBMIT</button>
      </NavLink>
    </div>
  );
};
