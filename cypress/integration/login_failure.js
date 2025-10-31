describe('Login Failure Test', () => {
  it('should show error for invalid login', () => {
    cy.loginInvalid('invaliduser', 'wrongpassword', 'Username and password do not match')
  })
})
