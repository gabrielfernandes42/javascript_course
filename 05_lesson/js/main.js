// Your first code challange

//Write code that will return a random letter from yout name

const myName = "Gabriel";
let number = Math.floor(Math.random() * myName.length);

console.log(myName.charAt(number));
console.log(number);
