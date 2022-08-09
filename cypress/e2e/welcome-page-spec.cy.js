describe('Welcome Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books`)
    cy.visit('http://localhost:3000/')
  })

  it('Should have a navbar', () => {
    cy.visit('http://localhost:3000')
    cy.get('nav').should('be.visible')
  })

  it('Should have a header', () => {
    cy.get('h1').contains('Read Now')
  })

  it('Should have a "WELCOME" sign', () => {
    cy.get('h2').contains('WELCOME')
  })

  it('Should be able to go directly to Top Free Books page', () => {
    cy.get('[href="/page/1"]')
    
    .should('have.text', 'Top Free Books')
    .click()
    cy.url()
    .should('eq', 'http://localhost:3000/page/1')
  })

it('Should be able to navigate with browsers\'s back and forward buttons.', () => {
  cy.visit('http://localhost:3000/page/1')
  cy.get('.book').first().should('contain.text', 'Pride and Prejudice')
  cy.go('back')
  cy.url().should('eq', 'http://localhost:3000/')
  cy.go('forward')
  cy.url().should('eq', 'http://localhost:3000/page/1')
  })
  


// it('Should have a welcome message', () => {

// })




})