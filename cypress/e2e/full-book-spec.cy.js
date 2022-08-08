describe('Full Book', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/36752`, {fixture: 'book'})
    cy.visit('http://localhost:3000/book/36752')
  })

  it('Should display book', () => {
    cy.get('.full-book').should('have.attr', 'src', "https://www.gutenberg.org/ebooks/36752.html.images" )
  })

  it.skip('Should be able to change pages with scroll bar', () => {
    cy.scrollTo('bottom').window('.full-book').its('scrollY').should('not.equal', 0)
  })

// Should be able to use back button
// Should be able to use forward button

})