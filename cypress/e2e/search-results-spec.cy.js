describe('Search Results Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&search=turing`, {fixture: 'searchResults'})
    cy.visit('http://localhost:3000/books/search/results')
  })
})



// All standard tests


// Should have loading button show up when fetching
// Should see a message when entering bad request "Your Query Did Not Return Any Results, Please Use Different Search Terms"
// Should be able to see 4 books
// Name of one book should be so and so
// Should be able to use back button
// Should be able to use forward button
// 