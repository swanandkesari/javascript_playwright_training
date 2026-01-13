//unary operators
let count = 10;
console.log("Initial Count: " + count);
count++; // increment by 1
console.log("After Increment: " + count);
count--; // decrement by 1
console.log("After Decrement: " + count);
// unary plus operator to convert string to number
count += 5; //similar to count = count + 5// compound assignment operator
console.log("After adding 5: " + count);
count = +5; //similar to count = 5 (+ is just indication of number here smilar to -5)
console.log("After unary plus operator: " + count);

console.log("prefix increment: " + ++count); // increment first then use
console.log("postfix increment: " + count++); // use first then increment
console.log("Value after postfix increment: " + count); // to show updated value after postfix increment
let strValue = "15";
let numValue = +strValue;
console.log("String Value: " + strValue + " , Data Type: " + typeof strValue);
console.log("Converted Number Value: " + numValue + " , Data Type: " + typeof numValue);

// Summary : unary operators are used to perform operations on single operand and can be used for increment, decrement and type conversion

//= Vs == vs ===
let numberOfApples = 5; // number data type
let stringOfApples = "5"; // string data type

console.log("Using == operator: " + (numberOfApples == stringOfApples)); // true as values are equal after type coercion
console.log("Using === operator: " + (numberOfApples === stringOfApples)); // false as data types are different
// just = is assignment operator not comparison operator.
// Summary : use === for strict comparison to avoid unexpected bugs due to type coercion
