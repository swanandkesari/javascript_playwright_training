 Node.JS-Run our Programs

 IDE: Interactive Developemen environment: We are sing VS code

 Git
#interesting Fact
 JS  was created to transform static HTML pages to dynamic by 

Things/ Topic we covered so far:

 1. Installed NodeJs
 2. Installed VS code
 3. Git and Github account to learn version control
 4. Create porject folder/ repository
 5. Create a git hub repo
 6. console log to print
 7. variables: 
    1. let, const, var
    2. primitive datatypes:  string, num, boolean, undefined, null, symbol, bigint
    3. object : yet ot cover
8. Varible naming practice camel case and readbility rules
9. Variable declaration and modification and reusablity
10. function
11. Loops
    1. IF else
    2. for
    3. with

//settings can be found at:
@id:editor.quickSuggestions @id:editor.suggestOnTriggerCharacters @id:editor.wordBasedSuggestions @id:editor.tabCompletion @id:javascript.suggest.enabled @id:typescript.suggest.enabled 
keep Auto complete OFF for bettet Practice

 
notes and key word deinition
 Git: Version control system
 github : service to provide  Storage, log issues, versions, reviews and many other features
 Variables: used to store the data in memory single container..
    why?  to access? yes but +
         to use at multiple location
         cahnge it at one place use teh same change everywhere: testcase is using email ID and change email ID once and use the same everywhere
         Reusability and maintainabilty

without ariable we need to type email iD multiple time and need a change every where thus maintainability is difficult and reusing is lost.


Quotes and learning statements
The expert in anthing was once a beginner
Reusability and maintainbility is must
If you need to copy past code something is wrong as it will take more to maintain
writing program is doing a communication.
Use functions to help you to not DRY meaning you do not repeat yourself
    Donot repeat code in multiple places use functions instead
 Status Codes in API testing error codes201, 299 400, 401, 404, 500 ..

 for interview questions normally we need for loop and array to work together.

# Chapter Variable:
    ## naming convention for variable
        1. cannot start with number
        2. cannot have spaces
        3. cannot use special characters except _ and $
        4. cannot use reserved keywords like let, var , if , else , for , function etc
        5. use camelCase for multiple words like firstName , lastName , searchBoxLocator
        6. variable names are case sensitive firstname and Firstname are different variables
        7. use meaningful names for variables like firstName is better than fn or name1
        8. avoid single letter variable names except for counters like i , j in loops
        9. use lowercase for single word variables like email , age , country
        10. avoid using underscores in variable names except for constants like MAX_VALUE , MIN_VALUE
        11. use const for variables which value will not change
        12. snake_case is not preferred in javascript but if used then use lowercase like first_name , last_name

    ## Mistakes to avoid
        1. don't use var, prefer let and const
            why? var is not scoped inside a code block, it becomes global.
        2. don't use before declaring variable
        3. don't use Quotes around variable names. why?  using quotes will consider that as a string instead of variable name.
        4. don't declare variable multiple times with let. compilation error. but need to define /declare first time with let.
    Summary : variables are used to store data for reusability and better code management
    ## points to remember
        scope of variable is withing the curly braces of code block, 
        when declared with let in a block or function, loop, if else conditions it will remain only in that block.
        javascript is dynamically typed language means data type of variable can change during runtime

    ## Data types
        . Primitive data types: string, number, boolean, undefined, null, symbol, bigint
        . Non-primitive data types: object, array, function
        . cool fact : in javascript everything is object except primitive data types
        . JavaScript is dynamically typed language means we don't need to specify data type while declaring variable
        . Data types are important for correct operations and better code management
        . for example if we try to perform arithmetic operation on string data type it will result in concatenation instead of addition
            . Salary example taken and value provided with string.
        ### QA DOmainTesting example
            .  string data type for username, password test name
                URS and validation messages
            . number data type for test case id, execution time, count of tests
                decimal values, an mathematical calculations

    ## Operators
     . operators can behave differently based on data types
     . javascript is dynamically typed language means data type of variable can change during runtime
     . we can use type conversion methods to convert data types explicitly
     ### unary operators
        . count += 5; //similar to count = count + 5// compound assignment operator
        . ++count // increment first then use
        . count++ // use first then increment
        . unary operators are used to perform operations on single operand and can be used for increment, decrement and type conversion
     ### Comparison Operators in JavaScript
        . Equality Operators
            . = -> Assignment 
            . == ->  compare value but not data type.  5 == "5" returns true
            . === -> compare value and data type strict.  5 === "5" returns false
        . Relational Operators : <, >, =<, => : uesd in if else conditional fomating
        . logic operators:
             &&-> and
             ||-> or
             !-> not





# Chapter Loops
    ## IF Else
        if-else statements are used to perform conditional operations based on certain conditions
        for example in QA domain we check if test is passed or failed or skipped based on certain conditions

