describe('Welcome Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&page=1`)
    cy.visit('http://localhost:3000/')
  })

  
  it('Should have a title', () => {
    cy.get('h1').contains('Read Now')
  })

it('Should have a "Top Free Books" button', () => {
  cy.get()
})

it('Should have a search bar', () => {
  cy.get()
})

cy.get()
})

it('Should be able to type into the field', () => {
  cy.get()
})

it('Should be able to click a SUBMIT button', () => {
  cy.get()
})

it('Should have a welcome message', () => {

})

// Should be able to use back button
// Should be able to use forward button