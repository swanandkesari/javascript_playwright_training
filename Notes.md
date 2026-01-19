# Tools We Are Using
- **Node.js**: A runtime environment to execute our JavaScript programs.
- **IDE (Integrated Development Environment)**: We are using Visual Studio Code (VS Code).
- **Version Control**: Git for local version control and GitHub for remote repository hosting.

# Topics Covered So Far
1.  Installed Node.js
2.  Installed VS Code
3.  Set up Git and GitHub accounts for version control.
4.  Created a local project folder and initialized a Git repository.
5.  Created a remote GitHub repository and linked it.
6.  `console.log()`: Used to print output to the console.
7.  **Variables (Chapter 1)**
    *   Keywords: `var`, `let`, `const`.
    *   Data Types:
        *   **Primitive**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`.
        *   **Non-Primitive**: `object`.
    *   Naming Conventions (camelCase, readability rules).
    *   Declaration, modification, and reusability.
    *   Operators: Unary, compound, and comparison operators.
8.  **Functions (Chapter 2)**
    *   Purpose: Abstraction and code reuse (DRY principle).
    *   Syntax, parameters, and return values.
    *   **Hoisting**: The concept of declarations being moved to the top of their scope.
    *   Function Expressions: Assigning a function to a variable.
    *   Higher-Order Functions: Passing a function as a parameter to another function.
    *   Default Parameters.
    *   Anonymous Functions.
    *   String Methods: `toUpperCase`, `toLowerCase`, `slice`, `includes`, `startsWith`, `endsWith`, `trim`, etc.
    *   Template Literals.
9.  **Control Flow (Chapter 2)**
    *   `if`/`else` statements.
    *   `switch...case` statements.
    *   Loops:
        *   `for` loop (traditional).
        *   `for...of` loop (for iterating over iterable objects like arrays).
        *   `while` and `do...while` loops.
10. **Arrays (Chapter 3)**
    *   `length` property and zero-based indexing.
    *   Core Methods: `push`, `pop`, `unshift`, `shift`, `indexOf`, `slice`, `splice`, `concat`.
    *   Array methods with arrow functions: `filter`, `find`, `every`, `some`, `map`, `reduce`, `forEach`.
11. **Sets, Maps, and Recursion (Chapter 4)**
    *   **Recursion**: A function calling itself, requiring a base case to terminate.
    *   **Set**: A collection of unique values.
    *   **Map**: A collection of key-value pairs where keys can be of any data type.
12. **Objects (Chapter 5)**
    *   Object literals, properties, and methods.
    *   Prototypal Inheritance (`Object.create`).
    *   Constructor Functions (the pre-ES6 way of creating object blueprints).
13. **Classes (Chapter 6)**
    *   ES6 `class` syntax.
    *   `constructor`, methods, `this` keyword.
    *   Inheritance with `extends` and `super`.
    *   Encapsulation with private fields (`#`).
    *   Getters, setters, and static members.
14. **Modules (Chapter 7)**
    *   Organizing code into separate files.
    *   `import` and `export` (ES6 syntax).
15. **Error Handling (Chapter 8)**
    *   `try...catch...finally` blocks.
    *   The `Error` object, stack traces, and different error types.

# Key Definitions
- **Git**: A distributed version control system to track changes in code.
- **GitHub**: A cloud-based hosting service for Git repositories, facilitating collaboration, issue tracking, and CI/CD.
- **IDE**: An Integrated Development Environment is a software application that provides comprehensive facilities to programmers for software development, going beyond a simple text editor.
- **Hoisting**: JavaScript's behavior of moving declarations to the top of their scope before code execution. This allows you to, for example, call a function before it appears in the code.
- **Default Parameter**: A parameter that is assigned a default value if no argument is provided for it during the function call.
- **Iterate**: To process each item in a collection (like an array or set), one by one, typically using a loop.
- **Inheritance**: A core concept in Object-Oriented Programming (OOP) where a new class (subclass) derives properties and methods from an existing class (superclass).
- **Shadowing**: When a variable in a closer scope (e.g., a child class) has the same name as one in an outer scope (e.g., a parent class). The inner variable "shadows" the outer one, making it the one that is accessed within that scope.

# Quotes and Learning Statements
- "The expert in anything was once a beginner."
- "Reusability and maintainability are essential for scalable code."
- "If you find yourself copy-pasting code, there's likely a better way. Think about creating a function."
- "Writing a program is a form of communication—with the computer and with other developers."
- "Use functions to follow the DRY (Don't Repeat Yourself) principle."
- "Always prefer composition over inheritance."

