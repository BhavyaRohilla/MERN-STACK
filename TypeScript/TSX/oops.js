/*
oops => class, object, inheritance, polymorphism, encapsulation, abstraction

class =>
    collection of "variables and functions" called as class
                            (or)
    encapsulation of variable and function called as class

    we can create classes by using "class" keyword
    
    we can create object to the class by using "new" keyword

    typescript supports the 3 modifier
    1) public
    2) private
    3) protected

    public modifier recommended to function
    private modifier to recommended to variable

    by defualt public modifier
*/
/*
class class_one {
  var_one: string = "Hello";
  fun_one(): string {
    return "welcome";
  }
}

let obj: class_one = new class_one();
console.log(obj.var_one, obj.fun_one());
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*
class class_one {
  private var_one: string = "hello";
  public fun_one(): string {
    return this.var_one;
  }
}

let obj: class_one = new class_one();
console.log(obj.fun_one());
*/
/*
class class_one {
  sub_one: string;
  sub_two: string;
  sub_three: string;
  constructor() {
    this.sub_one = "REACTJS with Typescript";
    this.sub_two = "NODEJS with Typescript";
    this.sub_three = "MongoDB with Typescript";
  }
}

let obj: class_one = new class_one();
console.log(obj.sub_one, obj.sub_two, obj.sub_three);
*/
/*
class class_one {
    sub_one:string;
    sub_two:string;
    sub_three:string;
    constructor(arg1:string, arg2:string, arg3:string){
        this.sub_one = arg1;
        this.sub_two = arg2;
        this.sub_three = arg3;
    }
}

let obj1:class_one = new class_one("ReactJS", "NodeJS", "MongoDB")
*/
/*
class class_one {
  private var_one: any;
  private var_two: any;
  private var_three: any;
  constructor(arg1: any, arg2: any, arg3: any) {
    this.var_one = arg1;
    this.var_two = arg2;
    this.var_three = arg3;
  }

  public fun_one(): any {
    return this.var_one;
  }
  public fun_two(): any {
    return this.var_two;
  }
  public fun_three(): any {
    return this.var_three;
  }
}

let obj: class_one = new class_one("VueJS", "reactjs", "nextjs");
console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
*/
/*
class class_one {
  constructor(public arg1: any) {}
}

let obj: class_one = new class_one("Hello");
console.log(obj.arg1);

note : we can access "public arguments  of constructor" with class "Objects"
*/
// Inheritance
// Getting the data from parent class to child class called as inheritance
// we will implement Inheritance with the help of "extends" keyword
// 1) Single level inheritance
// 2) Multi level inheritance
// 3) Multiple inheritance
// 4) Hierarchical inheritance
// 5) Hybrid inheritance
/*
// Single Level Inheritance
class Parent {
  var_one: string = "Hello";
}

class Child extends Parent {
  var_two: string = "welcome";
}

let p: Parent = new Parent();
console.log(p.var_one);

let c: Child = new Child();
console.log(c.var_one, c.var_two);

let p1: Parent = new Child();
console.log(p1.var_one);

let c1: Child = new Parent();
// Property  'var_two us missing in type 'Parent' but required in type 'Child'.
*/
/*
// 2. Multi level inheritance
class Parent {
  fun_one(): string {
    return "Parent class";
  }
}

class Child extends Parent {
  func_two(): string {
    return "Child class";
  }
}

class Subchild extends Child {
  func_three(): string {
    return "Subchild class";
  }
}

let obj: Subchild = new Subchild();
console.log(obj.fun_one(), obj.func_two(), obj.func_three());
*/
/*
// Multiple Inheritance
class Parent1{}
class Parent2{}
class Child extends Parent1, parent2{}
// Multiple inheritance not supported by Typescript
*/
/*
// Hierarchical inheritance

class Parent {
  var_one: string = "Hello_1";
}

class Child1 extends Parent {
  var_two: string = "Hello 2";
}

class Child2 extends Parent {
  var_three: string = "Hello 3";
}

class Child3 extends Parent {
  var_four: string = "Hello 4";
}

let obj: Child1 = new Child1();
console.log(obj.var_one, obj.var_two);

let obj1: Child2 = new Child2();
console.log(obj1.var_one, obj1.var_three);

let obj2: Child3 = new Child3();
console.log(obj2.var_one, obj2.var_four);
*/
/*
// Hybrid inheritance
class Parent{}
class Child1 extends Parent{}
class Child2 extends Parent{}
class subChild extends Child1, child2{}
// NOTE : Hybrid Ing=heritance is not supported by TypeScript
*/
/*

  interfaces =>
  **********
              when ever we know only declarations, but wo dont know implementation the we will choose interfaces
              we will create interfaces with "interface" keyword
              implementation provided by either child classes or json
              child classes provides immplementations with the help of "implements" Keyword


*/
/*
interface interface1 {
  var_one: string;
}

class class_one implements interface1 {
  var_one: string = "Welcome to the string";
}

let obj: class_one = new class_one();
console.log(obj.var_one);
*/
/*
interface interface1 {
  var_one: string;
}

let obj: interface1 = {
  var_one: "Hello",
};

console.log(obj.var_one);
*/
/*
interface interface1 {
  sub_one: string;
  sub_two: string;
  sub_three: string;
}

let obj: interface1 = {
  sub_one: "React JS",
  sub_two: "NodeJS",
  sub_three: "MongoDB",
};

console.log(obj.sub_one, obj.sub_two, obj.sub_three);
*/
/*
interface interface1 {
  func_one(): void;
  func_two(): void;
  func_three(): void;
}

let obj: interface1 = {
  func_one: (): void => {
    console.log("Function_one");
  },
  func_two: (): void => {
    console.log("func_two");
  },
  func_three: (): void => {
    console.log("Func_three");
  },
};

obj.func_one();
obj.func_two();
obj.func_three();
*/
/*
interface interface1 {
  var_one: string;
}

interface interface2 extends interface1 {
  var_two: string;
}
let obj: interface2 = {
  var_one: "Hello_1",
  var_two: "Hello_2",
};

console.log(obj.var_one, obj.var_two);
*/
/*
interface interface1 {
  var_one: string;
}

interface interface2 extends interface1 {
  var_two: string;
}

interface interface3 extends interface2 {
  var_three: string;
}

let obj: interface3 = {
  var_one: "Hello_1",
  var_two: "Hello_two",
  var_three: "Hello_three",
};

console.log(obj.var_one, obj.var_two, obj.var_three);
*/
/*
interface interface1 {
  fun_one(): number;
}

interface interface2 {
  fun_two(): number;
}

interface interface3 extends interface1, interface2 {
  fun_three(): number;
}

let obj: interface3 = {
  fun_one: (): number => {
    return 100;
  },
  fun_two: (): number => {
    return 200;
  },
  fun_three: (): number => {
    return 300;
  },
};

console.log(obj.fun_one(), obj.fun_two(), obj.fun_three());
*/
/*


abstract classes
****************
      if we know the "partial implementation" then we will choose asbtract classes

      "abstract" is keyword used to create the abstract classes

      implementations provided by child classes
*/
/*
abstract class class_one {
  func_one(): void {
    console.log("Func_one");
  }

  abstract func_two(): void;
}

class class_two extends class_one {
  func_two(): void {
    console.log("func_two");
  }
}

let obj: class_two = new class_two();
obj.func_one();
obj.func_two();
*/
/*
abstract class class_one {
  func_one(): string {
    return "func_one";
  }

  abstract func_two(): string;
}

abstract class class_two extends class_one {
  func_two(): string {
    return "func_two";
  }

  abstract func_three(): string;
}

class class_three extends class_two {
  func_three(): string {
    return "func_three";
  }
}

let obj: class_three = new class_three();
console.log(obj.func_one(), obj.func_two(), obj.func_three());
*/
/*
abstract class class_one {}
let obj: class_one = new class_one();
// Note: we cant create object to the abstract classes and interface
*/
/*
interface interface1 {
  func_one: any;
}

abstract class class_one implements interface1 {
  func_one(): any {
    return "react.JS";
  }

  abstract func_two(): any;
}

class class_two extends class_one {
  func_two(): any {
    return "nodejs";
  }
}

let obj: class_two = new class_two();
console.log(obj.func_one(), obj.func_two());
*/
/*
interface interface1{}
let obj:interface1 = new interface1();
// Note : we can't create object to the interfaces also
*/
// modifiers
// 1) public
// 2) private
// 3) protected
// public
// public modifier applicables to the variable, function and constructor
// we can access public member by using class objects
// all public members by defualt accessable to "child classes"
/*
class class_one {
  public var_one: string;
  public constructor() {
    this.var_one = "hello";
  }
  public func_one(): string {
    return this.var_one;
  }
}

class class_two extends class_one {}
let obj: class_two = new class_two();

console.log(obj.func_one());
*/
/*
// Private
// Private modifier applicable to variables, functions and constructors
// we can't create object to the "private constructor" class
// we can't access private members with class objects
// private member wont accessable to child classes

class class_one {
  private var_one: string = "Hello";
  private func_one(): string {
    return "Welcome";
  }
}

let obj: class_one = new class_one();
// obj.var_one;
// Property 'var_one' is private and only accessible within 'class_one'.

// obj.func_one();
// Property 'func_one' is private and only accessible within 'class_one'.
*/
/*
class class_one {
  private var_one: string = "Hello";
}

class class_two extends class_one {}

let obj: class_two = new class_two();
// obj.var_one;
//Property 'Var_one' is private and only accessible within class 'class_one'
*/
/*
class class_one{
  private constructor(){}
}

let obj:class_one = new class_one();
// Constructor of class 'class_one' is private and only accessible within the class declaration
*/
/*
class class_one {
  private var_one: string = "Hello";
  public var_two: string = this.var_one;

  private func_one(): any {
    return "Welcome";
  }

  public func_two(): any {
    return this.func_one();
  }
}

class class_two extends class_one {}
let obj: class_two = new class_two();
console.log(obj.var_two);
console.log(obj.func_two());
*/
// Protected
// Protected modifier also applicable to variable, function ans constructor
// Protectd member available to child classes
// Protected member we can't access class objects
// we can't create object to protected constructor class
/*
class class_one {
  protected var_one: string = "Hello";
  protected func_one(): any {
    return "Welcome";
  }
}

let obj: class_one = new class_one();
obj.var_one;
// Property 'var_one' is protected and only accessible within class 'class_one' and its subclasses.
obj.func_one();
// Property 'func_one' is protected and only accessible within class 'class_one' and its subclasses
*/
/*
class class_one {
  protected constructor() {}
}

let obj: class_one = new class_one();
// Constructor of class 'class_one' is protected and only accessible within the class declaration.
*/
/*
class class_one {
  protected var_one: string = "Hello";
}

class class_two extends class_one {
  public var_two: string = this.var_one;
}

let obj: class_two = new class_two();
console.log(obj.var_two);
*/
/*

              public            private           protected
variable,
functions,    applicable        applicable        applicable
contructor

accessable
to child      yes               no                yes
class


access
with        we can access       no                no
objects

constructor we can create object  we can't       we can't create
                                  create

                              
*/
// polymorphism
// behaves like many called as polymorphism
// 1) function overriding
// 2) function overloading
// function overriding
// overriding parent class functionality with child class functionality called as function overriding
/*
class Parent {
  dbFunc(): string {
    return "Data fromoracle database soon";
  }
}

class Child extends Parent {
  dbFunc(): string {
    return "Data from mongodb soon";
  }
}

let obj: Child = new Child();
let obj1: Parent = new Parent();
console.log(obj.dbFunc());
console.log(obj1.dbFunc());

// NOTE: to implement function overriding inheritance is mandatory
// NOTE: Both parent class an child class should containes same function1
*/
/*
// Function overloading
// same function name and same number of parametres but different datatypes
class class_one {
  func_one(param1: string, param2: string): void;
  func_one(param1: number, param2: number): void;
  func_one(param1: string, param2: number): void;
  func_one(param1: any, param2: any): void {
    console.log(param1, param2);
  }
}

let obj: class_one = new class_one();
obj.func_one(12, 32);

// NOTE: to implement function overloading, we dont require inheritance
*/
// Static keyword
// Static modifier applicable to "variable and functions"
// static members we can access directly by using "class name"
// we can't refer static member by using this keyword
// we'cant intialize static members with constructor
// we can't access static members  with class objects
/*
class class_one {
  static var_one: string;
  constructor() {
    // this.var_one = "Hello";
  }
}
*/
/*
class class_one {
  static var_one: string = "Hello";
}

let obj: class_one = new class_one();
obj.var_one;
// Property 'var_one' does not exist on type 'class_one'. Did you mean to access the static member 'class_one.var_one' instead?
*/
/*
class class_one {
  static var_one: string = "Hello";
  static func_one(): any {
    return "Welcome";
  }
}

console.log(class_one.var_one);
console.log(class_one.func_one());
*/
// readonly
// readonly is the keyword in Typescript
// readonly is used to "read" the content but we can't "update" the content
// we can intialize readonly member with constructor
/*
class class_one {
  readonly var_one: string;
  constructor() {
    this.var_one = "Hello";
  }
}

let obj: class_one = new class_one();
console.log(obj.var_one);
// obj.var_one = "Welcome";
// Cannot assign to 'var_one' because it is a read-only property.
*/
// Super
// super keyword used to call the Parent class member
// super keyword applicable to "constructor" and "functions"
var Parent = /** @class */ (function () {
    function Parent(arg1) {
        this.arg1 = arg1;
    }
    Parent.prototype.func_one = function () {
        return "Hello";
    };
    return Parent;
}());
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(param1, param2) {
        var _this = _super.call(this, param1) || this;
        _this.param1 = param1;
        _this.param2 = param2;
        return _this;
    }
    Child.prototype.func_two = function () {
        return _super.prototype.func_one.call(this);
    };
    return Child;
}(Parent));
var obj = new Child("Hello_1", "Hello_2");
console.log(obj.arg1, obj.param1, obj.param2);
console.log(obj.func_two());
