// // Array in JavaScript
// // An Array is a special variable that can store multiple values in a single variable.

// // let fruits = ["Apple", "Mango", "Orange"];
// //console.log(fruits);

// // 1. push() – Add Element
// let fruits = ["Apple", "Mango"];

// fruits.push("Orange");

// console.log(fruits);

// // 2. pop() – Remove Last Element
// let fruits = ["Apple", "Mango", "Orange"];

// fruits.pop();

// console.log(fruits);

// // 3. unshift() – Add First Element
// let fruits = ["Mango", "Orange"];

// fruits.unshift("Apple");

// console.log(fruits);


// // 4. shift() – Remove First Element
// let fruits = ["Apple", "Mango", "Orange"];

// fruits.shift();

// console.log(fruits);

// // 5. length – Array Length
// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits.length);

// // 6. indexOf()
// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits.indexOf("Mango"));

// // 7. includes()
// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits.includes("Apple"));

// // 8. join()
// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits.join(" - "));

// // 9. slice()
// let fruits = ["Apple", "Mango", "Orange", "Banana"];

// console.log(fruits.slice(1, 3));

// // 10. splice()
// let fruits = ["Apple", "Mango", "Orange"];

// fruits.splice(1, 1);

// console.log(fruits);

// // 11. reverse()
// let fruits = ["Apple", "Mango", "Orange"];

// console.log(fruits.reverse());

// // 12. sort()
// let numbers = [40, 10, 30, 20];

// numbers.sort();

// console.log(numbers);


// // Important Array Methods
// // -----------------------

// // 1. forEach()
// let numbers = [10, 20, 30];

// numbers.forEach(num => {
//     console.log(num);
// });

// // 2. map()
// let numbers = [1, 2, 3];

// let result = numbers.map(num => num * 2);

// console.log(result);

// // 3.filter()
// let numbers = [10, 15, 20, 25];

// let even = numbers.filter(num => num % 2 === 0);

// console.log(even);

// // 4.find()
// let numbers = [10, 20, 30, 40];

// let result = numbers.find(num => num > 25);

// console.log(result);


// // 5.Mini Project – Student Marks
// let marks = [85, 90, 78, 95, 88];

// console.log("Total Subjects:", marks.length);

// let total = marks.reduce((sum, mark) => sum + mark, 0);

// console.log("Total Marks:", total);

// console.log("Highest Mark:", Math.max(...marks));