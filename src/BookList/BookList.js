import React, { useState, useEffect} from 'react';
import './BookList.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';
import { NavLink } from 'react-router-dom';

const BookList = ({bookListProp, returnNextPage, returnBookLink}) => {
  // console.log('this is booklist prop', bookListProp)
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    renderBookCards()
    setBookList(bookListProp)
  }, [bookListProp])

  const renderBookCards = () => {
    return bookList.map(bookCard => {
      return (

          <NavLink to={`/${bookCard.id}`}  key={bookCard.id}>
        
            <BookCard bookCardProp={bookCard} returnBookLink={returnBookLink} />
          </NavLink>
      )
    })
  }

  const openFullBook = () => {

  }

return (
  <section className='book-list-container'>
    {/* {console.log('this is booklist from Booklist', bookList)} */}
   
    {/* {renderBookCards()} */}
    {bookListProp && renderBookCards()}
    <button onClick={() => returnNextPage()}>Next Page</button>
  </section>
)

}

export default BookList