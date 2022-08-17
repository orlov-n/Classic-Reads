import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Route, NavLink } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { SearchResults } from "../SearchResults/SearchResults";
import { NavBar } from "../NavBar/NavBar";
const App = () => {
  const [bookList, setBookList] = useState({});
  const [userInput, setUserInput] = useState("");
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [booklistId, setBookListId] = useState(1)
  useEffect(() => {
   refreshBooklist()
    // goToNextPage(booklistId)
  }, [booklistId]);

  const goToNextPage = (id) => {
    setBookListId(id)
    // refreshBooklist()
  }

  const refreshBooklist = (id) => {
    
    getBookList(booklistId).then((response) => {
      console.log(response)
      console.log('booklistId in useEffect', booklistId)
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      setBookList(acceptableFormats);
    });
  }

  const handleSearch = (query) => {
    setUserInput(query);
  };

    console.log('bookListId from app above return', booklistId)
  return (
    
    <>
      <NavBar handleSearch={handleSearch}/>
      <main>
        
      <Route exact path="/" render={() => <WelcomePage />} />
      {bookList.length > 0 && (
        <Route
          exact path="/book/:book_id"
          render={(match) => {
            return (
              <FullBook
                bookList={userInput ? userSearchResults : bookList}
                bookId={match.match.params.book_id}
              />
            );
          }}
        />
      )}

      {bookList.length > 0 && (
        <Route
          
         exact path="/page/:page_id"
          render={(match) => {
            console.log('booklist match in app', match)
            return <BookList bookListProp={bookList} refreshBooklist={refreshBooklist} pageId={parseInt(match.match.params.page_id)} goToNextPage={goToNextPage}/>;
            // return <BookList bookListProp={bookList} pageId={booklistId} goToNextPage={goToNextPage}/>;
          }}
        />
      )}

      <Route
        exact path="/books/search/results"
        render={() => {
          return (
            <SearchResults
              userInput={userInput}
              setUserSearchResults={setUserSearchResults}
            />
          );
        }}>
      </Route>
      </main>

    </>
  );
};

export default App;
