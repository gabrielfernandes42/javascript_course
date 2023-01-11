// Web Storage API

//not part of the DOM - refers to the Window API
//Available to JS via the global variabel: window

//we do not have to type window. It if implid

const myArray = ["eat", "sleep", "code"];
const myObjt = {
  name: "Gabriel",
  hobbiews: ["eat", "sleep", "code"],
  logName: function () {
    console.log(this.name);
  },
};

sessionStorage.setItem("mySessionstore", JSON.stringify(myArray));

const mySessionData = JSON.parse(sessionStorage.getItem("mySessionstore"));

console.log(mySessionData);
console.log(localStorage.length);
