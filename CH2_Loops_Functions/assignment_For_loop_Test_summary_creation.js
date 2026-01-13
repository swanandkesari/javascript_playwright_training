// I have my test execution status stored in an array and I want to process each status
let testStatuses = ['Passed', 'Failed', 'Skipped', 'Passed', 'Failed'];
// create a summary of how many tests passed, failed, and skipped

function summarizeTestResults(statuses) {
    let passedCount = 0;
    let failedCount = 0;
    let skippedCount = 0;
    let delimiterLine = "======================="
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
    console.log(delimiterLine);
    console.log("Test Results Summary:");
    console.log(delimiterLine);
    console.log(`Total Tests: ${statuses.length}`);
    console.log(`Test Summary:`)
    console.log(`  Passed: ${passedCount},\n  Failed: ${failedCount},\n  Skipped: ${skippedCount}`);
    console.log(delimiterLine);
    console.log(`Pass Percentage: ${(passedCount / statuses.length * 100).toFixed(2)}%`);
    console.log(`Fail Percentage: ${(failedCount / statuses.length * 100).toFixed(2)}%`);
    console.log(`Skip Percentage: ${(skippedCount / statuses.length * 100).toFixed(2)}%`);
    console.log(delimiterLine);
}

summarizeTestResults(testStatuses)