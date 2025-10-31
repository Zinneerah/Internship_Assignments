describe('Login Success Test', () => {
  it('should login successfully', () => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
    cy.logout()
  })
})
