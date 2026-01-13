testResult = "PASSED";

// if (testResult === "PASSED") {
//     console.log("✓ Test passed");
// } else if (testResult === "FAILED") {
//     console.log("✗ Test failed");
// } else if (testResult === "SKIPPED") {
//     console.log("⊘ Test skipped");
// } else {
//     console.log("? Unknown status");
// }


switch (testResult) {
    case "PASSED":
        console.log("✓ Test passed");
        break;
    case "FAILED":
        console.log("✗ Test failed");
        break;
    case "SKIPPED":
        console.log("⊘ Test skipped");
        break;
    default:
        console.log("? Unknown status");
}


//We are selecting browser for test execution? 

let priority = "High";

switch (priority) {
    case "Critical":
    case "High":
        console.log("⚠️  Address immediately");
        console.log("   Priority level: " + priority);
        break;
    case "Medium":
        console.log("📋 Address soon");
        break;
    case "Low":
        console.log("📝 Address when possible");
        break;
    default:
        console.log("Unknown priority");
}



let errorCode = 404;

console.log("HTTP Status Code: " + errorCode);

switch (errorCode) {
    case 200:
        console.log("✓ Success");
        break;
    case 400:
        console.log("✗ Bad Request");
        break;
    case 401:
        console.log("✗ Unauthorized");
        break;
    case 404:
        console.log("✗ Not Found");
        break;
    case 500:
        console.log("✗ Server Error");
        break;
    default:
        console.log("✗ Unknown error: " + errorCode);
}


result = "FAILED";

// Old way (verbose)
let symbol;
if (result === "PASSED") {
    symbol = "✓";
} else {
    symbol = "✗";
}

let symbol2 = (result === "PASSED") ? "✓" : "✗";

console.log("Result: " + result);
console.log("Symbol: " + symbol2);


//counting 0 to 4

for (let i=5; i > 0; i--) {
    console.log("Iteration: " + i)//this line executes 4 times
}
//Instead of using string concatenationm, use template string
// It is enclosed in backticks ` - and you use variable with ${i}

// Count by 2s
console.log("Count by 2s (even numbers):");
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

testCases = ["Login", "Logout", "Search", "Checkout", "payment", "Shipment"];

for(let i = 0; i < testCases.length; i++) {
    console.log(`${i+1}. ${testCases[i]}`)
}

//I ahve all my test case execution result in an array. 

let results = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED"];

let passedCount = 0;
let failedCount = 0;
let skippedCount = 0;

for (let i = 0; i < results.length; i++) {
    if(results[i] === "PASSED") {
        passedCount++;
    } else if (results[i]=== "FAILED") {
        failedCount++;
    } else if (results[i] === "SKIPPED") {
        skippedCount++
    }
}

console.log("Test Summary:");
console.log("  Total tests: " + results.length);
console.log("  Passed: " + passedCount + " (" + ((passedCount / results.length) * 100).toFixed(2) + "%)");
console.log("  Failed: " + failedCount + " (" + ((failedCount / results.length) * 100).toFixed(2) + "%)");
console.log("  Skipped: " + skippedCount + " (" + ((skippedCount / results.length) * 100).toFixed(2) + "%)");
console.log();


console.log("=== FINDING HIGHEST AND LOWEST ===\n");

let scores = [85, 92, 78, 95, 88, 73, 90, 43, 105];

let highest = scores[0];
let lowest = scores[0];


console.log("Results:");
console.log("  Highest: " + highest);
console.log("  Lowest: " + lowest);
