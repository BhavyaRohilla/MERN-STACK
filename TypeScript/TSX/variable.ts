// String
// collection of chracter called as string
// 1) ""
// 2) ''
// 3) ``(backtick)
// ``(backtick) used to define paragraph
// ``(backtick) introduced in "ES6" version

let sub: string = "typescript";
let msg: string = `welcome to ${sub}`;
console.log(msg);

// number
var decimal: number = 100;
var double: number = 100.12345;
var hexadecimal: number = 0x123abc;
var octal: number = 0o123;
var binary: number = 0b1010;
console.log(decimal, double, hexadecimal, octal, binary);

// boolean
// true
// false
var flag: boolean = true;
var flag1: boolean = false;
console.log(flag, flag1);

//union
var my_var: string | number = "Hello";
my_var = 100;
console.log(my_var);

// number array
var arr1: number[] = [10, 20, 30, 40, 50];
var arr2: Array<number> = [60, 70, 80, 90, 100];

// forEach()
// for...of()
arr1.forEach((element: number, index: number) => {
  console.log(element, arr2[index]);
});

var str1: string[] = ["Angular", "React", "VueJS"];
var str2: Array<string> = ["Oracle", "MySQL", "SQLServer"];

str1.forEach((element: string, index: number) => {
  console.log(element, str2[index]);
});

var data: any = "Welcome to any datatype";

// JSON
// Java Script Object Notation
// "any"
// json is "light weight"
// json used to transfer the data over "network"
// Objects --- {}
// Arrays --- []
// Data --- key and value pairs
// key and value seprated by using ":"

var obj: any = {
  sub_one: "ReactJS",
  sub_two: "NodeJS",
  sub_three: "MongoDB",
};

console.log(obj.sub_one);
