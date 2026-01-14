let testResult = {
    name: "Login Test",
    status: "PASSED"
};

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
