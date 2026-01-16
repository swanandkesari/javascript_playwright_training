/**
 * LOGIN PAGE OBJECT MODULE
 *
 * This file demonstrates:
 * - Exporting a class as the default export
 * - Page Object pattern in a separate module
 * - Encapsulating page-specific selectors and actions
 */

class LoginPage {
    constructor(page) {
        this.page = page;
        this.url = "https://app.test.com/login";

        // Selectors
        this.usernameInput = "#username";
        this.passwordInput = "#password";
        this.loginButton = "#loginBtn";
        this.errorMessage = ".error-message";
    }

    navigate() {
        console.log(`  → Navigating to: ${this.url}`);
    }

    login(username, password) {
        console.log(`  → Filling username: ${username}`);
        console.log(`  → Filling password: ${"*".repeat(password.length)}`);
        console.log(`  → Clicking: ${this.loginButton}`);
        console.log(`  ✓ Login completed`);
    }

    getErrorMessage() {
        console.log(`  → Getting error message from: ${this.errorMessage}`);
        return "Invalid credentials";
    }

    isLoginButtonVisible() {
        console.log(`  → Checking visibility: ${this.loginButton}`);
        return true;
    }
}

// DEFAULT EXPORT - Export the class as the default export
// This allows: const LoginPage = require('./login.page.js')
//module.exports = LoginPage;//CommonJS way
export default LoginPage;//ES6 way
