let count = 4;
testCases=[];
for (let i = 0; i < testCases.length; i++) {
    console.log("  " + testCases[i]);
}

//while loop is to be used when you are checking a condition and number if iteration may not be fixed.
while (count < 5) {
    console.log("Count: " + count);
    count--;  // CRITICAL - must update!
}

let num = 7;
//do while atleast executes the block once.
do {
    console.log("Count: " + num);
    num++;
} while (num <= 5);


//10 Test Cases, 1 test case failes because of timeout, once again, once again

let attempts = 0;
let success = false;
let maxAttempts = 3;

console.log("Simulating retry logic (max " + maxAttempts + " attempts):");

while (!success && attempts < maxAttempts) {
    attempts++;
    console.log("Attempt " + attempts + "...");

    // Simulate random success (50% chance)
    success = (Math.random() > 0.5); //0.3 success = false, 0.6, success = true

    if (success) {
        console.log("  ✓ Success!");
    } else {
        console.log("  ✗ Failed, trying again...");
    }
}

console.log();
if (success) {
    console.log("Final result: Success after " + attempts + " attempts");
} else {
    console.log("Final result: Failed after " + attempts + " attempts");
}

