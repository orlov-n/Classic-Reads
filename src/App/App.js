import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";



const App = () => {
  const [bookList, setBookList] = useState({});
  const [bookLink, setBookLink] = useState('');

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

  const returnBookLink = (returnedBookID) => {
    const returnedBookLink = bookList.results.find(item => {
      if (item.id === returnedBookID) {
        return item.formats['text/html']
      }
    })
    setBookLink(returnedBookLink.formats['text/html'])
    console.log('this is book link', returnedBookLink)
  }

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
     <Route exact path='/' render={() => 
      <WelcomePage />     
      }/>
     
     <Route exact path='/:book_id' render={() => {
      return (
       
        <FullBook fullBookLink={bookLink}   />

      )


     }}/>
     
     {bookList.results && (
        <BookList bookListProp={bookList.results} returnNextPage={returnNextPage} returnBookLink={returnBookLink}/>
      )}
      
      
    </div>
  );
};

export default App;
