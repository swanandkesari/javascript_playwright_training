# Conditional Logic - Exercise

**Topic:** Conditional Logic & Validation
**File to Create:** `conditional-validation.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Practice if-else statements
- ✅ Use else if for multiple conditions
- ✅ Write validation logic for test scenarios
- ✅ Apply conditionals to real testing problems
- ✅ Build confidence with decision-making code

---

## Setup

1. Open VSCode
2. Create a new file: `conditional-validation.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node conditional-validation.js`

---

## Exercise 1: Email Validation

**Scenario:** Before running login tests, validate the test email address.

**Requirements:**
1. Create a variable `email` with value `"testuser@example.com"`
2. Write an if-else statement that:
   - Checks if email contains both `@` AND `.`
   - If yes, print: `"✅ Valid email format"`
   - If no, print: `"❌ Invalid email format"`

**Hint:** Use the `.includes()` method:
```javascript
email.includes("@")  // Returns true if email contains @
```

**Test Cases:**
- `"testuser@example.com"` → Valid
- `"notanemail"` → Invalid
- `"missing@domain"` → Invalid (no dot)

**Example Output:**
```
Testing email: testuser@example.com
✅ Valid email format
```

---

## Exercise 2: Test Result Categorizer

**Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

**Requirements:**
1. Create a variable `testResult` with value `"PASSED"`
2. Write an if-else-if statement that handles:
   - `"PASSED"` → Print: `"✓ Test passed successfully"`
   - `"FAILED"` → Print: `"✗ Test failed - check logs"`
   - `"SKIPPED"` → Print: `"⊘ Test skipped"`
   - Anything else → Print: `"? Unknown test status"`

**Test Cases:**
Try running your code with each of these values:
- `"PASSED"`
- `"FAILED"`
- `"SKIPPED"`
- `"PENDING"`

**Example Output:**
```
Test Status: PASSED
✓ Test passed successfully
```

---

## Exercise 3: Password Strength Checker

**Scenario:** Validate password strength for test user creation.

**Requirements:**
1. Create a variable `password` with value `"Test@123"`
2. Write an if-else-if statement that checks password length:
   - Less than 6 characters → `"❌ Weak password - too short"`
   - Less than 10 characters → `"⚠️ Medium password strength"`
   - 10 or more characters → `"✅ Strong password"`

**Test Cases:**
- `"Test"` (4 chars) → Weak
- `"Test@123"` (8 chars) → Medium
- `"Test@12345"` (10 chars) → Strong

**Hint:** Use `.length` property:
```javascript
password.length  // Returns the number of characters
```

**Example Output:**
```
Password: Test@123
Length: 8 characters
⚠️ Medium password strength
```

---

## Exercise 4: Test Score Grading

**Scenario:** Convert test automation scores to letter grades.

**Requirements:**
1. Create a variable `score` with value `85`
2. Write an if-else-if statement that assigns grades:
   - 90 or above → `"Grade: A (Excellent)"`
   - 80-89 → `"Grade: B (Good)"`
   - 70-79 → `"Grade: C (Average)"`
   - 60-69 → `"Grade: D (Pass)"`
   - Below 60 → `"Grade: F (Fail)"`

**Test Cases:**
- `95` → A
- `85` → B
- `75` → C
- `65` → D
- `50` → F

**Important:** Pay attention to the ORDER of conditions! Most specific first.

**Example Output:**
```
Test Score: 85
Grade: B (Good)
```

---

## Additional Challenges

### Challenge: Complete Test User Validation

**Scenario:** Complete test user validation before creating test data.

**Requirements:**
Create a validation function that checks:
1. Username is not empty
2. Password is not empty
3. Password is at least 8 characters
4. Email contains `@` and `.`

```javascript
function validateTestUser(username, password, email) {
    console.log("Validating test user data...\n");

    // Write your if-else-if logic here
    // Check each condition and return appropriate message
}

// Test it
let result = validateTestUser("testuser", "Test@123", "test@example.com");
console.log(result);
```

**Expected Output:**
```
Validating test user data...

Username: testuser ✓
Password: Test@123 ✓
Email: test@example.com ✓

✅ All validations passed - User data ready!
```

**If validation fails:**
```
Validating test user data...

