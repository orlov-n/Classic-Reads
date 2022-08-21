import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import { searchQuery } from "../apiCalls";
import PropTypes from 'prop-types';

export const SearchResults = ({ userInput, setUserSearchResults }) => {
  const [newSearchResults, setNewSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('searchResults from SearchResults in UE', newSearchResults)
    console.log('user input from SearchResults in UE', userInput)
    searchQuery(userInput).then((response) => {
      setLoading(false)
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
   
      setNewSearchResults(acceptableFormats);
      setUserSearchResults(acceptableFormats);
    });
  }, [userInput]);

  const renderBookCards = () => {
    return newSearchResults.map((bookCard) => {
      return (
        <NavLink to={`/full-book/${bookCard.id}`} key={bookCard.id} style={{ textDecoration: "none" }}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };
  console.log('searchResults from SearchResults above return', newSearchResults)
  console.log('user input from SearchResults above return', userInput)
  return (
    <section className="search-results-container">
      {/* {loading && <h2>Loading...</h2>}
      {(!loading && !newSearchResults.length) && <h2>Your Query Did Not Return Any Results, Please Use Different Search Terms</h2> } */}
      {/* {searchResults && renderBookCards()} */}
      {/* <NavLink to={`/search/${pageId + 1}`} style={{ textDecoration: "none" }}> */}
      <NavLink to={`/search/results`} style={{ textDecoration: "none" }}>
      <button >
        Next Page
      </button>
      {/* <button onClick={()=> goToNextPage(pageId + 1)}>
        Next Page
      </button> */}
      </NavLink>
      {newSearchResults && renderBookCards()}

    </section>
  );
};


SearchResults.propTypes = {
  userInput: PropTypes.string.isRequired,
  setUserSearchResults: PropTypes.func.isRequired
};
