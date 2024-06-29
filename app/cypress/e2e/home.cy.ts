describe('Navigation', () => {
    it('should navigate to the home page', () => {
      // Start from the index page
      cy.visit('http://localhost:3000/')
   
      // Find author name
      cy.get('[data-cy=app_author-name]')
        .should('be.visible')
        .contains('Asfand Yar Amer')
    })
  })