# Data Types - Exercise

**Topic:** Data Types (String, Number, Boolean)
**Difficulty:** ⭐ Beginner

---

## 🎯 Learning Goals

- Work with different data types
- Use strings for text data
- Use numbers for numeric data
- Use booleans for true/false values
- Check types with typeof

---

## 📋 Exercises

### Part 1: Test User Profile with Mixed Types

Create `user-profile-datatypes.js` with a complete user profile using all data types.

**Requirements:**
```javascript
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean
```

Print formatted output with all data.

---

### Part 2: Test Metrics Dashboard

Create `test-metrics-dashboard.js` showing test execution metrics.

**Use these data types:**
- Total tests (number)
- Passed tests (number)
- Failed tests (number)
- Pass rate (number with decimal)
- Test suite name (string)
- All tests passed? (boolean)

---

### Part 3: Type Checking

Create `type-checking-demo.js` using typeof for all variables.

---

## ✅ Self-Check

- [ ] Used strings, numbers, and booleans
- [ ] Numbers don't have quotes
- [ ] Booleans are true/false (no quotes)
- [ ] Used typeof correctly
- [ ] All files run without errors

---

## 💡 Solution Key

<details>
<summary>Click to reveal solutions (try the exercise first!)</summary>

### Part 1 Solution: `user-profile-datatypes.js`
```javascript
// User profile with different data types
let firstName = "John";              // String
let lastName = "Doe";                // String
let userId = 1001;                   // Number
let age = 28;                        // Number
let email = "john.doe@test.com";     // String
let isActive = true;                 // Boolean
let loginCount = 15;                 // Number
let averageScore = 87.5;             // Number
let hasAccess = true;                // Boolean

// Print formatted output
console.log("========================================");
console.log("         TEST USER PROFILE");
console.log("========================================");
console.log("");
console.log("Name: " + firstName + " " + lastName);
console.log("User ID: " + userId);
console.log("Age: " + age);
console.log("Email: " + email);
console.log("Account Active: " + isActive);
console.log("Login Count: " + loginCount);
console.log("Average Score: " + averageScore);
console.log("Has Access: " + hasAccess);
console.log("");
console.log("========================================");
```

### Part 2 Solution: `test-metrics-dashboard.js`
```javascript
// Test execution metrics
let testSuiteName = "Login Test Suite";    // String
let totalTests = 50;                       // Number
let passedTests = 42;                      // Number
let failedTests = 8;                       // Number
let passRate = 84.0;                       // Number with decimal
let allTestsPassed = false;                // Boolean

// Print test metrics dashboard
console.log("========================================");
console.log("      TEST METRICS DASHBOARD");
console.log("========================================");
console.log("");
console.log("Test Suite: " + testSuiteName);
console.log("");
console.log("Total Tests: " + totalTests);
console.log("Passed: " + passedTests);
console.log("Failed: " + failedTests);
console.log("Pass Rate: " + passRate + "%");
console.log("");
console.log("All Tests Passed: " + allTestsPassed);
console.log("");
console.log("========================================");
```

### Part 3 Solution: `type-checking-demo.js`
```javascript
// Create variables with different types
let testName = "Login Test";
let testId = 101;
let testPassed = true;
let executionTime = 2.5;

// Check and print types
console.log("========================================");
console.log("         TYPE CHECKING DEMO");
console.log("========================================");
console.log("");

console.log("Variable: testName");
console.log("Value: " + testName);
console.log("Type: " + typeof testName);
console.log("");

console.log("Variable: testId");
console.log("Value: " + testId);
console.log("Type: " + typeof testId);
console.log("");

console.log("Variable: testPassed");
console.log("Value: " + testPassed);
console.log("Type: " + typeof testPassed);
console.log("");

console.log("Variable: executionTime");
console.log("Value: " + executionTime);
console.log("Type: " + typeof executionTime);
console.log("");

console.log("========================================");
console.log("Summary:");
console.log("  Strings store text");
console.log("  Numbers store numeric values");
console.log("  Booleans store true/false");
console.log("========================================");
```

</details>

---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. When would you use each data type in testing?
2. Why is it important to use the correct data type?
3. What happens if you put quotes around a number?
4. How can typeof help debug your code?

---

## 🆘 Need Help?

**Common Issues:**

**Q: My number is printing with quotes around it**
A: Remove the quotes - numbers don't need them:
```javascript
// ✗ Wrong
let age = "28";  // This is a string!

// ✓ Correct
let age = 28;    // This is a number
```

**Q: Boolean shows as a string**
A: Don't use quotes with true/false:
```javascript
// ✗ Wrong
let isActive = "true";  // This is a string!

// ✓ Correct
let isActive = true;    // This is a boolean
```

**Q: typeof shows "string" for everything**
A: Check that you're not putting quotes around numbers and booleans

**Still stuck?**
- Review the lesson recording
- Check the solution key above
- Ask in class chat
- Email instructor
