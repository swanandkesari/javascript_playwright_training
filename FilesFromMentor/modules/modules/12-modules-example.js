/**
 * DAY 13 (Extended): JAVASCRIPT MODULES
 *
 * Modules allow you to organize code across multiple files.
 * This is ESSENTIAL for building maintainable test frameworks!
 *
 * Topics covered:
 * - Why use modules?
 * - CommonJS vs ES6 Modules
 * - Named exports and imports
 * - Default exports and imports
 * - Importing classes (Page Objects)
 * - Importing functions (utilities)
 * - Importing data (test data, config)
 * - Module organization patterns
 *
 * FILE STRUCTURE:
 * classexamples/
 * ├── 12-modules-example.js          (this file - imports everything)
 * ├── 12-modules-page-login.js       (exports LoginPage class)
 * ├── 12-modules-page-dashboard.js   (exports DashboardPage class)
 * ├── 12-modules-utils.js            (exports utility functions)
 * ├── 12-modules-data.js             (exports test data)
 * └── 12-modules-config.js           (exports configuration)
 */

console.log("╔════════════════════════════════════════════════════════════╗");
console.log("║           JAVASCRIPT MODULES FOR TEST AUTOMATION          ║");
console.log("╚════════════════════════════════════════════════════════════╝\n");

// =============================================================================
// PART 1: UNDERSTANDING MODULES
// =============================================================================

console.log("═══ PART 1: WHY USE MODULES? ═══\n");

console.log("Without Modules:");
console.log("  ❌ All code in one giant file (thousands of lines!)");
console.log("  ❌ Hard to maintain and debug");
console.log("  ❌ Can't reuse code across tests");
console.log("  ❌ Name conflicts (multiple LoginPage classes?)");
console.log("  ❌ No clear separation of concerns\n");

console.log("With Modules:");
console.log("  ✅ Each page object in its own file");
console.log("  ✅ Easy to find and update code");
console.log("  ✅ Reusable across multiple test files");
console.log("  ✅ No name conflicts (each module has own scope)");
console.log("  ✅ Clear organization and structure");

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 2: COMMONJS VS ES6 MODULES
// =============================================================================

console.log("═══ PART 2: MODULE SYSTEMS ═══\n");

console.log("CommonJS (Node.js default):");
console.log("  Syntax: const Module = require('./module.js')");
console.log("  Export: module.exports = { ... }");
console.log("  Used in: Node.js, older projects\n");

console.log("ES6 Modules (Modern JavaScript):");
console.log("  Syntax: import Module from './module.js'");
console.log("  Export: export default Class or export { func }");
console.log("  Used in: Modern projects, Playwright, browser JavaScript");

console.log("\n💡 We'll use CommonJS since we're running in Node.js");
console.log("   (Playwright tests can use ES6 modules with proper config)\n");

console.log("─".repeat(60) + "\n");

// =============================================================================
// PART 3: IMPORTING PAGE OBJECTS (DEFAULT EXPORTS)
// =============================================================================

console.log("═══ PART 3: IMPORTING PAGE OBJECTS (Classes) ═══\n");

console.log("Importing classes from other files...\n");

// Import Page Objects (default exports)
const LoginPage = require('./12-modules-page-login.js');//CommonJS way of doing - old one
import LoginPage from './12-modules-page-login.js';//ES6 way of doing - latest one
const DashboardPage = require('./12-modules-page-dashboard.js');

console.log("✓ Imported: LoginPage from 12-modules-page-login.js");
console.log("✓ Imported: DashboardPage from 12-modules-page-dashboard.js\n");

console.log("Creating page object instances:");

let mockPage = { name: "Mock Playwright Page" };
let loginPage = new LoginPage(mockPage);
let dashboardPage = new DashboardPage(mockPage);

console.log(`  LoginPage instance: ${loginPage.constructor.name}`);
console.log(`  DashboardPage instance: ${dashboardPage.constructor.name}\n`);

console.log("Using imported page objects:");
loginPage.navigate();
loginPage.login("testuser", "password123");

dashboardPage.navigate();
dashboardPage.getUserName();
dashboardPage.logout();

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 4: IMPORTING UTILITIES (NAMED EXPORTS)
// =============================================================================

console.log("═══ PART 4: IMPORTING UTILITY FUNCTIONS (Named Exports) ═══\n");

console.log("Importing named exports from utils file...\n");
//import { test, expect } from '@playwright/test';

// Import named exports using destructuring
const {
    wait,
    generateTestId,
    formatDate,
    validateEmail
} = require('./12-modules-utils.js');

console.log("✓ Imported: wait, generateTestId, formatDate, validateEmail\n");

console.log("Using utility functions:");

// Test wait function
console.log("\n1. Wait function:");
console.log(`  wait(1000) - ${wait(1000)}`);

// Test generateTestId
console.log("\n2. Generate test ID:");
let testId1 = generateTestId();
let testId2 = generateTestId();
console.log(`  Test ID 1: ${testId1}`);
console.log(`  Test ID 2: ${testId2}`);

// Test formatDate
console.log("\n3. Format date:");
let formattedDate = formatDate(new Date('2024-03-15'));
console.log(`  Formatted: ${formattedDate}`);

// Test validateEmail
console.log("\n4. Validate email:");
console.log(`  validateEmail('user@test.com') → ${validateEmail('user@test.com')}`);
console.log(`  validateEmail('invalid.email') → ${validateEmail('invalid.email')}`);

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 5: IMPORTING TEST DATA
// =============================================================================

console.log("═══ PART 5: IMPORTING TEST DATA ═══\n");

console.log("Importing test data from data file...\n");

const testData = require('./12-modules-data.js');

console.log("✓ Imported: testData object\n");

