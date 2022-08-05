const getBookList = (number) => {
  const pageNumber = number < 2 ? '' : `/?page=${number}`
  return fetch(`https://gutendex.com/books${pageNumber}`)
    .then((response) => {
      if (response.ok) {
        // console.log('this is response', response.json()) 
        return response.json()
      }
      throw Error(response.statusText)
    }) 
}



export { getBookList }