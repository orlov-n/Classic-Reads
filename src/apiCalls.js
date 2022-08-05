const getBookList = () => {
  return fetch('https://gutendex.com/books')
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw Error(response.statusText)
    }) 
}



export { getBookList }