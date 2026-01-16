/**
 * DASHBOARD PAGE OBJECT MODULE
 *
 * This file demonstrates:
 * - Another class export example
 * - Different page with different selectors
 * - Reusable page object pattern
 */

class DashboardPage {
    constructor(page) {
        this.page = page;
        this.url = "https://app.test.com/dashboard";

        // Selectors
        this.userNameDisplay = ".user-name";
        this.logoutButton = "#logoutBtn";
        this.welcomeMessage = ".welcome-msg";
        this.menuButton = "#menuBtn";
    }

    navigate() {
        console.log(`  → Navigating to: ${this.url}`);
    }

    getUserName() {
        console.log(`  → Getting username from: ${this.userNameDisplay}`);
        return "Test User";
    }

    logout() {
        console.log(`  → Clicking logout: ${this.logoutButton}`);
        console.log(`  ✓ Logged out successfully`);
    }

    getWelcomeMessage() {
        console.log(`  → Getting welcome message from: ${this.welcomeMessage}`);
        return "Welcome back!";
    }

    openMenu() {
        console.log(`  → Opening menu: ${this.menuButton}`);
    }
}

// DEFAULT EXPORT
module.exports = DashboardPage;
