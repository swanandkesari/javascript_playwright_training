//operators can behave differently based on data types
let a = 5; // number data type
let b = "10"; // string data type
console.log("Addition: " + (a + b)); // will result in 510 due to string concatenation
console.log("Subtraction: " + (a - b)); // will result in -5 as string is converted to number
console.log("Multiplication: " + (a * b)); // will result in 50 as string is converted to number
console.log("Division: " + (a / b)); // will result in 0.5 as string is converted to number     
// hence understanding data types is crucial for correct operations
// javascript is dynamically typed language means data type of variable can change during runtime
b = 10;
console.log("After changing b to number data type:");
console.log("Addition: " + (a + b) + " Data type of b is now: " + typeof b); // will result in 15 as both are number data type  
console.log("Subtraction: " + (a - b)); // will result in -5 as number
console.log("Multiplication: " + (a * b)); // will result in 50 as string is converted to number
console.log("Division: " + (a / b)); // will result in 0.5 as string is converted to number
console.log("reminder: " + (a % b)); // will result in 5 as both are number data type

// this dynamic typing can lead to unexpected bugs if not handled properly
// hence it is important to be aware of data types while performing operations
// we can use type conversion methods to convert data types explicitly
let strNum = "20";
let convertedNum = Number(strNum);
console.log("Converted Number: " + convertedNum + " , Data Type: " + typeof convertedNum);
// now we can perform arithmetic operations safely
console.log("Addition after conversion: " + (a + convertedNum)); // will result in 25 as both are number data type
// Summary : understanding data types and their behavior with operators is crucial for correct operations and avoiding bugs in code 