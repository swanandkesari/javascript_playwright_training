//ERROR, TypeError, ReferenceError, SyntaxError, RangeError, EvalError, URIError

function testElementInteraction(element) {
    try {
        // This could throw different types of errors
        if (element === null) {
            throw new TypeError("Element cannot be null");
        }

        if (element.index < 0 || element.index > 100) {
            throw new RangeError("Element index out of valid range (0-100)");
        }

        if (!element.selector) {
            throw new ReferenceError("Selector property not found");
        }

        console.log(`  ✓ Element valid: ${element.selector}`);

    } catch (e) {
        if (e instanceof TypeError) {
            console.log(`  ⚠ TYPE ERROR: ${e.message}`);
            console.log("     → Check if element is properly initialized");
        } else if (e instanceof RangeError) {
            console.log(`  ⚠ RANGE ERROR: ${e.message}`);
            console.log("     → Element index should be between 0-100");
        } else if (e instanceof ReferenceError) {
            console.log(`  ⚠ REFERENCE ERROR: ${e.message}`);
            console.log("     → Make sure selector property exists");
        } else {
            // Unknown error type - rethrow it
            console.log(`  ❌ UNEXPECTED ERROR: ${e.message}`);
            throw e;
        }
    }
}

console.log("We are continuing")

console.log("Test 1: TypeError");
testElementInteraction(null);

console.log("\nTest 2: RangeError");
testElementInteraction({ selector: "#button", index: 150 });

console.log("\nTest 3: ReferenceError");
testElementInteraction({ index: 5 });

console.log("\nTest 4: Valid element");
testElementInteraction({ selector: "#loginBtn", index: 0 });
console.log();
