Feature('Typescript Example');

Scenario('test something', ({ I, loginPage, homePage }) => {
  homePage.goToHome()
  I.printMessage('Helper message')
  loginPage.testMethod('Login Page')
});
