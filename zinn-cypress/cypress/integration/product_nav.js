describe('Product Navigation Test', () => {

  beforeEach(() => {
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory.html')
    cy.get('.title').should('contain', 'Products')
  })

  it('Should navigate to first product and validate details', () => {
    cy.openFirstProduct()
    cy.logout()
  })
})
