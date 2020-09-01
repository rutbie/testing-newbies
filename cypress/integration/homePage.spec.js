import HomePage from '../page-objects/homePage/homePage';
import LoginPage from '../page-objects/loginPage/loginPage';

const homePage = new HomePage();
const loginPage = new LoginPage();
const emails = ['testing@newbies1.com', 'testing@newbies2.com', 'testing@newbies3.com'];
const password = 'test123'

// const users = [
//     {
//         "email": 'testing@newbies1.com',
//         "password": 'test123'
//     },
//     {
//         "email": 'testing@newbies2.com',
//         "password": 'test123'
//     },
//     {
//         "email": 'testing@newbies3.com',
//         "password": 'test123'
//     }
// ];

describe('Home Page', () => {
    beforeEach(() => {
        cy.setCookie('cookieconsent_status', 'dismiss');
        cy.setCookie('welcomebanner_status', 'dismiss');
    });

    emails.forEach((email) => {
        it(`should be able to log in via UI with email ${email}`, () => {
            homePage.open();
            homePage.clickAccountNavigationButton();
            homePage.clickLogInNavigationButton();
    
            loginPage.assertLogInButtonIsEnabled(false);
            loginPage.fillEmailField(email);
            loginPage.fillPasswordField(password);
            loginPage.assertLogInButtonIsEnabled(true);
            loginPage.clickLogInSubmitButton();
    
            homePage.clickAccountNavigationButton();
            homePage.assertEmail(email);
        });
    });
    
});
