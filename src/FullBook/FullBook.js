import React from 'react';
import './FullBook.css'

export const FullBook = ({fullBookLink}) => {

  return (
    <section className='full-book-container'>
      <h2>I am full book</h2>
      <embed className='full-book'  src={fullBookLink}></embed>
      {/* <embed className='full-book'  src="https://www.gutenberg.org/files/45/45-h/45-h.htm"></embed> */}
    </section>
  )
}

export default FullBook;
