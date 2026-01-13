# String Operations - Exercise

**Topic:** String Operations and Formatting
**Difficulty:** ⭐⭐ Beginner-Intermediate

---

## 🎯 Learning Goals

- Concatenate strings with +
- Use template literals
- Use string methods (toLowerCase, toUpperCase, length)
- Understand how primitives have methods (auto-boxing)
- Know the difference between primitives and wrapper objects
- Format test data professionally

---

## 📋 Exercises

### Part 1: Generate Test Emails

Create `email-generator.js` that generates emails from names.

**Requirements:**
```javascript
let firstName = "John";
let lastName = "Doe";

// Create email using template literals
let email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@test.com`;
console.log(email);  // john.doe@test.com
```

Generate emails for 3 different users.

---

### Part 2: Format Test Report

Create `formatted-test-report.js` with professionally formatted output using template literals.

**Example:**
```javascript
let testName = "Login Functionality";
let tester = "Priya";
let duration = 2.5;
let status = "PASSED";

console.log(`
========================================
Test: ${testName}
Tester: ${tester}
Duration: ${duration}s
Status: ${status}
========================================
`);
```

---

### Part 3: String Methods Practice

Create `string-methods-practice.js` demonstrating:
- .toLowerCase()
- .toUpperCase()
- .length
- String concatenation

---

### Part 4: Understanding Auto-boxing (IMPORTANT!)

**Why this matters:** Students often wonder: "If strings are primitives, how can they have methods like `.toUpperCase()`?"

Create `primitive-autoboxing-demo.js` to understand how primitives have methods:

**Experiment 1: Check the type**
```javascript
console.log("=== Primitives vs Wrapper Objects ===\n");

// Primitive string (use this!)
let str1 = "hello";
console.log("Primitive string:");
console.log("  let str1 = \"hello\"");
console.log("  typeof str1:", typeof str1);  // "string"

// Wrapper object (avoid this!)
let str2 = new String("hello");
console.log("\nWrapper object:");
console.log("  let str2 = new String(\"hello\")");
console.log("  typeof str2:", typeof str2);  // "object" (confusing!)
```

**Experiment 2: See auto-boxing in action**
```javascript
console.log("\n=== Auto-boxing in Action ===\n");

let primitive = "test";
console.log("When you write: primitive.toUpperCase()");
console.log("JavaScript:");
console.log("  1. Temporarily wraps 'test' in String object");
console.log("  2. Calls the method");
console.log("  3. Returns the result");
console.log("  4. Discards the wrapper");
console.log("\nResult:", primitive.toUpperCase());
console.log("Original still a primitive:", typeof primitive);
```

**Experiment 3: Why NEVER use wrapper objects**
```javascript
console.log("\n=== Why Avoid Wrapper Objects ===\n");

// Problem 1: Confusing typeof
let str = new String("hello");
console.log("typeof new String(\"hello\"):", typeof str);  // "object" not "string"!

// Problem 2: Comparison fails
let a = "test";
let b = "test";
console.log("\nPrimitives:");
console.log("  'test' === 'test':", a === b);  // true

let c = new String("test");
let d = new String("test");
console.log("\nWrapper objects:");
console.log("  new String('test') === new String('test'):", c === d);  // false!
console.log("  (Different objects in memory)");
```

**Your task:**
1. Create the file and run all 3 experiments
2. Answer these questions in comments:
   - What is auto-boxing?
   - Why should you use primitives instead of wrapper objects?
   - Can primitives have methods? How?

**Expected understanding:**
```javascript
// ✅ CORRECT WAY:
let name = "John";              // Primitive
console.log(name.toUpperCase()); // Auto-boxing happens automatically!

// ❌ WRONG WAY:
let name = new String("John");   // Wrapper object (avoid!)
```

---

## ✅ Self-Check

- [ ] Used template literals with ${}
- [ ] Used string methods correctly
- [ ] Understand auto-boxing (how primitives have methods)
- [ ] Know why to use primitives, not wrapper objects
- [ ] Formatted output looks professional
- [ ] All files run without errors

---

## 💡 Solution Key

<details>
<summary>Click to reveal solutions (try the exercise first!)</summary>

### Part 1 Solution: `email-generator.js`
```javascript
// Email generator for test users
console.log("========================================");
console.log("      TEST EMAIL GENERATOR");
console.log("========================================\n");

// User 1
let firstName1 = "John";
let lastName1 = "Doe";
let email1 = `${firstName1.toLowerCase()}.${lastName1.toLowerCase()}@test.com`;
console.log("User 1: " + firstName1 + " " + lastName1);
console.log("Email: " + email1);
console.log("");

// User 2
let firstName2 = "Jane";
let lastName2 = "Smith";
let email2 = `${firstName2.toLowerCase()}.${lastName2.toLowerCase()}@test.com`;
console.log("User 2: " + firstName2 + " " + lastName2);
console.log("Email: " + email2);
console.log("");

// User 3
let firstName3 = "Bob";
let lastName3 = "Johnson";
let email3 = `${firstName3.toLowerCase()}.${lastName3.toLowerCase()}@test.com`;
console.log("User 3: " + firstName3 + " " + lastName3);
console.log("Email: " + email3);
console.log("");

console.log("========================================");
console.log("Total emails generated: 3");
console.log("========================================");
```

### Part 2 Solution: `formatted-test-report.js`
```javascript
// Formatted test report using template literals
let testName = "Login Functionality";
let tester = "Priya";
let duration = 2.5;
let status = "PASSED";

