# Tools we are using:
- Node.js — Run our programs
- IDE: Interactive Development Environment: we are using VS Code
- Version Control: Git and GitHub


# Topics covered so far

1. Installed Node.js
2. Installed VS Code
3. Git and GitHub accounts to learn version control
4. Created a project folder / repository
5. Created a GitHub repo
6. `console.log()` to print output
7. Variables: (CH1 _in our coding practice)
    - General:
        -  `var`, `let`, `const`
        - `let`, `const`, `var`
        - Primitive data types: string, number, boolean, undefined, null, symbol, bigint
        - Object: (to be covered)
    - Variable naming practice (camelCase and readability rules)
    - Variable declaration, modification, and reusability
    - Operators:
        -  Unary and compound operators
        - Comparison operators
8. Functions
    - What? Why? DRY 
    - Syntax
    - hoisting
    - function as expression
    - function as parameter for another function
    - default parameter
    - anonymous function
    - String functions
        - toUppercase, toLowerCase, slice, includes, startsWith, endsWith, trim, trimStart, trimEnd
        - Template literals
9. Loops
    - if / else
    - Switch case
    - for
        - traditional for
        - for of
        - for each later in arrays / objects
        - mistakes to avoid
    - while
        - condition
        - do while
        - mistakes to avoid
10. CH3 array
    - length property
    - indexing
    - methods
        - push, pop
        - unshift, shift
        - indexof
        - slice
            - 3 ways
        - splice
        - concat
    - arrow methods
        - filter
        - find
        - every
        - some
        - map
        - reduce
        - forEach
11. CH4 Sets and Maps 
    - recursion
    - set
        - Methods:
    - Map
        - methods: 
        - 
12. CH5 Objects
    



# Notes and key definitions
- Definitions:
    - Git: version control system.
    - GitHub: hosting/service for repositories, issues, PRs, reviews, and CI integrations.
    - IDE: Interactive Development Environment: more than text editor. we are using VS code as IDE.

    - Hoisting will move all defintion at the top. This allows to call function anywhere even before defining.
    - Default parameter of function: if teh default value of teh input parameter of the function is provided it is called as default parameter.
    - iterate: for a set of values we iterate meaning we use each value to do same operation one at a time using some sequence and loop.
    

# Quotes and learning statements

