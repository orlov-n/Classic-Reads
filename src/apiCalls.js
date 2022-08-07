const getBookList = (pageNum) => {
  return fetch(`https://gutendex.com/books/?page=${pageNum}`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 
}

const searchQuery = (query) => {
  return fetch(`https://gutendex.com/books/?search=${query}`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 

    // const getBookLink = (bookID) => {
    //   return fetch(`https://gutendex.com/books/${bookID}`)
    //   .then((response) => {
    //     if (response.ok) {
    //       // console.log('this is response', response.json())
    //       return response.json()
    //     }
    //     throw Error(response.statusText)
    //   }) 
    // }
}


export { getBookList, searchQuery }