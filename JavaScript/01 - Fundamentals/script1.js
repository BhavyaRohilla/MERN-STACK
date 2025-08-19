"use strict";

/*
let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log("I can drive");

// const interface = "Audio";
// console.log(interface);
// const private = 534;

function logger() {
  console.log("My name is bhavya");
}

// calling / running / invoking function
logger(456);
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples ans ${oranges}oranges`;
  return juice;
}

console.log(fruitProcessor(5, 0));

console.log(calcAge1(2007));
// console.log(calcAge2(2009));

// function declaration
function calcAge1(birthYear) {
  return 2025 - birthYear;
}
console.log(calcAge1(2001));
// function expression
const calcAge2 = function (birthYear) {
  return 2025 - birthYear;
};
console.log(calcAge2(2005));
// console.log(calcAge2);
// Arrow function
const calcAge3 = (birthYear) => 2025 - birthYear;
console.log(calcAge3(2003));

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement} years`;
};

console.log(yearUntilRetirement(2001, "bhavya"));
*/

/*
const friend = ["Rohit", "Steven", 23, 86, true];
console.log(friend);

const years = new Array(1991, 1992, 1993, 1994);
console.log(years);

console.log(friend.length);
console.log(friend[friend.length - 1]);

friend[2] = "Jay";
console.log(friend);
*/

/*
const friend = ["Rohit", "Steven"];
friend.push("Jay");
console.log(friend);
friend.unshift("John");
console.log(friend);

// remove elements
const popped = friend.pop();
friend.shift();
console.log(friend);
*/

// Objects
/*
const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2025 - 2001,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

const bhavya = {
  firstName: "Bhavya",
  lastName: "Rohilla",
  birthYear: 2001,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
  calcAge: function () {
    // console.log(this);
    this.age = 2025 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()} - years old!! ${
      this.job
    }, ans he has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

bhavya.hobbies = ["Chess", "Gaming", "Chill"];
console.log(bhavya);

// dot notation
console.log(bhavya.age);

// bracket notation
console.log(bhavya["firstName"]);
// console.log(bhavya.hello());
console.log(bhavya.calcAge());
console.log(bhavya.age);
console.log(bhavya.getSummary());
console.log(bhavya);
*/

// For Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weight repetition ${rep}`);
// }

/*
const bhavyaArray = [
  "Bhavya",
  "Rohilla",
  2025 - 2001,
  "teacher",
  ["Micheal", "Peter", "Steven"],
];

for (let i = 0; i < bhavyaArray.length; i++) {
  console.log(bhavyaArray[i], typeof bhavyaArray[i]);
}
*/

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);
