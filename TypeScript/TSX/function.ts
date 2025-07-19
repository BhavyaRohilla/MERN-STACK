// particluar buisness logic called as function
// function are used to reuse the buisness logic
// 1) named function or function declaration
// 2) anonymous function
// 3) arrow function

/*

    named function
    **************
        The function with user defined name called as named function

    syntax
    ++++++

    function definition

    function functionname(param1:datatype, param2:datatype,....param n:datatype): returntype{
    buisness logic
    }

    call the function

    functionname(arg1,arg2,...argn);



function func_one(): void {
  console.log("Welcome to named function");
}

func_one();

function func_two(): string {
  return "Welcome to named function";
}

let res = func_two();
console.log(res);

function fun_one(param1: string, param2: string, param3: string): void {
  console.log(param1, param2, param3);
}

// fun_one();  // Expected 3 arguments, but got 0

fun_one("ReactJS", "NodeJS", "MongoDB");
// fun_one(undefined, undefined, undefined); // valid but not
// fun_one(null, null, null); //same null null null

function fun_two(...param1: any): void {
  console.log(param1);
}

fun_two(); //[]
fun_two(100); // [100]
fun_two(undefined, undefined); // [undefined, undefined]
fun_two(null, null, undefined); // [null, null, undefined]

function func_three(param1: any, ...param2: any): void {}
// Note : spread operator always should be last in occurence.

// ES6
// Default Parameter in functions
function func_onee(param1: string = "Hello"): void {}

// optional parameters
// we will represents optional parameters with "?"
// ES6
function func_twoo(param1?: string): void {}

// Anonymous function
// The function without name called Anonymous function or function expression
// We can store anonymous function to variable
// we can overcome "Function hoisting" with the help of anonymous functions

let fun1 = function (): void {
  console.log("Welcome to anonymous function.");
};
*/

///////////////////////////////////////////////
//LEC - 2

// JSON
// JAVASCRIPT OBJECT NOTATION
// JSON, used to transfer the data over the network
// JSON is "ligh weight"
// Objects --- {}
// Arrays --- []
// Data --- key & value pairs
// Key & value seprate by uisng ":"

let obj: any = {
  key1: "",
  key2() {
    let inner = () => {
      this.key1 = "Learn Typescript";
    };
    inner();
  },
};
obj.key2();
console.log(obj.key1);

let fun_one = (): void => {
  console.log("Welcome to arrow function");
};
fun_one();

let fun_two = (
  param1: string,
  param2: string = "Hello",
  param3?: string,
  ...param4: string[]
): void => {
  console.log(param1, param2, param3, param4);
};

fun_two("hi");
