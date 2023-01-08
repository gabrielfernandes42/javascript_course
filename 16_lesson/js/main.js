//Object
//key-value pairs in curly braces
// const myObjt = { name: "Gabriel" };

// const anotherObj = {
//   alive: true,
//   anser: 42,
//   hobbies: ["eat", "sleep", "Code"],
//   beverage: {
//     morning: "Coffee",
//     afternoon: "Ice tea",
//     todo: ["code", "training"]
//   },
//   //methods
//   action: function(){
//     return `time for  ${this.beverage.todo[0]}`;
//   }
// };

// console.log(anotherObj.action())

const band = {
  vocals: "Robert Plant",
  guitar: "Jimmy Page",
  bass: "John Paul Jones",
  drums: "john Bonham",
};

// delete band.drums;
// console.log(band.hasOwnProperty("drums"))
// // console.log(Object.keys(band));
// // console.log(Object.values(band));

// // loop in objects
// for (let job in band) {
//   console.log(`on ${job}, its ${band[job]}`);
//

//destructuring objects

const { guitar: myVariable, bass: myBass } = band;
console.log(myVariable)
console.log(myBass)