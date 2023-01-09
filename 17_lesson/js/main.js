//Javascript Classes - the normal way to use
// class Pizza {
//   constructor(pizzaSize) {
//     this._size = pizzaSize;
//     this._crust = "original";
//   }
//   getCrust() {
//     return this._crust;
//   }
//   setCrust(pizzaCrust) {
//     this._crust = pizzaCrust;
//   }
// }

// Factory function
// This is an alternative for the privite atributes problem
// function pizzaFactory(pizzaSize) {
//   const crust = "originl";
//   const size = pizzaSize;
//   return {
//     bake: () => console.log(`Baking a  ${size} ${crust} crust pizza`),
//   };
// }

// const myPizza = pizzaFactory("small");
// myPizza.bake();

//
class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
}
