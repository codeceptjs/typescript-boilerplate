/// <reference types='codeceptjs' />
type loginPage = typeof import('./loginPage');
type homePage = typeof import('./homePage');
type CustomHelper = import('./CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, loginPage: loginPage, homePage: homePage }
  interface Methods extends CodeceptJS.Puppeteer, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
