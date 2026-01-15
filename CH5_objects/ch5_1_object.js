let allTests = ["Login", "Logout", "Search", "Checkout", "Payment"];
let results = ["PASSED", "FAILED", "SKIPPED", "PASS", "FAILED"];
let duraation = [2, 1, 6, 1, 5]
//Class vs object
// Class is a blue print, creation of class won't impact anything in the memory
// we need object as instance of class.
// where as object data type is representing similar object directly.
// the object can have members and methods too.
let testCase = {
    name: "Login Test",
    result: "PASSED",
    duration: 2.5
};
console.log(`initiated testCase: ${JSON.stringify(testCase)}`) // if wish to use it with String
console.log(testCase);
delete testCase.name;
console.log("after deleting name from testCase:", testCase)
//console.log(testCase);
testCase.browser = "Chrome"
testCase.tester = "Mark"
console.log("after adding two more members from testCase:", testCase)
let testCase1 = {
    name: "Logout Test",
    result: "FAILED",
    duration: 2.5
};

console.log("________________________");
console.log(testCase);
console.log(testCase.duration); //accessing member
console.log(testCase["duration"]); // another way of accessing member

let abc = "result";
console.log(testCase.abc)// won't work //undefined
console.log(testCase[abc])//PASSED
console.log(abc) //result

testCase.result = "FALIED"
console.log(testCase["result"])//FALIED

console.log("name" in testCase) // whether a property exists in object can be checked //false
console.log("browser" in testCase) // true


//object which Object 

//way of inheritance in Javascript

console.log("Test Name: " + testResult.name);
console.log("Test Status: " + testResult.status);
console.log(testResult.toString())
console.log(testResult)

console.log("Prototype:", Object.getPrototypeOf(testResult));
console.log("Prototype:", Object.getPrototypeOf(Object));

//DRY - Don't Repeat Yourself

//If one object defines 5 methods, 
// we can reuse those methods in other objects.

console.log("testResult.name:", testResult.name);  // Own property
console.log("testResult.toString:", testResult.toString);  // Inherited from Object.prototype!

console.log("1. Check testResult itself:", testResult.hasOwnProperty("toString"));
console.log("2. Check Object.prototype:", Object.prototype.hasOwnProperty("toString"));
