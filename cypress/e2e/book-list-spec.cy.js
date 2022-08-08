describe('Popular Book List Page', () => {
  beforeEach (() => {
    cy.intercept('GET', `https://gutendex.com/books/?copyright=false&languages=en&page=1`, {fixture: 'bookList'})
    cy.visit('http://localhost:3000/page/1')
  })

  it('Should have a title', () => {
    cy.get('h1').contains('Read Now')
  })

  
  it('Should be able to navigate to a Welcome page', () => {
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


cy.get('[href="/book/1342"] > .book')







})


  //Should be able to click on a title
  // revisit test to add data sample after fixture is added.

// Should be able to use back button
// Should be able to use forward button
// Should have list of 5 books
// Should be able to click on a book and be taken to it

// it.skip('Should be able to go directly to Welcome Page', () => {
//   cy.get('button')
//   .should('have.text', 'Read Now')
//   .click()
//   cy.url()
//   .should('eq', 'http://localhost:3000/')
// })

// it('Should have a home page displaying books.', () => {
//   cy.get('.books-container').find('.book-card').should('have.length', 3)
// })

// it('Should be able to click on a movie card and be redirected to the movie info page', (() => {
//   cy.get('.card-container').eq(0).click();
//   cy.url().should('eq', 'http://localhost:3000/694919');
// }));

// it('Should be able to navigate using the window back and forward buttons.', () => {
//   cy.visit('http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
//   cy.go('back')
//   cy.url().should('eq', 'http://localhost:3000/')
//   cy.get('.book-card').first().should('contain.text', 'WHERE THE CRAWDADS SING')
//   cy.go('forward')
//   cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
//   // revisit test to add data sample after fixture is added.
// })

// it.skip('Should have a navbar', () => {
//   cy.visit('http://localhost:3000/Hardcover%20Fiction')
//   cy.get('nav').should('be.visible')
// })