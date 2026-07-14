// Largest Number in Array
//------------------------

// let numbers = [10, 50, 30, 80, 25];
// let max = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] > max) {
//         max = numbers[i];
//     }
// }

// console.log("Largest Number:", max);



// Smallest Number in Array
//---------------------------

// let numbers = [10, 50, 30, 80, 25];
// let min = numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < min) {
//         min = numbers[i];
//     }
// }

// console.log("Smallest Number:", min);



// OTP GENERATOR
// --------------
// // 4-digit OTP
// let otp4 = Math.floor(1000 + Math.random() * 9000);
// console.log("\n4 Digit OTP:", otp4);

// // 6-digit OTP
// let otp6 = Math.floor(100000 + Math.random() * 900000);
// console.log("6 Digit OTP:", otp6);



// Circle Radius Calculator
// ------------------------
// Formula:
//------------
// Area = π × r × r
// Circumference = 2 × π × r

// Explanation:
//------------------
// Math.PI → gives value of π (3.14159...)
// r * r → radius squared
// .toFixed(2) → shows only 2 decimal places


let r = 7; // radius value

let area = Math.PI * r * r;
let circumference = 2 * Math.PI * r;

console.log("Radius:", r);
console.log("Area of Circle:", area.toFixed(2));
console.log("Circumference:", circumference.toFixed(2));



