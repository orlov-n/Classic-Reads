describe('Search Results Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&search=`, {fixture: 'searchResults'})
    cy.visit('http://localhost:3000/books/search/results')
  })

  it('Should have a title', () => {
    cy.get('h1').contains('Read Now')
  })

  it('Should be able to navigate to the home page', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })


  
})


 
// All standard tests

// Should be able to use back button
// Should be able to use forward button
// Should have loading button show up when fetching
// Should see a message when entering bad request "Your Query Did Not Return Any Results, Please Use Different Search Terms"
// Should be able to see 4 books
// Name of one book should be so and so
// Should be able to use back button
// Should be able to use forward button
// 