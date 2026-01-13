/*
Assignment: Find the highest and lowest from teh given array
*/

console.log("=== FINDING HIGHEST AND LOWEST ===\n");

let scores = [85, 92, 78, 95, 88, 73, 90, 43, 105];

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
    console.log("Results:");
    console.log(`Highest Score: ${highest}`);
    console.log(`Lowest Score: ${lowest}`);
}

findHighestAndLowest(scores)