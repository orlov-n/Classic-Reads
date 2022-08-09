describe('Search Results Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&search=`, {fixture: 'searchResults'})
    cy.visit('http://localhost:3000/books/search/results')
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

  it('Should be able to display searched books.', () => {
    cy.get('.search-results-container').find('.book').should('have.length', 4)
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
cy.url().should('eq', 'http://localhost:3000/books/search/results')
cy.get('.book').first().should('contain.text', "The Candy Maker's Guide: A Collection of Choice Recipes for Sugar Boiling")
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

