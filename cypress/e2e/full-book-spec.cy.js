describe('Full Book', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/36752`, {fixture: 'book'})
    cy.visit('http://localhost:3000/book/36752')
  })

  it('Should display a full book', () => {
    cy.get('.full-book').should('have.attr', 'src', "https://www.gutenberg.org/ebooks/36752.html.images" )
  })

  
  // may possibly create a loop.  Unskip at your own risk.
  it.skip('Should be able to change pages with scroll bar', () => {
    cy.scrollTo('bottom').window('.full-book').its('scrollY').should('not.equal', 0)
  })
  
  it('Should have a navbar', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').should('be.visible')
  })

  it('Should have a header', () => {
    cy.get('h1').contains('Read Now')
  })
 
it('Should be able to go directly to home page', () => {
  cy.get('h1')
  .should('have.text', 'Read Now')
  .click()
  cy.url()
  .should('eq', 'http://localhost:3000/')
})

it('Should be able to go directly to Top Free Books page', () => {
  cy.get('[href="/page/1"]')
  .should('have.text', 'Top Free Books')
  .click()
  cy.url()
  .should('eq',  'http://localhost:3000/page/1')
})

it('Should be able to navigate with browsers\'s back and forward buttons.', () => {
cy.visit('http://localhost:3000/')
cy.go('back')
cy.url().should('eq', 'http://localhost:3000/book/36752')
cy.get('embed').should('have.attr', 'src', "https://www.gutenberg.org/ebooks/36752.html.images" )
cy.go('forward')
cy.url().should('eq', 'http://localhost:3000/')
})

it('Should have a search bar', () => {
cy.get('input')
})

it('Should be able to type into the field', () => {
cy.get('input').type('Turing')
})

it('Should be able to click on a submit button and be redirected to returned results page', (() => {
  cy.get('input').type('turing')
  cy.get('.search-button').click();
  cy.url().should('eq', 'http://localhost:3000/books/search/results');
}));
  


})