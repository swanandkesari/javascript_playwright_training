let testNames = ["Login Test", "Logout Test", "Search Test"];
let testScores = [85, 92, 78, 95, 88];

let results = []

console.log(testNames[3])

let khichdi = [23, "ABC", true, "2, Gandhi Villa"]

console.log(khichdi[2])

let tests = ["Login", "Logout", "Search", "Checkout","Payment","Shipment"];

console.log("Array: " + tests);
console.log();

console.log("First element (index 0): " + tests[0]);
console.log("Second element (index 1): " + tests[1]);
console.log("Third element (index 2): " + tests[2]);
console.log("Fourth element (index 3): " + tests[3]);
console.log();

console.log("--- Zero-Indexed Visualization ---");
console.log("Position:    1st        2nd        3rd        4th");
console.log("Index:       0          1          2          3");
console.log("Value:    " + tests[0].padEnd(10) + " " + tests[1].padEnd(10) + " " + tests[2].padEnd(10) + " " + tests[3]);
console.log();


console.log(tests[tests.length - 1])