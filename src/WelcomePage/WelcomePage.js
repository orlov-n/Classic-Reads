import { useEffect } from "react";
import "./WelcomePage.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";

export const WelcomePage = ({ book }) => {
  useEffect(() => {}, [book]);

  return (
    <section className="welcome-page-container">
      <h2 className="welcome-message">Enjoy This Random Classic!</h2>
      
      <div className="welcome-book-container">

      <NavLink
        to={`/full-book/${book.id}`}
        key={book.id}
        style={{ textDecoration: "none" }}
        >
        <BookCard bookCardProp={book} className="book-welcome"/>
      </NavLink>
      <button className="button-random" onClick={() => window.location.reload()}>
         New Random Book
      </button>
        </div>
      
    </section>
  );
};
