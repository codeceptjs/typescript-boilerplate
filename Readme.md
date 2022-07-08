# CodeceptJS TypeScript Boilerplate

This is a boilerplate project which includes CodeceptJS + Playwright setup using TypeScript.

Clone this repository to start:

```
git clone https://github.com/codeceptjs/typescript-boilerplate .
```

> Remove `.git` folder as you won't need it anymore

Install dependencies:

```
npm i
```

> This boilreplate installs Playwright for you. However, you can easily switch to WebDriver or other engine of choice by adding a corresponding helper and installing required dependencies

## Contents

* `codecept.conf.ts` - main configuration file
* `tests/**_test.ts` - test files
* `homePage.ts`, `loginPage.ts` - page objects
* `CustomHelper` - a custom helper
* `presettings.ts` - placeholder for bootstrap / teardown scripts

