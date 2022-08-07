import React, { useState, useEffect} from 'react';
import './SearchResults.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';
import { NavLink } from 'react-router-dom';

export const SearchResults = ({searchResultsProp, returnNextPage}) => {
  // console.log('this is booklist prop', bookListProp)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    renderBookCards()
    setSearchResults(searchResultsProp)
  }, [searchResults])

  const renderBookCards = () => {
    return searchResults.map(bookCard => {
      return (

          <NavLink to={`/${bookCard.id}`}  key={bookCard.id}>
            <BookCard bookCardProp={bookCard}  />
          </NavLink>
      )
    })
  }

  const openFullBook = () => {

  }

return (
  <section className='search-results-container'>
    {/* {console.log('this is booklist from Booklist', bookList)} */}
   
    {/* {renderBookCards()} */}
    {searchResults && renderBookCards()}
    <button onClick={() => returnNextPage()}>Next Page</button>
  </section>
)

}
