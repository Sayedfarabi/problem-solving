const mapR = (fn, arr) =>
  arr.length === 0 ? [] : [fn(arr[0]), ...mapR(fn, arr.slice(1))];
const numbers = [1, 2, 3, 4, 5];
const doubled = mapR((x) => x * 2, numbers);
console.log(doubled); // Output: [2, 4, 6, 8, 10]
// Explanation:
// Step 1: Define a recursive function mapR that takes a function fn and an array arr.
// Step 2: Check if the array is empty. If it is, return an empty array (base case).
// Step 3: If the array is not empty, apply the function fn to the first element (arr[0]).
// Step 4: Recursively call mapR on the rest of the array (arr.slice(1)).
// Step 5: Combine the result of fn(arr[0]) with the result of the recursive call using array destructuring.
// Step 6: The final result is a new array with all elements transformed by the function fn.
// Note: The original array remains unchanged, demonstrating immutability.
