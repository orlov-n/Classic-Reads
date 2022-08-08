describe('Popular Book List Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&page=1`, {fixture: 'bookList'})
    cy.visit('http://localhost:3000/page/1')
  })


   it('Should have a navbar', () => {
      cy.visit('http://localhost:3000')
      cy.get('nav').should('be.visible')
    })
  it('Should have a header', () => {
    cy.get('h1').contains('Read Now')
  })

  
  it('Should be able to navigate to a home page', () => {
    cy.get('h1').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })


  it('Should have page displaying most popular books.', () => {
    cy.get('.book-list-container').find('.book').should('have.length', 5)
  })

it('Should be able to navigate with browsers\'s back and forward buttons.', () => {
  cy.visit('http://localhost:3000/')
  cy.go('back')
  cy.url().should('eq', 'http://localhost:3000/page/1')
  cy.get('.book').first().should('contain.text', 'Pride and Prejudice')
  cy.go('forward')
  cy.url().should('eq', 'http://localhost:3000/')
})


it('Should be able to click on a first book and be redirected to it', () => {
  cy.get('[href="/book/1342"] > .book')
})


it('Should have a search bar', () => {
  cy.get('input')
})


it('Should be able to type into the field', () => {
  cy.get('input').type('Turing')
})


it('Should be able to click a SUBMIT button', () => {
  cy.get('.search-button')
})


it('Should have a "Top Free Books" button', () => {
  cy.get('[href="/page/1"] > button')
})



it('Should be able to go directly to Welcome Page', () => {
  cy.get('h1')
  .should('have.text', 'Read Now')
  .click()
  cy.url()
  .should('eq', 'http://localhost:3000/')
})


})


  
// it('Should be able to click on a movie card and be redirected to the movie info page', (() => {
//   cy.get('.card-container').eq(0).click();
//   cy.url().should('eq', 'http://localhost:3000/694919');
// }));



