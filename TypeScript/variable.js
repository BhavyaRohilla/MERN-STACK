// String
// collection of chracter called as string
// 1) ""
// 2) ''
// 3) ``(backtick)
// ``(backtick) used to define paragraph
// ``(backtick) introduced in "ES6" version
var sub = "typescript";
var msg = "welcome to ".concat(sub);
console.log(msg);
// number
var decimal = 100;
var double = 100.12345;
var hexadecimal = 0x123abc;
var octal = 83;
var binary = 10;
console.log(decimal, double, hexadecimal, octal, binary);
// boolean
// true
// false
var flag = true;
var flag1 = false;
console.log(flag, flag1);
//union
var my_var = "Hello";
my_var = 100;
console.log(my_var);
// number array
var arr1 = [10, 20, 30, 40, 50];
var arr2 = [60, 70, 80, 90, 100];
// forEach()
// for...of()
arr1.forEach(function (element, index) {
    console.log(element, arr2[index]);
});
var str1 = ["Angular", "React", "VueJS"];
var str2 = ["Oracle", "MySQL", "SQLServer"];
str1.forEach(function (element, index) {
    console.log(element, str2[index]);
});
var data = "Welcome to any datatype";
// JSON
// Java Script Object Notation
// "any"
// json is "light weight"
// json used to transfer the data over "network"
// Objects --- {}
// Arrays --- []
// Data --- key and value pairs
// key and value seprated by using ":"
var obj = {
    sub_one: "ReactJS",
    sub_two: "NodeJS",
    sub_three: "MongoDB",
};
console.log(obj.sub_one);
