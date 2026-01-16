class TestAutomationError extends Error {
    constructor(message, options) {
        // Pass options to Error constructor to support 'cause' property
        super(message, options);//calling parents constructor i.e. constructor of Error class

        // Set the name property to the class name
        this.name = this.constructor.name;//"TestAutomationError"

        // Maintain proper stack trace (only in V8 engines like Chrome/Node)
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}

class ElementNotFoundError extends TestAutomationError {
    constructor(selector, options) {
        super(`Element not found: ${selector}`, options);
        this.selector = selector;
        this.errorCode = 'ELEMENT_NOT_FOUND';
    }
}

class ElementNotVisibleError extends TestAutomationError {
    constructor(selector, options) {
        super(`Element not visible: ${selector}`, options);
        this.selector = selector;
        this.errorCode = 'ELEMENT_NOT_VISIBLE';
    }
}

class TimeoutError extends TestAutomationError {
    constructor(action, timeout, options) {
        super(`Timeout waiting for ${action} (${timeout}ms)`, options);
        this.action = action;
        this.timeout = timeout;
        this.errorCode = 'TIMEOUT';
    }
}

class AssertionError extends TestAutomationError {
    constructor(expected, actual, options) {
        super(`Assertion failed: expected ${expected}, got ${actual}`, options);
        this.expected = expected;
        this.actual = actual;
        this.errorCode = 'ASSERTION_FAILED';
    }
}



function performTestAction(actionType) {
    try {
        switch (actionType) {
            case "element":
                throw new ElementNotFoundError("#submitButton");

            case "timeout":
                // Chain errors using 'cause'
                let originalError = new Error("Page did not respond");
                throw new TimeoutError("page navigation", 30000, { cause: originalError });

            case "assertion":
                throw new AssertionError("Login Success", "Login Failed");

            case "network":
                throw new NetworkError("https://api.example.com/users", 404);

            default:
                console.log("  ✓ Action completed successfully");
        }
    } catch (error) {
        // Handle different custom error types
        if (error instanceof ElementNotFoundError) {
            console.log(`  ❌ ${error.name}: ${error.message}`);
            console.log(`     Error Code: ${error.errorCode}`);
            console.log(`     Selector: ${error.selector}`);
            console.log(`     → Suggestion: Check if element selector is correct`);

        } else if (error instanceof TimeoutError) {
            console.log(`  ❌ ${error.name}: ${error.message}`);
            console.log(`     Error Code: ${error.errorCode}`);
            console.log(`     Action: ${error.action}`);
            console.log(`     Timeout: ${error.timeout}ms`);

            // Check for chained error
            if (error.cause) {
                console.log(`     Root Cause: ${error.cause.message}`);
            }
            console.log(`     → Suggestion: Increase timeout or check network speed`);

        } else if (error instanceof AssertionError) {
            console.log(`  ❌ ${error.name}: ${error.message}`);
            console.log(`     Error Code: ${error.errorCode}`);
            console.log(`     Expected: ${error.expected}`);
            console.log(`     Actual: ${error.actual}`);
            console.log(`     → Suggestion: Verify test assertions`);

        } else if (error instanceof NetworkError) {
            console.log(`  ❌ ${error.name}: ${error.message}`);
            console.log(`     Error Code: ${error.errorCode}`);
            console.log(`     URL: ${error.url}`);
            console.log(`     Status: ${error.statusCode}`);
            console.log(`     → Suggestion: Check if API endpoint exists`);

        } else if (error instanceof TestAutomationError) {
            console.log(`  ❌ ${error.name}: ${error.message}`);
            console.log(`     Generic test automation error`);

        } else {
            // Unknown error - rethrow
            console.log(`  ❌ UNEXPECTED ERROR: ${error.message}`);
            throw error;
        }
    }
}

