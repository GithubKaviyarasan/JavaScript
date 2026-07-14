// // break & continue
// // ---------------------

// // 1. break Statement
// // The break statement is used to stop the loop immediately and exit from the loop.

// // Syntax:
// // ------
// break;

// // Example Programs
// // ----------------

// // 1. Break in For Loop
// // ----------------------
// for(let i = 1; i <= 10; i++) {

//     if(i == 5) {
//         break;
//     }

//     console.log(i);
// }


// // 2.Break in While Loop
// // ---------------------
// let i = 1;

// while(i <= 10) {

//     if(i == 6) {
//         break;
//     }

//     console.log(i);
//     i++;
// }


// // 3.ATM Balance Check
// // -------------------
// let balance = 5000;

// for(let withdraw = 1000; withdraw <= 6000; withdraw += 1000) {

//     if(withdraw > balance) {
//         console.log("Insufficient Balance");
//         break;
//     }

//     console.log("Withdraw:", withdraw);
// }


// // 2. continue Statement
// // -------------------------
// // The continue statement is used to skip the current iteration and
// // move to the next iteration of the loop.

// // Syntax:
// // --------
// continue;


// // Example Programs
// // -----------------

// // 1. Continue in For Loop
// // -----------------------
// for(let i = 1; i <= 5; i++) {

//     if(i == 3) {
//         continue;
//     }

//     console.log(i);
// }


// // 2.Print Odd Numbers
// // --------------------
// for(let i = 1; i <= 10; i++) {

//     if(i % 2 == 0) {
//         continue;
//     }

//     console.log(i);
// }

// // 3.Student Attendance
// // ----------------------

// for(let rollNo = 1; rollNo <= 5; rollNo++) {

//     if(rollNo == 3) {
//         continue;
//     }

//     console.log("Present:", rollNo);
// }


// // MINI PROJECTS
// // --------------

// // 1.Stop at Specific Number (break)
// for(let i = 1; i <= 20; i++) {

//     if(i == 10) {
//         break;
//     }

//     console.log(i);
// }


// // 2.Skip Multiples of 3 (continue)
// // --------------------------------
// for(let i = 1; i <= 100; i++) {

//     if(i % 99 == 0) {
//         continue;
//     }

//     console.log(i);
// }