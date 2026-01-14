//arrow functions

//traditional way
function addTraditional(a, b) {
    return a + b;
}
//arrow function
const addArrow1 = (a, b) => {
    return a + b;
}
// better
const addArrow = (a, b) => a + b;

const square = x => x * x; // even paranthesis () is not required if there is only one input paramter
console.log(square(5))

// => is called fat arrow or arrow.
//Learn Aray methods
// used when oneliner or smaller function is used for better readability

//Validate email

const validateEmail = (email) => {
    console.log("Validating email: " + email);
    if (email.includes("@") && email.includes(".")) {
        console.log("Email is valid");
    } else {
        console.log("Email is invalid");
    }
}
const validateEmailV1 = (email) => {
    console.log("Validating email: " + email);
    return (email.includes("@") && email.includes("."))
}

let testScores = [85, 92, 78, 95, 88, 73, 90];

//Define a new array, in a forloop, I will compare each value if greater than 80 then
//store in a new array. 

let highScores = testScores.filter(score => score > 80);
console.log(highScores)

//Define a new array, then in a for loop check the score if it is more than or equal to 80 then
//store PASSED array otherwise store FAILED. 

let results = testScores.map(score => score >= 80 ? "PASSED" : "FAILED")
console.log(results)

let firstFailingScore = testScores.find(score => score < 80);
console.log(firstFailingScore)

let allPassed = testScores.every(score => score >= 80)

console.log("All Passed ?" + allPassed)

let anyFailed = testScores.some(score => score < 80)
console.log(`Any Failed? ${anyFailed}`)

let totalScore = testScores.reduce((sum, score) => sum + score, 0)
console.log(totalScore)

let totalMultiply = testScores.reduce((multiply, score) => multiply * score)
console.log(totalMultiply)
