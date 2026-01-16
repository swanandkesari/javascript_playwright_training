let testResults = ["PASSED", "FAILED", "SKIPPED", "PASSED", "FAILED"]
console.log(testResults[0]);
testResults[0] = "SKIPPED";
console.log(testResults[0]);

//testResults[10] = "SKIPPED"
// this will create a gap and the new created will be undefined till 10th element
console.log(testResults[10]);

//better way is
testResults[testResults.length] = "PASSED"
console.log(testResults);

//better
testResults.push("SKIPPED")
console.log(testResults);

let removedElement = testResults.pop()

console.log(`Removed last Element: ${removedElement}`);
console.log(`Updated Array: ${testResults}`); //removed

testResults.unshift("SKIPPED")//add record at the start
console.log(`Updated Array after adding SKIIPED at start: ${testResults}`);

removedElement = testResults.shift()
console.log(`Removed First Element: ${removedElement}`);
console.log(testResults);

if (testResults.indexOF("FAILED") != -1) {
    console.log("At least one test Failed")

}
else {
    console.log("All tests passed")
}
if (testResult.includes("FAILED")) {
    console.log("At least one test Failed")
}
else {
    console.log("All tests passed")
}

//slice
let allTests = ["Login", "Logout", "Search", "Signup", "Checkout"];
console.log(`Original Array: ${allTests}`);
let subset = allTests.slice(1, 3);// 1,2 .. all<3
console.log(`firstSubset: ${subset}`);

console.log(`Orignal arrey is intact: ${allTests}`);
subset = allTests.slice(2); // from 2nd index till end
console.log(`second Subset: ${subset}`);
subset = allTests.slice(-2); // last two elements;
let copy = allTests.slice(); //deep copy copy the same array in new place.
copy1 = allTests; //shallow copy: both arrays points to same reference meaning if allTests is modified, copy1 will get that modification.
allTests.push("Shipment", "CreditCard")
console.log(allTests);
console.log(copy1);
console.log(copy);


//Splice
//first parameter starting index position, Second howmany elements to be deleted, from third <elements to be added>
//Splice modifies orignal array
let removedElements = allTests.splice(2, 1);
console.log(`Updated Array: ${allTests}`);
console.log(`Removed Elements: ${removedElements}`);

let test = ["name", 12]
console.log(test);
console.log(`${test.typeof}`);

//
//push pop unshift shift slice splice includes.
//property: length