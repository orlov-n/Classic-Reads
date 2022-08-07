import React from "react";
import "./BookCard.css";

const BookCard = ({ bookCardProp }) => {
  return (
    <>
      <div className="book">
        <div className="pagenext">
          <p>{bookCardProp.title}</p>
        </div>
        <div className="page">
          <p>{bookCardProp.title}</p>
          <div className="pageprev">
            <p>{bookCardProp.title}</p>
          </div>
        </div>
        <div className="line"></div>
        <p>{bookCardProp.title}</p>
      </div>
    </>
  );
};

export default BookCard;
