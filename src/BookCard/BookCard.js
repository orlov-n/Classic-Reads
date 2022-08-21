import React from "react";
import "./BookCard3.css";
import PropTypes from 'prop-types'

const BookCard = ({ bookCardProp }) => {
  return (
    <div className="book-card-container">
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
    </div>
  );
};


// BookCard.propTypes = {
//   bookCardProp: PropTypes.object.isRequired
// }

export default BookCard;
