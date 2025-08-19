"use strict";

/*
// Topic - 1
// Default Parameter
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);
*/

/*
// Topic - 2
// How Passing argument works_value vs Reference
const flight = "LH234";
const bhavya = {
  name: "Bhavya Rohilla",
  passport: 243555785489,
};

const checkIn = function (flightNum, passenger) {
  flightNum = "LH999";
  passenger.name = "Mr. " + passenger.name;

  if (passenger.passport === 243555785489) alert("Checked In");
  else alert("Wrong Passport");
};

checkIn(flight, bhavya);
console.log(flight);
console.log(bhavya);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000000);
};

newPassport(bhavya);
checkIn(flight, bhavya);
*/

/*
// Topic 3
// Function Accepting the callback function

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [fisrt, ...others] = str.split(" ");
  return [fisrt.toUpperCase(), ...others].join(" ");
};

// Higher Order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformer string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer("Javascript is the best!", upperFirstWord);
transformer("Javascript is the best!", oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log("HELLO");
};
document.body.addEventListener("click", high5);
["Kriti", "Riya", "Adam"].forEach(high5);
*/

/*
// Topic - 4 Function returning Function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet("Hey");
// console.log(greeterHey);
greeterHey("Bhavya");
greeterHey("Kriti");

greet("Hello")("Jessica");

// Challenge Arrow function
const greetArr = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArr("Hi")("Steven");
*/

/*
// Topic - 5 call and apply and bind

const lufthansa = {
  airline: "Lufthansa",
  iataCode: "LH",
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, "Bhavya Rohilla");
lufthansa.book(635, "Jessica Davis");
console.log(lufthansa);

const eurowings = {
  airline: "Eurowings",
  iataCode: "EW",
  bookings: [],
};

const book = lufthansa.book;

// Does not work
// console.log(book);
// book(23, "Sarah William");

book.call(eurowings, 23, "Sarah William");
console.log(eurowings);

book.call(lufthansa, 239, "Mary Cooper");
console.log(lufthansa);

const swiss = {
  airline: "Swiss Air Lines",
  iataCode: "LX",
  bookings: [],
};

book.call(swiss, 583, "Mary Cooper");
console.log(swiss);

// Apply Method
const flightData = [583, "George Cooper"];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// Bind Method
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, "Steven William");
bookLH(45, "Kriti");
bookLX(78, "Riya");

const bookEW23 = book.bind(eurowings, 23);
bookEW23("John Doe");
bookEW23("Jessica Doe");

// With Event Listener
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};
document
  .querySelector(".buy")
  .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// Partial Application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addVAT = (value) => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
*/

/*
// Topic - 6
// IIFE (Immediately Invoked Function Expression)

const runOnce = function () {
  console.log("This will Never run again");
};
runOnce();
runOnce();

//IIFE
(function () {
  console.log("This will never run again!!!!!!!!!!!!!");
  const isPrivate = 23;
})();
// console.log(isPrivate);

(() => console.log("This will also never run again!"))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);
*/

/*
// Topic - 7
// Closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();
console.log(booker);

booker();
booker();
booker();

console.dir(booker);


let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();
console.dir(f);

// Re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
*/
