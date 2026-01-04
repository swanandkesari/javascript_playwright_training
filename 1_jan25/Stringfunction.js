let firstName = "John"
let lastName = "Doe"

function getFullName() {
    return firstName + " " + lastName
}
// we need every letter in uppercase

function getUpperCaseFullName() {
    //return getFullName().toUpperCase()
    //return firstName.toUpperCase() + " " + lastName.toUpperCase() // using concatenation
    return `${firstName.toUpperCase()} ${lastName.toUpperCase()}` // using template literals
}


// forming email id with lowercase full name
function formemailId() {
    return `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`
}
// to use templateliterals use backticks ``
// to use variables inside template literals use ${variableName}
// template literals are preferable over concatenation for better readability

// calling the functions and displaying the results
console.log("Full Name: " + getFullName())
console.log("Uppercase Full Name: " + getUpperCaseFullName())
console.log("Email ID: " + formemailId())

//wrapper classes in Java and their equivalent in JavaScript
// In Java we have primitive data types and their corresponding wrapper classes
// int -> Integer   
// double -> Double
// boolean -> Boolean
// In JavaScript all primitive data types have corresponding wrapper objects
// Number for numeric values
// String for string values
// Boolean for boolean values
// These wrapper objects provide methods to manipulate and operate on the primitive values
// Example of using wrapper objects in JavaScript
let num = 42 // primitive number
let str = "hello world" // primitive string
let bool = true // primitive boolean
// Using wrapper objects to call methods
let numObj = new Number(num)
let strObj = new String(str)
let boolObj = new Boolean(bool)
console.log("Number toFixed: " + numObj.toFixed(2)) // using Number wrapper object method
console.log("String toUpperCase: " + strObj.toUpperCase()) // using String wrapper object method
console.log("Boolean toString: " + boolObj.toString()) // using Boolean wrapper object method

//however in JavaScript we can directly call methods on primitive values due to autoboxing
console.log("Direct Number toFixed: " + num.toFixed(2)) // autoboxing
console.log("Direct String toUpperCase: " + str.toUpperCase()) // autoboxing
console.log("Direct Boolean toString: " + bool.toString()) // autoboxing
let string1 = `Full Name: ${getFullName()}`