// JSON: Javascript Object Notation
// JASON is used to send and recive data.
// JASON is a text format that is completely language independent
// Meaning JSON is used to send & recive data in many languages
// ...AbortController.not just in Javascript

const myObj = {
  name: "Gabriel",
  hobbies: ["eat", "sleep", "code"],
  hello: function () {
    console.log("Hello!");
  },
};
console.log(myObj);
console.log(myObj.name);
myObj.hello();
console.log(typeof myObj);
console.log(typeof myObj.hobbies);

//Converts a JavaScript value to a JavaScript Object Notation (JSON) string.
const sendJSON = JSON.stringify(myObj);
console.log(sendJSON);
console.log(typeof sendJSON);
console.log(sendJSON.name);

//Converts a JavaScript Object Notation (JSON) string into an object.
const reciveJSON = JSON.parse(sendJSON);
console.log(reciveJSON);
console.log(typeof reciveJSON);
