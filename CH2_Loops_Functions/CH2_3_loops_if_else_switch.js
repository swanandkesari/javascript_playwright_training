//If loop example.
testResult = 'Passed';

if (testResult === 'Passed') {
    console.log('Test succeeded');
} else if (testResult === 'Failed') {
    console.log('Test failed');
} else if (testResult === 'Skipped') {
    console.log('Test skipped');
} else {
    console.log('Unknown test result');
}


// Use of Switch case instead of if Else for better readalbility.
switch (testResult) {
    case 'Passed':
        console.log('Test succeeded');
        break;// break is necessary to prevent fall-through else it will execute all cases below the matched case
    case 'Failed':
        console.log('Test failed');
        break;
    case 'Skipped':
        console.log('Test skipped');
        break;
    default:
        console.log('Unknown test result');
        break;
}
//Switch is preferable over multiple if-else-if when there are multiple discrete values to check against a single variable
sevierity = critical;

// donot repeat code in multiple places use functions instead




