import React, { useEffect, useState } from "react";
import './SearchBar.css'
// import { searchQuery } from './apiCalls'
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";


export const SearchBar = ({handleSearch}) => {
  const [query, setQuery] = useState('');

//   useEffect(() => {
//     // searchQuery()
//   })



//   const renderSearchedCards = () => {
//     return foundTitles.map(bookCard => {
//       return (
//         <BookCard key={bookCard.id} bookCardProp={bookCard} />
//       )
//     })
//   }

  return (
    <div>
      <input onChange={(event) => setQuery(event.target.value)} placeholder="Search Here" type='text'></input>
      <NavLink to={'/books/search/results'}>
      <button onClick={() => handleSearch(query)}>SUBMIT</button>
      </NavLink>
    </div>
  )

}




