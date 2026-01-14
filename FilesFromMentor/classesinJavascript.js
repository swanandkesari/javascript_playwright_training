class Test {
    // Constructor
    constructor(name, priority = "MEDIUM") {
        this.name = name;//this.name is an object level property, while name is local variable of the constructor
        this.priority = priority;
        this.status = "PENDING";
        this.errors = [];
    }

    // Instance methods
    start() {
        console.log(`  Starting: ${this.name} (${this.priority} priority)`);
        this.status = "RUNNING";
    }

    fail(error) {
        this.errors.push(error);
        this.status = "FAILED";
        console.log(`  ✗ ${this.name} FAILED: ${error}`);
    }

    pass() {
        this.status = "PASSED";
        console.log(`  ✓ ${this.name} PASSED`);
    }

    getReport() {
        return {
            name: this.name,
            priority: this.priority,
            status: this.status,
            errorCount: this.errors.length
        };
    }
}

let uiTest = new Test("UI Test", "HIGH");//calling constructor function. 
let apiTest = new Test("API Test");  // Uses default priority

uiTest.start();
uiTest.pass();
console.log(uiTest.getReport());
console.log(uiTest.status);
apiTest.start();
apiTest.fail("Network error");
console.log(apiTest.getReport());
