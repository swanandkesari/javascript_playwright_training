//Why?
/*
//Banking Transaction:
// if we want to send money to some person you typed the amount, then  add OTP and broswer crashed.
// what will you do?
    - verify amount is deducted
        - if debited
            - verify if amount is credited
                - if credited
                      then fine all OK
                -else
                    -raise complaint
*/
function simpletrycatch() {
    try {
        console.log("* Before Error:--")
        //throw new Error("Something went wrong") // as we don't have condition always thrown and we directly jump to catch..
        console.log("* After Error:--") // this won't get executed if throw is not commented. comment throw line to verify
    }
    catch (error) {// if throw is commented this is not executed as error is not thrown nothing to catch,..
        console.log(`Cought error: ${error.message} `) // Error("<message>") same message is printed.. message (string type)is first parameter of Error
        //throw error; // uncommenting this will actually carsh code and error is shown in command line. programm doesnot continue ahead!
    }
    console.log("* Program continues--")
}
simpletrycatch()
/* Output:
//With Throw in try is commented:
* Before Error:--
* After Error:--
* Program continues--
//Uncommenting Throw in try:
* Before Error:--
Cought error: Something went wrong 
* Program continues--
*/

//In practicle scenario we have a condition in which error occurs.
// error will not always occure but occurs for some reason.


function runTest(testName, shouldFail = false) {
    console.log(`Running: ${testName}`);

    try {
        if (shouldFail) { // condition in which error should be thrown
            throw new Error("Element not found");
        }

        console.log(`  ✓ ${testName} PASSED`);
        return { status: "PASSED", error: null };

    } catch (error) {// if error is null won't be executed
        console.log(`  ✗ ${testName} FAILED`);
        console.log(`     Error: ${error.name}`); // better messages to clear inf0ormation about error.
        console.log(`     Error: ${error.message}`);
        return { status: "FAILED", error: error.message };// handeled properly 
    }
}

runTest("Login Test", false);
runTest("Broken Test", true);
runTest("Logout Test", false);


function connectAndTest(testName, shouldFail = false) {
    console.log(`Test: ${testName}`);

    try {
        console.log("  1. Connecting to browser...");
        console.log("  2. Running test...");

        if (shouldFail) {
            throw new Error("Test failed!");
        }

        console.log("  3. ✓ Test passed");
        return "PASSED";

    } catch (error) {
        console.log(`  3. ✗ Test failed: ${error.message}`);
        return "FAILED";

    } finally { // Cleanup:  closing browser, clean up data.
        // This ALWAYS runs - perfect for cleanup!
        console.log("  4. Closing browser...");
        console.log("  5. Cleanup complete");
    }
}
