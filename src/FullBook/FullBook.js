import React from 'react';
import './FullBook.css'
import { useState, useEffect } from 'react';

export const FullBook = ({bookList, bookId}) => {
  const [bookLink, setBookLink] = useState('');
console.log('bookId in full book', bookList)

  useEffect(() => {
    returnBookLink(bookId)
     
  }, [bookId]);


  const returnBookLink = (returnedBookID) => {
    console.log('returned book id from FullBook', bookList)
    const returnedBookLink = bookList.find(item => {
      if (item.id === parseInt(returnedBookID) && item.formats['text/html; charset=utf-8'] || item.formats['text/html']) {
        return item.formats['text/html; charset=utf-8'] || item.formats['text/html'] 
        
        
      }
    })
    setBookLink(returnedBookLink.formats['text/html'])
    // console.log('this is book link', returnedBookLink)
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
