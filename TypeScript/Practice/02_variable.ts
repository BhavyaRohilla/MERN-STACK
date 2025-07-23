// String
let sub: string = "typescript";
let msg: string = `Welcome to ${sub}`;
console.log(msg);

// Number
let decimal: number = 100;
let double: number = 100.1;
let hexadecimal: number = 0x123abc;
let octal: number = 0o123;
let binary: number = 0b1010;
console.log(decimal, double, hexadecimal, octal, binary);

// Boolean - True, False
let flag: boolean = true;
let flag2: boolean = false;
console.log(flag, flag2);

// Union
let my_var: string | number = "Hello";
my_var = 123;
console.log(my_var);

// number array
let arr: number[] = [10, 20, 30, 40, 50, 60, 70];
let arr1: Array<number> = [60, 70, 80, 90, 40, 52];

// for each
arr.forEach((el: number) => console.log(el));

// for of loop
for (const el of arr1) {
  console.log(el);
}

let str1: string[] = ["Angular", "react", "java"];
let str2: Array<string> = ["Oracle", "mysql", "sqlserver"];
str1.forEach((element: string, index: number) => {
  console.log(element, str2[index]);
});

let data: any = "Welcome to any datatype";

// JSON
// Java Script Object Notation
// "any"
// json is "light weight"
// json used to transfer the data over "network"
// Objects --- {}
// Arrays --- []
// Data --- key and value pairs
// key and value seprated by using ":"

let obj: any = {
  sub_one: "ReactJS",
  sub_two: "NodeJS",
  sub_three: "MongoDB",
};
console.log(obj.sub_one);

let obj1: {
  sub_one: string;
  sub_two: string;
  sub_three: string;
} = {
  sub_one: "ReactJS",
  sub_two: "NodeJS",
  sub_three: "MongoDB",
};

// any: You can do anything with it (no type safety).
// unknown: You must check the type first before using it. It's safer than any

let value: unknown;

value = "Hello";
value = 123;
value = true;

// ❌ Error: can't use unknown directly
// console.log(value.toUpperCase()); // ❌ Error

// ✅ Type checking required
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe
}
