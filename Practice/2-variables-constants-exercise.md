# Variables and Constants - Exercise

**Topic:** Variables and Constants
**Difficulty:** ⭐ Beginner

---

## 🎯 Learning Goals

By completing this exercise, you will:
- Practice creating variables with `let` and `const`
- Store test data in variables
- Use variables in console.log statements
- Understand when to use `let` vs `const`
- Build test data using variables

---

## 📋 Exercise Instructions

### Part 1: Test Environment Variables

Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

**Requirements:**
- Use `const` for values that never change
- Use `let` for values that might change
- Create at least 6 variables
- Print them in a formatted way

**Variables to create:**
1. Application URL (constant)
2. Application name (constant)
3. Environment name (QA, Staging, Production)
4. Current tester name
5. Test execution date
6. Is automation enabled? (we'll use text for now)

**Example Output:**
```
==========================================
     TEST ENVIRONMENT CONFIGURATION
==========================================
App Name: MyShop E-commerce
App URL: https://qa.myshop.com
Environment: QA
Tester: Priya Sharma
Date: 2024-01-16
Automation Enabled: Yes
==========================================
```

**Hints:**
- `const APP_NAME = "MyShop E-commerce";`
- Use uppercase for constants (common convention)
- `let currentTester = "Your Name";`

---

### Part 2: Test Data Generator

Create a new file called `test-user-generator.js` and create multiple test user credentials.

**Requirements:**
- Create 3 different test users
- Each user should have: firstName, lastName, email, password
- Use descriptive variable names (user1FirstName, user1Email, etc.)
- Print all users in a formatted table-like structure

**Example Output:**
```
========================================
         TEST USER DATABASE
========================================

USER 1:
--------
Name: John Doe
Email: john.doe@test.com
Password: JohnPass@123

USER 2:
--------
Name: Jane Smith
Email: jane.smith@test.com
Password: JanePass@456

USER 3:
--------
Name: Bob Johnson
Email: bob.johnson@test.com
Password: BobPass@789

========================================
Total Users: 3
========================================
```

**Hints:**
- Create variables: `let user1FirstName = "John";`
- Combine names: `console.log("Name: " + user1FirstName + " " + user1LastName);`
- Use blank console.log() for spacing

---

### Part 3: Test Flow Simulation

Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

**Requirements:**
- Create a variable for test status
- Show how it changes during test execution
- Create variables for test details (test name, step number, etc.)
- Print the flow as it progresses

**Example Output:**
```
==========================================
      TEST EXECUTION FLOW
==========================================
Test Name: Login Functionality Test
Tester: Priya

Step 1: Opening browser
Status: IN PROGRESS

Step 2: Navigating to login page
Status: IN PROGRESS

Step 3: Entering credentials
Username: testuser@example.com
Status: IN PROGRESS

Step 4: Clicking login button
Status: IN PROGRESS

Step 5: Verifying dashboard
Status: COMPLETED

==========================================
Final Status: PASSED
Test Duration: 2.5 seconds
==========================================
```

**Hints:**
- Start with: `let testStatus = "IN PROGRESS";`
- Update status as you go: `testStatus = "COMPLETED";`
- Use `const` for testName (doesn't change)
- Use `let` for stepNumber (changes)

---

## ✅ Self-Check

Before submitting, verify:
- [ ] All three files run without errors
- [ ] Used `const` for values that don't change
- [ ] Used `let` for values that change
- [ ] Variable names are descriptive (not x, y, z)
- [ ] Output is formatted nicely
- [ ] No typos in variable names

**To run your code:**
```bash
node test-environment-config.js
node test-user-generator.js
node test-execution-flow.js
```

---

## Additional Challenges

### Challenge 1: Update Test Data
Start with one set of credentials, then update them:
```javascript
let username = "olduser@test.com";
console.log("Original: " + username);

username = "newuser@test.com";
console.log("Updated: " + username);
```

### Challenge 2: Test Data Validation Messages
Create variables and show validation messages:
```javascript
const MIN_PASSWORD_LENGTH = 8;
let userPassword = "Test@123";

console.log("Password: " + userPassword);
console.log("Minimum Length Required: " + MIN_PASSWORD_LENGTH);
console.log("Password Length: 9");
console.log("Validation: PASSED");
```

### Challenge 3: Test Case with Prerequisites
```javascript
const TEST_CASE_ID = "TC_001";
const TEST_NAME = "Verify Login";
let prerequisite1 = "User account created";
let prerequisite2 = "Browser launched";
let prerequisite3 = "Network connected";

console.log("Test Case: " + TEST_CASE_ID);
console.log("Test Name: " + TEST_NAME);
console.log("\nPrerequisites:");
console.log("1. " + prerequisite1);
console.log("2. " + prerequisite2);
console.log("3. " + prerequisite3);
```

---

## 💡 Solution Key

<details>
<summary>Click to reveal solutions (try first!)</summary>

### Part 1 Solution: `test-environment-config.js`
```javascript
// Constants (never change)
const APP_NAME = "MyShop E-commerce";
const APP_URL = "https://qa.myshop.com";

// Variables (can change)
let environment = "QA";
let currentTester = "Priya Sharma";
let testDate = "2024-01-16";
let automationEnabled = "Yes";

// Print configuration
console.log("==========================================");
console.log("     TEST ENVIRONMENT CONFIGURATION");
console.log("==========================================");
console.log("App Name: " + APP_NAME);
console.log("App URL: " + APP_URL);
console.log("Environment: " + environment);
console.log("Tester: " + currentTester);
console.log("Date: " + testDate);
console.log("Automation Enabled: " + automationEnabled);
console.log("==========================================");
```

### Part 2 Solution: `test-user-generator.js`
```javascript
// User 1 data
let user1FirstName = "John";
let user1LastName = "Doe";
let user1Email = "john.doe@test.com";
let user1Password = "JohnPass@123";

// User 2 data
let user2FirstName = "Jane";
let user2LastName = "Smith";
let user2Email = "jane.smith@test.com";
let user2Password = "JanePass@456";

// User 3 data
let user3FirstName = "Bob";
let user3LastName = "Johnson";
let user3Email = "bob.johnson@test.com";
let user3Password = "BobPass@789";

// Print all users
console.log("========================================");
console.log("         TEST USER DATABASE");
console.log("========================================");
console.log("");

console.log("USER 1:");
console.log("--------");
console.log("Name: " + user1FirstName + " " + user1LastName);
console.log("Email: " + user1Email);
console.log("Password: " + user1Password);
console.log("");

console.log("USER 2:");
console.log("--------");
console.log("Name: " + user2FirstName + " " + user2LastName);
console.log("Email: " + user2Email);
console.log("Password: " + user2Password);
console.log("");

console.log("USER 3:");
console.log("--------");
console.log("Name: " + user3FirstName + " " + user3LastName);
console.log("Email: " + user3Email);
console.log("Password: " + user3Password);
console.log("");

console.log("========================================");
console.log("Total Users: 3");
console.log("========================================");
```

### Part 3 Solution: `test-execution-flow.js`
```javascript
// Test details (constant)
const TEST_NAME = "Login Functionality Test";
const TESTER = "Priya";

// Variables that change
let testStatus = "IN PROGRESS";
let currentStep = 1;
const username = "testuser@example.com";

// Test flow
console.log("==========================================");
console.log("      TEST EXECUTION FLOW");
console.log("==========================================");
console.log("Test Name: " + TEST_NAME);
console.log("Tester: " + TESTER);
console.log("");

console.log("Step " + currentStep + ": Opening browser");
console.log("Status: " + testStatus);
console.log("");

currentStep = 2;
console.log("Step " + currentStep + ": Navigating to login page");
console.log("Status: " + testStatus);
console.log("");

currentStep = 3;
console.log("Step " + currentStep + ": Entering credentials");
console.log("Username: " + username);
console.log("Status: " + testStatus);
console.log("");

currentStep = 4;
console.log("Step " + currentStep + ": Clicking login button");
console.log("Status: " + testStatus);
console.log("");

currentStep = 5;
testStatus = "COMPLETED";
console.log("Step " + currentStep + ": Verifying dashboard");
console.log("Status: " + testStatus);
console.log("");

testStatus = "PASSED";
console.log("==========================================");
console.log("Final Status: " + testStatus);
console.log("Test Duration: 2.5 seconds");
console.log("==========================================");
```

</details>

---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. When should you use `const` vs `let`?
2. How do variables make your code better than repeating values?
3. What variable naming conventions work best for test data?
4. How could you use variables in your real testing work?

---

## 📚 Key Takeaways

**Variables let you:**
- ✅ Store data for reuse
- ✅ Change values without rewriting code
- ✅ Make code readable and maintainable
- ✅ Represent test data in memory

**Best Practices:**
- Use `const` by default
- Use `let` when value changes
- Choose descriptive names
- Follow naming conventions

---

## 🆘 Need Help?

**Common Issues:**

**Q: "username is not defined"**
A: Make sure you declared it first:
```javascript
// ✗ Wrong
console.log(username);

// ✓ Correct
let username = "test";
console.log(username);
```

**Q: "Assignment to constant variable"**
A: You used `const` but tried to change it. Use `let` instead:
```javascript
// ✗ Wrong
const status = "started";
status = "completed";  // Error!

// ✓ Correct
let status = "started";
status = "completed";  // Works!
```

**Q: Variable prints "undefined"**
A: You declared but didn't assign a value:
```javascript
// ✗ Wrong
let email;
console.log(email);  // undefined

// ✓ Correct
let email = "test@example.com";
console.log(email);  // test@example.com
```

**Still stuck?**
- Review the lesson recording
- Check the solution key above
- Ask in class chat
- Email instructor

---

## 📊 Progress Tracker

Track your learning:
- [ ] Completed Part 1 (Environment Variables)
- [ ] Completed Part 2 (Test Users)
- [ ] Completed Part 3 (Test Flow)
- [ ] All files run without errors
- [ ] Tried at least one bonus challenge
- [ ] Reflected on questions
