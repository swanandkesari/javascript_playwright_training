//we will learn while loop here:
//while loop is tobe user when you are checkign a condition and number if iterarion may not be Fixed
let count = 0
while (count < 5) {
    console.log(`count: ${count}`);
    count++; // critical to avoid loop going into infinte loop
}

// we have 10 testcases and1 of it is failing because of timeout, we need to try again and again.

let testcaseCount = 10
let success = false
let maxAttempt = 3
let attempt = 0
while (!success && attempts < maxAttempt) {
    attempt++;
    console.log(`Attempt : ${attempt}`)
    //simulate random success
    success = (Math.random() < 0.5)
    if (success) {
        console.log(`Attempt successful go for next case`)
    }
    else {
        console.log(`failed try again if you have attempts available`)
    }
}

//do while vs while
//do while attempts first anyways so it runs first try always
//while checlk conditions

// we need to exit some menu


// normally while should always be preferred over do while
// when we have some condition where we stop the loop abruptly instead of running through all iterations we use while else we use for loop
//while
//infinite loop example: modems continouesly running and requesting data

// nested for loop
// for tests from testsuits
// for browser in broswers
// execute tests
//

// mistakes
// index out of bound
// for(i=0; i<= array.length;i++)... <= will try to reach extra element which is not there..
//infinite loops..
//for(i=1; i<= array.length;i++).. // we miss array[0] first value of the array