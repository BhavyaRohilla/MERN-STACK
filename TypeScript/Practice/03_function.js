// Named function or function declaration
function add(num1, num2, num3) {
    return num1 + num2 + (num3 !== null && num3 !== void 0 ? num3 : 0);
}
var ab = add(1, 2, 3);
