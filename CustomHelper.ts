class CustomHelper extends Helper {
    constructor(config: any) {
      super(config)
      this.helpers
    }
    printMessage(msg: string) {
      console.log(msg)
    }

    printHelpers() {
      console.log(this.helpers['Puppeteer'])
    }
}

export = CustomHelper