# Random Notes
- **API Status Codes**: Common examples include `200` (OK), `201` (Created), `400` (Bad Request), `401` (Unauthorized), `404` (Not Found), and `500` (Internal Server Error).
- **Interview Tip**: Problems often require combining loops and array manipulation.
- **Learning Tip**: Disable editor autocomplete features to force yourself to remember syntax and method names.
    -Settings (to disable autocomplete for practice)
            @id:editor.quickSuggestions @id:editor.suggestOnTriggerCharacters @id:editor.
- **Interesting Fact**: JavaScript was initially created in 10 days to make static HTML pages dynamic and interactive.

# Chapter: Variables
- **Variables** are used to store data in memory. Think of them as named containers for values.
- **Why use variables?** They improve reusability and maintainability.
    - *Example*: Without variables, you would need to type a value (e.g., an email ID) multiple times. If it changes, you'd have to update it everywhere, making maintenance difficult.
- **Naming Conventions**:
    1.  Must start with a letter, underscore (`_`), or dollar sign (`$`). Cannot start with a number.
    2.  Cannot contain spaces.
    3.  Cannot use special characters other than `_` and `$`.
    4.  Cannot be a reserved keyword (e.g., `let`, `if`, `for`).
    5.  Use **camelCase** for multi-word variables (e.g., `firstName`, `searchBoxLocator`).
    6.  Variable names are case-sensitive (`firstname` and `FirstName` are different).
    7.  Use meaningful, descriptive names (`firstName` is better than `fn`).
    8.  Avoid single-letter names, except for loop counters (`i`, `j`).
    9.  `snake_case` is not conventional in JavaScript for variables.
    10. Use `const` for variables whose values should not be reassigned.
- **Mistakes to Avoid**:
    1.  Avoid using `var`. It has function scope and can lead to unexpected behavior. Prefer `let` (block-scoped) and `const` (block-scoped, non-reassignable).
    2.  Don't use a variable before it is declared.
    3.  Don't wrap variable names in quotes (e.g., `"firstName"`). That turns them into string literals.
- **Scope**:
    -   A variable's scope determines where it can be accessed.
    -   Variables declared with `let` or `const` are **block-scoped**, meaning they are only accessible within the `{}` block (e.g., function, loop, if/else) where they are defined.
- **Data Types**:
    -   JavaScript is **dynamically typed**, meaning a variable's data type can be changed at runtime.
    -   **Primitive**: `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint`. These are immutable.
    -   **Non-Primitive**: `object`, `array`, `function`. These are mutable.
    -   In JavaScript, everything that is not a primitive value is an object.
    -   **QA Domain Examples**:
        -   `string`: username, password, validation messages.
        -   `number`: test case ID, execution time, counts.
- **Operators**:
    -   Operators can behave differently based on data types (e.g., `+` concatenates strings but adds numbers).
    -   **Assignment**: `=`
    -   **Comparison**:
        -   `==`: Abstract Equality (compares values after type coercion, e.g., `5 == "5"` is `true`). Avoid using this.
        -   `===`: Strict Equality (compares value and type, e.g., `5 === "5"` is `false`). **Always prefer this.**
    -   **Unary & Compound**: `count++` (use then increment), `++count` (increment then use), `count += 5` (compound assignment).

# Chapter: Functions and Loops
- **Functions**: A reusable block of code designed to perform a specific task.
    -   **Why?** They make code more readable, maintainable, and reusable (DRY principle).
    -   **Abstraction Analogy**: When you drive a car, you don't need to know how the engine works. Similarly, you can use a function without knowing its internal implementation.
    -   **Syntax**: `function functionName(parameters) { ... }`. Parameters and a `return` value are optional.
    -   **Hoisting**: Function *declarations* are hoisted, meaning they are conceptually moved to the top of their scope and can be called before they are defined.
    -   **Function Expressions**: A function can be assigned to a variable (`const sum = function(a, b) { ... }`). Function expressions are **not** hoisted and must be defined before being called.
    -   **Default Parameters**: You can provide a default value for a parameter.
        - *Example*: `function sum(a, b = 0) { return a + b; }`. If a value for `b` isn't provided, it defaults to `0`.
    -   **Anonymous Functions**: Functions without a name, often used as arguments to other functions.
        - *Example: An array of validator functions.*
        ```javascript
        const emailValidators = [
            function(val) { return val.includes('@'); },
            function(val) { return val.includes('.'); },
            function(val) { return val.length > 5; }
        ];
        ```
