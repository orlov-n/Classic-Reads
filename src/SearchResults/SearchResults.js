import React, { useState, useEffect} from 'react';
import './SearchResults.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';
import { NavLink } from 'react-router-dom';
import { searchQuery } from '../apiCalls';

export const SearchResults = ({userInput}) => {
  // console.log('this is booklist prop', bookListProp)
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    searchQuery(userInput).then ( data => {
console.log('data from search results', data)
      setSearchResults(data.results)
    }
    )
  }, [userInput])

  const renderBookCards = () => {
    return searchResults.map(bookCard => {
      return (

          <NavLink to={`/book/${bookCard.id}`}  key={bookCard.id}>
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
   <p>Search Results</p>
    {/* {renderBookCards()} */}
    {searchResults && renderBookCards()}
    {/* <button onClick={() => returnNextPage()}>Next Page</button> */}
  </section>
)

}
