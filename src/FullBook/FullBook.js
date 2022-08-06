import React from 'react';
import './FullBook.css'

export const FullBook = ({fullBookLink}) => {

  return (
    <section className='full-book-container'>
      <h2>I am full book</h2>
      <iframe className='full-book' src={fullBookLink}></iframe>
    </section>
  )
}

export default FullBook;