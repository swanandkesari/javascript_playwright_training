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

    - `Hoisting` will move all defintion at the top. This allows to call function anywhere even before defining.
    - `Default parameter` of function: if teh default value of teh input parameter of the function is provided it is called as default parameter.
    - `iterate`: for a set of values we iterate meaning we use each value to do same operation one at a time using some sequence and loop.
    - `inheritance`: 
    - `Shadowing`: overriding the property of parent. it is applicable for both property as well as methods.

    

# Quotes and learning statements

- The expert in anything was once a beginner.
- Reusability and maintainability are essential.
- If you need to copy-paste code, something is wrong — it will be harder to maintain.
- Writing a program is communication.
- Use functions to follow the DRY (Don't Repeat Yourself) principle.
- Always prefer composition over inheritance

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
            - toUpperCase(), // convert to uppercase
            - toLowerCase(),// convert to lowercase
            - slice() // get subgroup ->  array method applied to string as all strings are array
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
    - * mitakes to avoid :
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


# Chapter Set Maps and Recursion
- Recursion:
    - function can be called inside the same function
    - example:
        - factorial, find max in array, 
    - exit function: very important to stop the loop to comeout of recursion.
- Set:
    - collection of unique values
    - Syntax:
        - let uniqueStatus = new Set(testStatuses)// testStatuses has mutliple duplicate values
    - Methods:
        - size :same as array length returns number of element set contains.
        - add: add new element to set. new element gets added only if it is not present earlier otherwise the line is ignored.
        - delete: remove element from set
        - has: returns true if set contains that element.
    -let uniqueArray = `Array.from`(uniqueStatus)//  creates Array from set
    -TestDomain example;
        - executed tests
            - we execute many test suites if some tests are present in multiple test suites we can create a set of tests
            - to ensure that we run the test only once.
- Maps
    - collection of key value pairs
    - Syntax:
        - let testResults = new Map()
        -  testResults.set("Login", "Passed") // key, Value
        - testResults.set("Logout", "Failed")
    - set method is used to add a key value pair to map
    - get method is used to get value from key
        - testResults.get("Login")
    - size: same as Set provides number of key value pairs.
    - In object key is only string but in map key can be integer
    - Map is derrived or extend from object
    - methods:
        - set, get , size: already explained
        - has, add, delete, clear: same as set
        - foreach
    - can initialize with multiple elements too
    -console.log(`broswerMap : ${JSON.stringify([...browserMap])}`) // check `${JSON.stringify([...<mapName>])}`


# Chapter Objects
- Objects
    - collection of key value pairs 
    - Syntax:
        - let testCase = {
            name: "Login Test",
            result: "PASSED",
            duration: 2.5
            };
            console.log(`initiated testCase: ${JSON.stringify(testCase)}`) // check syntax: `${JSON.stringify(testCase)}`
            console.log(testCase.duration); //accessing member
            console.log(testCase["duration"]); // another way of accessing member can be used by creating variable

    - Class vs object
        - Class is a blue print, creation of class won't impact anything in the memory
        - we need object as instance of class.
        - where as object data type is representing similar object directly.
        - the object can have members and methods too.

    - methods
        - `in` : ("name" `in` testCase) returns true
        - we can add new methods to object
        - example:
            let testCase = {
                name: "Login Test",// no need of `let` keyword
                run: function{// method: function inside an object: old way
                console.log("Running test suite: " + this.name);// use `this` keyword for calling properties of object
                }
                report() {} // new way: no need to mention function: short hand method new way starts from ES6
                };
            testCase.run();
            testCase.report();// both works so new way is preferred.
            - Short hand method is used only when method is defined inside object {}
            - we can define properties and methods of the object outside object definition
            - example:
                let testCase = {name: "Login Test",}
                testCase.duration = 2.5; // duration defined outside object definition
                testCase.run() function: {}// syntax to define function outside object definition
    - inheritance:
        - `Inheritance` in object-oriented programming (OOP) is a fundamental concept that allows a new class (subclass) to inherit properties and methods from an existing class (superclass).
        - for `Objects` in Java scripts also support inheritance. The objects created using parent object inherit all methods and properties of parent object.
        - all methods and properties can be used in other objects using inheritance to help DRY.
        - Create method is used to create a Object (Child) from another Object (parent).
        - All objects inheritted from `Object.prototype`
        - example: `toString` method from prototype can be used for all objects
        - example:
            - let loginTest = Object.create(testCase);
            - loginTest.name = "Login Test"; //create property outside creation of object allowed.
            - name is already a property in testCase and it is redefined.
            - this is called as shadowing: orverriding the property of parent 
            - `Shadowing` is applicable for both property as well as methods
        - methods:
            - hasOwnProperty(<PorpertyName>) returns true if property of the given name is part of object
            - inherited property will return false unless it is shadowed/ overriden in the object
            - `in` operator returns true for both inherited as well as own property 
                - example: console.log("  'name' in smokeTest:", "name" in testCase);
            - use of in to have for loop for in
            - example:
                for (let key in testCase) {}
        - `Object.assign` method:
        - example:
            let logoutTest = Object.assign(Object.create(testTemplate), {
                name: "Logout Test",
                priority: "High",
                logger() {
                    console.log("logger function called");
                }
                });
    - Constructor function
        - naming convention: Pascale case
        - all properties start with `this` keyword
        - `this` represents object.
        - The way to attach methods to constructor is to use <constructor Name>.prototype.<function name> = <function>;
        - This (constructor function) is not an object but it is defining the way object can be constructed. blue print.
            - This is not creating anything in the memory as object is not instantiated yet.
        - example:
            - function TestCase(name, expectedDuration) {
                        this.name = name;
                        this.expectedDuration = expectedDuration;
                        this.status = "PENDING";
                        this.actualDuration = 0;
                        this.startTime = null;
                        }
            - TestCase.prototype.start = function () {
                console.log(`  Starting: ${this.name}`);
                this.status = "RUNNING";
                this.startTime = Date.now();
                };
        - Instance of the Constructor function <TestCase> can be created using new keyword.
            let test1 = new TestCase("Login Test", 2.5); 
        - When you use new
            1. A new object is created. Empty object {}
            2. sets prototype to <TestCase>.prototype
            3. Calls TestCase() function with 'this' = new Object
            4. memory is utilized.
        - another object will use different memory with the same constructor function.
        - this is exactly same as class. just a old way.
# Chapter OOPs Classes
- OOPs: Object Oriented Programming System
- Classes 
    - Class is a design or a blue print for multiple objects to be creating using the same.
    - Defining a class do nothing in memory
    - class gets executed only when object of class is created
    - constructor is used to initialize the state of the object. Same as constructor function of objects
    - methods defined inside the class or for the class are called instance methods
    - new keyword is used to instantiate object which will call constrctor of the class.
        - example:
            let uiTest = new Test("UI Test", "HIGH") // test class is defined earlier.
    - why?
        - example1: 
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
    - override method: overriding is allowed in js for class. Shadowing
    - method overloading is not allowed in javascript and python
    - encapsulation:
        - private properties
        - To make properties private they are started with `#`
        - Private properties are not accesible to child class as well.
        - To change private property from parent method in child class is not allowed.
        - However, you can have a method in parent class which can access and modify the private property.
        - The same method can be used by child class.
        - This way the property is under parental control ;)
    - `super` key word is used for using parent method.
        - use cases:
            - constructor: use super for parent constructor or parent properties
                - continue for child properties after it.
            - while overriding parent method
            - example:
                class APITest extends BaseTest {
                    constructor(name, endpoint, method = "GET") {
                        super(name); // call parent constructor
                        this.endpoint = endpoint;
                        this.method = method;
                        this.responseTime = 0;
                    }
                    // other methods
                    // Override parent method
                    start() {
                        super.start();  // Call parent start() super.<methodname>
                        this.navigate();  // Add child behavior
                    }
                }
    -  `instanceof` operator.
        - myTest instanceof UITest // returns true or false
    - <Quote>: Always prefer composition over inheritance
    - method chaining
        - builder design pattern
            - write all methods returning `this`
            - example: 
                class TestCase {
                    constructor(name) {
                       this.name = name;
                    }
                    method1() { perform operation; return this; }
                    method2() { perform operation; return this; }
                    method3() { perform operation; return this; }
                    build() { log something; return object/ boolean;}
                }
                let test1 = new TestCase();
                test1.method1().method2().method3().build();
    - getter and setter
        - special methods in java script
        - to use getter seeter we name porperties initialized with _
        - example:
            class TestCase {
                constructor(name) {
                    this._name = name;
                }
                get name() {
                    return this._name;
                }
                set name(value) {
                    this._name = value;
                }
            }
            test1= new TestCase("test1")
            consol.log (test1.name) // no need to use get just .name is smart to call getter method.
            test1.name = "newName" // this calls setter. so we use methods as if we are accessing properties.
            console.log (test1.name)
        - in getter setter we can add additional logic such as unit conversion or wrappers or logging.
    - Static method
        - static variables are common for all clas objects
        - example:
            - class has 5 instance variables or properties and 100 instance objects
                -  100*5 =500 instance variables created
            - class has 5 `static` variables or properties and 100 instance objects
                - 5 static variable created
            - static variables are bound to class and not to objects
        - static variables are called with classname.static variable name
        - static methods can use static variables
        - normal methods can also use static variables
        - static methods cannot call or use instance variables.
        - static variables should be avoided.
            - because one object change it will imapct the same for all objects.
                - two testers testing different tests.. one testcase expect 1 value and other tester change the value it will break the test.
        - static methods are good if we are not using any object instances this will save memory.

