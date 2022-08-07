import React from 'react';
import './WelcomePage.css'
import { NavLink } from 'react-router-dom';

export const WelcomePage = () => {

  return (
    <section className='welcome-page-container'>
      <h2> WELCOME </h2>
      <button>Read a RANDOM BOOK</button>
      <button>Search Free Books</button>

      <NavLink to={`/`} >
      <button>Top Free Books</button>
      </NavLink>
      <embed className='full-book'  src=""></embed>
    </section>
  )
}

