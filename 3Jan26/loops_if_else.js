// This file contains examples of if-else statements and description about it in javascript

// if-else statements are used to perform conditional operations based on certain conditions
// for example in QA domain we check if test is passed or failed or skipped based on certain conditions
let testResults = "failed";

if (testResults === "passed") {
    console.log("Test Case Passed");
}
else if (testResults === "failed") {
    console.log("Test Case Failed");
}
else if (testResults === "skipped") {
    console.log("Test Case Skipped");
}
else {
    console.log("? Unknown Test Result");
}
// if-else statements help in making decisions in code based on conditions
// we can have multiple else-if conditions to check for different scenarios but only one if condition at start.
// if the condition in if statement is true, that block of code will execute and rest will be skipped
//we can have only one else block at the end which will execute if none of the above conditions are true
// if is added again in the block instead of else if then it will be treated as a new if statement and will be evaluated independently
//{ } are used to define the block of code for if, else if and else statements but if there is only one statement inside the block then { } are optional
// however it is a good practice to always use { } for better readability and maintainability of code
//keep in mind that order of conditions matters, the first true condition will execute and rest will be skipped
// we can also use nested if-else statements for more complex conditions

// Example for order of conditions
let length = 6;

if (length > 5) {
    console.log("Length is greater than 5");
}
else if (length > 3) {
    console.log("Length is greater than 3");
}
else {
    console.log("Length is 3 or less");
}

// In the above example, even though length is also greater than 3,
//  the first condition is true so that block will execute and rest will be skipped

//solution for the same:
if (length > 3) {
    console.log("Length is greater than 3");
}
if (length > 5) {// add else if or nested if to avoid independent evaluation
    console.log("Length is greater than 5");
}