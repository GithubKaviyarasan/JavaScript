// // Date and Time 
// // --------------

// // The Date object is used to work with dates and times.

// // Creating a Date
// // ---------------
// let date = new Date();

// console.log(date);

// //  Method                Description                
// //  -------------------   -------------------------  
// //  `getDate()`           Returns day of month       
// //  `getDay()`            Returns day of week (0-6)  
// //  `getMonth()`          Returns month (0-11)       
// //  `getFullYear()`       Returns year               
// //  `getHours()`          Returns hour               
// //  `getMinutes()`        Returns minutes            
// //  `getSeconds()`        Returns seconds            
// //  `getMilliseconds()`   Returns milliseconds       
// //  `Date.now()`          Returns current timestamp 


// // 1. getDate()
// let today = new Date();

// console.log(today.getDate());

// // 2. getDay()
// let today = new Date();

// console.log(today.getDay());

// // 3.getMonth()
// let today = new Date();

// console.log(today.getMonth());

// // 4.getFullYear()
// let today = new Date();

// console.log(today.getFullYear());

// // 5.getHours()
// let today = new Date();

// console.log(today.getHours());

// // 6.getMinutes()
// let today = new Date();

// console.log(today.getMinutes());


// // 7.getSeconds()
// let today = new Date();

// console.log(today.getSeconds());


// // 8.Date.now()
// console.log(Date.now());


// // EXAMPLE PROGRAMS:
// // --------------------

// // 1.Set Date Methods
// let date = new Date();

// date.setFullYear(2030);
// date.setMonth(11);
// date.setDate(25);

//  console.log(date);

// // 2.Digital Clock
// let now = new Date();

// console.log(
//   now.getHours() + ":" +
//   now.getMinutes() + ":" +
//   now.getSeconds()
//  );

// // 3.Age Calculator
// let birthYear = 2003;
// let currentYear = new Date().getFullYear();

// let age = currentYear - birthYear;

// console.log("Age:", age);

