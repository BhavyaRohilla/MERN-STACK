// Named function or function declaration
function add(num1: number, num2: number, num3?: number): number {
  return num1 + num2 + (num3 ?? 0);
}

let ab: number = add(1, 2, 3);
console.log(ab);

// optional parameters

function greet(name?: string): string {
  return `Hello ${name || "Guest"}`;
}

console.log(greet());
console.log(greet("Bhavya"));

// Default parameter
function multiply(a: number, b: number = 2): number {
  return a * b;
}

console.log(multiply(5)); // Output: 10

// rest parameter
function sumAll(...numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumAll(1, 2, 3, 4)); // Output: 10

// anonymous function
const square = function (x: number): number {
  return x * x;
};

console.log(square(4)); // Output: 16

// 📌 Arrow Functions (Modern & Short)
const greet1 = (name: string): string => `Hello, ${name}!`;

console.log(greet1("TypeScript")); // Output: Hello, TypeScript!
