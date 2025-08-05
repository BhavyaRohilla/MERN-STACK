"use strict";

/*
const jessica1 = {
  firstName: "jessica",
  lastName: "William",
  age: 27,
};

function marryPerson(originalPerson, newLastName) {
  originalPerson.lastName = newLastName;
  return originalPerson;
}

const marriedJessica = marryPerson(jessica1, "Davis");

console.log("Before", jessica1);
console.log("after", marriedJessica);
*/

/*
const jessica = {
  firstName: "jessica",
  lastName: "William",
  age: 27,
  family: ["Bhavya", "Rohit"],
};

// shallow copy
const jessicaCopy = { ...jessica };
jessicaCopy.lastName = "Davis";

jessicaCopy.family.push("Naveen");

console.log(jessica, jessicaCopy);

// Deep copy

const jessicaClone = structuredClone(jessica);
jessicaClone.family.push("ABC");
console.log(jessica, jessicaClone);

*/

/*
// arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  console.log(arguments["0"] + arguments["1"]);
};

addExpr(1, 2);
*/

/*
const bhavya = {
  firstName: "Bhavya",
  year: 2001,
  calcAge: function () {
    console.log(2025 - this.year);

    const isMillineal = function () {};
  },
};
*/

// This keyword in practice

console.log(this);

function greet() {
  console.log(this);
}
greet();

const calcAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAge(1991);

const calcAgeArrow = (birthYear) => {
  console.log(2037 - birthYear);
  console.log(this);
};
calcAgeArrow(1980);
