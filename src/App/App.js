import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Route, NavLink, useLocation } from "react-router-dom";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { SearchResults } from "../SearchResults/SearchResults";
import { NavBar } from "../NavBar/NavBar";

const App = () => {
  const [bookList, setBookList] = useState({});
  const [userInput, setUserInput] = useState("");
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [booklistId, setBookListId] = useState(window.location.pathname);
  const [currentLocation, setCurrentLocation] = useState(window.location.pathname);
  const [randomBook, setRandomBook] = useState(1)
  // const [randomList, setRandomList] = useState(null);

  useEffect(() => {
    // console.log('this is booklist id under useeffect app', booklistId)
    // currentLocation === "/" ? getRandomBook() : refreshBooklist();
    refreshBooklist()
    console.log("current location in useEffect App", currentLocation);
    console.log("current window.location in useEffect App", window.location.pathname);
    // console.log("this is booklist id under refreshbooklist in app", booklistId);
  }, [booklistId, currentLocation]);

  // const goToNextPage = (id) => {
  //   // setBookListId(id);
  //   // // refreshBooklist()
  // };


  const getRandomBook = () => {

    let randomPageNumber = Math.floor(Math.random() * 1700) + 1;
    console.log('get random book is triggered');
      getBookList(randomPageNumber).then((response) => {
        console.log('response from get random book', response);
        // console.log("nav bar triggered");
        // console.log("booklistId in useEffect", booklistId);
        const acceptableFormats = response.results.filter((item) => {
          if (item.formats["text/html"]) {
            // console.log(item)
            return item;
          }
        });
        console.log('acceptable formats', acceptableFormats)
        setRandomBook(acceptableFormats[0]);
        // setBlankLocation(false);
        // setBlankLocation(true)
      });
    // refreshBooklist()
  };

  const refreshBooklist = () => {
    !isNaN(booklistId)  &&
    getBookList(booklistId).then((response) => {
      console.log('response from refresh book list ', response);
      // console.log("booklistId in useEffect", booklistId);
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
    let locationIdString;
    let locationIdNumber;
    // setCurrentLocation(locationObject.pathname)
    console.log("locationObject", locationObject);
    // console.log('booklist ID', booklistId)

    return (
      
      locationObject.pathname.includes('page')
      ? ((locationIdString = locationObject.pathname.split("/")),
        (locationIdNumber = parseInt(locationIdString.pop())),
        booklistId !== locationIdNumber &&
          (setCurrentLocation(locationIdNumber), setBookListId(locationIdNumber)))
         : locationObject.pathname === '/'
         ? (randomBook === 1 && getRandomBook()) : ''

    )


  };

  const handleSearch = (query) => {
    setUserInput(query);
  };
  // console.log("location from state", location);
  // console.log(blankLocation);
  console.log("bookListId from app above return", booklistId);
  console.log("randomBOok from app above return", randomBook);
  // console.log('bookList from app above return', bookList)
  return (
    <>
      {/* {    console.log('bookListId from app  return', booklistId)
      }     */}
      <NavBar handleSearch={handleSearch} />
      <main>
        <Route exact path="/" render={() => <WelcomePage book={randomBook}/>} />

        {bookList.length > 0 && (
          <Route
            exact
            path="/full-book/:book_id"
            render={(match) => {
              return (
                <FullBook
                  // bookList={userInput ? userSearchResults : bookList}
                  bookId={match.match.params.book_id}
                />
              );
            }}
          />
        )}
        {MyComponent()}

        {bookList.length > 0 && (
          <Route
            exact
            path="/page/:page_id"
            render={(match) => {
              // console.log('booklist match in app', match)
              return (
                <BookList
                  bookListProp={bookList}
                  // refreshBooklist={refreshBooklist}
                  pageId={parseInt(match.match.params.page_id)}
                  // goToNextPage={goToNextPage}
                />
              );
              // return <BookList bookListProp={bookList} pageId={booklistId} goToNextPage={goToNextPage}/>;
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
          }}
        ></Route>
      </main>
    </>
  );
};

export default App;
