function hellouser(name) {
    console.log("Hello, " + name + "!");
}
hellouser("Alice");

function hello() {
    console.log("hello!");
}

hello(hello())// even when syntax is wrong or hellow doesnot expect any input it runs hello twice and print hello! twice.. this is incorrect.


// Function is a block of code that can be reused////
// to make code readable, maintainable
// when we drive a car, do we need to know how engine works? no similarly we need not know all is implemented by external function
// not DRY:  Donot Repeat Yourself.
// Function can have input parameter and return will output the results of operations but both are optional
//It is ok to call function and define later
// hoisting allows this
//hoisting will move function declaration to top makes it available before its actual declaration
// expressions are not hoisted
// functions can be convered into expressions and stored in variables
// function expressions are not hoisted
// console.log(sum(5)) // will give error if uncommented as sum is not hoisted
// console.log(sum(5, 10)) // will give error if uncommented as sum is not hoisted

sum(5, 10) //hoisting example calling a function before defining.
function sum(a, b = 0) {
    //If value of b is provided use it otherwise use 0
    // this is called default parameter
    console.log("Calculating the sum of " + a + " and " + b)
    let c = a + b
    return c
}



console.log(sum(5)) //Sum function's return will be taken as inut to Log function.
console.log(sum(5, 10))


function runTest(testname, browser = "chrome", timeout = 3000) {
    console.log("Running " + testname + " on " + browser + " with timeout " + timeout)
}
addParameters = sum(20, 30)

console.log("Sum is: " + addParameters)
// function can be passed as parameters to other functions
function runAnotherTest(testname, testFunction) {
    console.log("Running " + testname)
    testFunction()
}
runAnotherTest("Sample Test", function () {
    console.log("This is a sample test function")
})

// function that validated email using multiple validators
// each validator is a function that returns true or false
//every validator is stored in an array
//every validator function is without name that is anonymous function allowed in js
const emailValidator = [
    function (val) { return val.includes("@") },
    function (val) { return val.includes(".") },

    function (val) { return val.length > 5 }
];
