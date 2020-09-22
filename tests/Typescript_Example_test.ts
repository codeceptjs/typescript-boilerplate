Feature('Typescript Example');

Scenario('test something', async ({ I, loginPage, homePage }) => {
  homePage.goToHome()
  I.printMessage('Helper message')
  loginPage.testMethod('Login Page')
  await  loginPage.link()
  I.printHelpers()
});
