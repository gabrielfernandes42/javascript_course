export default class User {
  constructor(email, name) {
    this._id = name;
    this._name = email;
  }
  greeting() {
    return `Hi, my name is ${this._name} `;
  }
}
