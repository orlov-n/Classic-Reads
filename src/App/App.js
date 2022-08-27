import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList, searchQuery } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Route, useLocation } from "react-router-dom";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { SearchResults } from "../SearchResults/SearchResults";
import { NavBar } from "../NavBar/NavBar";

const App = () => {
  const [bookList, setBookList] = useState({});
  const [userInput, setUserInput] = useState("");
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [booklistId, setBookListId] = useState(window.location.pathname);
  const [currentLocation, setCurrentLocation] = useState(
    window.location.pathname
  );
  const [randomBook, setRandomBook] = useState(1);
  const [currentBookId, setCurrentBookId] = useState(1);
  const [searchPageNum, setSearchPageNum] = useState(2);
  const [tempUserInput, setTempUserInput] = useState("");

  useEffect(() => {
    makeSearch();
    refreshBooklist();
  }, [booklistId, currentLocation, searchPageNum, userInput]);

  const makeSearch = () => {
    userInput &&
      searchQuery(searchPageNum, userInput).then((response) => {
        console.log("response from search results", response);
        let acceptableFormats = response.results.filter((item) => {
          if (item.formats["text/html"]) {
            return item;
          }
        });
        setUserSearchResults(acceptableFormats);
      });
  };

  const getRandomBook = () => {
    let randomPageNumber = Math.floor(Math.random() * 1700) + 1;
    getBookList(randomPageNumber).then((response) => {
      console.log("response from get random book", response);
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      setRandomBook(acceptableFormats[0]);
    });
  };

  const refreshBooklist = () => {
    !isNaN(booklistId) &&
      getBookList(booklistId).then((response) => {
        console.log("response from refresh book list ", response);
        const acceptableFormats = response.results.filter((item) => {
          if (item.formats["text/html"]) {
            return item;
          }
        });
        setBookList(acceptableFormats);
      });
  };

  const MyComponent = () => {
    const locationObject = useLocation();

    let locationIdNumber;
    return locationObject.pathname.includes("page")
      ? ((locationIdNumber = parseInt(locationObject.pathname.split("/")[2])),
        booklistId !== locationIdNumber &&
          (setCurrentLocation(locationIdNumber),
          setBookListId(locationIdNumber)))
      : locationObject.pathname === "/"
      ? randomBook === 1 && getRandomBook()
      : locationObject.pathname.includes("full")
      ? ((locationIdNumber = parseInt(locationObject.pathname.split("/")[2])),
        currentBookId !== locationIdNumber &&
          (setCurrentLocation(locationIdNumber),
          setCurrentBookId(locationIdNumber)))
      : locationObject.pathname.includes("search")
      ? ((locationIdNumber = parseInt(locationObject.pathname.split("/")[3])),
        searchPageNum !== locationIdNumber &&
          setSearchPageNum(locationIdNumber))
      : "";
  };

  const handleSearch = (query) => {
    setUserInput(query);
    setSearchPageNum(1);
    setTempUserInput(query);
  };

  return (
    <>
      <NavBar
        handleSearch={handleSearch}
        searchPageNum={searchPageNum}
        tempUserInput={tempUserInput}
      />
      <main>
        <Route
          exact
          path="/"
          render={() => <WelcomePage book={randomBook} />}
          />
          
        <Route
        exact
        path="/full-book/:book_id"
        render={(match) => {
          return (
            <FullBook
            bookId={match.match.params.book_id}
            currentBookId={currentLocation}
            />
            );
          }}
          />

        {MyComponent()}

        {bookList.length > 0 && (
          <Route
            exact
            path="/page/:page_id"
            render={(match) => {
              return (
                <BookList
                  bookListProp={bookList}
                  pageId={parseInt(match.match.params.page_id)}
                />
              );
            }}
          />
        )}

        <Route
          exact
          path="/search/:userInput/:search_page_num"
          render={() => {
            return (
              <SearchResults
                userInput={userInput}
                setUserSearchResults={userSearchResults}
                searchPageNum={searchPageNum}
                handleSearch={handleSearch}
                userSearchResults={userSearchResults}
                currentLocation={currentLocation}
              />
            );
          }}
        ></Route>
      </main>
    </>
  );
};

export default App;
