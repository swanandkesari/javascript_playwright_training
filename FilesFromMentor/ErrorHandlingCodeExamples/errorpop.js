try {
    let user = null;
    user.getName();  // This will cause TypeError

} catch (error) {
    console.log("Error caught!\n");
    console.log("Property: name");
    console.log("  Value:", error.name);
    console.log("  Description: Type of error\n");

    console.log("Property: message");
    console.log("  Value:", error.message);
    console.log("  Description: Error description\n");

    console.log("Property: stack");
    console.log("  Value (first line):", error.stack.split('\n')[0]);
    console.log("  Description: Stack trace for debugging\n");
}

function loginTest(username, password) {
    try {
        if (!username) {
            throw new Error("Username is required for login test");
        }

        if (!password) {
            throw new Error("Password is required for login test");
        }

        if (username === "admin" && password === "wrong") {
            throw new Error("Login failed: Invalid credentials");
        }

        console.log(`  ✓ Login successful for user: ${username}`);
        return true;

    } catch (error) {
        console.log(`  ✗ Test failed`);
        console.log(`     Error name: ${error.name}`);
        console.log(`     Error message: ${error.message}`);
        return false;
    }
}

loginTest("testuser", "password123");
loginTest("", "password123");
loginTest("testuser", "");
loginTest("admin", "wrong");


