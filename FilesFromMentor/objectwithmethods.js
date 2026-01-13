let testRunner = {
    name: "Login Suite",
    totalTests: 5,
    passedTests: 3,

    // Method: function inside an object
    run: function() {
        console.log("Running test suite: " + this.name);
        console.log("Total tests: " + this.totalTests);
        return 5;
    },

    // Shorthand method syntax (ES6)
    report() {
        console.log("Generating report for: " + this.name);
        console.log("Passed: " + this.passedTests + "/" + this.totalTests);
    }
};

testRunner.run();
testRunner.report();