❌ Error: Password must be at least 8 characters
```

---

## 💡 Solution Key

<details>
<summary>Click to reveal solutions (try the exercise first!)</summary>

### Exercise 1 Solution

```javascript
// Exercise 1: Email Validation

let email = "testuser@example.com";
console.log("Testing email: " + email);

if (email.includes("@") && email.includes(".")) {
    console.log("✅ Valid email format");
} else {
    console.log("❌ Invalid email format");
}
```

### Exercise 2 Solution

```javascript
// Exercise 2: Test Result Categorizer

let testResult = "PASSED";
console.log("Test Status: " + testResult);

if (testResult === "PASSED") {
    console.log("✓ Test passed successfully");
} else if (testResult === "FAILED") {
    console.log("✗ Test failed - check logs");
} else if (testResult === "SKIPPED") {
    console.log("⊘ Test skipped");
} else {
    console.log("? Unknown test status");
}
```

### Exercise 3 Solution

```javascript
// Exercise 3: Password Strength Checker

let password = "Test@123";
console.log("Password: " + password);
console.log("Length: " + password.length + " characters");

if (password.length < 6) {
    console.log("❌ Weak password - too short");
} else if (password.length < 10) {
    console.log("⚠️ Medium password strength");
} else {
    console.log("✅ Strong password");
}
```

### Exercise 4 Solution

```javascript
// Exercise 4: Test Score Grading

let score = 85;
console.log("Test Score: " + score);

if (score >= 90) {
    console.log("Grade: A (Excellent)");
} else if (score >= 80) {
    console.log("Grade: B (Good)");
} else if (score >= 70) {
    console.log("Grade: C (Average)");
} else if (score >= 60) {
    console.log("Grade: D (Pass)");
} else {
    console.log("Grade: F (Fail)");
}
```

### Challenge Solution

```javascript
// Challenge: Complete Test User Validation

function validateTestUser(username, password, email) {
    console.log("Validating test user data...\n");
    
    // Check username
    if (username === "" || username === null || username === undefined) {
        return "❌ Error: Username cannot be empty";
    }
    console.log("Username: " + username + " ✓");
    
    // Check password not empty
    if (password === "" || password === null || password === undefined) {
        return "❌ Error: Password cannot be empty";
    }
    
    // Check password length
    if (password.length < 8) {
        return "❌ Error: Password must be at least 8 characters";
    }
    console.log("Password: " + password + " ✓");
    
    // Check email format
    if (!email.includes("@") || !email.includes(".")) {
        return "❌ Error: Invalid email format";
    }
    console.log("Email: " + email + " ✓");
    
    console.log();
    return "✅ All validations passed - User data ready!";
}

// Test with valid user
let result = validateTestUser("testuser", "Test@123", "test@example.com");
console.log(result);

// Test with invalid user (short password)
console.log("\n--- Testing with invalid password ---");
let result2 = validateTestUser("testuser", "short", "test@example.com");
console.log(result2);
```

</details>

---

}
```

**❌ Wrong order of conditions**
```javascript
// Wrong - 95 will match first condition and stop
if (score >= 60) {
    console.log("Pass");
} else if (score >= 90) {  // Never reached!
    console.log("Excellent");
}

// Correct - highest values first
if (score >= 90) {
    console.log("Excellent");
} else if (score >= 60) {
    console.log("Pass");
}
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Did all four exercises run without errors?
2. ✅ Did I test each exercise with different values?
3. ✅ Do I understand when to use `if` vs `else if` vs `else`?
4. ✅ Did I use `===` for comparisons (not `=`)?
5. ✅ Did I put my conditions in the right order?
6. ✅ Can I explain why each condition is checked?

---

## Reflection

**Think about:**
1. How is this similar to manual test case logic?
2. Where could you use if-else in your current testing work?
3. What validation logic do you write in test cases?
4. How would you automate that validation with if-else?

---

## Need Help?

**If you're stuck:**
1. Review the lesson plan examples
2. Check the presentation slides
3. Look at the demo code files
4. Ask in the class forum
5. Email the instructor

**Remember:** Making mistakes is part of learning! Debug, fix, and try again.

---

## Progress Check

**You can now:**
- ✅ Write if-else statements
- ✅ Handle multiple conditions with else if
- ✅ Create validation logic for testing
- ✅ Make decisions in your code
