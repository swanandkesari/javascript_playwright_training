let testCases = ["Login", "Logout", "Search", "Checkout"];

for (let i = 0; i < testCases.length; i++) {
    console.log("  " + testCases[i]);
}

console.log(testCases.length)

//Below for loop is the  best practice 
for (let testCase of testCases) {
    //testCase = "Checkout"
    console.log("  " + testCase);  // Simpler! No index needed
}

for (let oneTestCaseName of testCases) {
    //testCase = "Checkout"
    console.log("  " + oneTestCaseName);  // Simpler! No index needed
}

let tests = ["Login", "Logout", "Search", "Checkout", "Payment"];
let searchFor = "Search";

console.log("Searching for '" + searchFor + "' in: " + tests);
console.log();

let found = false;
let foundIndex = -1;

for (let i = 0; i < tests.length; i++) {
    console.log("Checking index " + i + ": " + tests[i]);

    if (tests[i] === searchFor) {
        console.log("  ✓ Found it!");
        found = true;
        foundIndex = i;
        break;  // Stop searching
    }
}


let statuses = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED"];

console.log("Processing " + statuses.length + " test results:\n");

let passCount = 0;
let failCount = 0;
let skipCount = 0;

// Using for...of - no index needed!
for (let status of statuses) {
    if (status === "PASSED") {
        passCount++;
    } else if (status === "FAILED") {
        failCount++;
    } else if (status === "SKIPPED") {
        skipCount++;
    }
}

console.log("Summary:");
console.log("  Total: " + statuses.length);
console.log("  Passed: " + passCount);
console.log("  Failed: " + failCount);
console.log("  Skipped: " + skipCount);
console.log("  Pass Rate: " + ((passCount / statuses.length) * 100).toFixed(1) + "%");
console.log();
