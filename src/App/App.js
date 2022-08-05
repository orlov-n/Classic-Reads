import React, { useState, useEffect } from 'react';
import './App.css'
import { getBookList } from '../apiCalls'
import BookList from '../BookList/BookList';

const App = () => {
  const [bookList, setBookList] = useState([])
  
  
  useEffect(() => {
    getBookList()
  .then((response) => {
    setBookList(response.results)
    // console.log('this is bookList in useEffect', bookList)
  })
  // .catch((err) => {
    //   setErrorMessage(err)
    //   setErrorStatus(true)
  // })
}, [])

return (
  <>
  {/* <div>{console.log('this is bookList in the return', bookList)}</div>
  <h1>Hello THERE</h1>
  <iframe></iframe> */}
  <BookList bookListProp={bookList} />
  </>
)

}

export default App;
