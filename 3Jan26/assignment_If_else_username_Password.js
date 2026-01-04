/*
Assignment: You are validating userName and password in your login screen using single if condition.
If userName is blank then log a message"Error: userName requeired"
If the userName is not blank then only go to next condition.
next condition is password should not be blank. otherwise you will log an error message "Error: password required"
and only if user name and password not blank then check passowrd length should be greater than 8 characters.
and only if this validation is passed then finally print all validation passed porceeding to login.
Also log user name and password.
*/
/*
//TestCase1:
let userName;
let password;

//TestCase2:
let userName = null;
let password;

//TestCase3:
let userName = "user";
let password;

//TestCase4:
let userName = "user";
let password = null;

//TestCase5: Password length is less than 8 Char
let userName = "user";
let password = "abc";

//TestCase6: Exact 8characteras are also not allowed
let userName = "user";
let password = "12345678";
*/

//TestCase7: Valid
let userName = "user";
let password = "123456789";
let isValid = false; //assuming that input is not valid.

if (userName === undefined) {
    console.log("Error: User name requeired")
} else if (userName === null || userName.length === 0) {
    console.log("Error: User name requeired")
} else if (userName.length > 0 && password === undefined) {
    console.log("Error: Password required")
} else if (userName.length > 0 && (password === null || password.length === 0)) {
    console.log("Error: Password required")
} else if (userName.length > 0 && password.length <= 8) {
    console.log("Error: Password length should be greater than 8 characters.")
} else if (userName.length > 0 && userName.length < 8) {
    console.log("All Validation are Passed!")
    console.log("Proceeding Login..")
    isValid = true;
}
if (isValid) {
    console.log(`User name: ${userName}`)
    console.log(`Password: ${password}`)
}
