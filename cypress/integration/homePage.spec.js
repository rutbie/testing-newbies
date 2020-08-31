import HomePage from '../page-objects/homePage/homePage';
import LoginPage from '../page-objects/loginPage/loginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();

describe('Home Page', () => {
    it('should be able to log in via UI', () => {
        cy.setCookie('cookieconsent_status', 'dismiss');
        cy.setCookie('welcomebanner_status', 'dismiss');

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

    it('should be able to log in without UI', () => {
        const body = {
            email: Cypress.env('email'),
            password: Cypress.env('password')
        }

        cy.request({
            method: 'POST',
            url: '/rest/user/login',
            body,
        }).then((response) => {
            window.localStorage.setItem('token', response.body.authentication.token);
            cy.setCookie('token', response.body.authentication.token);
            cy.setCookie('cookieconsent_status', 'dismiss');
            cy.setCookie('welcomebanner_status', 'dismiss');
        });

        cy.visit('/');
        homePage.clickAccountNavigationButton();
        homePage.assertEmail(Cypress.env('email'));
    });
});
