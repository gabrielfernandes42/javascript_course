//User input

// alert("Hello World! ")
// let myBooleand = confirm("ok === True\nCancel == False")
// console.log(myBooleand);

let names = prompt("Please enter your name");

if (names) {
  console.log(names.length);
  console.log(names.trim().length);
  console.log(names.trim());
  console.log(names);
} else {
  prompt("Please, type yout name!");
}
