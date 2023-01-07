//arrays

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf ball", "tenis ball"];

const clothersShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothersShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);
//or
console.log(clothersShelfB[0]);

const equipDept = [equipShelfA, equipShelfA];
const clothersDept = [clothersShelfA, clothersShelfB];

console.log(equipDept[0][1]);
console.log(clothersDept[1][0]);

const sportStore = [equipDept, clothersDept];

console.log(sportStore[0][0][1]);
console.log(sportStore[1][1][0]);
