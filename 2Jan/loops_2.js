// Example of a for loop that counts from 0 to 4

for (let i = 0; i < 5; i++) {
    console.log(`Iteration number: ${i}`); // using template literals for better readability
}
/* The for loop consists of three main parts:
1. Initialization: let i = 0; // initializes the loop counter variable i to 0
2. Condition: i < 5; // checks if the loop should continue running (as long as i is less than 5)
3. Increment: i++; // increments the counter variable i by 1 after each iteration
The loop will execute the body (console.log statement) 5 times with i taking values from 0 to 4.

*/

/*
//for (let i = 0; i < 5; i--) { }; // this will create an infinite loop as i will always be less than 5

// becareful with the loop conditions to avoid infinite loops following is a valid loop for above scenario

//for (let i = 5; i > 0; i--) { };// counting down from 5 to 1 this is a valid loop
*/


for (let i = 10; i > 0; i -= 2) {// counting down from 10 to 1 in steps of 2 (i=i-2 -> i-=2) 
    console.log("Iteration: " + i) // using concatenation // this line executes for each iteration thus printing the current value of i
}



// Example of a for...of loop to iterate over an array
let testcaseNames = ["login test", "signup test", "logout test", 'search test'];
let testScores = [85, 90, 78, 88];

// using for...of loop to iterate over array elements
for (let i = 0; i < testcaseNames.length; i++) { //while using for loop always use length property to avoid hardcoding
    console.log(`Test Case ${i + 1}: ${testcaseNames[i]} - Score: ${testScores[i]}`);// this line executes for each element in the array

}


for (let testName of testcaseNames) { // for...of loop to iterate over array elements directly
    console.log(`Executing Test Case: ${testName}`);
}

// another example of for...of loop with strings
let environment = "staging";
for (let char of environment) {
    console.log(`Character: ${char}`);
}

// Example of a while loop that counts from 1 to 5
let count = 1;// initializing the counter
while (count <= 5) {// condition to check
    console.log(`Count is: ${count}`);// using template literals // body of the loop
    count++; // incrementing the counter
}

// I have my test execution status stored in an array and I want to process each status
let testStatuses = ['Passed', 'Failed', 'Skipped', 'Passed', 'Failed'];
// create a summary of how many tests passed, failed, and skipped

function summarizeTestResults(statuses) {
    let passedCount = 0;
    let failedCount = 0;
    let skippedCount = 0;
    for (let i = 0; i < statuses.length; i++) {
        let status = statuses[i];
        if (status === 'Passed') {
            passedCount++;
        } else if (status === 'Failed') {
            failedCount++;
        } else if (status === 'Skipped') {
            skippedCount++;
        }
    }
    console.log("Test Results Summary:");
    console.log(`Total Tests: ${statuses.length}`);
    console.log(`Test Summary: Passed: ${passedCount},\n Failed: ${failedCount},\n Skipped: ${skippedCount}`);
    console.log(`Pass Percentage: ${(passedCount / statuses.length * 100).toFixed(2)}%`);
    console.log(`Fail Percentage: ${(failedCount / statuses.length * 100).toFixed(2)}%`);
    console.log(`Skip Percentage: ${(skippedCount / statuses.length * 100).toFixed(2)}%`)
}

//assignment : find the highest and lowest of array

let scorres = [85, 92, 78, 95, 88, 73, 90]

function findHighestAndLowest(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] > highest) {
            highest = scores[i];
        }
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
    }
    console.log(`Highest Score: ${highest}`);
    console.log(`Lowest Score: ${lowest}`);
}
summarizeTestResults(testStatuses);
findHighestAndLowest(scorres);