"use strict";

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze Italy",
  categories: ["Italian", "Pizzeria", "Vegeterian", "Organic"],
  starterMenu: [
    "Foccacia",
    "Bruschetta",
    "Garlic bread",
    "French Fries",
    "Caprese Salad",
  ],

  // ES6 Enhanced Object literals
  openingHours,
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngridients, ...otherIngridients) {
    console.log(mainIngridients);
    console.log(otherIngridients);
  },
};

// Topic 14 - Strings

// string practice
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

for (const flight of flights.split("+")) {
  const [type, from, to, time] = flight.split(";");
  const output = `${type.startsWith("_Delayed") ? "🔴" : ""} ${type.replaceAll(
    "_",
    " "
  )} ${from.slice(0, 3).toUpperCase()} ${to
    .slice(0, 3)
    .toUpperCase()} (${time.replace(":", "h")})`.padStart(36);
  console.log(output);
}

/*
// level 3
console.log("a+very+nice+string".split("+"));
console.log("bhavya rohilla".split(" "));

const [firstName, lastName] = "Bhavya Rohilla".split(" ");
console.log(firstName, lastName);

const newName = ["Mr", firstName, lastName.toUpperCase()].join(" *");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const nameUpper = [];

  for (const n of names) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    // console.log(n.toLowerCase());
    // console.log(n);
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};

capitalizeName("jessICA and SmiTh DAvis");

const capitalizeName1 = function (name) {
  const names = name.split(" ");
  const nameUpper = [];

  for (const n in names) {
    names[n] = names[n].toLowerCase();
    nameUpper.push(names[n].replace(names[n][0], names[n][0].toUpperCase()));
  }
  console.log(nameUpper.join(" "));
};
capitalizeName1("jessICA and SmiTh DAvis");

// Padding
const message = "Go to gate 23!";
console.log(message.padStart(20, "+").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(6556454551544464));

// Repeat
const message1 = "Bad weather... All Departures Delayed...";
console.log(message1.repeat(4));
*/

/*
// Level - 1
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4));
console.log(airline.slice(4, 7));
console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat");
  else console.log("You got lucky");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("Bhavya"));
console.log(typeof new String("Bhavya"));
console.log(typeof new String("Bhavya").slice(1));

// Level 2

const airline1 = "TAP Air India";
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalisation in name
const passenger = "BHaVyA";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing Email
const email = "hello@bhavya.com";
const loginEmail = " Hello@Bhavya.com";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

// Replacing
const priceGB = "288,97€";
const priceUS = priceGB.replace("€", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
// console.log(announcement.replaceAll("door", "gate"));
console.log(announcement.replace(/door/g, "gate"));

// Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Boeing"));
console.log(plane1.startsWith("Airb"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo"))
  console.log("Part of the New Airbus Family");

// Practice exercise

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard!");
  }
};

checkBaggage("I have a laptop, some food and a pocket knife");
checkBaggage("Socks, clothes, camera");
*/

/*
// Topic - 13 Maps Iteration
const questions = new Map([
  ["question", "What is the best programming langugae in the world?"],
  [1, "c"],
  [2, "Java"],
  [3, "Javascript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again"],
]);
console.log(questions);

// Convert object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

// Quiz app
console.log(questions.get("question"));
for (const [key, value] of questions) {
  if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt("Your answer "));
// console.log(answer);

// console.log(questions.get(questions.get("correct") === answer));

// Convert map to array
console.log([...questions]);
console.log(questions.entries());
console.log([...questions.keys()]);
console.log([...questions.values()]);
*/
/*
// Topic -12 Maps
const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
console.log(rest.set(2, "India"));

rest
  .set("categories", ["Italian", "Pizzeria", "Vegeterian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open :D")
  .set(false, "We are closed :(");

console.log(rest.get("name"));
console.log(rest.get(true));
console.log(rest.get(1));

const time = 13;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();
console.log(rest);
*/

