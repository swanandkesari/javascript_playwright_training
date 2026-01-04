// here we will learn data types of variables in java scritp
// let's see wy it is needed with classic salary example
let employeeSalary = "25000"
let increment = "5000"
console.log("Salary after increment: " + (employeeSalary + increment));
// output will be 250005000 as both variables are string data type
// to fix this we need to use number data type for salary and increment
let empSalary = 25000; // number data type
let incr = 5000; // number data type
console.log("Salary after increment: " + (empSalary + incr));
// output will be 30000 as both variables are number data type


// let's see different data types in javascript
// 1. String data type
let firstName = "John";
console.log("First Name: " + firstName + " , Data Type: " + typeof firstName);

// 2. Number data type
let age = 30;
console.log("Age: " + age + " , Data Type: " + typeof age);
// 3. Boolean data type
let isEmployed = true;
console.log("Is Employed: " + isEmployed + " , Data Type: " + typeof isEmployed);
// 4. Undefined data type
let address;
console.log("Address: " + address + " , Data Type: " + typeof address);
// 5. Null data type
let phoneNumber = null;
console.log("Phone Number: " + phoneNumber + " , Data Type: " + typeof phoneNumber);
phoneNumber = "123-456-7890"; // assigning string value
console.log("Phone Number: " + phoneNumber + " , Data Type: " + typeof phoneNumber);
// now it is string data type, null is special case which shows object type, the above example of dynamic typing
// 6. Object data type
let person = {
    name: "Jane",
    age: 25,
    isEmployed: true
};
console.log("Person Object: " + person + " , Data Type: " + typeof person);// will show [object Object]



// data types: two categories:
// 1. Primitive data types: string, number, boolean, undefined, null, symbol, bigint
// 2. Non-primitive data types: object, array, function
//cool fact : in javascript everything is object except primitive data types
// JavaScript is dynamically typed language means we don't need to specify data type while declaring variable
// data types are important for correct operations abd better code management
// for example if we try to perform arithmetic operation on string data type it will result in concatenation instead of addition

let num1 = "10";
// Summary : using correct data types is important for correct operations and better code management
// also helps in avoiding unexpected bugs and errors in code


/*
// Testing example
// string data type for username, password test name
// URS and validation messages
let username = "testuser";
let password = "password123";
let testName = "Login Test Case";
// number data type for test case id, execution time, count of tests
// decimal values, an mathematical calculations
let testCaseId = 101;
let executionTime = 5; // in seconds
let testCount = 10;
*/
