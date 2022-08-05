import React, { useState, useEffect } from 'react';
import './App.css'
import { getBookList } from '../apiCalls'
import BookList from '../BookList/BookList';
import { Routes, Route, Link } from "react-router-dom";


const App = () => {
  const [bookList, setBookList] = useState({})
  
  
  useEffect(() => {
    getBookList()
  .then((response) => {
    // console.log('this is response in useEffect', response)
    // console.log('this is bookList in useEffect', bookList)
    setBookList(response)
  })
  // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
    // })
  }, [])
  
  const returnNextPage = () => {
    
    }
    
    // console.log('this is booklist in App above return', bookList)
    return (
      <>
  {/* <div>{console.log('App.js this is bookList in the return', bookList.results)}</div> */}
  <h1>Hello THERE</h1>
  {/* <iframe></iframe>  */}
  {bookList.results && <BookList bookListProp={bookList.results} returnNextPage={returnNextPage} />}
  
  </>
)

}

export default App;
