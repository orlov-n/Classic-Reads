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

  useEffect(() => {
    getBookList().then((response) => {
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      setBookList(acceptableFormats);
    });
  }, []);

  const handleSearch = (query) => {
    setUserInput(query);
  };

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
          
         exact path="/page/:page"
          render={() => {
            return <BookList bookListProp={bookList} />;
          }}
        />
      )}

      <Route
        exact
        path="/books/search/results"
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
