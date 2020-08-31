import HomePage from '../page-objects/homePage/homePage';
import LoginPage from '../page-objects/loginPage/loginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Home Page', () => {
    beforeEach(() => {
        cy.setCookie('cookieconsent_status', 'dismiss');
        cy.setCookie('welcomebanner_status', 'dismiss');
    });

    it('should be able to log in via UI', () => {
        homePage.open();
        homePage.clickAccountNavigationButton();
        homePage.clickLogInNavigationButton();

        loginPage.assertLogInButtonIsEnabled(false);
        loginPage.fillEmailField(Cypress.env('email'));
        loginPage.fillPasswordField(Cypress.env('password'));
        loginPage.assertLogInButtonIsEnabled(true);
        loginPage.clickLogInSubmitButton();

        homePage.clickAccountNavigationButton();
        homePage.assertEmail(Cypress.env('email'));
    });
});
