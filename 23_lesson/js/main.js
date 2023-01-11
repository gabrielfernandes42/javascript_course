//Modules
import playGuitar from "./guitar.js";
import { shredding as shred, plucking as fingerpicking } from "./guitar.js";
import User from "./user.js";

const me = new User("email@email.com", "Gabriel")
console.log(me)
console.log(me.greeting());

// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());
