import { LOGIN_PAGE } from '../fixtures/locators';

export default class LoginPage {

    //Getter Methods

    getUsername() {
        return cy.get(LOGIN_PAGE.USERNAME_LOGIN)
    };

    getPassword() {
        return cy.get(LOGIN_PAGE.USERNAME_PASSWORD)
    };

    getSubmitButton() {
        return cy.get(LOGIN_PAGE.SUBMIT_BUTTON)
    };

    //Action Methods

    loginApplication() {
        this.getUsername().should('be.visible').type('majumdarsukant6@gmail.com')
        this.getPassword().should('be.visible').type('Kunal@967320')
        this.getSubmitButton().should('be.visible').click()
    }

    waitforPageToLoad() {
        cy.intercept('GET', '/sdk/vardata').as('pageLoad')
        cy.wait('@pageLoad')
    }

}
