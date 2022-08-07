import React from 'react';
import './FullBook.css'
import { useState, useEffect } from 'react';
import { getBook } from '../apiCalls';

export const FullBook = ({bookList, bookId}) => {
  const [bookLink, setBookLink] = useState('');


useEffect(() => {
  getBook(bookId).then((response) => {
    console.log('this is response in useEffect', response)
    // let acceptableFormats = response.formats['text/html']
    
    // formats['text/html; charset=utf-8'] || item.formats['text/html'] 
    // console.log('accptable formats', acceptableFormats)
    setBookLink(response.formats['text/html']);
    
  });
  // .catch((err) => {
    console.log('this is bookId in useEffect', bookId)
  //   setErrorMessage(err)
  //   setErrorStatus(true)
  // })
}, [bookId]);

  // const returnBookLink = (returnedBookID) => {
  //   console.log(bookList.length)
  //   const returnedBookLink = bookList.find(item => {
  //     if (item.id === parseInt(returnedBookID)) {
  //       return item
  //     }
  //   })
  //   console.log('returned book link from full book at the top', returnedBookLink)
  //   let acceptableFormats = returnedBookLink.formats['text/html']
  //   setBookLink(acceptableFormats)
  //   console.log('this is book link', bookLink)
  // }

  return (
    <section className='full-book-container'>
      <h2>I am full book</h2>
      <embed className='full-book'  src={bookLink}></embed>
      {/* <embed className='full-book'  src="https://www.gutenberg.org/files/45/45-h/45-h.htm"></embed> */}
    </section>
  )
}

export default FullBook;
