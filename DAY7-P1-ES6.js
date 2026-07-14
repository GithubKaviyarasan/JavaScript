// // ES6 Features :
// // let & const (Block Scope)

// // Use:
// // let → changeable values
// // const → fixed values
 
// // Example:
// let name = "Kavi";
// name = "Kumar";

// const age = 22;
// // age = 23 - not allowed

// // 2.Arrow Function (=>)
// // Example :
// const add = (a, b) => a + b;

// console.log(add(5, 3));

// // 3.Template Literals
// let name = "Kavi";
// let age = 22;

// console.log(`My name is ${name}, age is ${age}`);

// // 4.Destructuring
// // I. Array:
// let arr = [10, 20, 30];

// let [a, b, c] = arr;
// console.log(a, b, c);

// // II.Object:
// let student = { name: "Kavi", age: 22 };

// let { name, age } = student;
// console.log(name, age);


// // 5. Spread Operator (...)
// function sum(...nums) {
//     return nums.reduce((a, b) => a + b);
// }

// console.log(sum(1, 2, 3, 4));


// // 6.Default Parameters
// function greet(name = "Guest") {
//     console.log("Hello " + name);
// }

// greet();
// greet("Kavi");


// // 7.Classes (OOP)
// class Student {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     show() {
//         console.log(this.name + " " + this.age);
//     }
// }

// let s1 = new Student("Kavi", 22);
// s1.show();


// // 8.Promises (Async Handling)
// let p = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) resolve("Done!");
//     else reject("Error!");
// });

// p.then(res => console.log(res))
//  .catch(err => console.log(err));


// // 9.Promises (Async Handling)
// let p = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) resolve("Done!");
//     else reject("Error!");
// });

// p.then(res => console.log(res))
//  .catch(err => console.log(err));

// // MINI PROJECTS (ES6 PRACTICE)

// // 1. Calculator (Arrow Functions + Prompt)
// const add = (a, b) => a + b;
// const sub = (a, b) => a - b;
// const mul = (a, b) => a * b;
// const div = (a, b) => a / b;

// let a = Number(prompt("Enter A:"));
// let b = Number(prompt("Enter B:"));

// console.log("Add:", add(a, b));
// console.log("Sub:", sub(a, b));
// console.log("Mul:", mul(a, b));
// console.log("Div:", div(a, b));


// // 2.Student Result System (Object + Template Literal)
// let student = {
//     name: "Kavi",
//     tamil: 80,
//     english: 75,
//     math: 90
// };

// let total = student.tamil + student.english + student.math;
// let avg = total / 3;

// console.log(`Name: ${student.name}`);
// console.log(`Total: ${total}`);
// console.log(`Average: ${avg}`);


// // 3.Bank System (Class Example)
// class Bank {
//     constructor(name, balance) {
//         this.name = name;
//         this.balance = balance;
//     }

//     deposit(amount) {
//         this.balance += amount;
//         console.log(`Deposited: ${amount}`);
//     }

//     withdraw(amount) {
//         this.balance -= amount;
//         console.log(`Withdraw: ${amount}`);
//     }

//     showBalance() {
//         console.log(`Balance: ${this.balance}`);
//     }
// }

// let user = new Bank("Kavi", 5000);

// user.deposit(2000);
// user.withdraw(1000);
// user.showBalance();


// // ------------------------------------------


// const greet=()=>{
//     console.log("Welcome")
// }
// greet()
 
// const add=()=>{
//     a=10
//     b=90
//     console.log(a+b)
// }
// add()
 
// const add=(a,b,c)=>{
//     console.log(a+b+c)
// }
// add(90,90,90)
 
// const add=()=>{
//     a=10
//     b=20
//     return a+b
// }
// console.log(add())
 
// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(10,50))

// // setTime Functions
// // -----------------
// setTimeout(function(){
//     console.log("Welcome")
// },5000)


// function add(){
//     a=10
//     b=10
//     console.log(a+b)
// }
// add()
 
// let add=function(){
//     a=100
//     b=400
//     console.log(a+b)
// }
// add()
 
// let add=function(a,b,c){
//     console.log(a+b+c)
// }
// add(100,100,100)
 
// let add=function(){
//     a=10
//     b=10
//     return a+b
// }
// console.log(add())
 
// let add=function(a,b,c,d,e){
//     return a+b+c+d+e
// }
// console.log(add(90,90,100,100,100))
 
// const greet=()=>{
//     console.log("Welcome")
// }
// greet()
 
// const add=()=>{
//     a=10
//     b=90
//     console.log(a+b)
// }
// add()
 
// const add=(a,b,c)=>{
//     console.log(a+b+c)
// }
// add(90,90,90)
 
// const add=()=>{
//     a=10
//     b=20
//     return a+b
// }
// console.log(add())
 
// const add=(a,b)=>{
//     return a+b
// }
// console.log(add(10,50))
 
// setTimeout(function(){
//     console.log("Welcome")
// },5000)
 
// function display(name,age){
//     console.log("Welcome ", name)
//     console.log("Age ",age)
// }
// function precessUser(callback){
//     callback("Sridhar",28)
// }
// precessUser(display)
 
// function welcome(){
//     console.log("Welcome to JavaScript")
// }
// welcome()
 
// function mul(a,b){
//     console.log(a*b)
// }
// mul(10,2)
 
// function square(n){
//     return n*n
// }
// console.log(square(5))
 
// function cube(n){
//     return n*n*n
// }
// console.log(cube(5))
 
// function check(num){
//     if(num%2==0){
//         console.log(num, " - Even Number")
//     }
//     else{
//         console.log(num, " - Odd Number")
//     }
// }
// check(10)
// check(7)
 
// function largest(a,b){
//     return a>b ? a : b
// }
// console.log(largest(10,20))
// console.log(largest(1000,500))
 
// function area(length, width){
//     return length*width
// }
// console.log(area(10,5))

// // Function Expression - A Function Stored inside a variable
// // --------------------------------------------------------
 
// let variableName=function(){
// // code
// }
// variableName()
 
// // Arrow Function - Shorter Syntax introduced in ES6
// const functionName=()=>
// {
// // Code 
// }
 
// // Anonymous Function - Function without a name - setTimeout()
// // Callback Function - A Function passed as an argument to another function