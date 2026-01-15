//this - represents an object
function TestCase(name, expectedDuration) {
    this.name = name;
    this.expectedDuration = expectedDuration;
    this.status = "PENDING";
    this.actualDuration = 0;
    this.startTime = null;
}

//constructor function:
// Naming convention: Pascle case: first later capital
// All properties are assigned to this.
// All methods in constructor also start with this.
// The way to attach methods to constructor is to use <constructor Name>.prototype.<function name>
// This is not an object but it is defining the way object can be constructed.
TestCase.prototype.start = function () {
    console.log(`  Starting: ${this.name}`);
    this.status = "RUNNING";
    this.startTime = Date.now();
};

TestCase.prototype.complete = function (duration) {
    this.actualDuration = duration;
    this.status = "COMPLETED";
    let variance = this.actualDuration - this.expectedDuration;
    let symbol = variance <= 0.5 ? "✓" : "⚠";
    console.log(`  ${symbol} ${this.name} completed in ${duration}s`);
};

TestCase.prototype.report = function () {
    let variance = this.actualDuration - this.expectedDuration;
    console.log(`\n  Test Report:`);
    console.log(`    Name: ${this.name}`);
    console.log(`    Status: ${this.status}`);
    console.log(`    Expected Duration: ${this.expectedDuration}s`);
    console.log(`    Actual Duration: ${this.actualDuration}s`);
    console.log(`    Variance: ${variance > 0 ? '+' : ''}${variance}s`);
};
// till now we just had a blue print

let test1 = new TestCase("Login Test", 2.5); // instance of the TestCase created using new keyword
let test2 = new TestCase("Checkout Test", 5.0);
console.log(test1);
console.log(test2);

/*
When you use new
1. A new object is created. Empty object {}
2. sets prototype to <TestCase>.prototype
3. Calls TestCase() function with 'this' = new Object)
*/

test1.start();
test1.complete(2.3);
test1.report();

test2.start();
test2.complete(5.6);
test2.report();
