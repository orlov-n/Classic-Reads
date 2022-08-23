import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

export const SearchResults = ({
  searchPageNum,
  userInput,
  userSearchResults,
  currentLocation,
  handleSearch,
}) => {
  const [newSearchResults, setNewSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");
  const [tempSearch, setTempSearch] = useState("");

  useEffect(() => {
    if (!userInput) {
      const searchQuery = currentLocation.split("/")[2];

      setTempSearch(searchQuery);

      handleSearch(tempSearch);
    }

    setQuery(userInput);
  }, [userInput, searchPageNum, currentLocation, tempSearch]);

  const renderBookCards = () => {
    return userSearchResults.map((bookCard) => {
      return (
        <NavLink
          to={`/full-book/${bookCard.id}`}
          key={bookCard.id}
          style={{ textDecoration: "none" }}
        >
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };

  return (
    <section className="search-results-container">
      <NavLink
        to={`/search/${query}/${searchPageNum + 1}`}
        style={{ textDecoration: "none" }}
      >
        <button>Next Page</button>
      </NavLink>
      {newSearchResults && renderBookCards()}
    </section>
  );
};

// SearchResults.propTypes = {
//   userInput: PropTypes.string.isRequired,
//   setUserSearchResults: PropTypes.func.isRequired
// };
