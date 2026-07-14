// // The Math object provides mathematical operations and functions.

// // Math Methods in JavaScript
// //  Method	Description
// //  Math.round()	Rounds to nearest integer
// //  Math.ceil()	Rounds up
// //  Math.floor()	Rounds down
// //  Math.trunc()	Removes decimal part
// //  Math.abs()	Returns absolute value
// //  Math.sqrt()	Returns square root
// //  Math.pow()	Returns power value
// //  Math.max()	Returns largest number
// //  Math.min()	Returns smallest number
// //  Math.random()	Returns random number


// //  1. Math.round()
// // ------------------------
// let num = 4.6;

// console.log(Math.round(num));

// // 2. Math.ceil()
// // --------------
// let num = 4.1;

// console.log(Math.ceil(num));


// // 3. Math.floor()
// // ---------------
// let num = 4.9;

// console.log(Math.floor(num));


// // 4. Math.trunc()
// // ----------------
// let num = 4.9;

// console.log(Math.trunc(num));


// // 5. Math.abs()
// // -------------
// let num = -25;

// console.log(Math.abs(num));


// // 6. Math.sqrt()
// Square Root: ( 5 )

// console.log(Math.sqrt(25));


// // 7. Math.pow()
// // Power Formula:

// 2
// 3
// =8

// console.log(Math.pow(2, 3));


// // 8. Math.max()
// console.log(Math.max(10, 20, 30, 40));


// // 9. Math.min()
// console.log(Math.min(10, 20, 30, 40));


// // 10. Math.random()
// console.log(Math.random());


// // (Random value between 0 and 1)
// // -----------------------------
// // Mini Project 1 – Random Dice Number
let dice = Math.floor(Math.random() * 6) + 1;

console.log("Dice Number:", dice);

// // Mini Project 2 – Student Marks Round Off
// let mark = 89.6;

// console.log("Rounded Mark:", Math.round(mark));