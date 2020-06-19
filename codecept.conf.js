require('ts-node/register')
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './*_test.ts',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://tinkoff.ru',
      show: false,
      windowSize: '1200x900'
    },
    CustomHelper: {
      require: './CustomHelper.ts'
    }
  },
  bootstrap: require('./presettings.ts').bootstrap,
  mocha: {},
  include: {
    loginPage: './loginPage.ts',
    homePage: './homePage.ts'
  },
  name: 'typescript-boilerplate',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}