import React from 'react';
import './FullBook.css'
import { useState, useEffect } from 'react';

export const FullBook = ({bookList, bookId}) => {
  const [bookLink, setBookLink] = useState('');
console.log('bookId in full book under use state', bookId)

  useEffect(() => {
    returnBookLink(bookId)
     
  }, [bookId]);

  const returnBookLink = (returnedBookID) => {
    const returnedBookLink = bookList.find(item => {
      if (item.id === parseInt(returnedBookID)) {
        return item
      }
    })
    let acceptableFormats = returnedBookLink.formats['text/html; charset=utf-8'] || returnedBookLink.formats['text/html'] 
    setBookLink(acceptableFormats)
    console.log('this is book link', bookLink)
  }

  return (
    <section className='full-book-container'>
      <h2>I am full book</h2>
      <embed className='full-book'  src={bookLink}></embed>
      {/* <embed className='full-book'  src="https://www.gutenberg.org/files/45/45-h/45-h.htm"></embed> */}
    </section>
  )
}

export default FullBook;
