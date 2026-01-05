//Question : Write a Javascript program to reverse any number:
/*
    Input : 1234
    Output: 4321 
*/


const inputNumber = 2436 // null//12.54//1234

//valiate the input
if (inputNumber === null || inputNumber === "") {
    console.log("No number entered")
}

else {
    let inputstring = String(inputNumber) //convert to string to reverse
    let outputNumber = ""
    for (i = inputstring.length - 1; i >= 0; i--) {
        outputNumber = outputNumber + inputstring[i]
    }

    console.log(`reversed number:${outputNumber}`)
}