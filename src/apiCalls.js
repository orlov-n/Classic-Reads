const getBookList = () => {
  return fetch('https://gutendex.com/books')
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json())
        return response.json()
      }
      throw Error(response.statusText)
    }) 
}



export { getBookList }