console.log("Available test users:");
console.log(`  Valid user: ${testData.users.valid.username} / ${testData.users.valid.password}`);
console.log(`  Admin user: ${testData.users.admin.username} / ${testData.users.admin.password}`);
console.log(`  Invalid user: ${testData.users.invalid.username} / ${testData.users.invalid.password}`);

console.log("\nTest URLs:");
console.log(`  Base URL: ${testData.urls.base}`);
console.log(`  Login URL: ${testData.urls.login}`);
console.log(`  Dashboard URL: ${testData.urls.dashboard}`);

console.log("\nTest timeouts:");
console.log(`  Short: ${testData.timeouts.short}ms`);
console.log(`  Medium: ${testData.timeouts.medium}ms`);
console.log(`  Long: ${testData.timeouts.long}ms`);

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 6: IMPORTING CONFIGURATION
// =============================================================================

console.log("═══ PART 6: IMPORTING CONFIGURATION ═══\n");

console.log("Importing config from config file...\n");

const config = require('./12-modules-config.js');

console.log("✓ Imported: config object\n");

console.log("Application Configuration:");
console.log(`  Environment: ${config.env}`);
console.log(`  Base URL: ${config.baseUrl}`);
console.log(`  Headless: ${config.headless}`);
console.log(`  Browser: ${config.browser}`);
console.log(`  Timeout: ${config.timeout}ms`);
console.log(`  Retries: ${config.retries}`);
console.log(`  Screenshot: ${config.screenshot}`);
console.log(`  Video: ${config.video}`);

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 7: REAL-WORLD USAGE EXAMPLE
// =============================================================================

console.log("═══ PART 7: COMPLETE TEST EXAMPLE ═══\n");

console.log("Simulating a complete test using all imported modules...\n");

function runLoginTest() {
    console.log("TEST: User Login Flow\n");

    // Use imported config
    console.log(`Step 1: Setup (Environment: ${config.env})`);
    console.log(`  Browser: ${config.browser}`);
    console.log(`  Base URL: ${config.baseUrl}`);

    // Use imported test data
    console.log(`\nStep 2: Navigate to ${testData.urls.login}`);

    // Use imported page object
    console.log("\nStep 3: Perform login");
    let page = { name: "Test Page" };
    let login = new LoginPage(page);
    login.navigate();
    login.login(testData.users.valid.username, testData.users.valid.password);

    // Use imported utilities
    console.log("\nStep 4: Wait for navigation");
    wait(testData.timeouts.short);

    console.log("\nStep 5: Verify dashboard");
    let dashboard = new DashboardPage(page);
    dashboard.navigate();
    dashboard.getUserName();

    // Generate test report ID
    let reportId = generateTestId();
    console.log(`\n✅ Test completed! Report ID: ${reportId}`);
}

runLoginTest();

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 8: MODULE PATTERNS & BEST PRACTICES
// =============================================================================

console.log("═══ PART 8: MODULE ORGANIZATION PATTERNS ═══\n");

console.log("Recommended Test Framework Structure:\n");

console.log("tests/");
console.log("  ├── login.test.js           (imports page objects)");
console.log("  ├── checkout.test.js        (imports page objects)");
console.log("  └── api.test.js             (imports API helpers)");
console.log("");
console.log("pages/");
console.log("  ├── base.page.js            (exports BasePage)");
console.log("  ├── login.page.js           (exports LoginPage)");
console.log("  ├── dashboard.page.js       (exports DashboardPage)");
console.log("  └── checkout.page.js        (exports CheckoutPage)");
console.log("");
console.log("helpers/");
console.log("  ├── api.helper.js           (exports API functions)");
console.log("  ├── db.helper.js            (exports DB functions)");
console.log("  └── wait.helper.js          (exports wait utilities)");
console.log("");
console.log("data/");
console.log("  ├── users.data.js           (exports user test data)");
console.log("  ├── products.data.js        (exports product data)");
console.log("  └── test-data.js            (exports all test data)");
console.log("");
console.log("config/");
console.log("  ├── dev.config.js           (exports dev config)");
console.log("  ├── staging.config.js       (exports staging config)");
console.log("  └── config.js               (exports current config)");

console.log("\n" + "─".repeat(60) + "\n");

// =============================================================================
// PART 9: EXPORT PATTERNS
// =============================================================================

console.log("═══ PART 9: EXPORT PATTERNS SUMMARY ═══\n");

console.log("1. Default Export (for classes, one main export per file):");
console.log("   File: login.page.js");
console.log("   Export: module.exports = LoginPage;");
console.log("   Import: const LoginPage = require('./login.page.js');\n");

console.log("2. Named Exports (for utilities, multiple exports per file):");
console.log("   File: utils.js");
console.log("   Export: module.exports = { wait, retry, validateEmail };");
console.log("   Import: const { wait, retry } = require('./utils.js');\n");

console.log("3. Object Export (for data, config):");
console.log("   File: config.js");
console.log("   Export: module.exports = { env: 'dev', timeout: 5000 };");
console.log("   Import: const config = require('./config.js');\n");

console.log("─".repeat(60) + "\n");

// =============================================================================
// SUMMARY
// =============================================================================

console.log("═══ KEY TAKEAWAYS ═══\n");

console.log("✅ Modules organize code across multiple files");
console.log("✅ Each module has its own scope (no global pollution)");
console.log("✅ Default exports for single main export (classes)");
console.log("✅ Named exports for multiple utilities/functions");
console.log("✅ Page Objects should each be in separate files");
console.log("✅ Utilities, helpers, data, config all modular");
console.log("✅ Tests import only what they need");
console.log("✅ Makes code maintainable and reusable");

console.log("\n" + "═".repeat(60));
console.log("\n✨ Modules are the foundation of professional test frameworks! ✨\n");
