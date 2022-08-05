import React from 'react';
import './BookCard.css'

const BookCard = ({bookCardProp}) => {

  return (
    <>
    <div>{console.log(bookCardProp.title)}</div>
    <div>{bookCardProp.title}</div>
    </>
  )



}



export default BookCard;