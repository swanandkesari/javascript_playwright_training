let testScores = [85, 92, 78, 95, 88, 73, 90];

//Define a new array, in a forloop, I will compare each value if greater than 80 then
//store in a new array. 

let highScores = testScores.filter(score => score > 80);
console.log(highScores) //[ 85, 92, 95, 88, 90 ]

//Define a new array, then in a for loop check the score if it is more than or equal to 80 then
//store PASSED array otherwise store FAILED. 

let results = testScores.map(score => score >= 80 ? "PASSED" : "FAILED")
console.log(results) //[ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'PASSED', 'FAILED', 'PASSED' ]

let firstFailingScore = testScores.find(score => score < 80);
console.log(firstFailingScore) //78

let allPassed = testScores.every(score => score >= 80)

console.log("All Passed ?" + allPassed)//false

let anyFailed = testScores.some(score => score < 80)
console.log(`Any Failed? ${anyFailed}`)//true

let totalScore = testScores.reduce((sum, score) => sum + score, 0)
console.log(totalScore) //601


let totalMultiply = testScores.reduce((multiply, score) => multiply * score)
console.log(totalMultiply) //33502174992000

let testNames = ["Login", "Logout", "Search", "Checkout", "Payment", "Shipment"];

testNames.forEach(testname => {
    console.log(testname)
})

testNames.forEach((testname, index) => {
    console.log(`${index + 1}. ${testname}`)
})
