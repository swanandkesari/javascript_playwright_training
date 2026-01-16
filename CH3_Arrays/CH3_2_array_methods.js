//Learn Aray methods
let testResults = ["PASSED", "FAILED", "PASSED"];
// console.log(testResults[0]);
testResults[0] = "SKIPPED"; // change first index value to SKIPPED
// console.log(testResults[0]);
// console.log(testResults[3]);
// testResults[3] = "FAILED";
// console.log(testResults[3]);

testResults[testResults.length] = "SKIPPED"; //gaps in your array
console.log(testResults); //[ 'SKIPPED', 'FAILED', 'PASSED', 'SKIPPED' ] // SKIPPED is added at the last,

testResults.push("PASS");
console.log(testResults); //[ 'SKIPPED', 'FAILED', 'PASSED', 'SKIPPED', 'PASS' ] /// PASS is added at the last,
testResults.unshift("PASS")
console.log(testResults);//[ 'PASS', 'SKIPPED', 'FAILED', 'PASSED', 'SKIPPED', 'PASS' ] /// PASS is added at the first place and whole array is shifted forward
let removedElement = testResults.pop();
// console.log(testResults);
// console.log(removedElement);
// removedElement = testResults.shift()
// console.log(testResults);
// console.log(removedElement);

// let returnValue = testResults.indexOf("PASSED")
// console.log(returnValue)

// if (testResults.indexOf("FAILED") !== -1) {
//     console.log("✗ At least one test FAILED");
// } else {
//     console.log("✓ No failures detected");
// }

let allTests = ["Login", "Logout", "Search", "Checkout", "Payment"];

let subset = allTests.slice(1, 3);
console.log(subset);

console.log(allTests);

let subset1 = allTests.slice(2); //Start from index position 2 till the end. 
console.log(subset1)
let subset2 = allTests.slice(-2);
console.log(subset2)

let copy = allTests.slice();

//let copy1 = allTests;
allTests.push("Shipment", "Credit Card");
console.log(allTests);
//splice
let removedElements = allTests.splice(2, 2);//First parameter starting index position, second parameter is how many elements
console.log(allTests);
console.log(removedElements);

allTests.splice(1, 0, "Add To Cart", "Remove From Cart");
console.log(allTests);
allTests.splice(2, 2, "Google Search")
console.log(allTests);

let results = ["PASSED", "FAILED", "PASSED"];
if (results.includes("FAILED")) {
    console.log("  ✗ Has failures (using includes)");
}


if (results.indexOf("FAILED")) {
    console.log("  ✗ Has failures (using includes)");
}

let testEmails = [
    "valid@test.com",
    "invalid@",
    "missing-at.com",
    "another-valid@example.com",
    ""
];


for (let i = 0; i < testEmails.length; i++) {
    let email = testEmails[i];
    let isValid = email.includes("@") && email.includes(".") && email !== "";

    console.log("Email " + (i + 1) + ": " + (email || "(empty)"));
    console.log("  Expected: " + (isValid ? "VALID" : "INVALID"));
    console.log();
}
