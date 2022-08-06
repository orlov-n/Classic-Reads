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
      console.log('this is response in useEffect', response)
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
    <div className="App">
     
     <nav>
      <NavLink to={'/'}>
      <h1>Read Now</h1>
      </NavLink>
      <SearchBar />
     </nav>
     {/* <Route exact path='/' render={() => 
     
    

  }/> */}
     
     <FullBook />
     
     {bookList.results && (
        <BookList bookListProp={bookList.results} returnNextPage={returnNextPage} />
      )}
      
      
    </div>
  );
};

export default App;
