describe('Home Page', () => {
    beforeEach(() => {
        cy.setCookie('cookieconsent_status', 'dismiss');
        cy.setCookie('welcomebanner_status', 'dismiss');
    });

    it('should be able to log in via UI', () => {
        cy.visit('/');
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
        cy.get('#loginButton').should('be.disabled');
        cy.get('#email').clear().type('testing@newbies.com');
        cy.get('#password').clear().type('test123');
        cy.get('#loginButton').click();
        cy.get('#navbarAccount').click();
        cy.get('[aria-label="Go to user profile"]').should('contain.text', 'testing@newbies.com');
    });
});
