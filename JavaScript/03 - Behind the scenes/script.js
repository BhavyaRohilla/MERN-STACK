"use strict";

/*
console.log(a);
function calcAge(birthYear) {
  const age = 2025 - birthYear;

  function printAge() {
    let output = `You are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      const str = `Oh!, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
      const output = "NEW OUTPUT!!!";
    }
    console.log(millenial);
    // console.log(add(2, 3));
    // console.log(str);
    console.log(output);
  }
  printAge();
  return age;
}

const firstName = "Bhavya";
calcAge(1991);
// console.log(age);
// printAge();

var a = function () {
  console.log("Hello");
};
*/

/*
console.log(me);
// console.log(job);
// console.log(year);
var me = "bhavya";
let job = "dev";
const year = 2001;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

/*
if (!numProducts) deleShoppingCart();
// Example
var numProducts = 10;
function deleShoppingCart() {
  console.log("All product deleted!!!!");
}

var xyz = 1;
let y = 2;
const z = 3;

console.log(xyz === window.xyz);
console.log(y === window.y);
console.log(z === window.z);
*/

/*
// This Keyword
console.log(this); // window

// This => undefined
const calcAge = function (birthYear) {
  console.log(2025 - birthYear);
  console.log(this);
};
calcAge(2001);


// This => Parent scope 
const calcAge1 = (birthYear) => {
  console.log(2025 - birthYear);
  console.log(this);
};

calcAge1(2001);
*/

/*
var firstName = "Matilda";

const bhavya = {
  year: 2001,
  firstName: "Bhavya",
  calcAge: function () {
    console.log(this);
    console.log(2025 - this.year);
  },
  greet: () => console.log(`Hey ${this.firstName}`),
  greet1: function () {
    console.log(`Hey ${this.firstName}`);
  },
};
bhavya.greet();
bhavya.greet1();

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = bhavya.calcAge;
// matilda.calcAge();

// const f = bhavya.calcAge;
// console.log(f);
// f();
*/

/*
const bhavya = {
  year: 2001,
  firstName: "Bhavya",
  calcAge: function () {
    // console.log(this);
    console.log(2025 - this.year);

    // Solution 1
    // var self = this;
    // const isMillinial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // isMillinial();

    // solution 2
    const isMillinial = () => {
      console.log(self);
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillinial();
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

bhavya.calcAge();

// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};

addArrow(2, 5);
addArrow(2, 5, 8, 12);
*/

/*
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const me = {
  name: "Bhavya",
  age: "24",
};

const friend = me;
friend.age = 27;
console.log("Freind: ", friend);
console.log("Me: ", me);
*/

let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName, oldLastName);

// Reference type
const jessica = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage: ", jessica);
console.log("After marriage: ", marriedJessica);

// Copying objects
const jessica2 = {
  firstName: "Jessica",
  lastName: "William",
  age: 27,
  family: ["Alice", "bob"],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Mary");
jessicaCopy.family.push("John");
console.log("Before marriage: ", jessica2);
console.log("After marriage: ", jessicaCopy);
