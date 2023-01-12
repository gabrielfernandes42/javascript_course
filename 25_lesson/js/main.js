//Fecth API requires a discussion of...
//then()
//Callbacks, Promises, Thenbles and Async/Await

// 3 states: Pending, Fulfiled, Rejected

// Promises
// const myPromise = new Promise((resolve, reject) => {
//   const error = false;
//   if (!error) {
//     resolve("Yes! resolved the promise");
//   } else {
//     reject("No! rejected the promise.");
//   }
// });

// console.log(myPromise);

// myPromise
//   .then((value) => {
//     return value + 1;
//   })
//   .then((newValue) => {
//     console.log(newValue);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const myNextPromise = new Promise((resolve, reject) => {
//   setTimeout(function () {
//     resolve("myNextPromise resolved");
//   }, 3000);
// });

// myNextPromise.then((value) => {
//   console.log(value);
// });

// myPromise.then((value) => {
//   console.log(value);
// });

// --------------------------------------------------------------------------------
// const users = fetch("https://jsonplaceholder.typicode.com/posts");

// // //pading
// // console.log(users);

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     data.forEach((user) => {
//       console.log(user);
//     });
//   });

// //This line does note wait on this code, he execute first then the fetch
// console.log(users);

// _____________________________________________________________________________
//async / await

const myUsers = {
  userList: [],
};

const myCoolFunction = async () => {
  //telling the code to wait the results from the fetch ⬇️
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //this line also use await, because also return a promise
  const jsonUserrData = await response.json();
  return jsonUserrData;
};

myCoolFunction();

const anotherFunc = async () => {
  const data = await myCoolFunction();
  myUsers.userList = data;
  console.log(myUsers.userList);
};

anotherFunc();
console.log(myUsers.userList);
