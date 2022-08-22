import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import { useEffect } from "react";


export const SearchBar = ({ handleSearch, tempUserInput }) => {
  const [query, setQuery] = useState("");
  // const [reset, setReset] = useState(tempUserInput)
  // const [buttonDisabled, setButtonDisabled] = useState(true)

  useEffect(() => {
      setQuery(tempUserInput)

  }, [tempUserInput])

  const onSubmit = () => {
    console.log(query)
    handleSearch(query)
    // setReset('')
    // setQuery('')
    // setButtonDisabled(true)
  }

  const updateSearchField = (event) => {
    console.log(query)
    setQuery(event)
    // setReset(event)
    // setButtonDisabled(false)
  }
  // console.log('searchPageNum in Search Bar AR', searchPageNum)

  return (
    <div className="search-bar-container">
      <input
        onChange={(event) => updateSearchField(event.target.value)}
        placeholder="Search Here"
        type="text"
        value={query}>
      </input>

      <NavLink to={`/search/${query}/1`} style={{ textDecoration: "none" }}>
        <button className='search-button' onClick={() => onSubmit()} disabled={query.length === 0}>SUBMIT</button>
      </NavLink>
    </div>
  );
};

// SearchBar.propTypes = {
//   handleSearch: PropTypes.func.isRequired
// };
