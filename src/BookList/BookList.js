import React, { useState, useEffect } from "react";
import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";

const BookList = ({ bookListProp }) => {
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    renderBookCards();
    setBookList(bookListProp);
  }, [bookListProp]);

  const renderBookCards = () => {
    return bookList.map((bookCard) => {
      return (
        <NavLink to={`/book/${bookCard.id}`} key={bookCard.id}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };

  return (
    <section className="book-list-container">
      {bookListProp && renderBookCards()}
    </section>
  );
};

export default BookList;
