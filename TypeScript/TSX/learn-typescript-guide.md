# 🎯 Learn TypeScript (TSX Friendly)

Welcome to the ultimate beginner-friendly TypeScript guide 🚀  
This GitHub repository is for anyone who wants to learn and practice **TSX / TypeScript** from scratch 💻✨

---

## 📌 What is TypeScript?

> **TypeScript** is a modern, powerful programming language developed by Microsoft.

- ⚙️ TypeScript is a **superset of JavaScript**
- 🧠 It adds **type safety, OOP concepts, and scalability**
- 🛠️ Used with: **React**, **Angular**, **VueJS**, **NodeJS**
- 💡 Current version: `5.x` (as of 2025)

### 🔐 TypeScript Supports OOP Concepts:

- `class`
- `object`
- `inheritance`
- `polymorphism`
- `encapsulation`
- `abstraction`

👉 **File extension:** `.ts`

---

## 💻 Recommended Tools

- ✅ IDE: [Visual Studio Code](https://code.visualstudio.com/)
- ❌ Browsers don’t understand TypeScript directly
- 🔁 So we must convert (`transpile`) it to JavaScript using the **TypeScript Compiler** (`tsc`)

---

## 🛠️ Installation Steps

### 1️⃣ Install NodeJS

👉 [Download NodeJS](https://nodejs.org)

### 2️⃣ Install VS Code

👉 [Download VS Code](https://code.visualstudio.com/)

### 3️⃣ Install TypeScript via npm

```bash
npm install -g typescript
```

> You can verify installation by running:

```bash
tsc --version
```

---

## 🔁 Transpilation (TS ➡️ JS)

TypeScript is **not directly executed by browsers**, so we must transpile it:

```bash
tsc demo.ts
```

⬇️ Will produce:

```bash
demo.js
```

Then run the JavaScript using Node:

```bash
node demo.js
```

---

## 🧮 Variables in TypeScript

Variables are used to **store data**. You can declare them in **three ways**:

```ts
var // old, avoid it ❌
  let; // ✅ block-scoped
const; // ✅ constant value
```

> `let` and `const` were introduced in **ES6**

### ✅ Rules for variable names:

- Can include: `a-z`, `A-Z`, `0-9`, `_`, `$`
- ❌ Cannot start with numbers

---

## 🧠 Supported Data Types

- `string`
- `number`
- `boolean`
- `any` – flexible type (avoid if possible)
- `never` – for functions that never return
- `Array`
- `object`
- `Tuple`
- `type` – custom types

---

## 🧾 Syntax Example

```ts
var msg: string = "Welcome to TypeScript variables!";
```

Use this format:

```ts
var/let/const variableName: dataType = value;
```

---

## 🌈 You're all set!

Start exploring TypeScript with `.ts` files and build cool apps using React + TSX 💙  
Push your practice files into this repo to track your learning journey 📚🛤️

---

# 📚 TypeScript Data Types with Examples

Below is a well-commented and organized TypeScript code covering various basic data types and concepts. 🚀

---

## 1️⃣ String Example

```ts
// 💡 Strings are sequences of characters.
// Can be defined using "", '', or `` (template literals)

let sub: string = "TypeScript";
let msg: string = `Welcome to ${sub} ❤️`; // Backticks (template literals) introduced in ES6

console.log(msg);
```

---

## 2️⃣ Number Example

```ts
// 🔢 Number types include decimal, float, hexadecimal, octal, and binary

let decimal: number = 100;
let float: number = 100.12345;
let hexadecimal: number = 0x123abc;
let octal: number = 0o123;
let binary: number = 0b1010;

console.log(decimal, float, hexadecimal, octal, binary);
```

---

## 3️⃣ Boolean Example

```ts
// ✅ Boolean values: true or false

let isAvailable: boolean = true;
let isSoldOut: boolean = false;

console.log(isAvailable, isSoldOut);
```

---

## 4️⃣ Union Type

```ts
// 🔀 A variable that can hold more than one type

let myVar: string | number = "Hello";
myVar = 100; // now it's a number

console.log(myVar);
```

---

## 5️⃣ Number Arrays

```ts
// 🔢 Arrays of numbers declared in two ways

let numbers1: number[] = [10, 20, 30, 40, 50];
let numbers2: Array<number> = [60, 70, 80, 90, 100];

// Loop through both arrays and print values
numbers1.forEach((num: number, i: number) => {
  console.log(num, numbers2[i]);
});
```

---

## 6️⃣ String Arrays

```ts
// 📚 Arrays of strings

let frontend: string[] = ["Angular", "React", "VueJS"];
let databases: Array<string> = ["Oracle", "MySQL", "SQLServer"];

// Loop through and log
frontend.forEach((tech: string, index: number) => {
  console.log(tech, databases[index]);
});
```

---

## 7️⃣ Any Type

```ts
// ⚠️ 'any' allows any data type (use cautiously)

let data: any = "Welcome to 'any' datatype";
console.log(data);
```

---

## 8️⃣ JSON Object

```ts
// 📦 JSON = JavaScript Object Notation
// Lightweight format for transferring data over the network
// Format: key-value pairs

let techStack: any = {
  sub_one: "ReactJS",
  sub_two: "NodeJS",
  sub_three: "MongoDB",
};

console.log(techStack.sub_one);
```

---

🧠 Practice regularly and play with the types! You're on the right path to becoming a TS Pro 🚀

# TypeScript DataTypes & Functions Guide 🚀

## 📚 Table of Contents

- [Data Types](#-data-types)
  - [Primitive](#primitive-datatypes)
  - [Special](#special-datatypes)
  - [User Defined](#user-defined-datatypes)
- [Functions](#-functions)
  - [Named Functions](#named-functions)
  - [Anonymous Functions](#anonymous-functions)
  - [Arrow Functions](#arrow-functions)
- [Advanced Concepts](#-advanced-concepts)
- [Best Practices](#-best-practices)

---

## 🏷 Data Types

### Primitive DataTypes

| Type        | Description                     | Example                                |
| ----------- | ------------------------------- | -------------------------------------- |
| `string`    | Text data                       | `let name: string = "John"`            |
| `number`    | Both integer and floating point | `let age: number = 30`                 |
| `boolean`   | true/false values               | `let isActive: boolean = true`         |
| `null`      | Intentional absence of value    | `let data: null = null`                |
| `undefined` | Uninitialized variable          | `let x: undefined`                     |
| `void`      | No return type (functions)      | `function log(): void { ... }`         |
| `never`     | For unreachable code            | `function error(): never { throw... }` |
| `unknown`   | Type-safe alternative to `any`  | `let input: unknown`                   |

```typescript
// Primitive type examples
let username: string = "Alice";
let userAge: number = 28;
let isAdmin: boolean = true;
```

```
Special DataTypes
any Type
The escape hatch from TypeScript's type system:

typescript
let dynamicValue: any = "Could be anything";
dynamicValue = 42; // OK
dynamicValue = true; // OK
User Defined DataTypes
Arrays:

typescript
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];
Tuples:

typescript
let user: [string, number] = ["Alice", 28];
Enums:

typescript
enum Color { Red, Green, Blue }
let c: Color = Color.Green;
Interfaces:

typescript
interface User {
name: string;
age: number;
}
📞 Functions
Named Functions
Traditional function declaration with hoisting:

typescript
function greet(name: string): string {
return `Hello, ${name}!`;
}
console.log(greet("Alice")); // "Hello, Alice!"
Anonymous Functions
Function expressions assigned to variables:

typescript
const greet = function(name: string): void {
console.log(`Hello, ${name}!`);
};
greet("Bob");
Arrow Functions
ES6 concise syntax with lexical this:

typescript
const square = (n: number): number => n \* n;
console.log(square(5)); // 25
🧠 Advanced Concepts
Rest Parameters
typescript
function sum(...numbers: number[]): number {
return numbers.reduce((a, b) => a + b);
}
console.log(sum(1, 2, 3)); // 6
Optional Parameters
typescript
function register(user: string, email?: string): void {
console.log(`User: ${user}`, email ? `Email: ${email}` : "");
}
Default Parameters
typescript
function createUser(name: string, role: string = "user"): void {
console.log(`${name} - ${role}`);
}
🏆 Best Practices
Always specify return types for better code clarity

typescript
// Good
function getUser(): User { ... }

// Avoid
function getUser() { ... }
Prefer unknown over any when dealing with dynamic content

Use interfaces for complex parameter types:

typescript
interface Config {
timeout: number;
retries?: number;
}

function init(config: Config) { ... }
Leverage type inference for simple cases:
```

typescript
// Let TypeScript infer the return type
function square(x: number) {
return x \* x;
}

```

```
