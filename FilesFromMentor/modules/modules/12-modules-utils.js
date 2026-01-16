/**
 * UTILITY FUNCTIONS MODULE
 *
 * This file demonstrates:
 * - Named exports (multiple exports from one file)
 * - Utility functions for test automation
 * - Reusable helper functions
 */

/**
 * Wait for specified milliseconds
 * @param {number} ms - Milliseconds to wait
 * @returns {string} - Confirmation message
 */
function wait(ms) {
    // In real implementation, this would be: await new Promise(resolve => setTimeout(resolve, ms))
    return `Waited ${ms}ms`;
}

/**
 * Generate unique test ID
 * @returns {string} - Unique test ID
 */
function generateTestId() {
    let timestamp = Date.now();
    let random = Math.floor(Math.random() * 1000);
    return `TEST-${timestamp}-${random}`;
}

/**
 * Format date for test reports
 * @param {Date} date - Date to format
 * @returns {string} - Formatted date string
 */
function formatDate(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, '0');
    let day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} - True if valid email format
 */
function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Generate random string
 * @param {number} length - Length of random string
 * @returns {string} - Random string
 */
function randomString(length) {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

/**
 * Retry function with exponential backoff
 * @param {Function} fn - Function to retry
 * @param {number} maxRetries - Maximum retry attempts
 * @returns {string} - Status message
 */
function retry(fn, maxRetries = 3) {
    return `Retrying function up to ${maxRetries} times`;
}

// NAMED EXPORTS - Export multiple functions
// This allows: const { wait, generateTestId } = require('./utils.js')
module.exports = {
    wait,
    generateTestId,
    formatDate,
    validateEmail,
    randomString,
    retry
};
