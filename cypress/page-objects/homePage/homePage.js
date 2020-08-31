class HomePage {
    // OBJECTS
    getAccountNavigationButton() {
        return cy.get('#navbarAccount');
    }

    getLogInNavigationButton() {
        return cy.get('#navbarLoginButton');
    }

    getEmailNavigationButton() {
        return cy.get('[aria-label="Go to user profile"]');
    }

    // FUNCTIONS
    open(){
        cy.visit('/');
    }

    clickAccountNavigationButton() {
        this.getAccountNavigationButton().click();
    }

    clickLogInNavigationButton() {
        this.getLogInNavigationButton().click();
    }

    // ASSERTIONS
    assertEmail(email) {
        this.getEmailNavigationButton().should('contain.text', email);
    }
}
export default HomePage;