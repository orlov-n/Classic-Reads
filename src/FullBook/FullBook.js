import React from "react";
import "./FullBook.css";
import { useState, useEffect } from "react";
import { getBook } from "../apiCalls";
import PropTypes from 'prop-types';

export const FullBook = ({ bookId }) => {
  const [bookLink, setBookLink] = useState("");

  useEffect(() => {
    getBook(bookId).then((response) => {
      setBookLink(response.formats["text/html"]);
    });
  }, [bookId]);

  return (
    <section className="full-book-container">
      <embed className="full-book" src={bookLink}></embed>
    </section>
  );
};

export default FullBook;

FullBook.propTypes = {
  bookId: PropTypes.string.isRequired
};

