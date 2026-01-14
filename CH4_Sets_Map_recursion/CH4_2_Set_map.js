// This file will ehlp in learning Set and maxAttempt
let testStatuses = ["Passed", "Failed", "Skipped", "Passed", "Failed"]
let uniqueStatus = new Set(testStatuses)
console.log(uniqueStatus)   // {"Passed", Failed, "Skipped"}
console.log(uniqueStatus.size) // 3
uniqueStatus.add("Blocked")
console.log(uniqueStatus.size) // 4
console.log(uniqueStatus)
uniqueStatus.delete("Blocked")
isFailedPresent = uniqueStatus.has("Failed")
console.log(isFailedPresent)

let uniqueArray = Array.from(uniqueStatus)
console.log(`array froim set ${uniqueArray}`)
uniqueStatus.forEach(val => {
    console.log(val)
})

// Test Domain example
// list all executed tests
let executedTests = new Set(); // we can declare empty set

function runTest(testName) {
    if (executedTests.has(testName)) {
        console.log(`Warning:${testName} already executed!`)
        return false
    }
    else {
        executedTests.add(testName)
        console.log(`running ${testName}`)
        return true
    }
}
runTest("Login")
runTest("Logout")
runTest("Login")// Warning duplicate!
console.log(executedTests.size)


// Map:

let testResults = new Map();
testResults.set("Login", "Passed") // key, Value
testResults.set("Logout", "Failed")

// In object key is only string but in map key can be integer
console.log(testResults.get("Login"))
console.log(testResults)
console.log(testResults.size)
testResults.delete("Logout")
console.log(testResults.size)
console.log(testResults)

let browserMap = new Map([
    ["Chrome", "Chrome broswers"],
    ["firefox", "firefox Browser"],
    ["safari", "Safari Browser"],
    ["Edge", "Edge browser"]
])
console.log(browserMap)
console.log(`broswerMap : ${typeof browserMap}`)
console.log(`broswerMap : ${JSON.stringify([...browserMap])}`)
console.log(browserMap.has("Chrome"))
console.log("Chrome" in browserMap) // in operator should not be used with Maps 
console.log(["Chrome", "Chrome broswers"] in browserMap) // 
