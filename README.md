**Steps to run tests:**
1. If do not have, install Node.js and npm: https://www.npmjs.com/get-npm
2. Clone the project.
3. Navigate to the project directory using terminal/powershell.
4. Run "npm install".
5. Open the project with any code editor (example: Visual Studio Code).
6. Checkout any branch you want to test (e.g. feature/3-login-without-UI).
7. Register to website (use any credentials): https://performance-2020.herokuapp.com/#/register (**Note:** after some time users are deleted so you might need to register with same credentials again).
8. Change credentials in **cypress.env.json** for login: email and password.
9. Add base url parameter in **cypress.json** file (example: "baseUrl": "https://performance-2020.herokuapp.com").
10. Run tests. There are 2 ways for that:
    1. With command "npx cypress open". This will open Cypress Dashboard and you can run tests directly from there.
    2. With command "npx cypress run". By default this will run tests in headless mode using Electron browser. This can be updated by sending parameters:
        1. --browser chrome will run on Chrome (npx cypress run --browser chrome)
        2. --headed will run in headed mode (npx cypress run --headed)
        3. --config baseUrl=https://your-super-website.com will add (or change) baseUrl from cypress.json file (npx cypress run --config baseUrl=https://your-super-website.com)

**Reporting:**
1. Mochawesome custom report is used in this project. This reporter:
    1. Runs on Node.js (>=10 version)
    2. Generates the report and saves it in /mochawesome-report directory. 
    3. Parameters can be changed in **cypress.json** configuration file.