- The expert in anything was once a beginner.
- Reusability and maintainability are essential.
- If you need to copy-paste code, something is wrong — it will be harder to maintain.
- Writing a program is communication.
- Use functions to follow the DRY (Don't Repeat Yourself) principle.

# Random notes during class
- notes dump
    - Status codes in API testing (common examples): 200, 201, 299, 400, 401, 404, 500
    - For interview questions, you often need loops and arrays together.
    - Keep autocomplete OFF for better practice when learning.
        -  Settings (to disable autocomplete for practice)
            @id:editor.quickSuggestions @id:editor.suggestOnTriggerCharacters @id:editor.wordBasedSuggestions @id:editor.tabCompletion @id:javascript.suggest.enabled @id:typescript.suggest.enabled
- Interesting fact
    - JavaScript was created to transform static HTML pages into dynamic ones.


# Chapter: Variables
- Variables: used to store data in memory (a single container).
    - Why use variables?
        - To reuse values in multiple places and change them in one place — improves reusability and maintainability.
        - example:
        Without variables, you would need to type values (e.g., an email ID) multiple times and update everywhere when it changes. That makes maintenance hard.
    - Naming conventions
        1. Cannot start with a number.
        2. Cannot have spaces.
        3. Cannot use special characters except `_` and `$`.
        4. Cannot use reserved keywords like `let`, `var`, `if`, `else`, `for`, `function`, etc.
        5. Use camelCase for multiple words (e.g., `firstName`, `lastName`, `searchBoxLocator`).
        6. Variable names are case sensitive (`firstname` and `FirstName` are different).
        7. Use meaningful names (e.g., `firstName` better than `fn` or `name1`).
        8. Avoid single-letter names except for counters like `i`, `j` in loops.
        9. Use lowercase for single-word variables like `email`, `age`, `country`.
        10. Avoid using underscores in variable names except for constants like `MAX_VALUE`.
        11. Use `const` for variables whose values will not change.
        12. `snake_case` is not preferred in JavaScript but, if used, use lowercase (e.g., `first_name`).

    - Mistakes to avoid
        1. Don't use `var`; prefer `let` and `const` (var is function-scoped and can cause bugs).
        2. Don't use a variable before declaring it.
        3. Don't put quotes around variable names — that makes them strings.
        4. Don't declare the same variable multiple times with `let` (it causes an error).
    
    - Summary: variables store data for reusability and better code management.

    - Points to remember
        - Scope is within the curly braces of a block.
        - When declared with `let` inside a block (function, loop, if/else), it remains only in that block.
        - JavaScript is dynamically typed — a variable's data type can change at runtime.

    - Data types
        - Primitive: string, number, boolean, undefined, null, symbol, bigint
        - Non-primitive: object, array, function
        - In JavaScript, many things are objects except primitive values.
        - Data types matter for correct operations and clearer code.
          - Example: arithmetic on strings results in concatenation.
        - QA domain examples
            -  string: username, password, validation messages
            - number: test case id, execution time, counts
    
    - Operators
        - Operators can behave differently based on data types.
        - Use explicit type conversion when needed.

        -  Unary and compound operators
            - `count += 5` (compound assignment)
            - `++count` (increment then use)
            - `count++` (use then increment)

        - Comparison operators
            - `=` -> assignment
            - `==` -> compares value only (e.g., `5 == "5"` is true)
            - `===` -> compares value and type (e.g., `5 === "5"` is false)
            - Relational: `<`, `>`, `<=`, `>=`
            - Logical: `&&` (and), `||` (or), `!` (not)

# Chapter: Functions and Loops
- Functions
    - What? ->  Function is a block of code that can be reused
    - Why?  ->  Advantage: make code readable, maintainable, and reusable
    - Philosophical Example: when we drive a car, do we need to know how engine works?
       no! Similarly, we need not know all is implemented by external function! but we can still use it.
    - DRY:  Donot Repeat Yourself. (Coding principle will go in Quotes and Learning Statements)
    - Function can have input parameter and return will output the results of operations but both are optional.
    - Syntax: function <name>(<input parameters>) {<actual code>; <optional return statement>}
    - It is ok to call function and define later
    - Hoisting will move all defintion at the top. This allows to call function anywhere even before defining.
    - Functions can be convered into expressions and stored in variables
    - expressions are not hoisted
        - Thus function expressions are also no hoisted
        - Hence, both function expressions and expressions should be defined before calling.
        - example: // console.log(sum(5,10)) // will give error if uncommented as sum is not hoisted and sum() is not defined before calling.
            - here sum(5,10) function is treated as expression
    - Default parameter:
        - function sum(a, b = 0) { return a+b}
        - If value of b is provided use it otherwise use 0. Here B is called default parameter
    - functions can be passed as a parameter to another function.
    - function can be anonymous:
    - example:
    - function that validated email using multiple validators:
        -   each validator is a function that returns true or false
        - every validator is stored in an array
        - every validator function is without name that is anonymous function allowed in js
        - const emailValidator = [
            function (val) { return val.includes("@") },
            function (val) { return val.includes(".") },
            function (val) { return val.length > 5 }
            ];
    - String functions:
        - Strings are commonly used in functions and programming.
        -  Template terminals:
            - To use templateliterals use backticks ``
            - To use variables inside template literals use ${variableName}
            - Template literals are preferable over concatenation for better readability
        - String default methods:
            - toUpperCase(),
            - toLowerCase(),
            - slice()
            - not frequently used:
                - trim(),
                - trimStart(),
                - trimEnd(),

- If / Else

    - `if` / `else` statements perform conditional operations.
    - Multiple `else if` clauses are allowed; only one `else` block is allowed at the end.
    - Only the first true condition executes; order matters.
    - Use `{}` for blocks — even for single statements it's clearer to include them.
    - Nested `if` / `else` is allowed for complex logic.

    - Truthy and falsy values
        - Falsy: `""` (empty string), `0`, `null`, `undefined`, `NaN`, `false`
        - Truthy: non-zero numbers, non-empty strings, objects, arrays

    - Practical examples / assignments
        - Grading system
        - Email validation
        - Username & password validation

- Switch case
    - Use `switch` for multiple discrete values; include `break` to prevent fall-through.

- For loop
    - Traditional for loop:
    - The for loop consists of three main parts and body:
        1. Initialization: let i = 0; // initializes the loop counter variable i to 0
        2. Condition: i < 5; // checks if the loop should continue running (as long as i is less than 5)
        3. Increment: i++; // increments the counter variable i by 1 after each iteration
        4. Body: The loop will execute the body (console.log statement) 5 times with i taking values from 0 to 4. 
    - infinite loop
        - for (let i = 0; i < 5; i--) { }; // this will create an infinite loop as i will always be less than 5
        - avoid such condition a
        - correction can be: for (let i = 5; i > 0; i--) { };// counting down from 5 to 1 this is a valid loop
    - for of loop: loop over array
        - example:
                let testcaseNames = ["login test", "signup test", "logout test", 'search test'];
                for (let testName of testcaseNames) { // for...of loop to iterate over array elements directly
                console.log(`Executing Test Case: ${testName}`);
                }
        - same as for each in java.
        - more readable when we are fixed to iterate over array prefer  for of over traditional for or while loops.
        - cleaner way that traditional for loop
    - for each loop: loop over array will be covered later
    - nested for loop is allowed
        - example:
        -   for tests from testsuits
            for browser in broswers
             execute tests
    - mitakes to avoid:
        - index out of bound
            - for(i=0; i<= array.length;i++)... <= will try to reach extra element which is not there..
        - infinte loops to be avoided by crosschecking conditions
        - for(i=1; i<= array.length;i++).. //miss array[0] first value of the array
- while loop
    - condition first 
    - syntax:
    -   let count = 1;// initializing the counter
        while (count <= 5) {// condition to check
            console.log(`Count is: ${count}`);// using template literals // body of the loop
            count++; // incrementing the counter
        }
    - while loop is preferred when when you are checking a condition and number of iterarion may not be Fixed
    - example:
    - We have 10 testcases and1 of it is failing because of timeout, we need to try again and again (3 times).
    - mitakes to avoid:
        - don't go into infinite loop
        - verify counter and condition
        - verify breaks
    - do while vs while
        - do while attempts first anyways so it runs first try always
    - infinite loop example: modems continouesly running and requesting data

#  Arrays
- collection of objects
- indexing start from 0
- syntax:
    - let testcaseNames = ["login test", "signup test", "logout test", 'search test'];
      let testScores = [85, 90, 78, 88];
    - Start with  [ ends with ]
    - elements are separated by comma.
- elements can be accesed using index
    - to get last element: testScores[testScores.length - 1] : <array name>[array length - 1]
    - to get any element at 2nd position as indexing start with 0: testScores[2]
    -  length property is useful to get last elements or add element at last
    -  console.log(`Accessing out of bounds index: ${testcaseNames[10]}`); // prints undefined if `testcaseNames.length` < 10
-  arrays of different data types is allowed:
    -   let mixedArray = ["test1", 100, true, null, undefined, { name: "testObject" }, [1, 2, 3]];
        console.log(`Mixed Array Elements: ${mixedArray}`);
- To avoid gaps in array
    -  let testResults = ["PASSED", "FAILED", "PASSED"];
    -  testResults[5] = "SKIPPED"; // will introduce gaps in array
    - inbetween values will be undefined
    -  testResults[testResults.length] = "SKIPPED"; // a good solution
- Methods
    - testResults.`push`("PASS"); // add PASS at the last of array // doesnot return any value
    - let RemovedElement= testResults.`pop()`; // remove last element and return it
    - testResults.`unshift`("PASS")// add PASS at the first position or index 0 and shift array elements forward
    - let RemovedElement= testResults.`shift()`; // remove first element and return it
    - let returnValue = testResults.indexOf("PASSED") // return first index on which element is found.

    -`Slice`
    - let subset = allTests.`slice(1, 3)`// create a new array from 2nd element till 3rd element. element at index 3 is not included.
    - allTests.`slice(2)`; //Start from index position 2 till the end. 
    - allTests.`slice(-2)`; //Start from end till last two elements.
    - let copy = allTests.slice(); //deep copy
    - let copy1 = allTests; //shallow copy ->  change in all Tests will also reflect in copy1 as both points to same reference.
    
    - `splice`
    - let removedElements = allTests.`splice(2, 2)`;//First parameter starting index position, second parameter is how many elements
    - allTests.splice(1, 0, "Add To Cart", "Remove From Cart"); //don't remove but add elements from 3rd parameter at index of first prameter
    - allTests.splice(2, 2, "Google Search")// remove 2 paerameter and add only one parameter

   - results.includes("FAILED"):  retunrs true if results array includes "Failed" element.

- arrow functions
  - filter
  - find
  - every
  - some
  - map
  - reduce
  - forEach
  - check example in js file for better understanding









        





