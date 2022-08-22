import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList, searchQuery } from "../apiCalls";
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
  const [currentLocation, setCurrentLocation] = useState( window.location.pathname);
  const [randomBook, setRandomBook] = useState(1);
  const [currentBookId, setCurrentBookId] = useState(1);
  const [searchPageNum, setSearchPageNum] = useState(2)
  const [locationPath, setLocationPath] = useState('')
  // const [randomList, setRandomList] = useState(null);

  useEffect(() => {
    // console.log("this is current location in useeffect app", currentLocation);
    // // console.log('searchPageNum in App in UE', searchPageNum)
    // console.log('locationPath in App in UE', locationPath)
    // console.log('window location in UE in App', window.location.pathname)
    // currentLocation === "/" ? getRandomBook() : refreshBooklist();
    locationPath.includes('search') 
    
    ? makeSearch()
    : refreshBooklist()
    // ;
    console.log("current location in useEffect App", currentLocation);
    // console.log( "current window.location in useEffect App", window.location.pathname);
    // console.log("this is booklist id under refreshbooklist in app", booklistId);
  }, [booklistId, currentLocation, searchPageNum, userInput]);

  const searchBooks = () => {

  }

  const makeSearch = () => {
    // searchQuery(searchPageNum, userInput).then((response) => {
     
      console.log('Search Page Num from App makeSearch', searchPageNum)
      // console.log('Splitting frm from App makeSearch', currentLocation.split('/')[2])
       

      !userInput &&
      setUserInput(currentLocation.split('/')[2])
      console.log('user input after split' , userInput)
    searchQuery(searchPageNum, userInput).then((response) => {
      console.log('response from search results', response)
      // response.next[response.next.length -1] !== '=' &&
      // setLoading(false)
      // console.log('last part of the string in response', response.next[response.next.length -1])
      let acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      // setCurrentSearchPage(currentSearchPage )
      // setNewSearchResults(acceptableFormats);
      setUserSearchResults(acceptableFormats);
    });
  }


  const getRandomBook = () => {
    let randomPageNumber = Math.floor(Math.random() * 1700) + 1;
    console.log("get random book is triggered");
    getBookList(randomPageNumber).then((response) => {
      console.log("response from get random book", response);
      // console.log("nav bar triggered");
      // console.log("booklistId in useEffect", booklistId);
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          // console.log(item)
          return item;
        }
      });
      console.log("acceptable formats", acceptableFormats);
      setRandomBook(acceptableFormats[0]);
    });
  };


  const refreshBooklist = () => {
    !isNaN(booklistId) &&
      getBookList(booklistId).then((response) => {
        console.log("response from refresh book list ", response);
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

    return locationObject.pathname.includes("page")
      ? ((locationIdString = locationObject.pathname.split("/")),
        (locationIdNumber = parseInt(locationIdString.pop())),
        booklistId !== locationIdNumber &&
          (setCurrentLocation(locationIdNumber),
          setBookListId(locationIdNumber)))
      : locationObject.pathname === "/"
      ? randomBook === 1 && getRandomBook()
      : locationObject.pathname.includes("full")
      ? ((locationIdString = locationObject.pathname.split("/")),
        (locationIdNumber = parseInt(locationIdString.pop())),
        currentBookId !== locationIdNumber &&
          (setCurrentLocation(locationIdNumber),
          setCurrentBookId(locationIdNumber)))
      : locationObject.pathname.includes('search')
     ? ((locationIdString = locationObject.pathname.split("/")),
        (locationIdNumber = parseInt(locationIdString.pop())),
        searchPageNum !== locationIdNumber &&
          setSearchPageNum(locationIdNumber)) 
          : ''
  };


  const handleSearch = (query) => {
    setUserInput(query);
    setSearchPageNum(1)
  };
  // console.log("location from state", location);
  // console.log(blankLocation);
  console.log('searchPageNum in App AR', searchPageNum)
console.log('query from App AR', userInput)
  console.log("this is current location above return", currentLocation);
  console.log("this is userInput above return", userInput);
  console.log("this is userSearchResults above return", userSearchResults);
  
  // console.log("bookListId from app above return", booklistId);
  // console.log("randomBOok from app above return", randomBook);
  // console.log('bookList from app above return', bookList)
  return (
    <>
      {/* {    console.log('bookListId from app  return', booklistId)
      }     */}
      <NavBar handleSearch={handleSearch} searchPageNum={searchPageNum} />
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
                // bookList={userInput ? userSearchResults : bookList}
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
          path="/search/:userInput/:search_page_num"
          render={() => {
            return (
              <SearchResults
                userInput={userInput}
                setUserSearchResults={userSearchResults}
                searchPageNum={searchPageNum}
                handleSearch={handleSearch}
                userSearchResults={userSearchResults}
              />
            );
          }}
        ></Route>
      </main>
    </>
  );
};

export default App;
