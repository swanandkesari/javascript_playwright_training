function addTraditional(a, b) {
    return a + b;
}
addTraditional(5,6);
console.log(addTraditional(5,6));
const addArrow = (a,b) => {
     return a + b;
} 
addArrow(5,6);
console.log(addArrow(5,6));

const addArrow1 = (a,b) => a + b;

const square = x => x * x;

addArrow1(3,4);
square(6);


const validateEmail = (email) => {
    console.log("Validating: " + email);

    if (email.includes("@") && email.includes(".")) {
        return "VALID";
    } else {
        return "INVALID";
    }
};

console.log(validateEmail("abc@gmailcom"))