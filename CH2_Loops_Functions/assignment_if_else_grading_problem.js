/*
Assignment: It is about scoring system.
If the candidate has scored more than 90, print Grade A : as excellent"
If the candidate has scored more than 80, print Grade B : as very good"
If the candidate has scored more than 70, print Grade C : as average"
If the candidate has scored more than 60, print Grade D : as Pass"
otherwise Grade F : as Fail"
*/
let score = 56;// other example try: 91 (A) 90 (B) ,87 (B), 72 (C), 64 (D), 60 (F), 27 (F) 

if (score > 90) {
    console.log("Grade A : Excellent!")
} else if (score > 80) {
    console.log("Grade B : Very Good!")
} else if (score > 70) {
    console.log("Grade C : Average.")
} else if (score > 60) {
    console.log("Grade D : Pass")
} else {
    console.log("Grade F :Failed")
}
//we are assuming user will provide valid input which means numbers between 1 to 100.
