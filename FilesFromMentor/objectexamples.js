//Blueprint - class 
let allTests = ["Login", "Logout", "Search", "Checkout", "Payment"];
let results = ["PASSED", "FAILED", "SKIPPED", "PASS", "FAILED"];
let duraation = [2,1,6,1,5]

let testCase = {
    name: "Login Test",
    result: "PASSED",
    duration: 2.5
};

delete testCase.name;
testCase.browser = "Chrome"
testCase.tester = "Mark"
let testCase1 = {
    name: "Logout Test",
    result: "FAILED",
    duration: 2.5
};


console.log(testCase);
console.log(testCase.duration);
console.log(testCase["duration"]);

let abc = "result";
console.log(testCase.abc)
console.log(testCase[abc])
console.log(abc)

testCase.result = "FALIED"
console.log(testCase["result"])

console.log("name" in testCase)
console.log("browser" in testCase)
