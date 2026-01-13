console.log("Simulating test menu system:");
console.log("(In real testing, you'd get actual user input)\n");

let choice = "";
let menuAttempts = 0;
let menuChoices = ["1", "2", "3", "4"];  // Simulated choices

do {
    console.log("Test Automation Menu:");
    console.log("  1. Run smoke tests");
    console.log("  2. Run regression tests");
    console.log("  3. Run all tests");
    console.log("  4. Exit");
    console.log();

    // Simulate user choosing options
    choice = menuChoices[menuAttempts];
    console.log("User selected: " + choice);

    if (choice === "1") {
        console.log("  → Running smoke tests...");
        //execute the smoke tests
        console.log("  ✓ Smoke tests completed\n");
    } else if (choice === "2") {
        console.log("  → Running regression tests...");
        console.log("  ✓ Regression tests completed\n");
    } else if (choice === "3") {
        console.log("  → Running all tests...");
        console.log("  ✓ All tests completed\n");
    } else if (choice === "4") {
        console.log("  → Exiting test menu...\n");
    } else {
        console.log("  ✗ Invalid option. Try again.\n");
    }

    menuAttempts++;

} while (choice !== "4" && menuAttempts < menuChoices.length);



let testSuites = ["Login", "Search", "Checkout"];
let browsers = ["Chrome", "Firefox", "Safari"];

console.log("Cross-browser test matrix:");

for (let i = 0; i < testSuites.length; i++) {
    console.log("\n" + testSuites[i] + " tests:");

    for (let j = 0; j < browsers.length; j++) {
        console.log("  - " + browsers[j]);
    }
}
