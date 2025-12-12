const updateObj = (obj, key, value) => {
  const newObj = structuredClone(obj);
  newObj[key] = value;
  return newObj;
};
const originalObj = { a: 1, b: 2, c: 3 };
const newObj = updateObj(originalObj, "b", 99);
console.log(newObj); // Output: { a: 1, b: 99, c: 3 }
console.log(originalObj); // Output: { a: 1, b: 2, c: 3 }
// Explanation:
// Step 1: Define a function updateObj that takes an object, a key, and a new value.
// Step 2: Create a deep copy of the original object using structuredClone to avoid mutation.
// Step 3: Update the specified key in the new object with the new value.
// Step 4: Return the new object with the updated value, leaving the original object unchanged.
