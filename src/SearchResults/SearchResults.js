import React, { useState, useEffect } from "react";
import "./SearchResults.css";
import BookCard from "../BookCard/BookCard";
import { NavLink } from "react-router-dom";
import { searchQuery } from "../apiCalls";
import PropTypes from 'prop-types';

export const SearchResults = ({searchPageNum, userInput, userSearchResults, currentLocation, handleSearch }) => {
  const [newSearchResults, setNewSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSearchPage, setCurrentSearchPage] = useState(1)
  const [query, setQuery] = useState('')
  const [tempSearch, setTempSearch] = useState('')

  useEffect(() => {
    console.log('searchResults from SearchResults in UE', newSearchResults)
    console.log('user input from SearchResults in UE', userInput)
    console.log('searchPageNum in SearchResults in UE', searchPageNum)
    console.log('userInput in SearchResults in UE', userInput)
    console.log('query in SearchResults in UE', query)
    console.log('currentLocation in SearchResults in UE', currentLocation)


    // currentLocation.includes(search) &&
    // (!userInput && currentLocation.includes('search')) 

    if (!userInput) {
      const searchQuery = currentLocation.split("/")[2]
      
      setTempSearch(searchQuery)
      // console.log('searchQuery: ', searchQuery)
      
      handleSearch(tempSearch)
      console.log('tempSearch: ', tempSearch)
    } 

    setQuery(userInput)

    //  !userInput ?
    // (setTempSearch(currentLocation.split("/")[3]), handleSearch(tempSearch))
    // : ''
    // setQuery(userInput)

    // console.log('currentSearchPage in SearchResults in UE', currentSearchPage)
    // makeSearch()
    // searchQuery(searchPageNum, userInput).then((response) => {
    //   console.log('response from search results', response)
    //   setLoading(false)
    //   const acceptableFormats = response.results.filter((item) => {
    //     if (item.formats["text/html"]) {
    //       return item;
    // makeSearch()
    //     }
    //   });
    // setCurrentSearchPage(1)
    //   setNewSearchResults(acceptableFormats);
    //   setUserSearchResults(acceptableFormats);
    // });
  }, [userInput, searchPageNum, currentLocation, tempSearch]);

  // const makeSearch = () => {
  //   // searchQuery(searchPageNum, userInput).then((response) => {
  //   searchQuery(searchPageNum, userInput).then((response) => {
  //     console.log('response from search results', response)
  //     setLoading(false)
  //     const acceptableFormats = response.results.filter((item) => {
  //       if (item.formats["text/html"]) {
  //         return item;
  //       }
  //     });
  //     // setCurrentSearchPage(currentSearchPage )
  //     setNewSearchResults(acceptableFormats);
  //     setUserSearchResults(acceptableFormats);
  //   });
  // }

  const renderBookCards = () => {
    return userSearchResults.map((bookCard) => {
      return (
        <NavLink to={`/full-book/${bookCard.id + 1}`} key={bookCard.id} style={{ textDecoration: "none" }}>
          <BookCard bookCardProp={bookCard} />
        </NavLink>
      );
    });
  };
  console.log('searchResults from SearchResults above return', newSearchResults)
  console.log('user input from SearchResults above return', userInput)
  console.log('searchPageNum in SearchResults AR', searchPageNum)
  // console.log('currentSearchPage in SearchResults in AR', currentSearchPage)

  console.log('userInput in SearchResults AR', userInput)
  console.log('query in SearchResults AR', query)
  console.log('currentLocation in SearchResults AR', currentLocation)
  return (
    <section className="search-results-container">
      {/* {loading && <h2>Loading...</h2>}
      {(!loading && !newSearchResults.length) && <h2>Your Query Did Not Return Any Results, Please Use Different Search Terms</h2> } */}
      {/* {searchResults && renderBookCards()} */}
      {/* <NavLink to={`/search/${pageId + 1}`} style={{ textDecoration: "none" }}> */}
      <NavLink to={`/search/${query}/${searchPageNum + 1}`} style={{ textDecoration: "none" }}>
      {/* <NavLink to={`/search/results/${searchPageNum}`} style={{ textDecoration: "none" }}> */}
      <button>
      {/* <button onClick={() => makeSearch()}> */}
        Next Page
      </button>
      {/* <button onClick={()=> goToNextPage(pageId + 1)}>
        Next Page
      </button> */}
      </NavLink>
      {newSearchResults && renderBookCards()}

    </section>
  );
};


// SearchResults.propTypes = {
//   userInput: PropTypes.string.isRequired,
//   setUserSearchResults: PropTypes.func.isRequired
// };
