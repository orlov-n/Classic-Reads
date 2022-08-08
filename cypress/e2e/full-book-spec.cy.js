describe('Full Book', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/36752`, {fixture: 'book'})
    cy.visit('http://localhost:3000/book/36752')
  })




  it.skip('Should display a full book', () => {
    cy.get('.full-book').should('have.attr', 'src', "https://www.gutenberg.org/ebooks/36752.html.images" )
  })

  it.skip('Should be able to change pages with scroll bar', () => {
    cy.scrollTo('bottom').window('.full-book').its('scrollY').should('not.equal', 0)
  })

  it('Should be able to navigate to the Welcome page', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  


  // it('Should be able to click on the title to go home', () => {
  //   cy.get()
  // })

// Should be able to use back button
// Should be able to use forward button

})