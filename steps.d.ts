/// <reference types='codeceptjs' />
type pageObject = typeof import('./pageObject');
type CustomHelper = import('./CustomHelper');

declare namespace CodeceptJS {
  interface SupportObject { I: CodeceptJS.I, pageObject: pageObject }
  interface Methods extends CodeceptJS.Puppeteer, CustomHelper {}
  interface I extends WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
