let testNames = ["Login Test", "Logout Test", "Search Test", "Cart Test", "Payment Test"];

for( test of testNames) {
     console.log("  Starting: " + test);
}

testNames.forEach(testName => {
    console.log("  Starting: " + testName);
});

testNames.forEach((testName, index) => {
    console.log("  " + (index + 1) + ". " + testName);
});


function countdown(n) {
    // Base case: stop when n reaches 0
    if (n <= 0) {
        console.log("Done!");
        return;
    }

    // Recursive case
    console.log(n);
    countdown(n - 1);  // Function calls ITSELF with smaller value
}

countdown(5);
console.log();

function factorial(n) {
    console.log("Calculating factorial(" + n + ")");

    // Base case: factorial of 1 or 0 is 1
    if (n <= 1) {
        console.log("Base case reached! Returning 1");
        return 1;
    }

    // Recursive case: n! = n × (n-1)!
    let result = n * factorial(n - 1);
    console.log("factorial(" + n + ") = " + result);
    return result;
}


//Set and Map

let testStatuses = ["PASSED", "FAILED", "PASSED", "PASSED", "FAILED", "SKIPPED", "PASSED"];

let uniqueStatus = new Set(testStatuses);
console.log(uniqueStatus)
uniqueStatus.add("BLOCKED")
console.log(uniqueStatus)
uniqueStatus.add("BLOCKED")
console.log(uniqueStatus)
uniqueStatus.delete("SKIPPED")
console.log(uniqueStatus)

let uniqueArray = Array.from(uniqueStatus)
console.log("Array From Set - " + uniqueArray)
let scores = new Set();
scores.add(45)
scores.add(23)

uniqueStatus.forEach(val => {
    console.log(val)
})
for (val of uniqueStatus) {
    console.log(val)
}

//50 smoke tests
//100 regression tests
//10 both


let executedTests = new Set();

function runTest(testName) {
    if (executedTests.has(testName)) {
        console.log("⚠ Warning: '" + testName + "' already executed!");
        return false;
    }

    executedTests.add(testName);
    console.log("✓ Running: " + testName);
    return true;
}

runTest("Login Test");
runTest("Logout Test");
runTest("Search Test");
runTest("Login Test");  // Duplicate!
runTest("Cart Test");
runTest("Search Test");  // Duplicate!

//Map

let testResults = new Map();
testResults.set("Login Test", "PASSED");
testResults.set("Logout Test", "FAILED");
testResults.set("Shipment Test", "SKIPPED");
testResults.set("Payment Test", "PASSED");

console.log(testResults)

console.log(testResults.size)

console.log(testResults.get("Shipment Test"))

testResults.delete("Logout Test")
console.log(testResults)

let testConfig = new Map();

// String keys
testConfig.set("timeout", 30000);
testConfig.set("retries", 3);

testConfig.set(1, "First test");
testConfig.set(2, "Second test");
testConfig.set(3, "Third test");


testConfig.set(true, "Enabled");
testConfig.set(false, "Disabled");

let testObj = { name: "Login" };


testConfig.set(testObj, "Login test configuration");

let browserMap = new Map([
    ["chrome", "Chrome Browser"],
    ["firefox", "Firefox Browser"],
    ["safari", "Safari Browser"],
    ["edge", "Edge Browser"]
]);

console.log(browserMap)
console.log("This is the last log message")






