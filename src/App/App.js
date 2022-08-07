import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { SearchResults } from "../SearchResults/SearchResults";



const App = () => {
  const [bookList, setBookList] = useState({});
  const [pageNum, setPageNum] = useState(1);

  // const [bookLink, setBookLink] = useState('');

  useEffect(() => {
    getBookList(pageNum).then((response) => {
      console.log('this is response in useEffect', response)
      // console.log('this is bookList in useEffect', bookList)
      setBookList(response);
      
    });
    increasePage()
    // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
    // })
  }, [pageNum]);
  
  const increasePage = () => {
    setPageNum(() => pageNum + 1)

  }

  const returnNextPage = () => {};

  console.log('this is booklist in App above return', bookList)
  return (
    <div className="App">
     <nav>
        <NavLink to={'/'}>
          <h1>Read Now</h1>
        </NavLink>
        <NavLink to={'/page/1'}>
          <button>Top Free Books</button>
        </NavLink>
        <SearchBar />
     </nav>

     <Route exact path='/' render={() => 
      <WelcomePage />     
      }/>
     
     {bookList.results && 
     <Route exact path='/book/:book_id' render={(match) => {
      console.log('match from bookID', match)

       return (
         <FullBook bookList={bookList.results} bookId={match.match.params.book_id}  />
         )
        }}/>
      }

     {bookList.results && 
      <Route exact path='/page/:page' render={(match) => {
        console.log('match from booklistNum', match)
        return (
          <BookList bookListProp={bookList.results} bookListNum={match.match.params.page} returnNextPage={returnNextPage} increasePage={increasePage}/>
          
        )
      }}/>
    
  } 
    </div>
  );
};

export default App;
