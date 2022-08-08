describe('Welcome Page', () => {
  beforeEach (() => {
    cy.intercept('GET',  `https://gutendex.com/books/?copyright=false&languages=en&page=1`, {fixture: 'bookList'})
    cy.visit('http://localhost:3000/')
  })


it('Should have a title', () => {
  cy.get('h1').contains('Read Now')
})

it('Should have a Top Free Books button', () => {
  
})




})