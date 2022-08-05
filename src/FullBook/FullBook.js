import React from 'react';
import './FullBook.css'

export const FullBook = ({fullBookLink}) => {

  return (
    <section>
      <iframe src={fullBookLink}></iframe>
    </section>
  )
}

// export default FullBook;