import { LoginPageElements } from '../PageObjectModel/PageActions/LoginPageActions'
import { ProductPageActions } from '../PageObjectModel/PageActions/ProductPageActions'


Cypress.Commands.add('login', (username, password) => {
  const loginPage = new LoginPageElements()
  cy.visit('https://www.saucedemo.com/')
  loginPage.username(username)
  loginPage.password(password)
  loginPage.loginbutton()
})

Cypress.Commands.add('loginInvalid', (username, password, expectedError) => {
  const loginPage = new LoginPageElements()
  cy.visit('https://www.saucedemo.com/')
  loginPage.username(username)
  loginPage.password(password)
  loginPage.loginbutton()
  loginPage.verifyErrorMessage(expectedError)
})

Cypress.Commands.add('logout', () => {
  const productPage = new ProductPageActions()
  productPage.logout()
})

Cypress.Commands.add('openFirstProduct', () => {
  const productPage = new ProductPageActions()
  productPage.openFirstProduct()
  productPage.verifyProductDetailsVisible()
})