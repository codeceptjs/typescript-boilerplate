Feature('Typescript Example');

Scenario('test something', ({ I, pageObject }) => {
  I.amOnPage('/')
  I.printMessage('Oops')
  pageObject.testMethod('pageObject')
});
