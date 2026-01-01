// Problem 02: Find Largest Number
// Option 1:
const numbers = [3, 7, 2, 9, 4];
const largestNumber1 = Math.max(...numbers);

// Option 2:
const largestNumber2 = numbers.reduce((acc, curr) => {
  return acc < curr ? curr : acc;
}, 0);
console.log(largestNumber2);
