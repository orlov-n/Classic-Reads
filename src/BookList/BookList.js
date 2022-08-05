import React, { useState, useEffect} from 'react';
import './BookList.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';

const BookList = ({bookListProp, returnNextPage}) => {
  console.log('this is booklist prop', bookListProp)
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    renderBookCards()
    setBookList(bookListProp)
  }, [bookListProp])

  const renderBookCards = () => {
    return bookList.map(bookCard => {
      return (
        <BookCard key={bookCard.id} bookCardProp={bookCard} />
      )
    })
  }

  const openFullBook = () => {

  }

return (
  <section className='book-list'>
    {/* {console.log('this is booklist from Booklist', bookList)} */}
   
    {/* {renderBookCards()} */}
    {bookListProp && renderBookCards()}
    <button onClick={() => returnNextPage()}>Next Page</button>
  </section>
)

}

export default BookList