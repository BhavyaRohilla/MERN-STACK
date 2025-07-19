"use strict";
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
  // Never do this
  //   this.calcAge = function () {
  //     console.log(2025 - this.birthYear);
  //   };
};

const bhavya = new Person("Bhavya", 2001);
console.log(bhavya);

const kriti = new Person("Kriti", 2006);
console.log(kriti);

console.log(bhavya instanceof Person);
console.log(kriti instanceof Person);

// 1. new {} is created
// 2. function is called, this = {}
// 3. {} linked to prototype
// 4. function automatically return {}

Person.hey = function () {
  console.log("Hey There!!!!!");
  console.log(this);
};

Person.hey();
// bhavya.hey();

// Prototype
console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

bhavya.calcAge();

console.log(bhavya.__proto__);
console.log(bhavya.__proto__ === Person.prototype);
console.log(kriti.__proto__);

console.log(Person.prototype.isPrototypeOf(bhavya));

Person.prototype.species = "Home Sapiens";

console.log(bhavya.species, kriti.species);
console.log(bhavya.hasOwnProperty("firstName"));
console.log(bhavya.hasOwnProperty("species"));
console.log(bhavya.hasOwnProperty("calcAge"));

console.log(bhavya.__proto__);
console.log(bhavya.__proto__.__proto__);
console.log(bhavya.__proto__.__proto__.__proto__);

console.dir(Person.prototype.constructor);

const arr = [3, 6, 4, 5, 5, 3, 3, 4];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
*/

/*
/// ES6 classes

// Class expression
// const PersonCl = class {}

// Class Declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there!!!!");
    console.log(this);
  }
}

const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
// console.log(jessica.age);
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are NOT hoisted
// 2. Classes are first-class citizens
// 3. Classes are executed in strict mode

PersonCl.hey();

const account = {
  owner: "Bhavya",
  movements: [200, 500, 120, 300],
  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
*/

/*
const PersonProto = {
  clacAge() {
    console.log(2025 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2001;
steven.clacAge();
*/

// Inheritance
/*
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.calcAge = function () {
  console.log(2025 - this.birthYear);
};

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);
// Student.prototype = Person.prototype;

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};

const mike = new Student("Mike", 2004, "Computer Science");
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);
*/

// inheritance Between "classes" : ES6 classes

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Method will be added to .prototype property
  calcAge() {
    console.log(2025 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2025 - this.birthYear;
  }

  // Set a property that already exist
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not a full name!`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static method
  static hey() {
    console.log("Hey there!!!!");
    console.log(this);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${
        2025 - this.birthYear
      } years old, but as a student i feel more like ${
        2025 - this.birthYear + 10
      }`
    );
  }
}

const martha = new StudentCl("Martha Jones", 2012, "Computer Science");
martha.introduce();
martha.calcAge();
