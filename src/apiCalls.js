const getBookList = (pageNum) => {
  return fetch(`https://gutendex.com/books/?copyright=false&languages=en&page=1`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 
}

const searchQuery = (query) => {
  return fetch(`https://gutendex.com/books/?copyright=false&languages=en&search=${query}`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 

  }
  const getBook = (bookId) => {
    return fetch(`https://gutendex.com/books/${bookId}`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 
  }


export { getBookList, searchQuery, getBook }