// "userStrict" // gives error if we use undeclared variable

// let is used to declare vairable
// variables helps in reusability of data
// good practice to declare variables or function at teh top of the file
/*
let email = "xyz@example.com";//declare and assign value or initialize

console.log(email);

// we can change the value of variable
email = "abc@example.com"; // reassigning value
//let email = "fsdg" // this will give error as we cannot redeclare variable with let
console.log(email);

// we can declare variable without assigning value
let email1; // declaration
console.log(email1); // it will print undefined

email1 = email; // we can assign a variable to another variable
console.log(email1); // it will print abc@example.com and not  email or email1 means will print the current value of variable and not name of variable

// we can declare multiple variables in one line
let lastName = "Doe",
    age = 25,
    country = "USA";


// Testing example
*/
/* Google search testcase
1. Go to url google.com
2. find the locator
3. type "javascript" text in search box
*/

//test case example:
// creadentials
// configurations: urls
// test date : phone numbers , names , addresses etc
// expected results : logs
//
let url = "http://www.google.com";
let searchBoxLocator = "input[name='q']";
let searchText = "javascript";

// think of a variable is a labled storage container which stores data
// real life example phone number saved in contact with name label
//excel cell name A1 stores some data A1 is label of that data

// naming convention for variable
// 1. cannot start with number
// 2. cannot have spaces
// 3. cannot use special characters except _ and $
// 4. cannot use reserved keywords like let, var , if , else , for , function etc
// 5. use camelCase for multiple words like firstName , lastName , searchBoxLocator
// 6. variable names are case sensitive firstname and Firstname are different variables
// 7. use meaningful names for variables like firstName is better than fn or name1
// 8. avoid single letter variable names except for counters like i , j in loops
// 9. use lowercase for single word variables like email , age , country
// 10. avoid using underscores in variable names except for constants like MAX_VALUE , MIN_VALUE
// 11. use const for variables which value will not change
//12. snake_case is not preferred in javascript but if used then use lowercase like first_name , last_name

//mistakes to avoid
// 1. don't use var, prefer let and const
// 2. don't use before declaring variable
// 3.  don't use Quotes around variable names
// 4. don't declare variable multiple times with let

// Summary : variables are used to store data for reusability and better code management

const PI = 3.14; // constant variable
// PI value cannot be changed
// const can be used for any data types
console.log(PI);
// PI = 3.14159; // this will give error as we cannot reassign value to constant variable

var FirstName = "John"; // old way of declaring variable
console.log(FirstName);
FirstName = "Doe"; // reassigning value
console.log(FirstName);
// var allows redeclaration but it is not a good practice to use var
// prefer let and const over var


//writing program is doing a communication. #Quote