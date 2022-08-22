import React, { useState } from "react";
import "./SearchBar.css";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';


export const SearchBar = ({searchPageNum, handleSearch }) => {
  const [query, setQuery] = useState("");
  const [reset, setReset] = useState('')
  const [buttonDisabled, setButtonDisabled] = useState(true)


  const onSubmit = () => {
    console.log(query)
    handleSearch(searchPageNum, query)
    setReset('')
    setButtonDisabled(true)
  }

  const updateSearchField = (event) => {
    console.log(query)
    setQuery(event)
    setReset(event)
    setButtonDisabled(false)
  }
  console.log('searchPageNum in Search Bar AR', searchPageNum)

  return (
    <div className="search-bar-container">
      <input
        onChange={(event) => updateSearchField(event.target.value)}
        placeholder="Search Here"
        type="text"
        value={reset}>
      </input>

      <NavLink to={`/search/${query}/${searchPageNum + 1}`} style={{ textDecoration: "none" }}>
        <button className='search-button' onClick={() => onSubmit()} disabled={buttonDisabled}>SUBMIT</button>
      </NavLink>
    </div>
  );
};

// SearchBar.propTypes = {
//   handleSearch: PropTypes.func.isRequired
// };
