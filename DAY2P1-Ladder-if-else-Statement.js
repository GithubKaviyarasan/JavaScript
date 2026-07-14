// // 4.Ladder if...else
// // --------------------    
// // Ladder if-else (or if else-if ladder) is used when there are multiple conditions to check.

// // The program checks conditions from top to bottom.As soon as one condition becomes true,
// // its block executes and the remaining conditions are skipped.  


// // Syntax:
// // --------
// if (condition1) {
//     // code
// }
// else if (condition2) {
//     // code
// }
// else if (condition3) {
//     // code
// }
// else {
//     // code
// }

// // Example programs
// // -------------------

// // 1.Grade Calculator
// // ------------------
// let mark = 85;

// if (mark >= 90) {
//     console.log("Grade A+");
// }
// else if (mark >= 75) {
//     console.log("Grade A");
// }
// else if (mark >= 50) {
//     console.log("Grade B");
// }
// else if (mark >= 35) {
//     console.log("Grade C");
// }
// else {
//     console.log("Fail");
// }

// // 2.Traffic Signal
// // ------------------
// let color = "Green";

// if (color == "Red") {
//     console.log("Stop");
// }
// else if (color == "Yellow") {
//     console.log("Ready");
// }
// else if (color == "Green") {
//     console.log("Go");
// }
// else {
//     console.log("Invalid Signal");
// }