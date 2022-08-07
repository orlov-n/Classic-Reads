import React from "react";
import "./FullBook.css";
import { useState, useEffect } from "react";
import { getBook } from "../apiCalls";

export const FullBook = ({ bookList, bookId }) => {
  const [bookLink, setBookLink] = useState("");

  useEffect(() => {
    getBook(bookId).then((response) => {
      setBookLink(response.formats["text/html"]);
    });
    // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
    // })
  }, [bookId]);

  return (
    <section className="full-book-container">
      <embed className="full-book" src={bookLink}></embed>
    </section>
  );
};

export default FullBook;
