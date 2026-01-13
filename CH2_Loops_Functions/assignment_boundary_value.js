/* There is an application which accepts age as one input from user
Application should accept age between 18 to 60 both inclusive
then log "Valid age range" else log "age must be between 18 to 60"
*/
let age = 12 // 18;
console.log("Age entered: " + age);
if (age >= 18 && age <= 60) {
    console.log("Valid age range");
}
else if (age > 60) {
    console.log("age is above 60. The individual is senior citizen")
}
else if (age < 18 && age > 0) {
    console.log("age is below 18. Induvidual is minor")
}
else {
    console.log("age must be between 18 to 60. Please enter valid age");
}