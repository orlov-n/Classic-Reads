import React, { useState, useEffect } from "react";
import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const BookList = ({ bookListProp, pageId }) => {
  useEffect(() => {
    renderBookCards();
  }, [pageId]);

  const renderBookCards = () => {
    return bookListProp.map((bookCard) => {
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
    <section className="book-list-container">
      <NavLink to={`/page/${pageId + 1}`} style={{ textDecoration: "none" }}>
        <button>Next Page</button>
      </NavLink>
      {bookListProp && renderBookCards()}
    </section>
  );
};

// BookList.propTypes = {
//   bookListProp: PropTypes.array.isRequired
// }

export default BookList;
