import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import FullBook from "../FullBook/FullBook";

const App = () => {
  const [bookList, setBookList] = useState({});

  useEffect(() => {
    getBookList().then((response) => {
      // console.log('this is response in useEffect', response)
      // console.log('this is bookList in useEffect', bookList)
      setBookList(response);
    });
    // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
    // })
  }, []);

  const returnNextPage = () => {};

  // console.log('this is booklist in App above return', bookList)
  return (
    <body>
     
     <nav>
      <h1>Hello THERE</h1>
      <SearchBar />

     </nav>

     {/* <NavLink to={'/'}>
      
     </NavLink> */}
     <FullBook />
      {/* <div>{console.log('App.js this is bookList in the return', bookList.results)}</div> */}

      {/* home page route="/"
        
      book page route=":book_name" */}

      { /* CUSTOM HEADER COMPONENT */ }
      {/* <iframe></iframe>  */}
      
      {bookList.results && (
        <BookList bookListProp={bookList.results} returnNextPage={returnNextPage} />
        
          
        
      )}
      { /* CUSTOM FOOTER COMPONENT */ }
    </body>
  );
};

export default App;
