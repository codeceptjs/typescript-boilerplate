class CustomHelper extends Helper {
    printMessage(msg: string) {
      console.log(msg)
    }

    printHelpers() {
      console.log(this.helpers['Puppeteer'])
    }
}

export = CustomHelper