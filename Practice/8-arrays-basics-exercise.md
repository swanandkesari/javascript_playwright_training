# Arrays Basics - Exercise

**Topic:** Arrays - Storing Multiple Values
**File to Create:** `arrays-test-tracking.js`

---

## Learning Goals

By completing this exercise, you will:
- ✅ Create arrays with multiple values
- ✅ Access array elements by index
- ✅ Use array properties (.length)
- ✅ Add elements with push() and unshift()
- ✅ Remove elements with pop() and shift()
- ✅ Find elements with indexOf()
- ✅ Build test result collections

---

## Setup

1. Open VSCode
2. Create a new file: `arrays-test-tracking.js`
3. Save it in your `js-automation-training` folder
4. Test your code by running: `node arrays-test-tracking.js`

---

## Exercise 1: Test Suite Array

**Scenario:** Create an array to store test case names for a login module.

**Requirements:**
1. Create an array called `testCases` with these 5 test names:
   - "Valid credentials"
   - "Invalid password"
   - "Empty username"
   - "Empty password"
   - "Remember me checkbox"

2. Print the following:
   - The complete array
   - Total number of test cases
   - The first test case
   - The last test case (use .length, not hard-coded index!)

**Example Output:**
```
Test Suite: Login Module

Test Cases:
[ 'Valid credentials',
  'Invalid password',
  'Empty username',
  'Empty password',
  'Remember me checkbox' ]

Total test cases: 5
First test: Valid credentials
Last test: Remember me checkbox
```

---

## Exercise 2: Test Results Tracker

**Scenario:** Build a test results array dynamically as tests run.

**Requirements:**
1. Create an empty array called `testResults`
2. "Run" 5 tests by adding these results one by one:
   - "PASSED"
   - "PASSED"
   - "FAILED"
   - "PASSED"
   - "SKIPPED"
3. After adding each result, print: "Test X completed: [RESULT]"
4. At the end, print:
   - Total tests run
   - The complete results array
   - Check if "FAILED" exists (using indexOf)

**Example Output:**
```
Running Test Suite...

Test 1 completed: PASSED
Test 2 completed: PASSED
Test 3 completed: FAILED
Test 4 completed: PASSED
Test 5 completed: SKIPPED

Test Summary:
Total tests run: 5
Results: [ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'SKIPPED' ]
Contains failures: Yes (found at index 2)
```

---

## Exercise 3: Test Data Management

**Scenario:** Manage test user emails using array methods.

**Requirements:**
1. Create an array called `testEmails` with these initial values:
   - "user1@test.com"
   - "user2@test.com"
   - "user3@test.com"

2. Perform these operations:
   - Print initial emails and count
   - Add "user4@test.com" to the END
   - Add "admin@test.com" to the BEGINNING
   - Remove the last email
   - Remove the first email
   - Print final emails and count

**Example Output:**
```
Test Email Management

Initial emails:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]
Count: 3

After adding user4@test.com to end:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After adding admin@test.com to beginning:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

After removing last email:
[ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

After removing first email:
[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

Final count: 3
```

---

## Exercise 4: Test Score Analysis

**Scenario:** Store and analyze test automation scores.

**Requirements:**
1. Create an array called `testScores` with these values:
   - 85, 92, 78, 95, 88, 73, 90

2. Calculate and print:
   - Total number of scores
   - First score
   - Last score
   - Check if score 95 exists in the array

**Example Output:**
```
Test Score Analysis

Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
Total scores: 7

First score: 85
Last score: 90

Checking for specific scores...
Score 95 found: Yes (at index 3)
Score 100 found: No (index: -1)
```

---

## Additional Challenges

### Challenge: Complete Test Report with Parallel Arrays

**Scenario:** Complete test report with parallel arrays.

**Requirements:**
Create a test report system with parallel arrays (same index = related data):

1. Create three arrays:
   - `testNames` - Array of 5 test names
   - `testResults` - Array of 5 results (PASSED/FAILED/SKIPPED)
   - `testDurations` - Array of 5 durations in seconds

2. Print a formatted report for each test showing:
   - Test number
   - Test name
   - Result
   - Duration

3. At the end, calculate and print:
   - Total tests
   - Total duration (sum of all durations)

**Example Output:**
```
════════════════════════════════════════
         TEST EXECUTION REPORT
════════════════════════════════════════

Test 1: Login with valid credentials
  Result: PASSED
  Duration: 2.5s

Test 2: Login with invalid password
  Result: FAILED
  Duration: 1.8s

Test 3: Logout functionality
  Result: PASSED
  Duration: 1.2s

Test 4: Search products
  Result: PASSED
  Duration: 3.4s

Test 5: Add to cart
  Result: SKIPPED
  Duration: 0.0s

════════════════════════════════════════
              SUMMARY
════════════════════════════════════════
Total tests: 5
Total duration: 8.9s
════════════════════════════════════════
```

---

## 💡 Solution Key

<details>
<summary>Click to reveal solutions (try the exercise first!)</summary>

### Complete Solution: `arrays-test-tracking.js`

