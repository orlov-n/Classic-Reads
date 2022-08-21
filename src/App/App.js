import React, { useState, useEffect } from "react";
import "./App.css";
import { getBookList } from "../apiCalls";
import BookList from "../BookList/BookList";
import { Route, NavLink, useLocation } from "react-router-dom";
import { SearchBar } from "../SearchBar/SearchBar";
import FullBook from "../FullBook/FullBook";
import { WelcomePage } from "../WelcomePage/WelcomePage";
import { SearchResults } from "../SearchResults/SearchResults";
import { NavBar } from "../NavBar/NavBar";

const App = () => {
  const [bookList, setBookList] = useState({});
  const [userInput, setUserInput] = useState("");
  const [userSearchResults, setUserSearchResults] = useState([]);
  const [booklistId, setBookListId] = useState(1);
  const [randomListId, setRandomListId] = useState(randomNum)
  
  const [blankLocation, setBlankLocation] = useState (false)
  // const [locationId, setLocationId] = useState(1)
  useEffect(() => {
    // console.log('this is booklist id under useeffect app', booklistId)
    refreshBooklist();
    goHome(blankLocation)
    // MyComponent()
    // goToNextPage(booklistId)
    // console.log("this is booklist id under refreshbooklist in app", booklistId);
  }, [booklistId, blankLocation]);

  const goToNextPage = (id) => {
    // setBookListId(id);
    // // refreshBooklist()
  };
  const goHome = (blankLocation) => {
    blankLocation === true &&
    getBookList(1).then((response) => {
      console.log(response);
      console.log('nav bar triggered')
      // console.log("booklistId in useEffect", booklistId);
      const acceptableFormats = response.results.filter((item) => {
        if (item.formats["text/html"]) {
          return item;
        }
      });
      setBookList(acceptableFormats);
      setBlankLocation(false)
      // setBlankLocation(true)
    });
    // refreshBooklist()
  };

  const refreshBooklist = () => {
    getBookList(booklistId).then((response) => {
      console.log(response);
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
    const location = useLocation();
    let locationIdString;
    let locationIdNumber;
    console.log('location', location)
    // console.log('booklist ID', booklistId)

    return location.pathname !== '/' ?
    //   // location.pathname = "page/1"
    //   // setBookList(1)
    //   // refreshBooklist()
      
    //   return
    // }  else {
      
      // booklistId !== locationIdNumber ?
          (locationIdString = location.pathname.split('/'),
          locationIdNumber = parseInt(locationIdString.pop()),
           booklistId !== locationIdNumber &&
            setBookListId(locationIdNumber)) : setBlankLocation(true)
            
            //  (location.pathname = "page/1",  goHome(1))


    //       }
    // if(location.pathname === '/') {
    //   // location.pathname = "page/1"
    //   // setBookList(1)
    //   // refreshBooklist()
      
    //   return
    // }  else {
      
    //   // booklistId !== locationIdNumber ?
    //       locationIdString = location.pathname.split('/')
    //       locationIdNumber = parseInt(locationIdString.pop())
    //        booklistId !== locationIdNumber &&
    //         setBookListId(locationIdNumber)

    //       }
          // return
          // booklistId !== locationIdNumber &&

    

    // location.pathname === '/' ? setBookList(1)  :


    // setLocationId(locationIdNumber)
    // setBookListId(locationIdNumber)
    // console.log('booklistId wit last', booklistId)
    // refreshBooklist();
    
    // console.log('booklistId wit last', booklistId)
    // return <span>Path is: {location.pathname}</span>;
     
  };

  const handleSearch = (query) => {
    setUserInput(query);
  };
    // console.log('location', location)
console.log(blankLocation)
  console.log('bookListId from app above return', booklistId)
  // console.log('bookList from app above return', bookList)
  return (
    <>
      {/* {    console.log('bookListId from app  return', booklistId)
      }     */}
      <NavBar handleSearch={handleSearch} goHome={goHome}/>
      <main>
        <Route exact path="/" render={() => <WelcomePage  />} />
        {bookList.length > 0 && (
          <Route
            exact
            path="/book/:book_id"
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
              refreshBooklist={refreshBooklist}
              pageId={parseInt(match.match.params.page_id)}
              goToNextPage={goToNextPage}
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
