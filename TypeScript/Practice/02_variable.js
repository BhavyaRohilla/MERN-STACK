// String
var sub = "typescript";
var msg = "Welcome to ".concat(sub);
console.log(msg);
// Number
var decimal = 100;
var double = 100.1;
var hexadecimal = 0x123abc;
var octal = 83;
var binary = 10;
console.log(decimal, double, hexadecimal, octal, binary);
// Boolean - True, False
var flag = true;
var flag2 = false;
console.log(flag, flag2);
// Union
var my_var = "Hello";
my_var = 123;
console.log(my_var);
// number array
var arr = [10, 20, 30, 40, 50, 60, 70];
var arr1 = [60, 70, 80, 90, 40, 52];
// for each
arr.forEach(function (el) { return console.log(el); });
// for of loop
for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
    var el = arr1_1[_i];
    console.log(el);
}
var str1 = ["Angular", "react", "java"];
var str2 = ["Oracle", "mysql", "sqlserver"];
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
var obj1 = {
    sub_one: "ReactJS",
    sub_two: "NodeJS",
    sub_three: "MongoDB",
};
// any: You can do anything with it (no type safety).
// unknown: You must check the type first before using it. It's safer than any
var value;
value = "Hello";
value = 123;
value = true;
// ❌ Error: can't use unknown directly
// console.log(value.toUpperCase()); // ❌ Error
// ✅ Type checking required
if (typeof value === "string") {
    console.log(value.toUpperCase()); // ✅ Safe
}
