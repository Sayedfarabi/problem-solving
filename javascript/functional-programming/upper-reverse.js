const upperReverse = (str) => {
  return str.toUpperCase().split("").reverse().join("");
};
console.log(upperReverse("hello")); // Output: "OLLEH"
// Explanation:
// Step 1: Convert the string to uppercase using toUpperCase().
// Step 2: Split the uppercase string into an array of characters using split("").
// Step 3: Reverse the array of characters using reverse().
// Step 4: Join the reversed array back into a string using join("").
// The final output is the uppercase reversed string.
const result = upperReverse("Functional Programming");
console.log(result); // Output: "GNIMMARGORP LANITNUF"
// Explanation:
// Step 1: Convert "Functional Programming" to uppercase: "FUNCTIONAL PROGRAMMING".
// Step 2: Split it into characters: ['F', 'U', 'N', 'C', 'T', 'I', 'O', 'N', 'A', 'L', ' ', 'P', 'R', 'O', 'G', 'R', 'A', 'M', 'M', 'I', 'N', 'G']
// Step 3: Reverse the array: ['G', 'N', 'I', 'M', 'M', 'A', 'R', 'G', 'O', 'R', 'P', ' ', 'L', 'A', 'N', 'I', 'T', 'N', 'U', 'F']
// Step 4: Join back into a string: "GNIMMARGORP LANITNUF"

// string → uppercase → reverse (use composition)
const toUpperCase = (str) => str.toUpperCase();
const toRevese = (str) => [...str].reverse().join("");
const compose = (f, g) => (x) => f(g(x));
const upperReverseCompose = compose(toRevese, toUpperCase);
console.log(upperReverseCompose("hello")); // Output: "OLLEH"
console.log(upperReverseCompose("Functional Programming")); // Output: "GNIMMARGORP LANITNUF"
// Explanation:
// Step 1: Define a function to convert a string to uppercase (toUpperCase).
// Step 2: Define a function to reverse a string (toRevese).
// Step 3: Define a compose function that takes two functions f and g, and returns a new function that applies g first, then f.
// Step 4: Create upperReverseCompose by composing toRevese and toUpperCase.
// Step 5: When upperReverseCompose is called with a string, it first converts it to uppercase, then reverses it, producing the final output.
