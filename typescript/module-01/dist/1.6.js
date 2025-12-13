"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// normal function
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(5, 10));
// arrow function
const multiply = (num1, num2) => num1 * num2;
console.log(multiply(5, 10));
// function with optional parameter
function greet(name, greeting) {
    return greeting ? `${greeting}, ${name}!` : `Hello, ${name}!`;
}
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));
// function with default parameter
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(5)); // Output: 25
console.log(power(5, 3)); // Output: 125
console.log(power(5, 4)); // Output: 625
// function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sumAll(1, 2, 3, 4, 5)); // Output: 15
console.log(sumAll(10, 20, 30)); // Output: 60
console.log(sumAll()); // Output: 0
// function with void return type
function logMessage(message) {
    console.log(`Log: ${message}`);
}
logMessage("This is a test message.");
// function with never return type
function throwError(message) {
    throw new Error(message);
}
// Uncommenting the line below will throw an error
// throwError("This is a fatal error.");
// console.log(power(5)); // Output: 25
// console.log(power(5, 3));
// object -> function -> method
const poorUser = {
    name: "Sayed",
    balance: 0,
    addBalance(balance) {
        // return `${this.name} new balance is: ${this.balance + balance}`;
        this.balance += balance;
    },
};
poorUser.addBalance(50);
poorUser.addBalance(100);
console.log(poorUser.balance);
//# sourceMappingURL=1.6.js.map