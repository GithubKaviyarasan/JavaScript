// // 3. do...while Loop
// // ---------------
// // A do...while loop executes the code block at least one time, then checks the condition.
// // If the condition is true, the loop continues. If false, the loop stops.

// // Syntax:
// // --------
// do {
    // code
// } while (condition);

// // Example Programs
// // -----------------

// let password = "0966";
// let entered;

// do {
//     entered = "1234"; // simulate input
//     console.log(entered === password ? "Success" : "Wrong Password");
//     entered = password; // next attempt correct
// } while (entered !== password);


// // 1. Print 1 to 5
// // ---------------
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while (i <= 5);

// // 2.Even Numbers
// // --------------
// let i = 2;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 10);

// // 3.Odd Numbers
// // -------------
// let i = 1;

// do {
//     console.log(i);
//     i += 2;
// } while (i <= 10);

// // 4.Countdown
// // -----------
// let i = 5;

// do {
//     console.log(i);
//     i--;
// } while (i >= 1);

// // 5.Multiplication Table of 5
// // ----------------------------
// let A = 5;
// let B = 1;

// do {
//     console.log(B + " x " + A + " = " + (B * A));
//     B++;
// } while (B <= 10);



// // MINI Projects
// // ---------------

// // 1.Password Checker
// let password;

// do {
//     password = prompt("Enter Password");
// } while (password !== "1234");

// alert("Login Successful");

// // Using if....Statement

// let password = "1234";
// let entered;

// do {
//     entered = password;   
//     if (entered !== "1234") {
//         console.log("Wrong Password");
//     }
// } while (entered !== "1234");

// console.log("Login Success");


