// // 1. CALLBACK
// // A callback function is a function passed as an argument to another function and executed later.

// // Types of Callback:
// // 1.Synchronous Callback (runs immediately)
// // 2.Asynchronous Callback (runs later)

// // Example (Synchronous Callback)
// function greet(name, callback) {
//     console.log("Hello " + name);
//     callback();
// }

// function done() {
//     console.log("Callback executed");
// }

// greet("Kavi", done);

// // Example (Asynchronous Callback)
// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);


// // 1.Callback (setTimeout)
// console.log("Start");

// setTimeout(() => {
//     console.log("Executed after 2 seconds");
// }, 2000);

// console.log("End");

// // Arrow Function Callback (ES6 Style)
// function divide(a, b, callback) {
//     let result = a / b;
//     callback(result);
// }

// divide(20, 4, (res) => {
//     console.log("Division:", res);
// });


// // 2. CALLBACK HELL
// // Definition:

// // Callback Hell happens when callbacks are nested inside callbacks.

// // Problem:
// // Hard to read
// // Hard to debug
// // Not maintainable


// // 1. Hard to Read
// // Definition:
// // Code becomes deeply nested and difficult to understand.

// // Example:

// doStep1(() => {
//   doStep2(() => {
//     doStep3(() => {
//       doStep4(() => {
//         console.log("Done");
//       });
//     });
//   });
// });


// // Example:
// setTimeout(() => {
//     console.log("Step 1");

//     setTimeout(() => {
//         console.log("Step 2");

//         setTimeout(() => {
//             console.log("Step 3");
//         }, 1000);

//     }, 1000);

// }, 1000);





// // 3. PROMISE
// // Definition:

// // A Promise is an object that represents a future result (success or failure) of an async operation.

// // Types of Promise:
// // Pending
// // Fulfilled (resolve)
// // Rejected (reject)

// // A Promise in JavaScript represents an operation that will complete in the future
// //  (like API calls, file loading, etc.).

// // A Promise has 3 main states:


// // Example:
// let promise = new Promise((resolve, reject) => {
//     let success = true;

//     if (success) {
//         resolve("Data Loaded Successfully");
//     } else {
//         reject("Error Occurred");
//     }
// });

// promise
// .then(result => console.log(result))
// .catch(error => console.log(error));


// // 1. Pending
// // Definition:

// // The initial state when the Promise is still running and result is not ready yet.

// // Example:
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Done");
//   }, 2000);
// });

// console.log(promise); // Pending (initially)

// // Meaning:
// // Operation is still processing
// // No result yet

// // 2. Fulfilled (Resolved)
// // Definition:

// // The Promise is successfully completed and resolve() is called.

// // Example:
// let promise = new Promise((resolve, reject) => {
//   resolve("Success!");
// });

// promise.then(result => console.log(result));


// //  Meaning:
// Task completed successfully
// Data received


// // 3. Rejected
// // Definition:

// // The Promise is failed and reject() is called.

// // Example:
// let promise = new Promise((resolve, reject) => {
//   reject("Error occurred!");
// });

// promise
//   .then(result => console.log(result))
//   .catch(error => console.log(error));


// // 4. PROMISE CHAINING
// // Definition:

// // Executing multiple .then() step by step.

// // Example:
// let task = new Promise((resolve) => {
//     resolve(2);
// });

// task
// .then(num => {
//     console.log(num);
//     return num * 2;
// })
// .then(num => {
//     console.log(num);
//     return num * 2;
// })
// .then(num => {
//     console.log(num);
// });


// // 5. ASYNC / AWAIT
// // Definition:

// // Modern way to handle Promises in a clean way.

// // Types:
// // async function
// // await keyword


// // Example:
// function getData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Data Received");
//         }, 2000);
//     });
// }

// async function showData() {
//     console.log("Start");

//     let result = await getData();

//     console.log(result);
//     console.log("End");
// }

// showData();


// // 1. async function
// // Definition:

// // An async function is a function that always returns a Promise.

// // // Syntax:
// async function myFunction() {
//   return "Hello";
// }

// // This automatically becomes:

// Promise.resolve("Hello")
// // // Example:
// async function greet() {
//   return "Welcome to JS";
// }

// greet().then(result => console.log(result));


// // 2. await keyword
// // Definition:

// // await is used to pause execution until a Promise is resolved.
// // It only works inside an async function.

// // Syntax:
// let result = await promise;
// // // Example (API call):
// async function getUsers() {
//   let response = await fetch("https://api.example.com/users");
//   let data = await response.json();

//   console.log(data);
// }

// getUsers();


// // Example (Simple Flow)
// async function demo() {
//   console.log("Start");

//   let result = await new Promise(resolve => {
//     setTimeout(() => resolve("Data Loaded"), 2000);
//   });

//   console.log(result);
//   console.log("End");
// }

// demo();


// // 6. API CALLS (FETCH)
// // Definition:

// // API call means getting data from server using HTTP request.

// // Types of API Methods:
// // GET → read data -1
// // POST → send data
// // PUT → update data
// // DELETE → remove data

// // Example (fetch API - Promise)

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// // Example (Async/Await API)
// async function getPost() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//         let data = await res.json();

//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }

// getPost();


// // 1. GET → Read Data
// // Definition:
// // GET method is used to retrieve data from a server (no change in data).

// // Example:
// fetch("https://api.example.com/users")
//   .then(res => res.json())
//   .then(data => console.log(data));


// // 2. POST → Send Data
// // Definition:
// // POST method is used to send new data to the server.

// // Example:

// fetch("https://api.example.com/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Kavi",
//     age: 22
//   })
// });


// // 3. PUT → Update Data

// // Definition:
// // PUT method is used to update existing data completely.

// // Example:

// fetch("https://api.example.com/users/1", {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json"
//   },
//   body: JSON.stringify({
//     name: "Kavi Updated",
//     age: 23
//   })
// });


// // 4. DELETE → Remove Data

// // Definition:
// // DELETE method is used to remove data from the server.

// // Example:

// fetch("https://api.example.com/users/1", {
//   method: "DELETE"
// });





// // MINI PROJECTS
// // 1. Calculator using Callback
// function calculate(a, b, operation) {
//     return operation(a, b);
// }

// const add = (x, y) => x + y;
// const sub = (x, y) => x - y;

// console.log("Add:", calculate(10, 5, add));
// console.log("Sub:", calculate(10, 5, sub));


// // 2. Promise Delay Task
// function task() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Task Completed");
//         }, 2000);
//     });
// }

// task().then(res => console.log(res));


// // 3. Student Result (Async/Await)
// function getStudent() {
//     return new Promise((resolve) => {
//         resolve({ name: "Kavi", marks: 90 });
//     });
// }

// async function showStudent() {
//     let student = await getStudent();

//     console.log("Name:", student.name);
//     console.log("Marks:", student.marks);
// }

// showStudent();


// // 4. API User List Project
// async function getUsers() {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/users");
//         let users = await res.json();

//         users.forEach(user => {
//             console.log(`${user.name} - ${user.email}`);
//         });

//     } catch (err) {
//         console.log("Error loading users");
//     }
// }

// getUsers();


