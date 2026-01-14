let testTemplate = {
    status: "PENDING",
    framework: "Playwright",
    run: function() {
        console.log(`  Running ${this.name}...`);
        this.status = "RUNNING";
    },
    report: function() {
        console.log(`  Test: ${this.name} - Status: ${this.status}`);
    }
};

let loginTest = Object.create(testTemplate);
console.log("Before setting name:" + loginTest);
console.log("status" + loginTest.status);

loginTest.name = "Login Test";
loginTest.priority = "High";

let baseTest = {
    status: "PENDING",
    priority: "MEDIUM",
    timeout: 5000
};

let criticalTest = Object.create(baseTest);
criticalTest.name = "Security Test";
criticalTest.priority = "HIGH";  // SHADOWS baseTest.priority!

console.log(criticalTest.priority)

console.log("  criticalTest has own 'priority':", criticalTest.hasOwnProperty("priority"));
console.log("  criticalTest has own 'status':", criticalTest.hasOwnProperty("status"));


let suiteTemplate = {
    framework: "Playwright",
    timeout: 30000,
    retries: 3
};

let smokeTest = Object.create(suiteTemplate);
smokeTest.name = "Smoke Test Suite";
smokeTest.testCount = 25;

console.log("  'name' in smokeTest:", "name" in smokeTest);
console.log("  'testCount' in smokeTest:", "testCount" in smokeTest);
console.log("  'framework' in smokeTest:", "framework" in smokeTest);
console.log("  'timeout' in smokeTest:", "timeout" in smokeTest);


for (let key in smokeTest) {
    if (Object.hasOwn(smokeTest, key)) {
        console.log(`  Own property: ${key} = ${smokeTest[key]}`);
    }
}

