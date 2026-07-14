// // 3.Nested if...else
// // -------------------    
// // Nested if-else means an if...else statement placed inside another if...else statement.

// // It is used when we need to check multiple conditions one after another.    

// // Syntax:
// // ---------
// if (condition1) {

//     if (condition2) {
//         // code
//     }
//     else {
//         // code
//     }

// }
// else {
//     // code
// }

// // Example programs
// // ------------------

// // 1.Voting and Aadhaar Check
// // ----------------------------
// let age = 20;
// let hasAadhaar = true;

// if (age >= 18) {

//     if (hasAadhaar) {
//         console.log("Eligible to Vote");
//     }
//     else {
//         console.log("Aadhaar Required");
//     }

// }
// else {
//     console.log("Not Eligible to Vote");
// } 

// // 2.ATM Withdrawal
// // ------------------

// let balance = 5000;
// let amount = 2000;

// if (balance > 0) {

//     if (amount <= balance) {
//         console.log("Transaction Successful");
//     }
//     else {
//         console.log("Insufficient Balance");
//     }

// }
// else {
//     console.log("Account Blocked");
// }