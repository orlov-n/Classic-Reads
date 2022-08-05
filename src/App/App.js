import React, { useState, useEffect } from 'react';
import './App.css'
import { getBookList } from '../apiCalls'
import BookList from '../BookList/BookList';
// import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  const [bookList, setBookList] = useState([])
  const [nextPageLink, setNextPageLink] = useState('')
  
  
  useEffect(() => {
    getBookList(1)
  .then((response) => {
    setBookList(bookList => ({
      ...bookList,
      ...response
    }))
    setBookList(response.results)
    setNextPageLink(response.next)
    })
    // console.log('this is bookList in useEffect', bookList)
  // })
  // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
  // })
}, [])

// const returnNextPage = () => {
  
// }

return (
  <>
  {/* <div>{console.log('App.js this is bookList in the return', bookList.results)}</div> */}
  <h1>Hello THERE</h1>
  {/* <iframe></iframe>  */}
  <BookList bookListProp={bookList} nextPageLink={nextPageLink}/>
  </>
)

}

export default App;
