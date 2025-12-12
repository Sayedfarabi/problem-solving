const numbers = [5, 10, 20, 25, 30];

const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum); // Output: 90
// Explanation:
// Step 1: Start with an initial accumulator value of 0.
// Step 2: Add each number in the array to the accumulator:
//   0 + 5 = 5
//   5 + 10 = 15
//   15 + 20 = 35
//   35 + 25 = 60
//   60 + 30 = 90
// Step 3: The final sum is 90.