```javascript
// Arrays Exercise - Complete Solution

console.log("=== EXERCISE 1: TEST SUITE ARRAY ===\n");

let testCases = [
    "Valid credentials",
    "Invalid password",
    "Empty username",
    "Empty password",
    "Remember me checkbox"
];

console.log("Test Suite: Login Module\n");
console.log("Test Cases:");
console.log(testCases);
console.log("");
console.log("Total test cases: " + testCases.length);
console.log("First test: " + testCases[0]);
console.log("Last test: " + testCases[testCases.length - 1]);

console.log("\n=== EXERCISE 2: TEST RESULTS TRACKER ===\n");

let testResults = [];

console.log("Running Test Suite...\n");

testResults.push("PASSED");
console.log("Test 1 completed: PASSED");

testResults.push("PASSED");
console.log("Test 2 completed: PASSED");

testResults.push("FAILED");
console.log("Test 3 completed: FAILED");

testResults.push("PASSED");
console.log("Test 4 completed: PASSED");

testResults.push("SKIPPED");
console.log("Test 5 completed: SKIPPED");

console.log("\nTest Summary:");
console.log("Total tests run: " + testResults.length);
console.log("Results: " + JSON.stringify(testResults));

let failureIndex = testResults.indexOf("FAILED");
if (failureIndex !== -1) {
    console.log("Contains failures: Yes (found at index " + failureIndex + ")");
} else {
    console.log("Contains failures: No");
}

console.log("\n=== EXERCISE 3: TEST DATA MANAGEMENT ===\n");

let testEmails = ["user1@test.com", "user2@test.com", "user3@test.com"];

console.log("Test Email Management\n");
console.log("Initial emails:");
console.log(testEmails);
console.log("Count: " + testEmails.length);

testEmails.push("user4@test.com");
console.log("\nAfter adding user4@test.com to end:");
console.log(testEmails);

testEmails.unshift("admin@test.com");
console.log("\nAfter adding admin@test.com to beginning:");
console.log(testEmails);

testEmails.pop();
console.log("\nAfter removing last email:");
console.log(testEmails);

testEmails.shift();
console.log("\nAfter removing first email:");
console.log(testEmails);

console.log("\nFinal count: " + testEmails.length);

console.log("\n=== EXERCISE 4: TEST SCORE ANALYSIS ===\n");

let testScores = [85, 92, 78, 95, 88, 73, 90];

console.log("Test Score Analysis\n");
console.log("Scores: " + JSON.stringify(testScores));
console.log("Total scores: " + testScores.length);
console.log("");
console.log("First score: " + testScores[0]);
console.log("Last score: " + testScores[testScores.length - 1]);
console.log("");
console.log("Checking for specific scores...");

let index95 = testScores.indexOf(95);
if (index95 !== -1) {
    console.log("Score 95 found: Yes (at index " + index95 + ")");
} else {
    console.log("Score 95 found: No");
}

let index100 = testScores.indexOf(100);
if (index100 !== -1) {
    console.log("Score 100 found: Yes (at index " + index100 + ")");
} else {
    console.log("Score 100 found: No (index: " + index100 + ")");
}

console.log("\n=== BONUS CHALLENGE: PARALLEL ARRAYS ===\n");

let testNames = [
    "Login with valid credentials",
    "Login with invalid password",
    "Logout functionality",
    "Search products",
    "Add to cart"
];

let resultsArray = ["PASSED", "FAILED", "PASSED", "PASSED", "SKIPPED"];
let testDurations = [2.5, 1.8, 1.2, 3.4, 0.0];

console.log("════════════════════════════════════════");
console.log("         TEST EXECUTION REPORT");
console.log("════════════════════════════════════════\n");

// Print each test
for (let i = 0; i < testNames.length; i++) {
    console.log("Test " + (i + 1) + ": " + testNames[i]);
    console.log("  Result: " + resultsArray[i]);
    console.log("  Duration: " + testDurations[i] + "s\n");
}

// Calculate total duration
let totalDuration = 0;
for (let i = 0; i < testDurations.length; i++) {
    totalDuration += testDurations[i];
}

console.log("════════════════════════════════════════");
console.log("              SUMMARY");
console.log("════════════════════════════════════════");
console.log("Total tests: " + testNames.length);
console.log("Total duration: " + totalDuration + "s");
console.log("════════════════════════════════════════");

console.log("\n✅ Exercise Complete!");
```

</details>

---

## Common Mistakes to Avoid

**❌ Off-by-one error accessing last element:**
```javascript
// Wrong - goes beyond array
let last = array[array.length];  // undefined!

// Correct
let last = array[array.length - 1];
```

**❌ Confusing push/pop with unshift/shift:**
```javascript
// push/pop work at the END
array.push("item");    // Add to end
array.pop();           // Remove from end

// unshift/shift work at the BEGINNING
array.unshift("item"); // Add to beginning
array.shift();         // Remove from beginning
```

**❌ Forgetting arrays are zero-indexed:**
```javascript
// Wrong - first element is at index 0
console.log(array[1]);  // This is the SECOND element!

// Correct - first element
console.log(array[0]);  // This is the FIRST element
```

---

## Self-Check Questions

Before you finish, ask yourself:

1. ✅ Do I understand zero-based indexing?
2. ✅ Can I access first and last elements correctly?
3. ✅ Do I know when to use push vs unshift?
4. ✅ Do I know when to use pop vs shift?
5. ✅ Can I use .length properly?
6. ✅ Do I understand how indexOf() works?

---

## Reflection

**Think about:**
1. How are arrays better than multiple individual variables?
2. Where in testing do you track multiple values?
3. How could arrays improve your test data management?
4. What test scenarios would benefit from arrays?

---

## Need Help?

**If you're stuck:**
1. Review the lesson materials
2. Check the presentation slides
3. Look at the demo code files
4. Remember: arrays start at index 0
5. Use console.log() to inspect arrays
6. Ask in the class forum

---

## Progress Check

**You can now:**
- ✅ Create and use arrays
- ✅ Access elements by index
- ✅ Add and remove elements
- ✅ Find elements in arrays
- ✅ Manage collections of test data
