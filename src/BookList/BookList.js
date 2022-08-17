import React, { useState, useEffect } from "react";
import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'


const BookList = ({ bookListProp, pageId, goToNextPage, refreshBooklist }) => {

  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    goToNextPage(pageId)
    // refreshBooklist(pageId)
    renderBookCards();
    setBookList(bookListProp);
  }, [bookListProp, pageId]);

  const renderBookCards = () => {
    return bookList.map((bookCard) => {
      console.log('this is page id from booklist', pageId)
      return (
        <NavLink to={`/book/${bookCard.id}`} key={bookCard.id}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };
  console.log('this is page id from booklist above return', pageId)

  return (
    <section className="book-list-container">
      <NavLink to={`/page/${parseInt(pageId) + 1}`}>
      <button >
        Next Page
      </button>
      {/* <button onClick={()=> goToNextPage(pageId + 1)}>
        Next Page
      </button> */}
      </NavLink>
      {bookListProp && renderBookCards()}

    </section>
  );
};


BookList.propTypes = {
  bookListProp: PropTypes.array.isRequired
}

export default BookList;
