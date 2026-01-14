class BaseTest {

    constructor(name) {

    }
    fail(error) {

    }
    pass() {

    }

}

class UITest extends BaseTest {
    constructor(name) {
        super(name)
        this.testType = "UI"
    }

    //specific methods for UI tests
    click(element) {
        console.log(`Clicking on ${element} in ${this.testType} test: ${this.name}`)
    }

    type(element, text) {
        console.log(`Typing ${text} into ${element} in ${this.testType} test: ${this.name}`)
    }

}