let testTemplate = {
    status: "PENDING",
    framework: "Playwright",
    run: function () {
        console.log(`  Running ${this.name}...`);
        this.status = "RUNNING";
    },
    report: function () {
        console.log(`  Test: ${this.name} - Status: ${this.status}`);
    }
};
let lineseparetor = "-----------------------------------------------------------------"
let loginTest = Object.create(testTemplate);
//Create method creates a new object from existing object
console.log("Before setting name:" + loginTest);
console.log("status" + loginTest.status);

loginTest.name = "Login Test"; //create property outside creation of object allowed.
loginTest.priority = "High";
console.log("After setting name:" + loginTest.name);
console.log("priority" + loginTest.priority);
loginTest.run();
loginTest.report();
console.log(lineseparetor);

//new example base test and inherted by criticalTest
let baseTest = {
    status: "PENDING",
    priority: "MEDIUM",
    timeout: 5000
};

let criticalTest = Object.create(baseTest);
criticalTest.name = "Security Test";
criticalTest.priority = "HIGH";  // SHADOWS baseTest.priority!
//Shadowing is applicable for both property as well as methods
console.log(criticalTest.priority)

console.log("  criticalTest has own 'priority':", criticalTest.hasOwnProperty("priority")); //true : Shadowing
console.log("  criticalTest has own 'status':", criticalTest.hasOwnProperty("status"));// false as it is parent property not own.
console.log(lineseparetor);
criticalTest.run = function () {
    console.log("running test")
} //creating method outside object creation.
//The function keyword is not compulsory inside an object literal, but it is required when you assign a function to a property of an existing object.
criticalTest.run()
console.log(lineseparetor);
console.log("New Example Suite Template base class inherited in smoke test");
console.log(lineseparetor);
let suiteTemplate = {
    framework: "Playwright",
    timeout: 30000,
    retries: 3
};

let smokeTest = Object.create(suiteTemplate);
smokeTest.name = "Smoke Test Suite";
smokeTest.testCount = 25;
// use `in` instead of hasOwnProperty differnce is 
// `in` operator returns true for both inherited as well as own property 
console.log("  'name' in smokeTest:", "name" in smokeTest);
console.log("  'testCount' in smokeTest:", "testCount" in smokeTest);
console.log("  'framework' in smokeTest:", "framework" in smokeTest);
console.log("  'timeout' in smokeTest:", "timeout" in smokeTest);
console.log("  'retries' in smokeTest:", "retries" in smokeTest); //false
console.log(lineseparetor);

// use of in to have for loop for in
for (let key in smokeTest) {
    if (Object.hasOwn(smokeTest, key)) {
        console.log(`  Own property: ${key} = ${smokeTest[key]}`);
    }
}
console.log(lineseparetor);
// Create object using assign method
console.log(lineseparetor);
console.log("Create object using assign method");
console.log(lineseparetor);
let logoutTest = Object.assign(Object.create(testTemplate), {
    name: "Logout Test",
    priority: "High",
    logger() {
        console.log("logger function called");
    }
});
logoutTest.logger();
console.log(lineseparetor);
console
console.log(lineseparetor);
