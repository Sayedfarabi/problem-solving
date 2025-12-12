const updatedArray = (arr, index, newValue) => {
  return arr.map((item, idx) => (idx === index ? newValue : item));
};

const originalArray = [10, 20, 30, 40, 50];
const newArray = updatedArray(originalArray, 2, 99);
console.log(newArray); // Output: [10, 20, 99, 40, 50]
console.log(originalArray); // Output: [10, 20, 30, 40, 50]
// Explanation:
// Step 1: Define a function updatedArray that takes an array, an index, and a new value.
// Step 2: Use the map method to create a new array.
// Step 3: For each item in the array, check if its index matches the specified index.
// Step 4: If it matches, replace it with the new value; otherwise, keep the original item.
// Step 5: The function returns a new array with the updated value, leaving the original array unchanged.
