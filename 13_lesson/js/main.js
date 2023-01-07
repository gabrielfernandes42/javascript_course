// var, ler and const

//global scope
var x = 1;
let y = 1;
// const z = 1;



//local scope
{
  let y = 4
  console.log(y)
}

//local scope 
function myFunc() {
  const z = 5;
  console.log(z)
}

myFunc();