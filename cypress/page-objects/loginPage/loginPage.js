class LoginPage {
    // OBJECTS
    getEmailField() {
        return cy.get('#email');
    }

    getPasswordField() {
        return cy.get('#password');
    }

    getLogInSubmitButton() {
        return cy.get('#loginButton');
    }

    // FUNCTIONS
    fillEmailField(email) {
        this.getEmailField().clear().type(email);
    }

    fillPasswordField(password) {
        this.getPasswordField().clear().type(password);
    }

    clickLogInSubmitButton() {
        this.getLogInSubmitButton().click();
    }

    // ASSERTIONS
    assertLogInButtonIsEnabled(isEnabled) {
        if (isEnabled) {
            this.getLogInSubmitButton().should('be.enabled');
        } else {
            this.getLogInSubmitButton().should('be.disabled')
        }
    }
}

export default LoginPage;