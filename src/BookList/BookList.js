import React, { useState, useEffect} from 'react';
import './BookList.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';
import { NavLink } from 'react-router-dom';

const BookList = ({bookListProp, returnNextPage, returnBookLink, bookListNum, increasePage}) => {
  console.log('this is booklist prop', bookListProp)
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    renderBookCards()
    setBookList(bookListProp)
  }, [bookListProp, bookListNum])

  const renderBookCards = () => {
    return bookList.map(bookCard => {
      return (

          <NavLink to={`/book/${bookCard.id}`}  key={bookCard.id}>
            <BookCard bookCardProp={bookCard}  />
          </NavLink>
      )
    })
  }

  const openFullBook = () => {

  }
console.log('booklist Num from booklist', bookListNum)
return (
  <section className='book-list-container'>
    {/* {console.log('this is booklist from Booklist', bookList)} */}
   
    {/* {renderBookCards()} */}
    {bookListProp && renderBookCards()}
    {/* <button onClick={() => returnNextPage()}>Next Page</button> */}
    <NavLink to={`/page/${parseInt(bookListNum) + 1}`} >
    <button>Next Page</button>

          </NavLink>
  </section>
)

}

export default BookList