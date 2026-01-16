/**
 * TEST DATA MODULE
 *
 * This file demonstrates:
 * - Exporting test data as an object
 * - Centralized test data management
 * - Easy to update test data in one place
 */

const testData = {
    // User credentials for different scenarios
    users: {
        valid: {
            username: "testuser@example.com",
            password: "Test123!@#",
            firstName: "Test",
            lastName: "User"
        },
        admin: {
            username: "admin@example.com",
            password: "Admin123!@#",
            firstName: "Admin",
            lastName: "User",
            role: "administrator"
        },
        invalid: {
            username: "invalid@example.com",
            password: "wrongpassword"
        },
        locked: {
            username: "locked@example.com",
            password: "Locked123",
            status: "locked"
        }
    },

    // Application URLs
    urls: {
        base: "https://app.test.com",
        login: "https://app.test.com/login",
        dashboard: "https://app.test.com/dashboard",
        checkout: "https://app.test.com/checkout",
        api: "https://api.test.com"
    },

    // Timeout values
    timeouts: {
        short: 1000,
        medium: 5000,
        long: 10000,
        veryLong: 30000
    },

    // Test products
    products: {
        laptop: {
            id: "PROD-001",
            name: "Gaming Laptop",
            price: 1299.99,
            category: "Electronics"
        },
        phone: {
            id: "PROD-002",
            name: "Smartphone",
            price: 799.99,
            category: "Electronics"
        },
        book: {
            id: "PROD-003",
            name: "JavaScript Guide",
            price: 39.99,
            category: "Books"
        }
    },

    // Credit card test data
    creditCards: {
        valid: {
            number: "4111111111111111",
            cvv: "123",
            expiry: "12/25",
            name: "Test User"
        },
        declined: {
            number: "4000000000000002",
            cvv: "123",
            expiry: "12/25",
            name: "Declined User"
        }
    },

    // Error messages
    errorMessages: {
        invalidLogin: "Invalid username or password",
        accountLocked: "Your account has been locked",
        requiredField: "This field is required",
        invalidEmail: "Please enter a valid email address"
    }
};

// OBJECT EXPORT - Export the entire data object
// This allows: const testData = require('./data.js')
module.exports = testData;
