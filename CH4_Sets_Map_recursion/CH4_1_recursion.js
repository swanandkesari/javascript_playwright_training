// This file contains examples for recursion

function factorial(n) {
    if (n === 0) {// exit function,
        return 1;
    } else {
        return n * factorial(n - 1);// recursion call
    }
}

console.log(factorial(5))

function countdown(n) {
    if (n < 0) { console.log("Start with positive number!"); }
    if (n === 0) {// exit function.. very important to stop the loop
        console.log("Blastoff!");
    } else {
        console.log(n);
        countdown(n - 1); // recursion call
    }
}

//find max in array
arr = [4, 9, 5, 3, 2, 1]
function findMax(arr) {
    if (arr.length === 1) {
        return arr[0];
    } else {
        let max = findMax(arr.slice(1)); // slice will provide array from next element till last.
        // From last value we start comparing with last and second last then keep max in the max value and come out one by one.
        //This type of code usually avoided as it is not readable
        console.log(`Current Max ${max} and array: ${arr.slice(1)}`)
        return arr[0] > max ? arr[0] : max;
    }
}

console.log(findMax(arr))