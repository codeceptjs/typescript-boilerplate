const { I } = inject()

export = {
  locator: 'body',
  testMethod: (msg: string) => {
    console.log(msg)
  },
  
  async link () {
    await I.waitForVisible(this.locator)
  }
}