const LoginElementsLocators = require('../PageElements/LoginPageElements.json')

export class LoginPageElements{

   

username(usernamee){
cy.get(LoginElementsLocators.LoginPageLocators.username_text).type(usernamee)
return
}


password(passwordd){

cy.get(LoginElementsLocators.LoginPageLocators.password_text).type(passwordd)
return
}


loginbutton(){
cy.get(LoginElementsLocators.LoginPageLocators.login_button).click()
return
}
 verifyErrorMessage(expectedText) {
    cy.get(LoginElementsLocators.LoginPageLocators.error_message)
      .should('be.visible')
      .and('contain', expectedText)
    return
  }

}