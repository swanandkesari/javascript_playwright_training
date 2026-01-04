let testcaseNames = ["login test", "signup test", "logout test", 'search test'];
let testScores = [85, 90, 78, 88];
//accessing elements in the array using index
console.log(`Test Case Names:${testcaseNames[0]}, ${testcaseNames[1]}, ${testcaseNames[2]}, ${testcaseNames[3]}`);

console.log(`Test Scores: ${testScores.length}`); // prints the number of elements in testScores array

//accessing last element using length property
console.log(`Last Test Score: ${testScores[testScores.length - 1]}`);

// we can also have arrays of different data types
let mixedArray = ["test1", 100, true, null, undefined, { name: "testObject" }, [1, 2, 3]];
console.log(`Mixed Array Elements: ${mixedArray}`);

//index out of bounds
console.log(`Accessing out of bounds index: ${testcaseNames[10]}`); // prints undefined