/*
// Topic -  11 Sets
const numberSet = new Set([1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5]);
console.log(numberSet.size);

const orderSet = new Set([
  "pasta",
  "pizza",
  "pizza",
  "risotto",
  "pasta",
  "pizza",
]);
console.log(orderSet);
console.log(orderSet.size);

console.log(new Set("Bhavya"));

console.log(orderSet.has("pizza"));
console.log(orderSet.has("pizzaa"));
orderSet.add("garlic bread");
orderSet.add("garlic bread");
// orderSet.clear();
orderSet.delete("risotto");
console.log(orderSet);

for (const order of orderSet) console.log(order);

console.log(new Set("BhavyaRohillaA").size);
*/

/*
// Topic - 10 Looping Objects_Object Keys, values, and Entries

// properties NAMES
const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days:`;

for (const day of properties) {
  openStr += ` ${day}, `;
}
console.log(openStr);

// properties VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire Object
const entries = Object.entries(openingHours);
console.log(entries);

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we are open at ${open} and close at ${close}`);
}
*/

/*
// topic - 9 is optional chaining

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);

// with optional chaining
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// console.log(restaurant.openingHours["fri"]); //bracket notation

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? "closed";
  console.log(`on ${day}, we open at ${open}`);
}

// Method
console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
console.log(restaurant.orderRissoto?.(0, 1) ?? "Method does not exist");

// Arrays
const users = [{ name: "Bhavya", email: "hello@Bhavya.com" }];
// const users = [];
console.log(users[0]?.name ?? "User array empty");

if (users.length > 0) console.log(users[0].name);
else console.log("user array empty");

*/

/*

// topic 8 for-of-loop

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log(...menu.entries());
*/

/*
// Topic 7 - Logical assignment
const rest1 = {
  name: "Capri",
  numGuest: 0,
};

const rest2 = {
  name: "La Piazza",
  owner: "Giovanni Rossi",
};
// or assignment operator
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;
// rest1.numGuest ||= 10;
// rest2.numGuest ||= 10;

// nullish c..... operator
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;
console.log(rest1, rest2);

rest1.owner &&= "<ANONYMOUS>";
// rest2.owner &&= "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";
console.log(rest1, rest2);
*/

/*

// Topic 6 Nullish coalescing operator

restaurant.numGuests = 0;
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

// Nullish: null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/

/*
// topic 5 - short circuiting &&, ||
console.log("---------- OR ------------");
console.log(3 || "Bhavya");
console.log(0 || 3);
console.log(true || 0);
console.log(undefined || null);
console.log(undefined || 0 || "" || "Hello" || 23 || null);

restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

const guests2 = restaurant.numGuest || 10;
console.log(guests2);

console.log("---------- AND ------------");
console.log(0 && "Bhavya");
console.log(7 && "Bhavya");
console.log("Hello" && 23 && null && "Bhavya");

// practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza("mushroom", "spinach");
}

restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");
*/

/*
// topic - 04
// Rest operator
// SPREAD, Because on right side of =
const arr = [1, 2, ...[3, 4]];

// REST, Because on left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays, sat);

// functions
const add = function (...numbers) {
  console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};
add(2, 3);
add(2, 3, 4, 5, 6);
add(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);

const x = [23, 5, 7];
console.log(...x);

restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
restaurant.orderPizza("mushroom");
*/

/*
// topic 03
// Spred Operator
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(...arr);
console.log(newArr);
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets, NOT object
const str = "Bhavya";
const letter = [...str, " ", "s."];
console.log(letter);
console.log(...str);

// const ingridients = [
//   prompt("Let's make pasta! Ingridients 1?"),
//   prompt("Ingridients 2?"),
//   prompt("Ingridients 3?"),
// ];
// console.log(ingridients);

// restaurant.orderPasta(ingridients[0], ingridients[1], ingridients[2]);
// restaurant.orderPasta(...ingridients);

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Bhavya" };
console.log(newRestaurant);

const restaurantCopy = { ...restaurant };
restaurantCopy.name = "Ristorante Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

/*
topic 02
// Destructuring Objects

restaurant.orderDelivery({
  time: "23:30",
  address: "Via del Sole 21",
  mainIndex: 2,
  starterIndex: 2,
});

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variable
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested Objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

*/

/*
// Topic - 1
// Destructuring Arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
[main, secondary] = [secondary, main];
console.log(main, secondary);

// Recieve 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);
*/
