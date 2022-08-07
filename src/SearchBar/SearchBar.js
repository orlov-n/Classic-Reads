import React, { useEffect, useState } from "react";
import './SearchBar.css'
// import { searchQuery } from './apiCalls'
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";


export const SearchBar = () => {
//   const [query, setQuery] = useState('');

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
    <form>
      <input placeholder="Search Here" type='text'></input>
      {/* <NavLink > */}
      <button>SUBMIT</button>
      {/* </NavLink> */}
    </form>
  )

}




