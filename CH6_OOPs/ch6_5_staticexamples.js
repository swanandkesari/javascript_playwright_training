"use strict"
class TestRunner {
    // Static property
    parallel;
    static totalTestsRun = 0;//static variables are not instance variables
    static passedTests = 0;
    static failedTests = 0;

    constructor(name) {
        this.name = name;
        this.status = "PENDING";
    }

    // Instance method
    run() {
        console.log(`  Running: ${this.name}`);
        TestRunner.totalTestsRun++;  // Access static property

        // Simulate test
        this.status = Math.random() > 0.3 ? "PASSED" : "FAILED";

        if (this.status === "PASSED") {
            TestRunner.passedTests++;
        } else {
            TestRunner.failedTests++;
        }

        console.log(`    Result: ${this.status}`);
    }

    // Static method - Utility function
    static getSuccessRate() {
        if (TestRunner.totalTestsRun === 0) return 0;
        return (TestRunner.passedTests / TestRunner.totalTestsRun * 100).toFixed(1);
    }

    // Static method - Report
    static printReport() {
        this.parallel = 50;
        console.log(`  Running tests in parallel: ${this.parallel}`);
        console.log(`\n  📊 Test Report:`);
        console.log(`    Total: ${TestRunner.totalTestsRun}`);
        console.log(`    Passed: ${TestRunner.passedTests}`);
        console.log(`    Failed: ${TestRunner.failedTests}`);
        console.log(`    Success Rate: ${TestRunner.getSuccessRate()}%`);
    }

    // Static method - Factory method
    static createSmokeTest(name) {
        console.log(`  Factory: Creating smoke test "${name}"`);
        return new TestRunner(`[SMOKE] ${name}`);
    }

    // Static method - Reset
    static reset() {
        TestRunner.totalTestsRun = 0;
        TestRunner.passedTests = 0;
        TestRunner.failedTests = 0;
        console.log(`  Reset all test counters`);
    }
}

let test1 = new TestRunner("Login Test");
let test2 = new TestRunner("Logout Test");
let test3 = new TestRunner("Search Test");

console.log(`  TestRunner.totalTestsRun: ${TestRunner.totalTestsRun}`);
console.log(`  TestRunner.passedTests: ${TestRunner.passedTests}`);

TestRunner.printReport();
//Only one care you need to take is you cannot use instance variable inside static methods. 
