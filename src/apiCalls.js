const getBookList = (id) => {
  return fetch(
    `https://gutendex.com/books/?copyright=false&languages=en&page=${id}`) 
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  });
};

const searchQuery = (query) => {
  return fetch(
    `https://gutendex.com/books/?copyright=false&languages=en&search=${query}`)
    .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  });
};

const getBook = (bookId) => {
  return fetch(`https://gutendex.com/books/${bookId}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  });
};

export { getBookList, searchQuery, getBook };
