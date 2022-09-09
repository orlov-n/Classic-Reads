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
    // <section className="search-results-container">

    //    <NavLink
    //     to={`/search/${query}/${searchPageNum + 1}`}
    //     style={{ textDecoration: "none" }}
    //   >
    //     <button>Next Page</button>
    //   </NavLink>
    // </section>

    <section className="search-results-container">
      <div className="next-previous-container">
        {userSearchResults !== null && userSearchResults.length > 0 && (
          <NavLink
            to={`/search/${query}/${searchPageNum + 1}`}
            style={{ textDecoration: "none" }}
          >
            <button className="next-page-button">Next Page</button>
          </NavLink>
        )}
      </div>
      <div className="book-cards-grid">
        {userSearchResults === null && (
          <p className="searching">Searching...</p>
        )}

        {userSearchResults !== null &&
          userSearchResults.length > 0 &&
          renderBookCards()}
      </div>

      {userSearchResults !== null && userSearchResults.length === 0 && (
        <p className="no-results">No results</p>
      )}
    </section>
  );
  // };

  // const showError = () => {
  // let errorMessage = 'no results'
  //   setTimeout(() => {

  //     return errorMessage
  //   }, 2000)
  // }

  //   return (

  //     <section className="search-results-container">
  //         {/* {userSearchResults.length === 0 ? <h2>Searching...</h2> */}
  //     {/* {userSearchResults.length === 0 ? (<h2>Searching...</h2>, setTimeout(<h2>No results</h2>, 2000 )) */}
  //     {userSearchResults.length === 0 ? (<h2 className='searching-message'>Searching...</h2>, <h2>{showError()}</h2>)
  //       :
  //       (<NavLink
  //         to={`/search/${query}/${searchPageNum + 1}`}
  //         style={{ textDecoration: "none" }}
  //       >
  //         <button>Next Page</button>
  //       </NavLink>,
  //        renderBookCards())
  // }
  //     </section>
  //   );
  // };

  // SearchResults.propTypes = {
  //   userInput: PropTypes.string.isRequired,
  //   setUserSearchResults: PropTypes.func.isRequired
};
