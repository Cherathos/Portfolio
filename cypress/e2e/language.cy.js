
describe('Portfolio Tests', () => {

    beforeEach(() => {
    cy.visit('http://localhost:5173/')
    })

  it('should display homepage sections', () => {
    cy.get('#root').should('not.be.empty')
    cy.get('header').should('exist')
    cy.get('main').should('exist')
    cy.get('#skills').should('exist')
    cy.get('#projects').should('exist')
  })

  it('should switch between Turkish and English', () => {
    cy.intercept('POST', '/api/language', {
      statusCode: 200,
      body: {},
    }).as('languageRequest')

    // English -> Turkish
    cy.contains('button', "TÜRKÇE'YE GEÇ").click()

    cy.wait('@languageRequest').its('request.body.language')
      .should('equal', 'tr')

    cy.contains('button', 'SWITCH TO ENGLISH').should('exist')

    // Turkish -> English
    cy.contains('button', 'SWITCH TO ENGLISH').click()

    cy.wait('@languageRequest').its('request.body.language')
      .should('equal', 'en')

    cy.contains('button', "TÜRKÇE'YE GEÇ").should('exist')
  })

  it('should toggle dark mode', () => {
    cy.get('#root > div').should('not.have.class', 'dark')

    cy.get('header button').first().click()

    cy.get('#root > div').should('have.class', 'dark')
  })

})
