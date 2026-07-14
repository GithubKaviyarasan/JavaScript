// // 1.While Loop
// // --------------
// // A while loop is used to execute a block of code repeatedly as long as
// // a specified condition is true.

// // If the condition becomes false, the loop stops.

// // Syntax:
// // -----------
// while (condition) {
//     // code to execute
// }

// // Examples
// // ---------

// //  1.Print 1 to 5
// let i = 1;

// while (i <= 5) {
    // console.log(i);
    // i++;
// }

// // 2.Print Even Numbers
// // ---------------------
// let i = 2;

// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }

// // 3.Print Odd Numbers
// // --------------------
// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i += 2;
// }

// // 4.Countdown
// // ------------
// let i = 5;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }


// // Mini Projects
// // ---------------

// // 1.Sum of Numbers (1 to 10)
// // -------------------
// let i = 1;
// let sum = 0;

// while (i <= 10) {
//     sum = sum + i;
//     i++;
// }

// console.log("Sum =", sum);


// // 2.ATM PIN Check
// // ----------------
// let pin = 1234;
// let enteredPin = 1234;

// while (enteredPin !== pin) {
//     console.log("Wrong PIN");
// }
// console.log("Login Successful");


// // 3.Loading Process
// // -----------------
// let progress = 0;

// while (progress <= 100) {
//     console.log("Loading..." + progress + "%");
//     progress += 20;
// }