console.log(`
========================================
           TEST EXECUTION REPORT
========================================

Test: ${testName}
Tester: ${tester}
Duration: ${duration}s
Status: ${status}

========================================
`);

// Additional example with more fields
let testName2 = "Checkout Process";
let tester2 = "Raj";
let duration2 = 5.8;
let status2 = "FAILED";
let errorMsg = "Payment gateway timeout";

console.log(`
========================================
           TEST EXECUTION REPORT
========================================

Test: ${testName2}
Tester: ${tester2}
Duration: ${duration2}s
Status: ${status2}
Error: ${errorMsg}

========================================
`);
```

### Part 3 Solution: `string-methods-practice.js`
```javascript
// String methods practice
console.log("========================================");
console.log("      STRING METHODS PRACTICE");
console.log("========================================\n");

let testName = "Login Test";

// toLowerCase()
console.log("Original: " + testName);
console.log("Lowercase: " + testName.toLowerCase());
console.log("");

// toUpperCase()
console.log("Original: " + testName);
console.log("Uppercase: " + testName.toUpperCase());
console.log("");

// length
let username = "john.doe@test.com";
console.log("Username: " + username);
console.log("Length: " + username.length);
console.log("");

// String concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("First Name: " + firstName);
console.log("Last Name: " + lastName);
console.log("Full Name: " + fullName);
console.log("");

// Combining methods
let email = "TEST.USER@EXAMPLE.COM";
console.log("Original email: " + email);
console.log("Normalized email: " + email.toLowerCase());
console.log("Email length: " + email.length);
console.log("");

console.log("========================================");
```

### Part 4 Solution: `primitive-autoboxing-demo.js`
```javascript
// Understanding Auto-boxing in JavaScript

console.log("=== Primitives vs Wrapper Objects ===\n");

// Primitive string (use this!)
let str1 = "hello";
console.log("Primitive string:");
console.log("  let str1 = \"hello\"");
console.log("  typeof str1:", typeof str1);  // "string"

// Wrapper object (avoid this!)
let str2 = new String("hello");
console.log("\nWrapper object:");
console.log("  let str2 = new String(\"hello\")");
console.log("  typeof str2:", typeof str2);  // "object" (confusing!)

console.log("\n=== Auto-boxing in Action ===\n");

let primitive = "test";
console.log("When you write: primitive.toUpperCase()");
console.log("JavaScript:");
console.log("  1. Temporarily wraps 'test' in String object");
console.log("  2. Calls the method");
console.log("  3. Returns the result");
console.log("  4. Discards the wrapper");
console.log("\nResult:", primitive.toUpperCase());
console.log("Original still a primitive:", typeof primitive);

console.log("\n=== Why Avoid Wrapper Objects ===\n");

// Problem 1: Confusing typeof
let str = new String("hello");
console.log("typeof new String(\"hello\"):", typeof str);  // "object" not "string"!

// Problem 2: Comparison fails
let a = "test";
let b = "test";
console.log("\nPrimitives:");
console.log("  'test' === 'test':", a === b);  // true

let c = new String("test");
let d = new String("test");
console.log("\nWrapper objects:");
console.log("  new String('test') === new String('test'):", c === d);  // false!
console.log("  (Different objects in memory)");

console.log("\n=== KEY TAKEAWAYS ===\n");

/*
What is auto-boxing?
- Auto-boxing is when JavaScript temporarily converts a primitive value
  into its wrapper object so you can call methods on it.
- It happens automatically when you call a method on a primitive.

Why should you use primitives instead of wrapper objects?
- Primitives are simpler and faster
- typeof works correctly with primitives
- Comparison (===) works as expected with primitives
- Wrapper objects create confusing behavior

Can primitives have methods? How?
- Yes! Primitives can use methods through auto-boxing.
- When you call a method on a primitive, JavaScript:
  1. Temporarily wraps it in an object
  2. Calls the method
  3. Returns the result
  4. Throws away the temporary object
*/

console.log("✅ CORRECT: let name = \"John\";");
console.log("❌ WRONG: let name = new String(\"John\");");
console.log("\nAlways use primitives!");
```

</details>

---

## 🤔 Reflection Questions

After completing the exercise, think about:
1. When would you use template literals vs string concatenation?
2. How can string methods make your test data more consistent?
3. Why is auto-boxing useful for developers?
4. What problems can wrapper objects cause in your code?

---

## 🆘 Need Help?

**Common Issues:**

**Q: Template literals not working**
A: Make sure you use backticks (\`) not quotes:
```javascript
// ✗ Wrong
let msg = "${name}";  // Regular string, not template literal!

// ✓ Correct
let msg = `${name}`;  // Backticks make it a template literal
```

**Q: Method is not a function**
A: Check spelling and make sure you're calling it on a string:
```javascript
// ✗ Wrong
let num = 123;
num.toUpperCase();  // Numbers don't have toUpperCase!

// ✓ Correct
let str = "test";
str.toUpperCase();  // Strings have toUpperCase
```

**Q: Should I use new String()?**
A: No! Always use primitive strings:
```javascript
// ✗ Wrong
let name = new String("John");

// ✓ Correct
let name = "John";
```

**Still stuck?**
- Review the lesson recording
- Check the solution key above
- Ask in class chat
- Email instructor