- **String Methods**:
    -   **Template Literals**: Use backticks (`` ` ``) to create strings that can embed variables with `${variableName}`. They are more readable than string concatenation.
    -   Common methods: `toUpperCase()`, `toLowerCase()`, `slice()`, `includes()`, `startsWith()`, `endsWith()`, `trim()`. Note: `slice()` can be used on strings because they are "array-like," but strings are not arrays.
- **Control Flow**:
    -   **if/else**: Executes code conditionally. Order matters in an `if...else if` chain.
    -   **Truthy/Falsy Values**:
        -   **Falsy**: `false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`.
        -   **Truthy**: Everything else (non-empty strings, non-zero numbers, objects, arrays).
    -   **switch**: A clean alternative to a long `if...else if` chain for checking a variable against multiple discrete values. Always use `break` to prevent fall-through.
    -   **for loop**: Repeats a block of code a known number of times. It consists of initialization, a condition, and an increment/decrement step.
        - *Example:*
        ```javascript
        // The loop runs 5 times, with i taking values from 0 to 4.
        for (let i = 0; i < 5; i++) {
            console.log(i);
        }
        ```
    -   **for...of loop**: The modern and recommended way to iterate over the elements of an iterable (like an array).
        - *Example*:
        ```javascript
        const testcaseNames = ["login test", "signup test", "logout test", 'search test'];
        for (const testName of testcaseNames) {
            console.log(`Executing Test Case: ${testName}`);
        }
        ```
    - nested for loop is allowed
        - example:
        -   for tests from testsuits
            for browser in broswers
             execute tests

    - **mitakes to avoid**:
        - index out of bound
            - for(i=0; i<= array.length;i++)... <= will try to reach extra element which is not there..
        - infinte loops to be avoided by crosschecking conditions
        - for(i=1; i<= array.length;i++).. //miss array[0] first value of the array
    -   **while loop**: Repeats a block of code as long as a condition is true. Ideal when the number of iterations is not known beforehand.
        - *Example*:
        ```javascript
        let count = 1;
        while (count <= 5) {
            console.log(`Count is: ${count}`);
            count++;
        }
        ```
        - *QA domain Example*:
        - We have 10 testcases and1 of it is failing because of timeout, we need to try again and again (3 times).
    - *mitakes to avoid* :
        - don't go into infinite loop
        - verify counter and condition
        - verify breaks
    -   **do...while loop**: Similar to a `while` loop, but the condition is checked *after* the loop body executes. This guarantees the loop runs at least once.

# Chapter: Arrays
- An **array** is an ordered collection of values.
- **Syntax**: `let testScores = [85, 90, 78];`. Elements are comma-separated inside square brackets.
- **Indexing**: Access elements using zero-based index (`testScores[0]` is `85`). The last element is at `array.length - 1`. Accessing an out-of-bounds index returns `undefined`.
- **Mutable**: Arrays can hold elements of different data types and can be modified.
- **Key Methods**:
    -   `push(item)`: Adds an item to the end. Returns the new length.
    -   `pop()`: Removes the last item. Returns the removed item.
    -   `unshift(item)`: Adds an item to the beginning. Returns the new length.
    -   `shift()`: Removes the first item. Returns the removed item.
    -   `slice(start, end)`: Returns a **shallow copy** of a portion of an array into a new array. The original array is not modified.
        - *Examples*: `allTests.slice(1, 3)`, `allTests.slice(2)`, `allTests.slice(-2)`.
    -   `splice(start, deleteCount, ...items)`: **Modifies** the original array by removing, replacing, or adding elements. Returns an array of the deleted elements.
        - *Examples*: `allTests.splice(2, 2)`, `allTests.splice(1, 0, "Add To Cart")`.
    -   `includes(item)`: Returns `true` if the array contains the specified item.
- **Copying Arrays**:
    -   `let copy1 = allTests;` (**Shallow Copy / Reference**): `copy1` points to the *same* array in memory. Modifying `allTests` will also modify `copy1`.
    -   `let copy2 = allTests.slice();` or `let copy2 = [...allTests];` (**Shallow Copy / New Array**): Creates a new array with the same elements. Modifying `allTests` will **not** affect `copy2`.
- **Arrow Functions**
- **Iteration Methods with Arrow Functions**:
  - `filter`, `find`, `every`, `some`, `map`, `reduce`, `forEach`. Check your code files for detailed examples of these.

# Chapter: Sets, Maps, and Recursion
- **Recursion**: A technique where a function calls itself. It requires a **base case** to prevent an infinite loop and stack overflow.
- **Set**: A collection of **unique** values. Any duplicates are automatically removed.
    -   **Syntax**: `let uniqueItems = new Set(testStatuses);`
    -   **Key Properties/Methods**: `size`, `add(value)`, `has(value)`, `delete(value)`, `clear()`.
- **Map**: A collection of key-value pairs.
    -   **Advantage over Objects**: Keys can be of **any data type** (not just strings/symbols). Maps also guarantee the order of their elements.
    -   **Syntax**: `let testResults = new Map(); testResults.set("Login", "Passed");`
    -   **Key Methods**: `set(key, value)`, `get(key)`, `has(key)`, `delete(key)`, `size`, `clear()`.
    -   To log a Map or set: `console.log(JSON.stringify([...myMap]))`.

# Chapter: Objects
- An **object** is a collection of key-value pairs (properties).
- **Syntax (Object Literal)**:
    ```javascript
    let testCase = {
        name: "Login Test",
        result: "PASSED",
        duration: 2.5
    };
    ```
- **Accessing Properties**:
    -   Dot Notation: `testCase.duration`
    -   Bracket Notation: `testCase["duration"]`
        - Bracket can be used by using variables
- **Class vs object**:
        - Class is a blue print, creation of class won't impact anything in the memory
        - we need object as instance of class.
        - where as object data type is representing similar object directly.
        - the object can have members and methods too.
- **Methods**: Functions stored as object properties.
    ```javascript
    let testCase = {
        name: "Login Test",
        // Traditional method syntax
        run: function() {
            console.log("Running: " + this.name);
        },
        // Shorthand method syntax (ES6+) - Preferred
        report() {
            console.log(`Report for: ${this.name}`);
        }
    };
    ```
    -   Shorthand syntax can only be used inside an object literal or class definition. To add a method later, you must use assignment: `testCase.newMethod = function() { ... };`.
- **Inheritance**:
    -   JavaScript uses **prototypal inheritance**.
    -   `Object.create(parentObject)`: Creates a new object with `parentObject` as its prototype.
    -   **Shadowing**: If you define a property on a child object that also exists on its prototype, the child's property takes precedence.
    -   `in` operator: Returns `true` if a property exists on the object **or its prototype chain**.
    -   `obj.hasOwnProperty(prop)`: Returns `true` only if the property is an "own" property.
    -   `Object.assign(target, ...sources)`: Copies properties from source objects to a target object.
        - *Example*: `let logoutTest = Object.assign(Object.create(testTemplate), { name: "Logout Test" });`
- **Constructor Functions (Pre-ES6)**:
    -   A function used with the `new` keyword to create objects. By convention, names are in **PascalCase**.
    ```javascript
    function TestCase(name, expectedDuration) {
        this.name = name;
        this.expectedDuration = expectedDuration;
        this.status = "PENDING";
    }
    TestCase.prototype.start = function() {
        console.log(`Starting: ${this.name}`);
        this.status = "RUNNING";
    };
    const test1 = new TestCase("Login Test", 2.5);
    ```
    -   The `new` keyword:
        1. Creates a new empty object `{}`.
        2. Sets its prototype.
        3. Calls the constructor function with `this` bound to the new object.
        4. Returns the new object.

# Chapter: OOP and Classes
- **Class**: A blueprint for creating objects. ES6 `class` syntax is modern "syntactic sugar" over JavaScript's prototypal inheritance.
- **Why Use Classes?** They help structure code by bundling related data (properties) and behavior (methods) into a single, reusable entity.
- - example1: 
            - let's assume we have a programm having 50 methods 43 Variables -Project -- 30 JS javascript files
             example let's say project of HRMS system:
            - methods can be: getEmpName(), salary, address, role, ChangeName(), addEmp(), promoteEmp(),.
            - in OOPS we collect related things inside a class and classes represent real world entities
            - HRMS: EMployee, Manager, Departement..
            -  All information, methods and parameter related to employee will be in Employee class.
            - Manager: derrived from Employee plus they have methods only managers can do,.
            - so all 50 methods 43 variables are all covered in the class clusters ..
            -  in Oops we give a structure to prgramms in terms of classes we think in terms of classes mapping to real world objects
            - If employee has access to change salary- is it good? -not a good system
            - hence we need encapsulation: private/ protected properties
        - example 2:
            - web application has 10 pages
            - create 10 classes representing the pages
            - each class contains the operations that I can performs
            - there can be common objects in some pages
            - each page will have a url
            - base page
            - url
            - wait to lo            - 
            - login page extend base page
            - dashboard page extend base page..
        
- **Syntax**:
    ```javascript
    class Test {
        constructor(name, priority) {
            this.name = name;
            this.priority = priority;
        }
        run() {
            console.log(`Running ${this.name}...`);
        }
    }
    const uiTest = new Test("UI Test", "HIGH");
    ```
- **Inheritance**: `extends` creates a subclass. `super` calls the parent class's constructor or methods.
    - *Example*:
    ```javascript
    class APITest extends Test {
        constructor(name, endpoint) {
            super(name, 'HIGH'); // Call parent constructor
            this.endpoint = endpoint;
        }
        start() {
            super.start();  // Call parent's start() method
            console.log(`Navigating to ${this.endpoint}`); //extends parent's method in child class this is overrride.
        }
    }
    ```
- **Encapsulation**: Use a hash prefix (`#`) to create **private fields**. They are only accessible from within the class. This allows the class to control its internal state.
- **Getters and Setters**: Special methods for read/write access to properties, allowing extra logic. They are used like properties: `test1.name = "New Name";`.
- **Static Members**: `static` methods or properties belong to
- *real life example*
    - class has 5 instance variables or properties and 100 instance objects
        -  100*5 =500 instance variables created
        - class has 5 `static` variables or properties and 100 instance objects
        - 5 static variable created
        - static variables are bound to class and not to objects
 the **class itself**, not to any instance. They are called via `ClassName.staticMethod()` and cannot use `this`.
    -- static methods can use static variables
        - normal methods can also use static variables
        - static methods cannot call or use instance variables.
        - static variables should be avoided.
            - because one object change it will imapct the same for all objects.
                - two testers testing different tests.. one testcase expect 1 value and other tester change the value it will break the test.
        - static methods are good if we are not using any object instances this will save memory.
- **Method Chaining (Builder Pattern)**: A pattern where methods return `this` to allow chaining: `test1.method1().method2().build();`.

# Chapter: Modules
- **Why?** To organize a large codebase into separate, manageable files and avoid polluting the global scope.
- **How**: Export code from one file and import it into another.
- **ES6 Syntax**:
    -   **Default Export**: `export default class Test { ... }` -> `import Test from './Test.js';`
    -   **Named Exports**: `export const PI = 3.14;` -> `import { PI } from './utils.js';`

# Chapter: Error Handling
- **Why?** To gracefully handle unexpected situations and prevent application crashes.
    -*real life example*:
    - for unexpected behaviour we need to record it
    - If we don't want to stop our flow of execution we can handle error behaviour properly and continue.
    - user should get a way to understand what went wrong or better way to use the function or app
    - Banking example:
        - If we add amount to sent in an app then submit OTP and app crashed. what we do?
            - we first verify if amount is deducted
                - if deducted
                        verify if amount is recived
                            - if recived
                                - no worries
                            - else
                                - raise complaint
                - else
                    - confirm from bank:  raise concern
                    - once confirmed we can restart sending.
        - here raising complaint is like throwing an error
        - what if system had thrown relavnt error instead of crash?
            - user get's better idea.
- **`try...catch...finally`**:
    -   `try`: Wrap code that might throw an error.
    -   `catch`: Executes if an error is thrown. Receives the `error` object.
    -   `finally`: **Always** executes, whether an error occurred or not. Ideal for cleanup.
- **The `error` Object**:
    -   `name`: The error type (e.g., `ReferenceError`).
    -   `message`: The error description.
    -   `stack`: A string representing the function call stack (very useful for debugging).
- **Common Error Types**: `ReferenceError`, `TypeError`, `SyntaxError`, `RangeError`.
- **Stack**:
    -*Example*:
         - console.log("  Value (first line):", error.stack.split('\n')[0]); 
        - the above code is a sample where only first line of stack is returned this is normally used over detailed call stack.
        - example: console.log("  Entire stackTrace", error.stack.split('\n'))
            - using split will help to get stacks properly written as one in one line for better readability
