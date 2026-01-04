/*
Write a program which will have teh following data and porint them at the end
Test count
Pass test
Failed Test
Test case descirption
Status if the test case passed or failed
*/

let testCount = 15;
let passTest = 12;
let failedTest = testCount - passTest;
let testCaseDescription = "Verify user login functionality with valid credentials";
//let testStatus = failedTest === 0 ? "Passed" : "Failed";// Ternary operation to check 
let testStatus = "Passed";
let isTestCasePassed = true
if (failedTest === 0) {
    testStatus = "Passed"
}
else {
    testStatus = "Failed"
}

const logLine = "==============================";

console.log(logLine);
console.log("        Test Case Summary       ");
console.log(logLine);
console.log("Test Count: " + testCount);
console.log("Passed Tests: " + passTest);
console.log("Failed Tests: " + failedTest);
console.log("Test Case Description: " + testCaseDescription);
console.log("Status: " + isTestCasePassed);
console.log(logLine);