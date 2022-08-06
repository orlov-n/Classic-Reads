import React, { useEffect, useState } from "react";
import './SearchBar.css'
// import { searchQuery } from './apiCalls'
import BookCard from "../BookCard/BookCard";

export const SearchBar = ({foundTitles}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    // searchQuery()
  })



  const renderSearchedCards = () => {
    return foundTitles.map(bookCard => {
      return (
        <BookCard key={bookCard.id} bookCardProp={bookCard} />
      )
    })
  }

  return (
    <section>
      {/* {renderSearchedCards()} */}
      <h2>I am Search Bar</h2>
    </section>
  )

}




