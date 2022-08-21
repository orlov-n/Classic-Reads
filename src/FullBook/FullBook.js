import React from "react";
import "./FullBook.css";
import { useState, useEffect } from "react";
import { getBook } from "../apiCalls";
import PropTypes from "prop-types";

export const FullBook = ({ bookId, currentBookId }) => {
  const [bookLink, setBookLink] = useState("");
  console.log('bookID from FullBook', bookId)
  console.log('current bookID from FullBook', currentBookId)
  useEffect(() => {
    getBook(currentBookId).then((response) => {
      console.log('response from full book', response)
      setBookLink(response.formats["text/html"]);
      console.log('response.formats from Full Book', response.formats["text/html"] )
    });
  }, [currentBookId]);

  return (
    <section className="full-book-container">
      <embed className="full-book" src={bookLink}></embed>
    </section>
  );
};

export default FullBook;

// FullBook.propTypes = {
//   bookId: PropTypes.string.isRequired,
// };
