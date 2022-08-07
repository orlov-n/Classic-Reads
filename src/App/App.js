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
  const [userInput, setUserInput] = useState('');
  const [userSearchResults, setUserSearchResults] = useState([]);

  const [bookLink, setBookLink] = useState('');

  useEffect(() => {
    getBookList().then((response) => {
      console.log('this is response in useEffect', response)
      const acceptableFormats = response.results.filter(item => {
       if (item.formats['text/html'] !== undefined) {
        return item
       }
      })
      // formats['text/html; charset=utf-8'] || item.formats['text/html'] 
      console.log('accptable formats', acceptableFormats)
      setBookList(acceptableFormats);
      
    });
    // .catch((err) => {
      console.log('this is bookList in useEffect', bookList)
    //   setErrorMessage(err)
    //   setErrorStatus(true)
    // })
  }, []);
  

  const handleSearch = (query) => {
    console.log('query from app', query)
    setUserInput(query)

  }

  const updateSearchResults = (search) => {
    setUserSearchResults(search)
  }


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
        <SearchBar handleSearch={handleSearch}/>
     </nav>

     <Route exact path='/' render={() => 
      <WelcomePage />     
      }/>
     
     {bookList.length > 0 && 
      <Route exact path='/book/:book_id' render={(match) => {
      console.log('match from bookID', match)

       return (
        
         <FullBook bookList={userInput ? userSearchResults : bookList} bookId={match.match.params.book_id}  />
         )
        }}/>
      }

     {bookList.length > 0 && 
      <Route exact path='/page/:page' render={() => {
        return (
          <BookList bookListProp={bookList} />
          
        )
      }}/>
      


  } 

  <Route exact path='/books/search/results' render={() => {
    return (
      <SearchResults userInput={userInput} setUserSearchResults={setUserSearchResults}/>
    )
  }}>

  </Route>
    </div>
  );
};

export default App;
