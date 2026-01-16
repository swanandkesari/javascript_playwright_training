/**
 * CONFIGURATION MODULE
 *
 * This file demonstrates:
 * - Exporting configuration as an object
 * - Environment-specific settings
 * - Centralized configuration management
 */

// You could load different configs based on environment
// const env = process.env.NODE_ENV || 'development';

const config = {
    // Environment
    env: "test",

    // Base URL (would change per environment)
    baseUrl: "https://app.test.com",

    // Browser settings
    browser: "chromium",
    headless: false,
    slowMo: 100,

    // Test timeouts
    timeout: 30000,
    navigationTimeout: 30000,
    actionTimeout: 10000,

    // Retry configuration
    retries: 2,
    retryDelay: 1000,

    // Screenshot settings
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",

    // Viewport
    viewport: {
        width: 1280,
        height: 720
    },

    // User agents
    userAgent: "Mozilla/5.0 Playwright Test",

    // API configuration
    api: {
        baseUrl: "https://api.test.com",
        timeout: 10000,
        headers: {
            "Content-Type": "application/json"
        }
    },

    // Database configuration (for API tests)
    database: {
        host: "localhost",
        port: 5432,
        name: "testdb",
        user: "testuser"
    },

    // Parallel execution
    workers: 4,
    fullyParallel: true,

    // Reporting
    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report' }],
        ['json', { outputFile: 'test-results.json' }]
    ]
};

// OBJECT EXPORT
// This allows: const config = require('./config.js')
module.exports = config;
