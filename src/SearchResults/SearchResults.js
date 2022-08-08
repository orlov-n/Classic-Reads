import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import { searchQuery } from "../apiCalls";

export const SearchResults = ({ userInput, setUserSearchResults }) => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    searchQuery(userInput).then((response) => {
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      setSearchResults(acceptableFormats);
      setUserSearchResults(acceptableFormats);
    });
  }, [userInput]);

  const renderBookCards = () => {
    return searchResults.map((bookCard) => {
      return (
        <NavLink to={`/book/${bookCard.id}`} key={bookCard.id}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };

  return (
    <section className="search-results-container">
      {searchResults.length ? renderBookCards() : <h2>Your Query Did Not Return Any Results, Please Use Different Search Terms</h2>}
    </section>
  );
};
