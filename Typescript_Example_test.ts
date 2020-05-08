Feature('Typescript Example');

Scenario('test something', ({ I, loginPage, homePage }) => {
  I.amOnPage('/')
  I.printMessage('Oops')
  loginPage.testMethod('Login Page')
  homePage.goToHome()
});
