import React, { useState, useEffect } from 'react';
import './App.css'
import { getBookList } from '../apiCalls'

const App = () => {

const [bookList, setBookList] = useState([])


useEffect(() => {
  getBookList()
  .then((response) => {
    setBookList(response.bookList)
  })
  .catch((err) => {
    setErrorMessage(err)
    setErrorStatus(true)
  })
}, [])

return (
  <h1>Hello THERE</h1>
)

}

export default App;
