try {
    console.log("  → Before error");
    throw new Error("Something went wrong!");
    console.log("  → After error (this won't run)");
} catch (error) {
    console.log("  → Caught error:", error.message);
    throw error;
}
console.log("  → Program continues!\n");

function runTest(testName, shouldFail = false) {
    console.log(`Running: ${testName}`);

    try {
        if (shouldFail) {
            throw new Error("Element not found");
        }

        console.log(`  ✓ ${testName} PASSED`);
        return { status: "PASSED", error: null };

    } catch (error) {
        console.log(`  ✗ ${testName} FAILED`);
        console.log(`     Error: ${error.name}`);
        console.log(`     Error: ${error.message}`);
        return { status: "FAILED", error: error.message };
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

    } finally { // Cleanup
        // This ALWAYS runs - perfect for cleanup!
        console.log("  4. Closing browser...");
        console.log("  5. Cleanup complete");
    }
}
