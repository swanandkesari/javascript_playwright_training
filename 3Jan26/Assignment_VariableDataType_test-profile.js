// we are styudying varibles using testcase example:
/*
Assignment:
Create a fole with AppNmae, FirstNme. email andage and Active
Role
create atleast 8 different variables using let and const
print a nicely formmated profile
*/

const APP_NAME = "User Profile App";
let firstName = "John";
let email = "john@example.com";
email = `${firstName.toLowerCase()}@example.com`; // updating email based on firstName better way learned template literals and string methods

let age = 30;
let isActive = true;
let role = "Test Engineer";
const logUnderLine = "==============================";
console.log(logUnderLine);
console.log("        " + APP_NAME);
console.log(logUnderLine);
console.log("Name: " + firstName);
console.log("Email: " + email);
console.log("Age: " + age);
console.log("Active: " + isActive);
console.log("Role: " + role);
console.log(logUnderLine);