# Chapter Module
- Modules
    - why?
        - We may have 50+ methods 10+ classes inour project
        - In such scenarios we need to define them in different Js files for better readability and maintainablity
        - To support importing function or class from one file to other file we need Module concept.
        - with module we can export intended classes and method from file
        - import the classes those are required in the current file from other file
    - Each java script file can be considerred as Module
    - Two prerequisite to use the class from other files as module
        1. In file where class is defined, it should export the class
            module.exports = <ClassName>; // traditional way
            export default <ClassName>; //ES6 way
        2. In the file where we want to use the class we should import it
            const <ClassName> = require ('Path of .js file'); // traditional way
            import <ClassName> from 'Path of .js file' //ES6 way
    - we cannot export a few methods from class, we have to export entire class
    - We can export a few functions written in file and import some of them
        - in such scenario we export with {<fun1>,<fun2>,..}  and import with import {<fun1>} from `path`
    - If there is a name conflict we can rename functions
        import {<fun1> as fun1_exp}

# Chapter Error Handling
- why?
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
    
- try catch finally
    - error handling is done with the help of try catch finally
    - try block is the block of code where we expect some errors
    - add condition if error occurs throw error
    - after the try block we write catch block to catch the error and handle it.
    - if error is unknown we can throw it to block continuing the code
    - finaly is the safety net which will be executed even if the error is thrown and not catched properly.
        - example:
            - closing browser in Auto tests
            - logging out for security perpose
    - syntax:
        try{
            condition{
                throw error('message', option) 
            }
        }
        Catch(err){
            log("message:" err.message)
            throw err to stop going further...
        }
        finally
        {
            safe code to be executed after error handling
        }
        //program continues..

- error stack:
    - stack is a property of error
    - stack is an array of calls of functions that led to the error.
    - it stores all lines of method calls that led to the error in sequence.
     - console.log("  Value (first line):", error.stack.split('\n')[0]); 
        - the above code is a sample where only first line of stack is returned this is normally used over detailed call stack.
        - example: console.log("  Entire stackTrace", error.stack.split('\n'))
            - using split will help to get stacks properly written as one in one line for better readability
- 
        
- Error types:
    - Main parent is Error
    -  TypeError, ReferenceError, SyntaxError, RangeError, EvalError, URIError
    - TypeError:  type of property not matching
    - ReferenceError: property not found..
    - SyntaxError: some bracket is missing.. or similar issue
    - RangeError: for loop.. range out of bound.. trying to access memory which is not in array.
    - EvalError: 
    - URIError: related to web url
    - All type can be caught as catch(error){} // now as we don't require type specification while using variable this is possible.
-Switch on error:
    - design pattern used to better error handling in javascript.
    - cause attribute or a variable is used in this.
    - example:
        try {   
            throw Error("message")
        }
        catch(err)
        {
            switch(err.cause)
            {   

                    
        }

- Custom Errors:







# Chapter Promises


            









        





