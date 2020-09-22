class CustomHelper extends Helper {
    constructor(config: any) {
      super(config)
      this.helpers
    }
    printMessage(msg: string) {
      console.log(msg)
    }

    printHelpers() {
      console.log('Helpers enabled', Object.keys(this.helpers))
    }
}

export = CustomHelper