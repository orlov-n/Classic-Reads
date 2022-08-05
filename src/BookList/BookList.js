import React, { useState, useEffect} from 'react';
import './BookList.css'
import BookCard from '../BookCard/BookCard';
import { FullBook } from '../FullBook/FullBook';

const BookList = ({bookListProp, returnNextPage, nextPageLink}) => {
  const [bookList, setBookList] = useState([])

  useEffect(() => {
    renderBookCards()
    setBookList(bookListProp)
  }, [bookListProp, nextPageLink])

  const renderBookCards = () => {
    return bookList.map(bookCard => {
      return (
        <BookCard key={bookCard.id} bookCardProp={bookCard} />
      )
    })
  }


return (
  <section className='book-list'>
    {console.log(bookList)}
    {console.log(nextPageLink)}
    {renderBookCards()}
    <button onClick={() => returnNextPage()}>Next Page</button>
  </section>
)

}

export default BookList