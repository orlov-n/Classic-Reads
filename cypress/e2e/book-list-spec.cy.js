describe('Search Results Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&page=1`, {fixture: 'bookList'})
    cy.visit('http://localhost:3000/page/1')
  })
})

// Should be able to use back button
// Should be able to use forward button