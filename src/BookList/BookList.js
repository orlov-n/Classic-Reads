import React, { useState, useEffect } from "react";
import "./BookList.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'


const BookList = ({ bookListProp, pageId, goToNextPage, refreshBooklist }) => {

  // const [bookList, setBookList] = useState([]);

  useEffect(() => {
    // goToNextPage(pageId)
    // refreshBooklist(pageId)
    // setBookList(bookListProp);
    renderBookCards();
  }, [pageId]);

  const renderBookCards = () => {
    return bookListProp.map((bookCard) => {
      // console.log('this is page id from booklist', pageId)
      return (
        <NavLink to={`/full-book/${bookCard.id}`} key={bookCard.id} style={{ textDecoration: "none" }}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };
  // console.log('this is page id from booklist above return', pageId)

  return (
    <section className="book-list-container">
      
      <NavLink to={`/page/${pageId + 1}`} style={{ textDecoration: "none" }}>
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


// BookList.propTypes = {
//   bookListProp: PropTypes.array.isRequired
// }

export default BookList;
