// // Variables and Its Types.
// // Definition of Variable.
// // A variable is a container used to store data.

// // Syntax :
// // keyword variableName = value;

// // EXAMPLE :
// let name = "Kaviyarasan";
// console.log(name);

// //------------------------------------------------------------

// // Summary
// // Variable → Stores data.
// // var   → Old method, can redeclare and update.
// // let   → Modern method, can update but cannot redeclare.
// // const → Fixed value, cannot update or redeclare.

// // Types of Variables in JavaScript
// // JavaScript provides 3 ways to declare variables:
// // 1. var
// // 2. let
// // 3. const

// // 1. VAR -
// // var is the old way of declaring variables. 
// // It can be redeclared and reassign the value.

// // Syntax:
// // var variableName = value;

// var name = "Kaviyarasan"
// console.log(name);

// name = "Kavi"
// console.log(name);

// //----------------------------------------------------------

// // 2. let
// // let is used to declare variables whose values can be changed later. 
// // It cannot be redeclared in the same scope.
// // Syntax:
// // let variableName = value;

// let age = 18;
// console.log(age);

//  age = 22;
//  console.log(age)

// // ---------------------------------------------------------------------------------

// // 3. const - 
// // const is used to declare constant values. Once assigned, the value cannot be changed.
// // Syntax:
// // const variableName = value;

// const pi = 3.14
// console.log(pi);

// // ----------------------------------------------------------------------------------------


// // ------------------------------------------------------------
// //         Difference Between var, let, and const
// // ------------------------------------------------------------
// // Feature	         var	          let	      const
// // Redeclare	         Yes	          No	        No
// // Update Value	     Yes	          Yes	        No
// // Scope	         (Function Scope) (Block Scope) (Block Scope)
// // ------------------------------------------------------------

// // Examples Programs
// // --------------------

// // 1. Student Name
// let studentName = "Kaviyarasan"
// console.log(studentName)

// // 2. Student Age
// let age = 22
// console.log(age);

// // 3. College Name
// let collegeName = "Government Arts and Science College - Valparai"
// console.log(collegeName);

// // 4. Mobile Number
// let mobile = 9876543210
// console.log(mobile);

// // 5. PI value
// let pi = 3.14159
// console.log(pi);

// // Real-Time Examples
// // -------------------

// // 1.CALCULATOR
// let a = 7
// let b = 10

// let sum = a + b
// console.log(sum);

// // 2.Empolyee Salary
// let employeeSalary = 25000
// console.log(employeeSalary);

// // 3.Online Shopping
let productName = "Formal Pant"
let price = 999

console.log(productName);
console.log(price);