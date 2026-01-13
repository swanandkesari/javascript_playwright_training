// Comparison Operators in JavaScript

// 1. Equality Operators
console.log("5 == string5 : " + (5 == "5"));      // true (loose equality, type coercion)
console.log("5 === string5 : " + (5 === "5"));     // false (strict equality, no type coercion)
console.log("5 != string5 : " + (5 != "5"));      // false (loose inequality)
console.log("5 !== string5 : " + (5 !== "5"));     // true (strict inequality)

// 2. Relational Operators
console.log(10 > 5);        // true
console.log(10 < 5);        // false
console.log(10 >= 10);      // true
console.log(10 <= 5);       // false

// Test domain example using comparison operators
let responseTime = 3 //try changing to 25,3,3,5 to see different results
let threshold = 3

if (responseTime <= threshold)// conditions  < | <= | > | >= | == | === | != | !== try adding different operators here and see the results
{
    console.log("Response time is within acceptable limits.");
}
else {
    console.log("Response time exceeds acceptable limits.");
}

// 3. Logical Operators (often used with comparisons)

// AND (&&)
let isLoggedIn = true;
let hasPermission = false;
console.log("Access Granted: " + (isLoggedIn && hasPermission)); // false   
// OR (||)
console.log("Access Granted: " + (isLoggedIn || hasPermission)); // true
// NOT (!)
console.log("Is Logged In: " + !isLoggedIn); // false   