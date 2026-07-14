// // Objects and Its Methods
// // ------------------------
// // 1. What is an Object in JavaScript?
// // An object is a collection of key–value pairs used to store multiple related data in one variable.

// // Syntax:
// let objectName = {
//    key1: value1,
//    key2: value2
// };

// // Object - An Object is a collection of data stored as key:value pairs
 
let employee={
    empId:55,
    name:"Kaviyarsan",
    salary:50000,
    skills:["React JS", "JavaScript", "HTML5", "CSS3"]
}
console.log("email" in employee)

// // Loops with Objects

// // Object.entries() + for...of
// // ---------------------------
 
// for(let [key,value] of Object.entries(employee)){
//     console.log(key,value)
// }
 
// Object.values()+for...of
// for(let value of Object.values(employee)){
//     console.log(value)
// }


// // for...in Loop
// // --------------
// for(let key in employee){
//     console.log(key, employee[key])
// }


// // Object.keys()+for Loop
// // ---------------------
// let keys=Object.keys(employee)
// // console.log(keys)
// for(let i=0;i<keys.length;i++){
//     console.log(keys[i])
// }
 
 
// console.log(employee)

// // Object Methods
// // ----------------
// // 1. Object.entries() - Returns key-value pairs
// console.log(Object.entries(employee))

// // 2.Object.values() - Returns all values
// console.log(Object.values(employee))

// // 3.Object.keys() - Returns all keys
// console.log(Object.keys(employee))

// // 4.Deleting Preperties
// // ------------------
// delete objectName.propertyName
// delete employee.empId
// console.log(employee)

// // 5.Updating Preperties
// // ----------------
// employee.name="Kavi"
// console.log(employee)

// // 6.Adding Properties
// // -----------------
// employee.email="kaviyarasan@gmail.com"
// console.log(employee)
// console.log(employee)
// console.log(typeof(employee))
 
// // 7.Accessing Object Preperties
// // Dot Notation - objectName.prepertyName
// // ---------------------------
// console.log(employee.name)
// console.log(employee.salary)

// // 8.Bracket Notation - objectName["prepertyName"]

// console.log(employee["empId"])
// console.log(employee["name"])
// console.log(employee["salary"])

// // Example:
// // ----------
// let student = {
//     name: "Kavi",
//     age: 22,
//     course: "Full Stack Development"
// };

// console.log(student);

// // Accessing Object Values:
// // 1. Dot notation
// console.log(student.name);

// // 2. Bracket notation
// console.log(student["age"]);

// // Object with Methods
// // A method is a function inside an object.

// // Example:
// let student = {
//     name: "Kavi",
//     age: 22,
    
//     greet: function () {
//         console.log("Hello, my name is " + this.name);
//     }
// };

// student.greet();


// // Types of Object Methods (Common Built-in Methods)

// // 1. Object.keys() - Returns all keys

// let obj = { a: 1, b: 2 };

// console.log(Object.keys(obj));

// // 2. Object.values() - Returns all values
// console.log(Object.values(obj));

// // 3. Object.entries() - Returns key-value pairs as array
// console.log(Object.entries(obj));

// // 4. Object.assign() - Merge objects
// let obj1 = { a: 1 };
// let obj2 = { b: 2 };

// let result = Object.assign(obj1, obj2);

// console.log(result);

// // 5. hasOwnProperty() - Check property exists or not
// let student = { name: "Kavi" };

// console.log(student.hasOwnProperty("name")); // true
// console.log(student.hasOwnProperty("age"));  // false

// // 1. Example:
// // -----------
// let bankAccount = {
//     accountName: "Kavi",
//     balance: 5000,

//     deposit: function(amount) {
//         this.balance += amount;
//         console.log("New Balance: " + this.balance);
//     }
// };

// bankAccount.deposit(2000);

