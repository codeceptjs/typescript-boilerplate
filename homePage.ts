const { loginPage } = inject()

export = {
  goToHome: () => {
    loginPage.testMethod('From homePage')
  }
}