const ProductPageLocators = require('../PageElements/ProductPageElements.json')

export class ProductPageActions {

  openFirstProduct() {
    cy.get(ProductPageLocators.ProductPageLocators.product_item)
      .first()
      .find(ProductPageLocators.ProductPageLocators.product_name)
      .click()
  }

  verifyProductDetailsVisible() {
    cy.url().should('include', '/inventory-item.html')
    cy.get(ProductPageLocators.ProductPageLocators.product_details_name).should('be.visible')
    cy.get(ProductPageLocators.ProductPageLocators.product_details_price).should('be.visible')
  }

  logout() {
    cy.get(ProductPageLocators.ProductPageLocators.menu_button).click()
    cy.get(ProductPageLocators.ProductPageLocators.logout_link).click()
  }
}
