const array = [1, 2, 2, 3, 4, 4, 5];

// Set automatically removes duplicates
const uniqueValuesBySet = [...new Set(array)];
console.log(uniqueValuesBySet); // Output: [1, 2, 3, 4, 5]
console.log(array); // Original array remains unchanged

// Explanation:
// Step 1: Create a Set from the array, which removes duplicate values.
// Step 2: Spread the Set back into an array using the spread operator [...]
// Step 3: The resulting array contains only unique values.

// Alternative method using filter
const uniqueValuesByFilter = array.filter((v, i, a) => a.indexOf(v) === i);
console.log(uniqueValuesByFilter); // Output: [1, 2, 3, 4, 5]
// Explanation:
// Step 1: Use the filter method to iterate through each element in the array.
// Step 2: For each element, check if its index matches the first occurrence index using indexOf.
// Step 3: If it matches, include it in the new array; otherwise, skip it.
// Step 4: The resulting array contains only unique values.
